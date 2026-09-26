function Feedback() {
    return (
      <section className="bg-[#f4f0e8] px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
  
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
  
            {/* Text */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#211c17]/40">
                Your thoughts matter
              </p>
  
              <h2 className="mt-5 max-w-3xl font-display text-5xl leading-[0.9] tracking-[-0.04em] md:text-7xl">
                We'd love to
                <br />
                <span className="italic text-[#211c17]/45">
                  hear from you.
                </span>
              </h2>
  
              <p className="mt-6 max-w-md text-sm leading-7 text-[#211c17]/50">
                A suggestion, a little feedback, or simply
                a hello — we're always listening.
              </p>
            </div>
  
            {/* CTA */}
            <a
              href="mailto:hello@craveo.com?subject=Craveo Feedback"
              className="group flex items-center gap-5 border-b border-[#211c17]/30 pb-3 text-[10px] uppercase tracking-[0.25em] transition-colors duration-300 hover:border-[#211c17]"
            >
              Send us a note
  
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
  
          </div>
  
        </div>
      </section>
    );
  }
  
  export default Feedback;