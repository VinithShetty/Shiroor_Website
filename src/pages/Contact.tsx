import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Connect with us for spiritual guidance, seva opportunities, or any inquiries
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We welcome devotees, seekers, and visitors from around the world. 
                  Reach out to us for spiritual guidance, information about our programs, 
                  or to arrange your visit to our sacred premises.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Address</h3>
                      <p className="text-gray-600">
                        Shriroor Mutt<br />
                        Shriroor Village<br />
                        Udupi District, Karnataka<br />
                        India - 576108
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Phone</h3>
                      <p className="text-gray-600">
                        Main Office: +91 8252 123456<br />
                        Administrative: +91 8252 654321<br />
                        Emergency: +91 9876 543210
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600">
                        General: info@shriroormutt.org<br />
                        Seva: seva@shriroormutt.org<br />
                        Admin: admin@shriroormutt.org
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Darshan Timings</h3>
                      <p className="text-gray-600">
                        Morning: 6:00 AM - 12:00 PM<br />
                        Evening: 4:00 PM - 8:00 PM<br />
                        <span className="text-sm text-orange-600 font-medium">
                          Special timings during festivals
                        </span>
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8 shadow-xl">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl font-bold text-gray-900">Send us a Message</CardTitle>
                  <CardDescription className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input id="firstName" type="text" required className="w-full" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input id="lastName" type="text" required className="w-full" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input id="email" type="email" required className="w-full" />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input id="phone" type="tel" className="w-full" />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select id="subject" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500">
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="seva">Seva Information</option>
                        <option value="visit">Planning a Visit</option>
                        <option value="education">Educational Programs</option>
                        <option value="donation">Donation Related</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea 
                        id="message" 
                        rows={6} 
                        required 
                        className="w-full resize-none"
                        placeholder="Please share your message, questions, or how we can assist you..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 py-3 text-lg font-semibold">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-lg text-gray-600">
              Located in the serene village of Shriroor, surrounded by nature's beauty
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps?q=Shiroor+Mutt,+Karnataka,+India&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shiroor Mutt Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;