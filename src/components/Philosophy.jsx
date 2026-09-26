function Philosophy() {
    return (
      <section
        id="philosophy"
className="bg-[#f4f0e8] px-6 py-20 md:px-10 md:py-24"      >
        <div className="mx-auto max-w-[1400px]">
  
          {/* Small Label */}
          <div className="mb-10 flex items-center gap-4">            <span className="h-px w-10 bg-[#211c17]/40" />
  
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#211c17]/60">
              Our Philosophy
            </p>
          </div>
  
          {/* Main Statement */}
          <div className="grid gap-12 md:grid-cols-12">
  
            <div className="md:col-span-8">
              <h2 className="font-display text-5xl leading-[0.95] tracking-[-0.03em] sm:text-6xl md:text-8xl lg:text-9xl">
                Good food
                <br />
                deserves
                <br />
                <span className="italic text-[#211c17]/55">
                  good moments.
                </span>
              </h2>
            </div>
  
            {/* Description */}
            <div className="flex items-end md:col-span-4">
              <p className="max-w-sm text-sm leading-7 text-[#211c17]/65">
                At Craveo, we believe a café should be more than
                somewhere you grab a coffee. It should be a place
                to pause, gather, discover and enjoy the little things.
              </p>
            </div>
  
          </div>
  
          {/* Bottom Details */}
          <div className="mt-16 grid border-t border-[#211c17]/15 pt-6 sm:grid-cols-3">
  
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#211c17]/50">
                01
              </p>
  
              <p className="mt-3 font-display text-2xl">
                Thoughtful ingredients
              </p>
            </div>
  
            <div className="mt-10 sm:mt-0">
              <p className="text-xs uppercase tracking-[0.2em] text-[#211c17]/50">
                02
              </p>
  
              <p className="mt-3 font-display text-2xl">
                Crafted every day
              </p>
            </div>
  
            <div className="mt-10 sm:mt-0">
              <p className="text-xs uppercase tracking-[0.2em] text-[#211c17]/50">
                03
              </p>
  
              <p className="mt-3 font-display text-2xl">
                Made to be remembered
              </p>
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }
  
  export default Philosophy;