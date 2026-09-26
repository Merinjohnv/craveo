function Story() {
  return (
    <section
      id="story"
      className="overflow-hidden bg-[#f4f0e8] px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mb-16 flex items-start justify-between">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#211c17]/50">
              Our story
            </p>

            <h2 className="max-w-4xl font-display text-5xl leading-[0.9] tracking-[-0.03em] sm:text-6xl md:text-8xl">
              Made slowly.
              <br />
              <span className="italic text-[#211c17]/45">
                Made with intention.
              </span>
            </h2>
          </div>

          <span className="hidden text-xs text-[#211c17]/40 md:block">
            02 / 03
          </span>
        </div>

        {/* Editorial Images */}
        <div className="grid grid-cols-12 gap-5 md:gap-8">
          {/* Large Image */}
          <div className="col-span-12 md:col-span-7">
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
                alt="Fresh coffee being prepared"
                className="h-[520px] w-full object-cover transition-transform duration-1000 hover:scale-105 md:h-[720px]"
              />
            </div>

            <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-[#211c17]/40">
              Coffee, carefully considered
            </p>
          </div>

          {/* Small Image */}
          <div className="col-span-10 col-start-3 mt-12 md:col-span-4 md:col-start-9 md:mt-16">
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352"
                alt="Fresh ingredients at Craveo"
                className="h-[420px] w-full object-cover transition-transform duration-1000 hover:scale-105 md:h-[560px]"
              />
            </div>

            <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-[#211c17]/40">
              Ingredients with a story
            </p>
          </div>
        </div>

        {/* Story Copy */}
        <div className="mt-20 grid gap-10 border-t border-[#211c17]/15 pt-8 md:mt-24 md:grid-cols-12">
          {/* Editorial Image */}
          <div className="md:col-span-4">
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
                alt="Coffee at Craveo"
                className="h-[280px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[360px]"
              />
            </div>

            <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-[#211c17]/40">
              Made for slow moments
            </p>
          </div>

          {/* Story Text */}
          <div className="md:col-span-6 md:col-start-7">
            <p className="font-display text-3xl leading-tight md:text-4xl">
              Craveo began with a simple idea: create a place where good food
              and good company could take their time.
            </p>

            <p className="mt-8 max-w-lg text-sm leading-7 text-[#211c17]/60">
              We work with thoughtfully chosen ingredients, local makers and
              recipes inspired by the places and people we love. Nothing rushed.
              Nothing unnecessary. Just food worth remembering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
