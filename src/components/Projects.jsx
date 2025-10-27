import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Collaboration Suite',
    description:
      'A collaborative editor with presence, comments, and offline-first sync powered by CRDTs.',
    tech: ['TypeScript', 'React', 'FastAPI', 'WebSockets'],
    link: '#',
  },
  {
    title: 'AI Content Curator',
    description:
      'Intelligent pipeline that classifies, summarizes, and tags articles for fast discovery.',
    tech: ['Python', 'FastAPI', 'Postgres', 'OpenAI'],
    link: '#',
  },
  {
    title: '3D Product Showcase',
    description:
      'Interactive 3D scenes with Spline for immersive product storytelling and conversion.',
    tech: ['React', 'Spline', 'Framer Motion'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Featured Projects</h2>
          <p className="mt-2 text-gray-600 max-w-2xl">
            Selected work that blends solid engineering with thoughtful design.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 text-indigo-600">
                  <Code className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-wide">Project</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-indigo-700">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="text-xs font-medium rounded-full bg-gray-100 text-gray-700 px-2.5 py-1"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <a
                  href={p.link}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  View project
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
