module.exports = async function (context, req) {
    // Set CORS headers
    context.res = {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
    };

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        context.res.status = 200;
        return;
    }

    try {
        // Validate request method
        if (req.method !== 'POST') {
            context.res.status = 405;
            context.res.body = {
                success: false,
                message: 'Method not allowed. Use POST.'
            };
            return;
        }

        const { name, email, subject, message } = req.body;

        // Basic validation
        if (!name || !email || !subject || !message) {
            context.res.status = 400;
            context.res.body = {
                success: false,
                message: 'All fields are required.'
            };
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            context.res.status = 400;
            context.res.body = {
                success: false,
                message: 'Please provide a valid email address.'
            };
            return;
        }

        // Get client IP
        const clientIP = req.headers['x-forwarded-for'] || 
                        req.connection?.remoteAddress || 
                        req.socket?.remoteAddress || 
                        'unknown';

        // Prepare email content
        const emailContent = {
            personalizations: [{
                to: [{ email: 'gandhi111000@hotmail.com' }],
                subject: `Portfolio Contact: ${subject}`
            }],
            from: { email: 'gandhi111000@hotmail.com', name: 'Himanshu Gandhi Portfolio' },
            replyTo: { email: email, name: name },
            content: [{
                type: 'text/html',
                value: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                        <h2 style="color: #3B82F6;">New Contact Form Submission</h2>
                        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                            <p><strong>Name:</strong> ${name}</p>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Subject:</strong> ${subject}</p>
                            <p><strong>Message:</strong></p>
                            <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #3B82F6;">
                                ${message.replace(/\n/g, '<br>')}
                            </div>
                        </div>
                        <div style="font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 15px;">
                            <p><strong>Submission Details:</strong></p>
                            <p>Time: ${new Date().toISOString()}</p>
                            <p>IP Address: ${clientIP}</p>
                            <p>User Agent: ${req.headers['user-agent'] || 'Unknown'}</p>
                        </div>
                    </div>
                `
            }]
        };

        // Send email using SendGrid
        context.bindings.message = emailContent;

        // Log the submission
        context.log('Contact form submission:', {
            name,
            email,
            subject,
            message: message.substring(0, 100) + '...',
            timestamp: new Date().toISOString(),
            ip: clientIP,
            userAgent: req.headers['user-agent']
        });

        // Return success response
        context.res.status = 200;
        context.res.body = {
            success: true,
            message: 'Thank you for your message! I\'ll get back to you within 24 hours.',
            data: {
                submittedAt: new Date().toISOString(),
                reference: `REF-${Date.now()}`,
                name: name,
                email: email
            }
        };

    } catch (error) {
        context.log.error('Contact form error:', error);
        
        context.res.status = 500;
        context.res.body = {
            success: false,
            message: 'Something went wrong. Please try again later.',
            error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
        };
    }
}; 