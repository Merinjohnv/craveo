import { ArrowDown, ArrowUpRight } from "lucide-react";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#211c17] text-[#f4f0e8]">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
        alt="Freshly brewed coffee at Craveo"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-end px-6 pb-12 md:px-10 md:pb-16">
        <div className="max-w-5xl">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/70">
            Coffee · Bakery · Slow Moments
          </p>

          <h1 className="font-display text-[clamp(4.5rem,12vw,11rem)] font-medium leading-[0.78] tracking-[-0.04em]">
            Crafted
            <br />
            for cravings.
          </h1>
        </div>

        {/* Bottom Row */}
        <div className="mt-14 flex flex-col justify-between gap-8 border-t border-white/30 pt-5 md:flex-row md:items-center">
          <p className="max-w-md text-sm leading-6 text-white/75">
            A modern café where thoughtful food, exceptional coffee, and
            beautiful moments come together.
          </p>

          <a
            href="#menu"
            className="group flex w-fit items-center gap-3 text-xs uppercase tracking-[0.2em]"
          >
            Explore our menu
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 transition-all duration-300 group-hover:bg-white group-hover:text-[#211c17]">
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-6 z-10 hidden items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/60 md:flex">
        Scroll
        <ArrowDown size={14} strokeWidth={1} className="animate-bounce" />
      </div>
    </section>
  );
}

export default Hero;
