export default function Navbar() {
  return (
    <div className="bg-white">
      <header>
        <nav className="flex items-center justify-between py-4 px-8">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="#">
              <span className="sr-only">servicios 24/7</span>
              <img
                alt="logo servicios 24/7"
                src="/logo.svg"
                className="h-20 w-20 md:h-24 md:w-24"
              />
            </a>
          </div>

          {/* Button Booking */}
          <div className="lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm md:text-xl bg-purpleDark p-4 font-semibold text-white"
            >
              Contáctanos
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}
