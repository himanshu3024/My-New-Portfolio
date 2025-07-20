"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Award, Building2 } from "lucide-react";

const experiences = [
  {
    title: "Customer Service Representative",
    company: "Ets. Africainde",
    period: "Jun 2019 - May 2023",
    icon: Award,
    iconColor: "#3B82F6",
    logo: null, // Add logo path if available
    highlights: [
      "Provided customer support via phone, email, and in-person, assisting an average of 50+ customers daily with liquor product inquiries.",
      "Maintained a 90%+ customer satisfaction (CSAT) score, ensuring prompt issue resolution and client retention.",
      "Achieved a first-contact resolution rate of 85%, reducing the need for escalations and improving efficiency.",
      "Exceeded sales targets by 15-20% through proactive cross-selling and upselling of banking products based on customer needs.",
      "Trained and mentored new hires, improving onboarding efficiency and customer service standards."
    ],
  },
  {
    title: "IT Support Assistant",
    company: "Rajasthan Computer Academy",
    period: "Jul 2016 - Dec 2018",
    icon: Briefcase,
    iconColor: "#F59E0B",
    logo: null, // Add logo path if available
    highlights: [
      "Delivered first-line technical support across desktops and laptops running Windows OS.",
      "Created and deployed provisioning packages using Windows Configuration Designer for system automation.",
      "Resolved common hardware/software issues, login problems, and remote access errors.",
      "Provided support for Microsoft Office, system updates, and performance tuning.",
      "Maintained user accounts and access rights, and documented resolutions for frequent issues."
    ],
  },
];

export default function ExperiencePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Experience Section Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.h2 variants={slideInFromLeft} className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            My
            <motion.span
              className="font-semibold"
              whileHover={{
                background: "linear-gradient(90deg, #3B82F6, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {" "}Experience
            </motion.span>
          </motion.h2>
          <motion.p variants={slideInFromLeft} className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A timeline of my real professional journey, highlighting key roles and achievements.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-purple-200 to-blue-100 rounded-full" style={{ zIndex: 0 }} />
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-16 pl-12"
          >
            {experiences.map((exp, idx) => (
              <motion.li
                key={exp.title}
                variants={slideInFromLeft}
                className="relative group"
              >
                {/* Timeline Dot */}
                <span
                  className="absolute -left-7 top-4 w-7 h-7 rounded-full border-4 border-white shadow-lg flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${exp.iconColor} 60%, #fff 100%)`, zIndex: 2 }}
                >
                  <exp.icon className="w-5 h-5 text-white drop-shadow" style={{ color: exp.iconColor }} />
                </span>
                {/* Timeline Card */}
                <motion.div
                  className="card-modern bg-white/80 backdrop-blur-md border border-slate-200 shadow-xl rounded-2xl p-8 flex flex-col gap-3 relative"
                  whileHover={{ scale: 1.02, boxShadow: "0 8px 32px 0 rgba(30,41,59,0.12)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-4 mb-2">
                    {/* Company Logo or Placeholder */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-200 to-blue-100 flex items-center justify-center border border-slate-200">
                      {exp.logo ? (
                        <img src={exp.logo} alt={exp.company + ' logo'} className="w-10 h-10 object-contain" />
                      ) : (
                        <Building2 className="w-7 h-7 text-blue-400" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-medium text-white" style={{ backgroundColor: exp.iconColor }}>{exp.company}</span>
                        <span className="text-sm text-slate-500">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  {/* Highlights */}
                  <ul className="space-y-1 mt-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-base text-slate-700">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
} 