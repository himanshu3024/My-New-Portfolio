import { Github, Linkedin, Mail, BookOpen, Cloud, Terminal, Dock } from "lucide-react";

export default function HomeLeftSidebar() {
  return (
    <aside className="hidden md:flex flex-col items-center fixed left-0 top-1/4 z-30 space-y-8 pl-4">
      {/* Social Links */}
      <div className="flex flex-col items-center space-y-4">
        <a
          href="https://github.com/himanshu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-blue-600 transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-7 h-7" />
        </a>
        <a
          href="https://linkedin.com/in/himanshu-gandhi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-blue-600 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-7 h-7" />
        </a>
        <a
          href="mailto:gandhi111000@hotmail.com"
          className="text-slate-500 hover:text-blue-600 transition-colors"
          aria-label="Email"
        >
          <Mail className="w-7 h-7" />
        </a>
      </div>

      {/* Currently Learning Card */}
      <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center w-36 mt-8 border border-slate-100">
        <div className="flex items-center mb-2">
          <BookOpen className="w-5 h-5 text-blue-500 mr-2" />
          <span className="font-semibold text-slate-700 text-sm">Currently Learning</span>
        </div>
        <div className="flex flex-col items-center space-y-2 mt-2">
          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <Cloud className="w-4 h-4 text-blue-400" /> Azure
          </div>
          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <Dock className="w-4 h-4 text-blue-500" /> Docker
          </div>
          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <Terminal className="w-4 h-4 text-purple-500" /> DevOps
          </div>
        </div>
      </div>
    </aside>
  );
} 