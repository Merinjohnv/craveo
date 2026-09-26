const galleryImages = [
  {
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    label: "The Daily Pour",
  },
  {
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
    label: "Fresh From The Oven",
  },
  {
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
    label: "Afternoon Pause",
  },
  {
    image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81",
    label: "Something Sweet",
  },
  {
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    label: "Morning Ritual",
  },
  {
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    label: "Around The Table",
  },
  {
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    label: "A Quiet Morning",
  },
];

function GalleryImage({ item, className = "" }) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <img
        src={item.image}
        alt={item.label}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/25" />

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="text-[10px] uppercase tracking-[0.25em] text-white">
          {item.label}
        </p>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <section className="bg-[#211c17] px-6 py-20 text-[#f4f0e8] md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        {/* Heading */}
        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#f4f0e8]/45">
              Moments at Craveo
            </p>

            <h2 className="font-display text-6xl leading-[0.85] tracking-[-0.04em] sm:text-7xl md:text-9xl">
              A little
              <br />
              <span className="italic text-[#f4f0e8]/45">everyday magic.</span>
            </h2>
          </div>

          <p className="max-w-xs text-xs leading-6 text-[#f4f0e8]/45 md:text-right">
            Coffee, conversation, warm plates and the moments in between.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid h-auto grid-cols-2 gap-3 md:h-[900px] md:grid-cols-12 md:grid-rows-12 md:gap-4">
          {/* Large Left */}
          <GalleryImage
            item={galleryImages[0]}
            className="col-span-2 aspect-[4/3] md:col-span-5 md:row-span-8 md:aspect-auto"
          />

          {/* Top Middle */}
          <GalleryImage
            item={galleryImages[1]}
            className="aspect-square md:col-span-3 md:row-span-4 md:aspect-auto"
          />

          {/* Top Right */}
          <GalleryImage
            item={galleryImages[2]}
            className="aspect-square md:col-span-4 md:row-span-4 md:aspect-auto"
          />

          {/* Middle Wide */}
          <GalleryImage
            item={galleryImages[3]}
            className="col-span-2 aspect-[16/8] md:col-span-7 md:row-span-4 md:aspect-auto"
          />

          {/* Bottom Left */}
          <GalleryImage
            item={galleryImages[4]}
            className="aspect-[4/3] md:col-span-4 md:row-span-4 md:aspect-auto"
          />

          {/* Bottom Right */}
          <GalleryImage
            item={galleryImages[5]}
            className="aspect-[4/3] md:col-span-4 md:row-span-4 md:aspect-auto"
          />

          {/* Bottom Right — New */}
          <GalleryImage
            item={galleryImages[6]}
            className="col-span-2 aspect-[4/3] md:col-span-4 md:row-span-4 md:col-start-9 md:row-start-9 md:aspect-auto"
          />
        </div>

        {/* Bottom Line */}
        <div className="mt-12 flex items-center justify-between border-t border-[#f4f0e8]/15 pt-6">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#f4f0e8]/40">
            Craveo — Since 2026
          </p>

          <p className="text-[10px] uppercase tracking-[0.25em] text-[#f4f0e8]/40">
            Scroll to explore
          </p>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
