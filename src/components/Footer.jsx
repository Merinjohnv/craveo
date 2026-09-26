function Footer() {
    return (
      <footer className="bg-[#211c17] px-6 pb-8 pt-20 text-[#f4f0e8] md:px-10 md:pt-24">
        <div className="mx-auto max-w-[1400px]">
  
          {/* Main Footer */}
          <div className="grid gap-14 border-b border-[#f4f0e8]/15 pb-16 md:grid-cols-12">
  
            {/* Brand */}
            <div className="md:col-span-5">
              <a
                href="#home"
                className="font-display text-5xl tracking-[-0.04em]"
              >
                Craveo
              </a>
  
              <p className="mt-5 max-w-sm text-sm leading-7 text-[#f4f0e8]/50">
                Crafted for cravings, slow mornings,
                good conversations and everything
                worth taking your time for.
              </p>
  
              {/* Social Media */}
              <div className="mt-8 flex gap-3">
  
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f4f0e8]/20 text-xs transition-all duration-300 hover:border-[#f4f0e8]/60 hover:bg-[#f4f0e8]/10"
                >
                  ◎
                </a>
  
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f4f0e8]/20 text-xs font-semibold transition-all duration-300 hover:border-[#f4f0e8]/60 hover:bg-[#f4f0e8]/10"
                >
                  f
                </a>
  
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f4f0e8]/20 text-xs font-semibold transition-all duration-300 hover:border-[#f4f0e8]/60 hover:bg-[#f4f0e8]/10"
                >
                  in
                </a>
  
                <a
                  href="mailto:hello@craveo.com"
                  aria-label="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f4f0e8]/20 text-xs transition-all duration-300 hover:border-[#f4f0e8]/60 hover:bg-[#f4f0e8]/10"
                >
                  @
                </a>
  
              </div>
            </div>
  
            {/* Explore */}
            <div className="md:col-span-2 md:col-start-7">
  
              <p className="mb-6 text-[10px] uppercase tracking-[0.25em] text-[#f4f0e8]/35">
                Explore
              </p>
  
              <div className="flex flex-col gap-4 text-sm text-[#f4f0e8]/60">
  
                <a href="#home" className="transition-colors hover:text-[#f4f0e8]">
                  Home
                </a>
  
                <a href="#philosophy" className="transition-colors hover:text-[#f4f0e8]">
                  Philosophy
                </a>
  
                <a href="#menu" className="transition-colors hover:text-[#f4f0e8]">
                  Menu
                </a>
  
                <a href="#story" className="transition-colors hover:text-[#f4f0e8]">
                  Our Story
                </a>
  
                <a href="#visit" className="transition-colors hover:text-[#f4f0e8]">
                  Visit
                </a>
  
              </div>
            </div>
  
            {/* Find Us */}
            <div className="md:col-span-3">
  
              <p className="mb-6 text-[10px] uppercase tracking-[0.25em] text-[#f4f0e8]/35">
                Find us
              </p>
  
              <p className="text-sm leading-7 text-[#f4f0e8]/60">
                24 Riverside Lane
                <br />
                Kottayam, Kerala
              </p>
  
              <p className="mt-5 text-sm leading-7 text-[#f4f0e8]/60">
                Monday — Sunday
                <br />
                8:00 AM — 10:00 PM
              </p>
  
            </div>
  
          </div>
  
          {/* Bottom */}
          <div className="flex flex-col gap-6 pt-7 text-[9px] uppercase tracking-[0.2em] text-[#f4f0e8]/35 md:flex-row md:items-center md:justify-between">
  
            <p>
              © 2026 Craveo. All rights reserved.
            </p>
  
            <p>
              Created by{" "}
              <a
                href="https://merin-john-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f4f0e8]/65 transition-colors hover:text-[#f4f0e8]"
              >
                Merin John
              </a>
            </p>
  
            <a
              href="#home"
              className="transition-colors hover:text-[#f4f0e8]"
            >
              Back to top ↑
            </a>
  
          </div>
  
        </div>
      </footer>
    );
  }
  
  export default Footer;