import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Register = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Registration attempt:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navigation />
      
      <div ref={ref} className="py-20">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-white rounded-lg shadow-xl p-8 border border-orange-100 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <img src="Shiroor.png" alt="Shiroor Mutt Logo" className="w-full h-full object-cover" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
              <p className="text-gray-600">Join our spiritual community</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-gray-700 font-medium">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 border-orange-200 focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                    placeholder="First name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-gray-700 font-medium">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 border-orange-200 focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 border-orange-200 focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-700 font-medium">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 border-orange-200 focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 border-orange-200 focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                  placeholder="Create a password"
                  required
                />
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 border-orange-200 focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                  placeholder="Confirm your password"
                  required
                />
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  required
                />
                <Label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  I agree to the{" "}
                  <Link to="/terms" className="text-orange-600 hover:text-orange-500 font-medium transition-colors duration-200">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-orange-600 hover:text-orange-500 font-medium transition-colors duration-200">
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Create Account
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;