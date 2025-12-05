import { useEffect, useState } from 'react';
import { getDeviceScreenType, deviceScreenType } from '../../utils/functions';

export const Footer = () => {
  const [screenType, setScreenType] = useState(getDeviceScreenType());

  useEffect(() => {
    function handleResize() {
      setScreenType(getDeviceScreenType());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-gold text-xl font-bold mb-4">
              Mystic Village Apartments
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Premium apartment living in the heart of Mystic. Modern amenities,
              exceptional service, and a vibrant community.
            </p>
            <address className="not-italic text-gray-300">
              2350 Goldstar Highway<br />
              Mystic, CT
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/community"
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  Our Community
                </a>
              </li>
              <li>
                <a
                  href="/apartments"
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  Available Rentals
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-sm mb-1">Phone</p>
                <a
                  href="tel:860-608-9661"
                  className="text-white hover:text-gold transition-colors block"
                >
                  860-608-9661
                </a>
                <a
                  href="tel:860-857-0369"
                  className="text-white hover:text-gold transition-colors block"
                >
                  860-857-0369
                </a>
                <a
                  href="tel:860-912-7315"
                  className="text-white hover:text-gold transition-colors block"
                >
                  860-912-7315
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <a
                  href="mailto:MalerbaKaer@gmail.com"
                  className="text-white hover:text-gold transition-colors"
                >
                  MalerbaKaer@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="text-gold text-lg font-semibold mb-4">Office Hours</h4>
            <div className="space-y-2 text-gray-300">
              <p>Monday - Friday: 9am - 6pm</p>
              <p>Saturday: 10am - 4pm</p>
              <p>Sunday: By Appointment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Mystic Village Apartments. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
