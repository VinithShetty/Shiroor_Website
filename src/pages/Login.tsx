import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Login = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password });
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
                <img src="/Shiroor.png" alt="Shiroor Mutt Logo" className="w-full h-full object-cover" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
              <p className="text-gray-600">Sign in to your devotee account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 border-orange-200 focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 border-orange-200 focus:border-orange-500 focus:ring-orange-500 transition-all duration-300"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <Label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
                    Remember me
                  </Label>
                </div>

                <div className="text-sm">
                  <Link to="/forgot-password" className="text-orange-600 hover:text-orange-500 font-medium transition-colors duration-200">
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Sign In
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link to="/register" className="text-orange-600 hover:text-orange-500 font-medium transition-colors duration-200">
                  Create one here
                </Link>
              </p>
            </div>

            <div className="mt-6 border-t border-gray-200 pt-6">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-4">Or continue with</p>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full border-orange-200 hover:bg-orange-50 transition-all duration-300 shadow-md hover:shadow-lg"
                    onClick={() => console.log("Google login")}
                  >
                    Continue with Google
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-orange-200 hover:bg-orange-50 transition-all duration-300 shadow-md hover:shadow-lg"
                    onClick={() => console.log("Phone login")}
                  >
                    Continue with Phone
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;