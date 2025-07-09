import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CreditCard, Smartphone, Building } from "lucide-react";

const DonationDashboard = () => {
  const [searchParams] = useSearchParams();
  const sevaTitle = searchParams.get("seva") || "General Donation";
  const sevaAmount = searchParams.get("amount") || "501";
  
  const [donationData, setDonationData] = useState({
    amount: sevaAmount,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    panCard: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonationData({
      ...donationData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle donation logic here
    console.log("Donation attempt:", donationData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navigation />
      
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/sevas" className="flex items-center text-orange-600 hover:text-orange-700 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Sevas
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Donation</h1>
            <p className="text-gray-600">You are contributing to: <span className="font-semibold text-orange-600">{sevaTitle}</span></p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Donation Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Donation Details</CardTitle>
                  <CardDescription>Please fill in your information to complete the donation</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="amount" className="text-gray-700 font-medium">
                        Donation Amount (₹)
                      </Label>
                      <Input
                        id="amount"
                        name="amount"
                        type="number"
                        value={donationData.amount}
                        onChange={handleChange}
                        className="mt-1 border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                        placeholder="Enter amount"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-gray-700 font-medium">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={donationData.firstName}
                          onChange={handleChange}
                          className="mt-1 border-orange-200 focus:border-orange-500 focus:ring-orange-500"
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
                          value={donationData.lastName}
                          onChange={handleChange}
                          className="mt-1 border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-gray-700 font-medium">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={donationData.email}
                          onChange={handleChange}
                          className="mt-1 border-orange-200 focus:border-orange-500 focus:ring-orange-500"
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
                          value={donationData.phone}
                          onChange={handleChange}
                          className="mt-1 border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address" className="text-gray-700 font-medium">
                        Address
                      </Label>
                      <Input
                        id="address"
                        name="address"
                        type="text"
                        value={donationData.address}
                        onChange={handleChange}
                        className="mt-1 border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city" className="text-gray-700 font-medium">
                          City
                        </Label>
                        <Input
                          id="city"
                          name="city"
                          type="text"
                          value={donationData.city}
                          onChange={handleChange}
                          className="mt-1 border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="state" className="text-gray-700 font-medium">
                          State
                        </Label>
                        <Input
                          id="state"
                          name="state"
                          type="text"
                          value={donationData.state}
                          onChange={handleChange}
                          className="mt-1 border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="pincode" className="text-gray-700 font-medium">
                          Pincode
                        </Label>
                        <Input
                          id="pincode"
                          name="pincode"
                          type="text"
                          value={donationData.pincode}
                          onChange={handleChange}
                          className="mt-1 border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="panCard" className="text-gray-700 font-medium">
                        PAN Card Number (for tax receipt)
                      </Label>
                      <Input
                        id="panCard"
                        name="panCard"
                        type="text"
                        value={donationData.panCard}
                        onChange={handleChange}
                        className="mt-1 border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                        placeholder="Optional"
                      />
                    </div>

                    <div>
                      <Label className="text-gray-700 font-medium mb-4 block">
                        Payment Method
                      </Label>
                      <div className="grid grid-cols-3 gap-4">
                        <div
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${
                            paymentMethod === "card"
                              ? "border-orange-500 bg-orange-50"
                              : "border-gray-300 hover:border-orange-300"
                          }`}
                          onClick={() => setPaymentMethod("card")}
                        >
                          <CreditCard className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                          <p className="text-sm text-center">Credit/Debit Card</p>
                        </div>
                        <div
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${
                            paymentMethod === "upi"
                              ? "border-orange-500 bg-orange-50"
                              : "border-gray-300 hover:border-orange-300"
                          }`}
                          onClick={() => setPaymentMethod("upi")}
                        >
                          <Smartphone className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                          <p className="text-sm text-center">UPI</p>
                        </div>
                        <div
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${
                            paymentMethod === "netbanking"
                              ? "border-orange-500 bg-orange-50"
                              : "border-gray-300 hover:border-orange-300"
                          }`}
                          onClick={() => setPaymentMethod("netbanking")}
                        >
                          <Building className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                          <p className="text-sm text-center">Net Banking</p>
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg font-medium"
                    >
                      Proceed to Payment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="shadow-lg sticky top-4">
                <CardHeader>
                  <CardTitle>Donation Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Seva:</span>
                    <span className="font-medium">{sevaTitle}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-medium">₹{donationData.amount}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total:</span>
                      <span className="text-orange-600">₹{donationData.amount}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 mt-4">
                    <p>• You will receive a tax-deductible receipt via email</p>
                    <p>• All donations are secure and encrypted</p>
                    <p>• 80G tax exemption certificate available</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DonationDashboard;