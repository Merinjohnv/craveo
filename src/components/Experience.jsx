function Experience() {
    return (
      <section
        id="experience"
        className="bg-[#f4f0e8] px-6 py-20 md:px-10 md:py-24"      >
        <div className="mx-auto max-w-[1400px]">
  
          {/* Intro */}
          <div className="mb-12 flex items-end justify-between">            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#211c17]/50">
                The Craveo experience
              </p>
  
              <h2 className="font-display text-5xl leading-none tracking-[-0.03em] sm:text-6xl md:text-8xl">
                More than
                <br />
                <span className="italic text-[#211c17]/50">
                  a café.
                </span>
              </h2>
            </div>
  
            <span className="hidden text-xs text-[#211c17]/40 md:block">
              01 / 03
            </span>
          </div>
  
          {/* Main Image */}
          <div className="relative overflow-hidden">
  
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24"
              alt="Warm Craveo café interior"
              className="h-[65vh] min-h-[500px] w-full object-cover transition-transform duration-1000 hover:scale-[1.02]"
            />
  
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/15" />
  
            {/* Floating Text */}
            <div className="absolute bottom-8 left-8 max-w-sm text-white md:bottom-12 md:left-12">
  
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">
                Slow down
              </p>
  
              <p className="mt-4 font-display text-4xl leading-none md:text-6xl">
                Stay a little
                <br />
                longer.
              </p>
  
            </div>
  
            {/* Circle */}
            <div className="absolute right-8 top-8 flex h-20 w-20 items-center justify-center rounded-full border border-white/50 text-white md:right-12 md:top-12">
              <span className="text-[9px] uppercase tracking-[0.2em]">
                Explore
              </span>
            </div>
  
          </div>
  
          {/* Supporting Text */}
          <div className="mt-12 grid gap-10 md:grid-cols-12">
  
            <div className="md:col-span-5">
              <p className="font-display text-3xl leading-tight md:text-4xl">
                Come for the coffee.
                <br />
                Stay for the feeling.
              </p>
            </div>
  
            <div className="md:col-span-4 md:col-start-8">
              <p className="text-sm leading-7 text-[#211c17]/60">
                From the first morning espresso to long conversations
                after sunset, Craveo is designed around the simple
                pleasure of taking your time.
              </p>
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }
  
  export default Experience;