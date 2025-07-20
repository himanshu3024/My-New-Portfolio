"use client"

import { Briefcase, Cloud, Award, Cloudy, Server, Database, Shield, Zap, Globe, Cpu, Terminal, BookOpen, Code2, GitBranch, Github, Settings, Layers, Monitor, Lock, Users, Network, FileText, User, Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import BackToTop from "@/components/back-to-top";
import Link from "next/link";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

// Fallback Lottie animation data (simple animated loader)
const fallbackLottie = {
  v: "5.5.7",
  fr: 30,
  ip: 0,
  op: 60,
  w: 200,
  h: 200,
  nm: "Loader",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Circle",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 1, k: [ { t: 0, s: 0 }, { t: 60, s: 360 } ] },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [120, 120] },
          nm: "Ellipse Path 1"
        },
        {
          ty: "st",
          c: { a: 0, k: [0.2, 0.4, 1, 1] },
          o: { a: 0, k: 100 },
          w: { a: 0, k: 10 },
          lc: 2,
          lj: 2,
          ml: 4,
          nm: "Stroke 1"
        }
      ],
      ao: 0
    }
  ],
  markers: []
};

const skillCategories = [
  {
    title: "Languages & Scripting",
    skills: [
      { name: "Python", icon: Code2, proficiency: 95 },
      { name: "Bash", icon: Terminal, proficiency: 85 },
      { name: "Shell Scripting", icon: Terminal, proficiency: 80 },
      { name: "YAML", icon: FileText, proficiency: 80 },
      { name: "JSON", icon: FileText, proficiency: 90 },
    ],
  },
  {
    title: "Cloud Platforms",
    skills: [
      { name: "AWS (EC2, S3, Lambda, IAM, CloudWatch)", icon: Cloudy, proficiency: 90 },
      { name: "Azure (Functions, Static Web Apps, Blob Storage)", icon: Cloud, proficiency: 92 },
      { name: "GCP", icon: Globe, proficiency: 70 },
    ],
  },
  {
    title: "DevOps & CI/CD Tools",
    skills: [
      { name: "Git", icon: GitBranch, proficiency: 95 },
      { name: "GitHub", icon: Github, proficiency: 95 },
      { name: "GitHub Actions", icon: Settings, proficiency: 85 },
      { name: "Jenkins", icon: Settings, proficiency: 75 },
      { name: "Docker", icon: Server, proficiency: 90 },
      { name: "Kubernetes", icon: Database, proficiency: 80 },
      { name: "Ansible", icon: Layers, proficiency: 70 },
      { name: "Terraform", icon: Shield, proficiency: 85 },
    ],
  },
  {
    title: "Infrastructure & Configuration",
    skills: [
      { name: "VPC", icon: Network, proficiency: 85 },
      { name: "Load Balancers", icon: Cpu, proficiency: 80 },
      { name: "Security Groups", icon: Lock, proficiency: 85 },
      { name: "DNS", icon: Network, proficiency: 80 },
      { name: "CDN", icon: Globe, proficiency: 75 },
      { name: "Infrastructure as Code (IaC)", icon: Shield, proficiency: 90 },
    ],
  },
  {
    title: "Operating Systems & Servers",
    skills: [
      { name: "Linux (Ubuntu, CentOS)", icon: Monitor, proficiency: 90 },
      { name: "Windows Server", icon: Monitor, proficiency: 85 },
      { name: "Active Directory", icon: Users, proficiency: 80 },
      { name: "Remote Desktop", icon: Monitor, proficiency: 80 },
    ],
  },
  {
    title: "Monitoring & Security",
    skills: [
      { name: "Azure Monitor", icon: Monitor, proficiency: 80 },
      { name: "AWS CloudWatch", icon: Monitor, proficiency: 80 },
      { name: "IAM", icon: Lock, proficiency: 85 },
      { name: "Cloud Security", icon: Lock, proficiency: 80 },
      { name: "RBAC", icon: Users, proficiency: 80 },
    ],
  },
  {
    title: "Project & Workflow Tools",
    skills: [
      { name: "Jira", icon: BookOpen, proficiency: 85 },
      { name: "Microsoft 365", icon: BookOpen, proficiency: 90 },
      { name: "Agile Methodology", icon: BookOpen, proficiency: 80 },
    ],
  },
  {
    title: "Networking",
    skills: [
      { name: "TCP/IP", icon: Network, proficiency: 85 },
      { name: "DNS", icon: Network, proficiency: 80 },
      { name: "DHCP", icon: Network, proficiency: 75 },
      { name: "HTTP/S", icon: Network, proficiency: 80 },
      { name: "VPN", icon: Network, proficiency: 75 },
      { name: "NAT", icon: Network, proficiency: 75 },
      { name: "Routing Protocols", icon: Network, proficiency: 70 },
    ],
  },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-200">
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center pb-12 px-4">
        {/* Custom Hero */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 mb-12 min-h-[70vh] flex items-center justify-center">
          <div className="w-full flex flex-col md:flex-row items-center justify-between relative z-10 gap-8 md:gap-16">
            {/* Hero Content */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left py-12 md:py-0">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-4"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Himanshu Gandhi</span>
              </motion.h1>
              <motion.p
                className="text-xl sm:text-2xl text-slate-600 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Cloud Computing Specialist & DevOps Engineer
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row flex-wrap sm:flex-nowrap gap-4 justify-center md:justify-start items-center mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Link href="/projects" className="min-w-[200px] sm:w-[220px] px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 text-lg flex items-center gap-2 justify-center">
                  <Cloud className="w-5 h-5" /> View Projects
                </Link>
                <Link href="/about" className="min-w-[200px] sm:w-[220px] px-6 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 text-lg flex items-center gap-2 justify-center">
                  <User className="w-5 h-5" /> About Me
                </Link>
                <Link href="/contact" className="min-w-[200px] sm:w-[220px] px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 hover:text-blue-800 transition-all duration-300 text-lg flex items-center gap-2 justify-center">
                  <Mail className="w-5 h-5" /> Contact Me
                </Link>
              </motion.div>
            </div>
            {/* Lottie Animation */}
            <div className="flex-1 flex justify-center md:justify-end w-full md:w-auto mt-8 md:mt-0">
              <div className="w-[220px] h-[220px] md:w-[320px] md:h-[320px] flex items-center justify-center">
                <Lottie
                  loop
                  play
                  animationData={(() => {
                    try {
                      // @ts-ignore
                      return require("../public/lottie/cloud-devops.json");
                    } catch {
                      return fallbackLottie;
                    }
                  })()}
                  style={{ width: '100%', height: '100%' }}
                  rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Highlights */}
        <div className="w-full xl:w-4/5 2xl:w-3/4 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="rounded-2xl p-8 flex flex-col items-center bg-gradient-to-br from-blue-100/70 via-white/60 to-purple-100/70 border-2 border-blue-200/60 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl hover:border-blue-500/70 cursor-pointer group relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-300/30 via-purple-300/20 to-transparent rounded-full blur-2xl opacity-60 pointer-events-none" />
            <Briefcase className="w-10 h-10 text-blue-600 mb-3 transition-transform duration-300 group-hover:rotate-12 group-hover:text-blue-800" />
            <span className="text-2xl font-bold text-blue-700 group-hover:text-blue-900 transition-colors duration-300">5+ Years</span>
            <span className="text-slate-700 mt-1 text-sm">Experience</span>
          </div>
          <div className="rounded-2xl p-8 flex flex-col items-center bg-gradient-to-br from-purple-100/70 via-white/60 to-blue-100/70 border-2 border-purple-200/60 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl hover:border-purple-500/70 cursor-pointer group relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-purple-300/30 via-blue-300/20 to-transparent rounded-full blur-2xl opacity-60 pointer-events-none" />
            <Cloud className="w-10 h-10 text-purple-600 mb-3 transition-transform duration-300 group-hover:rotate-12 group-hover:text-purple-800" />
            <span className="text-2xl font-bold text-purple-700 group-hover:text-purple-900 transition-colors duration-300">10+ Projects</span>
            <span className="text-slate-700 mt-1 text-sm">Cloud Solutions</span>
          </div>
          <div className="rounded-2xl p-8 flex flex-col items-center bg-gradient-to-br from-green-100/70 via-white/60 to-blue-100/70 border-2 border-green-200/60 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl hover:border-green-500/70 cursor-pointer group relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-green-300/30 via-blue-300/20 to-transparent rounded-full blur-2xl opacity-60 pointer-events-none" />
            <Award className="w-10 h-10 text-green-600 mb-3 transition-transform duration-300 group-hover:rotate-12 group-hover:text-green-800" />
            <span className="text-2xl font-bold text-green-700 group-hover:text-green-900 transition-colors duration-300">Certified</span>
            <span className="text-slate-700 mt-1 text-sm">Azure & AWS</span>
          </div>
        </div>

        {/* What I Do Blurb */}
        <div className="w-full xl:w-4/5 2xl:w-3/4 mx-auto text-center mb-12">
          <h2 className="text-2xl font-semibold mb-2">What I Do</h2>
          <p className="text-slate-600 text-lg">
            I help businesses scale and innovate with cloud computing, DevOps automation, and modern infrastructure. Specializing in Azure, AWS, and serverless solutions.
          </p>
        </div>

        {/* Skills Section (divided by category) */}
        <div className="w-full xl:w-4/5 2xl:w-3/4 mx-auto text-center mb-16">
          <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                className={
                  `rounded-2xl p-6 flex flex-col items-start bg-gradient-to-br from-blue-100/70 via-white/60 to-purple-100/70 border-2 border-blue-200/60 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl hover:border-blue-500/70 cursor-pointer group relative overflow-hidden`
                }
                style={{ boxShadow: '0 8px 32px 0 rgba(30,41,59,0.12)' }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* Decorative gradient blob */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-300/30 via-purple-300/20 to-transparent rounded-full blur-2xl opacity-60 pointer-events-none" />
                <h3 className="text-lg font-bold text-blue-700 mb-3 group-hover:text-blue-900 transition-colors duration-300">{cat.title}</h3>
                <ul className="space-y-4 w-full">
                  {cat.skills.map((skill, idx) => (
                    <motion.li
                      key={skill.name}
                      className="flex items-center gap-3 text-slate-700 text-base transition-colors duration-300 group-hover:text-blue-800 relative"
                      whileHover={{ scale: 1.04, x: 4 }}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                    >
                      <span className="inline-flex items-center justify-center">
                        <skill.icon
                          className="w-6 h-6 text-blue-400 transition-transform duration-300 group-hover:rotate-12 group-hover:text-blue-600"
                        />
                      </span>
                      <span className="font-medium">{skill.name}</span>
                      {/* Tooltip */}
                      <span className="ml-2 text-xs text-slate-500 bg-white/80 px-2 py-1 rounded-full shadow border border-slate-200 cursor-help" title={`Proficiency: ${skill.proficiency}%`}>
                        {skill.proficiency}%
                      </span>
                      {/* Animated Progress Bar */}
                      <motion.div
                        className="ml-2 flex-1 h-2 rounded-full bg-blue-100 overflow-hidden"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.2 + idx * 0.05 }}
                        style={{ maxWidth: 120 }}
                      >
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </motion.div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Back to Top Button */}
      <BackToTop />

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 text-white py-12 px-6 mt-auto shadow-2xl backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Himanshu Gandhi</h3>
            <p className="text-slate-400 leading-relaxed">
              Cloud Computing Specialist passionate about building scalable solutions with modern technologies.
            </p>
          </div>
          <div className="flex space-x-6">
            <motion.a
              href="https://github.com/himanshu3024"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, y: -3, color: '#fff' }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <Github className="w-7 h-7" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/himanshu-gandhi-891204160/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, y: -3, color: '#fff' }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-7 h-7" />
            </motion.a>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 mt-8 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Himanshu Gandhi. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
