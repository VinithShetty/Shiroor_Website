import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/mutt", label: "About Mutt" },
    { href: "/sevas", label: "Sevas & Donations" },
    { href: "/blog", label: "Blog & News" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b-2 border-orange-200 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg">
              <img 
                src="Shiroor.png" 
                alt="Shiroor Mutt Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-orange-700 text-lg font-bold leading-tight">ಶ್ರೀ ವಿಠ್ಠಲೋ ವಿಜಯತೇ</div>
              <h1 className="text-2xl font-bold text-orange-800">Shiroor Mutt</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-orange-300"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/register">
              <Button size="sm" className="bg-orange-600 hover:bg-orange-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <UserPlus className="w-4 h-4 mr-2" />
                Create Account
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-orange-200">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link to="/register">
                  <Button size="sm" className="bg-orange-600 hover:bg-orange-700 w-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Create Account
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};