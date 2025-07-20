"use client"

import { Briefcase, Cloud, Award, Cloudy, Server, Database, Shield, Zap, Globe, Cpu, Terminal, BookOpen, Code2, GitBranch, Github, Settings, Layers, Monitor, Lock, Users, Network, FileText, } from "lucide-react";
import BackToTop from "@/components/back-to-top";
import Link from "next/link";

const skillCategories = [
  {
    title: "Languages & Scripting",
    skills: [
      { name: "Python", icon: Code2 },
      { name: "Bash", icon: Terminal },
      { name: "Shell Scripting", icon: Terminal },
      { name: "YAML", icon: FileText },
      { name: "JSON", icon: FileText },
    ],
  },
  {
    title: "Cloud Platforms",
    skills: [
      { name: "AWS (EC2, S3, Lambda, IAM, CloudWatch)", icon: Cloudy },
      { name: "Azure (Functions, Static Web Apps, Blob Storage)", icon: Cloud },
      { name: "GCP", icon: Globe },
    ],
  },
  {
    title: "DevOps & CI/CD Tools",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "GitHub Actions", icon: Settings },
      { name: "Jenkins", icon: Settings },
      { name: "Docker", icon: Server },
      { name: "Kubernetes", icon: Database },
      { name: "Ansible", icon: Layers },
      { name: "Terraform", icon: Shield },
    ],
  },
  {
    title: "Infrastructure & Configuration",
    skills: [
      { name: "VPC", icon: Network },
      { name: "Load Balancers", icon: Cpu },
      { name: "Security Groups", icon: Lock },
      { name: "DNS", icon: Network },
      { name: "CDN", icon: Globe },
      { name: "Infrastructure as Code (IaC)", icon: Shield },
    ],
  },
  {
    title: "Operating Systems & Servers",
    skills: [
      { name: "Linux (Ubuntu, CentOS)", icon: Monitor },
      { name: "Windows Server", icon: Monitor },
      { name: "Active Directory", icon: Users },
      { name: "Remote Desktop", icon: Monitor },
    ],
  },
  {
    title: "Monitoring & Security",
    skills: [
      { name: "Azure Monitor", icon: Monitor },
      { name: "AWS CloudWatch", icon: Monitor },
      { name: "IAM", icon: Lock },
      { name: "Cloud Security", icon: Lock },
      { name: "RBAC", icon: Users },
    ],
  },
  {
    title: "Project & Workflow Tools",
    skills: [
      { name: "Jira", icon: BookOpen },
      { name: "Microsoft 365", icon: BookOpen },
      { name: "Agile Methodology", icon: BookOpen },
    ],
  },
  {
    title: "Networking",
    skills: [
      { name: "TCP/IP", icon: Network },
      { name: "DNS", icon: Network },
      { name: "DHCP", icon: Network },
      { name: "HTTP/S", icon: Network },
      { name: "VPN", icon: Network },
      { name: "NAT", icon: Network },
      { name: "Routing Protocols", icon: Network },
    ],
  },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center pt-28 pb-12 px-4">
        {/* Custom Hero */}
        <div className="w-full max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Himanshu Gandhi</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 mb-6">
            Cloud Computing Specialist & DevOps Engineer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
            <Link href="/projects" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 text-lg">
              View Projects
            </Link>
            <Link href="/about" className="px-8 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-lg">
              About Me
            </Link>
            <Link href="/contact" className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 text-lg">
              Contact Me
            </Link>
          </div>
        </div>

        {/* Quick Highlights */}
        <div className="w-full max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <Briefcase className="w-8 h-8 text-blue-600 mb-2" />
            <span className="text-2xl font-bold text-blue-600">5+ Years</span>
            <span className="text-slate-700 mt-1 text-sm">Experience</span>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <Cloud className="w-8 h-8 text-purple-600 mb-2" />
            <span className="text-2xl font-bold text-purple-600">10+ Projects</span>
            <span className="text-slate-700 mt-1 text-sm">Cloud Solutions</span>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <Award className="w-8 h-8 text-green-600 mb-2" />
            <span className="text-2xl font-bold text-green-600">Certified</span>
            <span className="text-slate-700 mt-1 text-sm">Azure & AWS</span>
          </div>
        </div>

        {/* What I Do Blurb */}
        <div className="w-full max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-semibold mb-2">What I Do</h2>
          <p className="text-slate-600 text-lg">
            I help businesses scale and innovate with cloud computing, DevOps automation, and modern infrastructure. Specializing in Azure, AWS, and serverless solutions.
          </p>
        </div>

        {/* Skills Section (divided by category) */}
        <div className="w-full max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="bg-white rounded-xl shadow p-6 flex flex-col items-start">
                <h3 className="text-lg font-bold text-blue-700 mb-3">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center gap-2 text-slate-700 text-sm">
                      <skill.icon className="w-5 h-5 text-blue-400" />
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Back to Top Button */}
      <BackToTop />

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Himanshu Gandhi</h3>
            <p className="text-slate-400 leading-relaxed">
              Cloud Computing Specialist passionate about building scalable solutions with modern technologies.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/himanshu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/himanshu-gandhi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 mt-8 text-center text-slate-400 text-sm">
          © 2024 Himanshu Gandhi. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
