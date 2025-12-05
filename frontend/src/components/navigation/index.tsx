import { useEffect, useState } from 'react';
import { NavMenu } from './navmenu';
import logo from './../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { deviceScreenType, getDeviceScreenType } from '../../utils/functions';
import favicon from './../../assets/images/favicon.png';
import { NavItem } from './navitem';

export const Navbar = (): JSX.Element => {
  const [screenType, setScreenType] = useState(getDeviceScreenType());
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isNavOpen ? 'hidden' : 'unset';
  }, [isNavOpen]);

  useEffect(() => {
    function handleResize() {
      setScreenType(getDeviceScreenType());
    }

    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-3'
      }`}
    >
      <div className="container-custom">
        {screenType === deviceScreenType.mobile ? (
          /* Mobile Navigation */
          <div className="flex items-center justify-between">
            <Link to="./" className="flex items-center gap-2">
              <img
                src={favicon}
                width={36}
                height={36}
                alt="Mystic Village"
                className="rounded-lg"
              />
              <span className="text-navy font-bold text-base">
                Mystic Village
              </span>
            </Link>
            <button
              className="text-3xl text-navy hover:text-navy-light transition-colors p-2"
              onClick={() => setIsNavOpen(!isNavOpen)}
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        ) : (
          /* Desktop Navigation */
          <div className="flex items-center justify-between">
            <Link to="./" className="hover:opacity-90 transition-opacity">
              <img
                src={logo}
                height={60}
                width={60}
                alt="Mystic Village Apartments"
                className="h-auto"
              />
            </Link>
            <NavMenu />
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isNavOpen && (
        <div className="fixed inset-0 bg-navy z-50 flex flex-col">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-5xl text-gold hover:text-gold-light transition-colors leading-none"
            onClick={closeNav}
            aria-label="Close menu"
          >
            ×
          </button>

          {/* Menu Items */}
          <div className="flex-1 flex flex-col items-center justify-center gap-2">
            <NavItem name="Home" location="/" isMobile onClickCallback={closeNav} />
            <NavItem
              name="Our Community"
              location="community"
              isMobile
              onClickCallback={closeNav}
            />
            <NavItem
              name="Available Rentals"
              location="apartments"
              isMobile
              onClickCallback={closeNav}
            />
            <NavItem
              name="Contact Us"
              location="contact"
              isMobile
              onClickCallback={closeNav}
            />
          </div>
        </div>
      )}
    </nav>
  );
};
