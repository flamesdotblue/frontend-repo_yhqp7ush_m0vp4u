import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Let’s build something</h2>
          <p className="mt-2 text-gray-600 max-w-2xl">
            I’m open to full-time roles, contract work, or interesting collaborations. Drop a line and I’ll get back soon.
          </p>

          <div className="mt-6 grid gap-4 sm:flex">
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-gray-800"
            >
              <Mail className="h-4 w-4" />
              Email me
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-4 py-2 text-sm font-semibold shadow ring-1 ring-inset ring-gray-900/10 hover:bg-gray-50"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-4 py-2 text-sm font-semibold shadow ring-1 ring-inset ring-gray-900/10 hover:bg-gray-50"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">© {new Date().getFullYear()} Software Engineer Portfolio. All rights reserved.</p>
      </div>
    </section>
  );
}
