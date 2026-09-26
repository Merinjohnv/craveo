import { ArrowUpRight } from "lucide-react";

function Visit() {
  return (
    <section
      id="visit"
      className="bg-[#f4f0e8] px-6 py-20 md:px-10 md:py-24"    >
      <div className="mx-auto max-w-[1400px]">

        {/* Heading */}
        <div className="mb-12 border-t border-[#211c17]/15 pt-6 md:mb-20">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#211c17]/50">
            Find your way to Craveo
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-12 md:grid-cols-12 md:items-end">

          {/* Title */}
          <div className="md:col-span-8">
            <h2 className="font-display text-7xl leading-[0.8] tracking-[-0.04em] sm:text-8xl md:text-[9rem]">
              Come
              <br />
              find us.
            </h2>
          </div>

          {/* Details */}
          <div className="md:col-span-4">

            <div className="border-t border-[#211c17]/15 pt-5">

              <p className="text-[10px] uppercase tracking-[0.25em] text-[#211c17]/45">
                Visit
              </p>

              <p className="mt-4 font-display text-2xl">
                24 Riverside Lane
                <br />
                Kottayam, Kerala
              </p>

            </div>

            <div className="mt-10 border-t border-[#211c17]/15 pt-5">

              <p className="text-[10px] uppercase tracking-[0.25em] text-[#211c17]/45">
                Opening hours
              </p>

              <div className="mt-4 flex justify-between text-sm">
                <span>Monday — Sunday</span>
                <span>10 AM — 11.30 PM</span>
              </div>

            </div>

            <a
              href="#"
              className="group mt-10 flex w-fit items-center gap-4 border-b border-[#211c17]/30 pb-2 text-xs uppercase tracking-[0.2em]"
            >
              Get directions

              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                />
              </span>
            </a>

          </div>

        </div>

        {/* Image */}
        <div className="group mt-16 overflow-hidden md:mt-20">
          <img
            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0"
            alt="Craveo café exterior"
            className="h-[55vh] min-h-[420px] w-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
          />

        </div>

      </div>
    </section>
  );
}

export default Visit;