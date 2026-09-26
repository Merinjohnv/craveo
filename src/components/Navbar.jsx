import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="absolute left-0 top-0 z-50 w-full text-[#f4f0e8]">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-10">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="relative z-50 font-display text-3xl font-semibold tracking-wide"
        >
          craveo
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 text-sm md:flex">

          <a
            href="#menu"
            className="transition-opacity hover:opacity-50"
          >
            Menu
          </a>

          <a
            href="#story"
            className="transition-opacity hover:opacity-50"
          >
            Our Story
          </a>

          <a
            href="#experience"
            className="transition-opacity hover:opacity-50"
          >
            Experience
          </a>

        </div>

        {/* Desktop Visit Button */}
        <a
          href="#visit"
          className="hidden items-center gap-2 border border-[#f4f0e8]/50 px-5 py-3 text-xs uppercase tracking-[0.18em] transition-all duration-300 hover:bg-[#f4f0e8] hover:text-[#211c17] md:flex"
        >
          Visit Us
          <ArrowUpRight
            size={14}
            strokeWidth={1.5}
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X
              size={23}
              strokeWidth={1.5}
            />
          ) : (
            <Menu
              size={23}
              strokeWidth={1.5}
            />
          )}
        </button>

      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#211c17] transition-all duration-500 md:hidden ${
          isOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >

        <div className="flex h-full flex-col justify-between px-6 pb-8 pt-24">

          {/* Navigation Links */}
          <div className="flex flex-col">

            {/* Menu */}
            <a
              href="#menu"
              onClick={closeMenu}
              className="border-b border-[#f4f0e8]/15 py-4 font-display text-3xl transition-opacity duration-300 hover:opacity-50"
            >
              Menu
            </a>

            {/* Our Story */}
            <a
              href="#story"
              onClick={closeMenu}
              className="border-b border-[#f4f0e8]/15 py-4 font-display text-3xl transition-opacity duration-300 hover:opacity-50"
            >
              Our Story
            </a>

            {/* Experience */}
            <a
              href="#experience"
              onClick={closeMenu}
              className="border-b border-[#f4f0e8]/15 py-4 font-display text-3xl transition-opacity duration-300 hover:opacity-50"
            >
              Experience
            </a>

            {/* Visit Us */}
            <a
              href="#visit"
              onClick={closeMenu}
              className="flex items-center gap-3 py-4 font-display text-3xl transition-opacity duration-300 hover:opacity-50"
            >
              Visit Us

              <ArrowUpRight
                size={20}
                strokeWidth={1}
              />
            </a>

          </div>

          {/* Bottom Details */}
          <div className="flex items-end justify-between">

            <p className="max-w-[220px] text-[10px] uppercase leading-5 tracking-[0.2em] text-[#f4f0e8]/40">
              Crafted for cravings,
              <br />
              slow mornings &
              <br />
              good moments.
            </p>

            <span className="text-[9px] uppercase tracking-[0.25em] text-[#f4f0e8]/40">
              Since 2026
            </span>

          </div>

        </div>

      </div>
    </header>
  );
}

export default Navbar;