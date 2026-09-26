import { ArrowUpRight } from "lucide-react";

const signatureItems = [
    {
        name: "Velvet Latte",
        category: "Coffee",
        description: "Espresso, steamed milk & vanilla",
    price: "₹240",
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772",
    },
    {
        name: "Honey Almond Croissant",
        category: "Bakery",
        description: "Buttery pastry, almond cream & honey",
        price: "₹280",
        image:
          "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
      },
      {
        name: "Strawberry Cloud",
        category: "Dessert",
        description: "Fresh strawberries, cream & vanilla",
        price: "₹320",
        image:
          "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81",
      },
    ];
    
    function SignatureMenu() {
      return (
        <section
          id="menu"
          className="bg-[#211c17] px-6 py-20 text-[#f4f0e8] md:px-10 md:py-24"        >
          <div className="mx-auto max-w-[1400px]">
    
            {/* Section Header */}
            <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
    
              <div>
                <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#f4f0e8]/50">
                  From the kitchen
                </p>
    
                <h2 className="font-display text-6xl leading-[0.85] tracking-[-0.03em] md:text-8xl">
                  Signature
                  <br />
                  <span className="italic text-[#f4f0e8]/50">
                    favourites.
                  </span>
                </h2>
              </div>
    
              <p className="max-w-xs text-sm leading-6 text-[#f4f0e8]/55">
                A small collection of things we love making,
                serving and sharing.
              </p>
    
            </div>
    
            {/* Menu Items */}
            <div className="space-y-12">
    
              {signatureItems.map((item, index) => (
                <article
                  key={item.name}
                  className={`group grid gap-8 border-t border-[#f4f0e8]/15 pt-8 md:grid-cols-12 md:gap-10 ${
                    index % 2 !== 0 ? "md:text-right" : ""
                  }`}
                >
    
                  {/* Image */}
                  <div
                    className={`overflow-hidden md:col-span-5 ${
                      index % 2 !== 0
                        ? "md:order-2"
                        : "md:order-1"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
    
                  {/* Content */}
                  <div
                    className={`flex flex-col justify-between md:col-span-7 ${
                      index % 2 !== 0
                        ? "md:order-1 md:items-end"
                        : "md:order-2"
                    }`}
                  >
    
                    <div>
    
                      <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#f4f0e8]/40">
                        {item.category}
                      </p>
    
                      <h3 className="font-display text-4xl md:text-6xl">
                        {item.name}
                      </h3>
    
                      <p className="mt-4 max-w-sm text-sm leading-6 text-[#f4f0e8]/50">
                        {item.description}
                      </p>
    
                    </div>
    
                    <div className="mt-10 flex items-center gap-6">
    
                      <span className="font-display text-2xl">
                        {item.price}
                      </span>
    
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f4f0e8]/25 transition-all duration-300 group-hover:bg-[#f4f0e8] group-hover:text-[#211c17]">
                        <ArrowUpRight
                          size={15}
                          strokeWidth={1.5}
                        />
                      </span>
    
                    </div>
    
                  </div>
    
                </article>
              ))}
    
            </div>
    
          </div>
        </section>
      );
    }
    
    export default SignatureMenu;