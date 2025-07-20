"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Cloud Intern",
    company: "Tech Solutions Inc.",
    period: "May 2023 - Aug 2023",
    description: "Worked on deploying serverless applications on Azure and AWS. Automated CI/CD pipelines and improved infrastructure reliability.",
  },
  {
    title: "DevOps Student Project",
    company: "University Capstone",
    period: "Jan 2023 - Apr 2023",
    description: "Built a scalable web app using Docker, Kubernetes, and Terraform. Implemented monitoring and alerting with Prometheus and Grafana.",
  },
  {
    title: "IT Support Assistant",
    company: "Campus IT Services",
    period: "Sep 2022 - Dec 2022",
    description: "Provided technical support for students and staff. Managed Windows and Linux servers, and automated routine tasks with Bash scripts.",
  },
];

export default function ExperiencePage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center">Experience</h1>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row md:items-center gap-4 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-blue-700 mb-1">{exp.title}</h2>
              <div className="text-slate-600 font-medium mb-1">{exp.company}</div>
              <div className="text-slate-400 text-sm mb-2">{exp.period}</div>
              <p className="text-slate-700">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 