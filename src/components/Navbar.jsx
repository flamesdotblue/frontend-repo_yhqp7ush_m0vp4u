import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold text-gray-900 tracking-tight text-lg">SE Portfolio</a>
        <nav className="flex items-center gap-4 text-gray-600">
          <a href="#projects" className="hover:text-gray-900 transition-colors text-sm">Projects</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors text-sm">Contact</a>
          <div className="h-5 w-px bg-gray-200 mx-2" />
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-md hover:bg-gray-100 text-gray-700"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-md hover:bg-gray-100 text-gray-700"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#contact" aria-label="Email" className="p-2 rounded-md hover:bg-gray-100 text-gray-700">
            <Mail className="h-5 w-5" />
          </a>
        </nav>
      </div>
    </header>
  );
}
