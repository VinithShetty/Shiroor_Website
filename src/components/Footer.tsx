import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <img src="Shiroor.png" alt="Shiroor Mutt Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Shiroor Matha</h3>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Preserving ancient wisdom and guiding souls on their spiritual journey for over centuries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/mutt" className="text-gray-300 hover:text-orange-400 transition-colors">About Matha</Link></li>
              <li><Link to="/sevas" className="text-gray-300 hover:text-orange-400 transition-colors">Sevas & Donations</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-orange-400 transition-colors">Blog & News</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">Daily Pujas</li>
              <li className="text-gray-300">Spiritual Counseling</li>
              <li className="text-gray-300">Dharmic Education</li>
              <li className="text-gray-300">Community Events</li>
              <li className="text-gray-300">Vedic Ceremonies</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Contact Information</h4>
            <div className="space-y-3 text-gray-300">
              <p>Shiroor Village<br />Karnataka, India</p>
              <p>Phone: +91 12345 67890</p>
              <p>Email: info@shiroormatha.org</p>
              <div className="pt-4">
                <p className="text-sm text-gray-400">Daily Darshan:</p>
                <p className="text-sm">6:00 AM - 12:00 PM<br />4:00 PM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Shiroor Matha. All rights reserved. Built with devotion and technology.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};