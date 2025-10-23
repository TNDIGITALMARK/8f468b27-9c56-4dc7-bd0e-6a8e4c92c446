import Link from 'next/link';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-off-white">
      <div className="container mx-auto px-6 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & About */}
          <div>
            <h3 className="text-white font-heading text-2xl font-semibold mb-4">
              Green Bar
            </h3>
            <p className="text-off-white/80 font-body text-sm leading-relaxed mb-6">
              Experience Haifa's premier lounge. Craft cocktails, live music, and stunning rooftop views.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/greenbarhaifa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-off-white hover:text-copper transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com/greenbarhaifa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-off-white hover:text-copper transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-body font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-off-white/80 hover:text-copper transition-colors font-body text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-off-white/80 hover:text-copper transition-colors font-body text-sm"
                >
                  Menu & Drinks
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-off-white/80 hover:text-copper transition-colors font-body text-sm"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-off-white/80 hover:text-copper transition-colors font-body text-sm"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-off-white/80 hover:text-copper transition-colors font-body text-sm"
                >
                  Contact & Book
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-body font-semibold text-lg mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-copper mt-1 flex-shrink-0" />
                <span className="text-off-white/80 font-body text-sm">
                  Sha'ar Ha-Levanon St 8<br />Haifa, Israel
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-copper flex-shrink-0" />
                <a
                  href="tel:+972123456789"
                  className="text-off-white/80 hover:text-copper transition-colors font-body text-sm"
                >
                  +972 12 345 6789
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-copper flex-shrink-0" />
                <a
                  href="mailto:reservations@greenbarhaifa.com"
                  className="text-off-white/80 hover:text-copper transition-colors font-body text-sm"
                >
                  reservations@greenbarhaifa.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-body font-semibold text-lg mb-4">
              Opening Hours
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-copper mt-1 flex-shrink-0" />
                <div className="text-off-white/80 font-body text-sm">
                  <p className="font-medium text-white">Mon - Thu</p>
                  <p>6:00 PM - 1:00 AM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-copper mt-1 flex-shrink-0" />
                <div className="text-off-white/80 font-body text-sm">
                  <p className="font-medium text-white">Fri - Sat</p>
                  <p>6:00 PM - 3:00 AM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-copper mt-1 flex-shrink-0" />
                <div className="text-off-white/80 font-body text-sm">
                  <p className="font-medium text-white">Sunday</p>
                  <p>Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-off-white/60 font-body text-sm">
            &copy; {new Date().getFullYear()} Green Bar Haifa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
