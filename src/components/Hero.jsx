import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/60 via-white/40 to-white/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center min-h-[80vh]">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 ring-1 ring-black/5 px-3 py-1 text-xs font-medium text-gray-700 mb-4">
          <Rocket className="h-4 w-4 text-indigo-600" />
          Available for new opportunities
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 max-w-3xl">
          Building delightful software with modern web technologies
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
          I’m a software engineer focused on crafting performant, accessible, and human-centered experiences across the stack.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/50"
          >
            View projects
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-4 py-2 text-sm font-semibold shadow ring-1 ring-inset ring-gray-900/10 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/20"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
