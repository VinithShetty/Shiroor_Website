import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const sevasData = [
  {
    id: 1,
    title: "Daily Puja Seva",
    description: "Participate in the daily worship rituals and offerings to the divine",
    amount: 501,
    category: "Daily Rituals",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop",
    popular: true
  },
  {
    id: 2,
    title: "Anna Daan Seva",
    description: "Provide nutritious meals to devotees, pilgrims, and the needy",
    amount: 1001,
    category: "Community Service",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
    popular: false
  },
  {
    id: 3,
    title: "Gopuja Seva",
    description: "Support the care, feeding, and maintenance of sacred cows",
    amount: 2001,
    category: "Animal Welfare",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
    popular: false
  },
  {
    id: 4,
    title: "Education Sponsorship",
    description: "Fund education for underprivileged children in Dharmic studies",
    amount: 5001,
    category: "Education",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
    popular: true
  },
  {
    id: 5,
    title: "Temple Maintenance",
    description: "Contribute to the upkeep and preservation of sacred spaces",
    amount: 3001,
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    popular: false
  },
  {
    id: 6,
    title: "Spiritual Literature",
    description: "Support the publication and distribution of sacred texts",
    amount: 1501,
    category: "Literature",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    popular: false
  }
];

const Sevas = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");

  const categories = ["All", ...Array.from(new Set(sevasData.map(seva => seva.category)))];

  const filteredSevas = sevasData
    .filter(seva => {
      const matchesSearch = seva.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           seva.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || seva.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "popular") return b.popular ? 1 : -1;
      if (sortBy === "price-low") return a.amount - b.amount;
      if (sortBy === "price-high") return b.amount - a.amount;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Sacred Sevas & Donations</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Participate in divine service and contribute to the spiritual welfare of our community
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search sevas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Sevas Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSevas.map((seva) => (
              <Card key={seva.id} className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                {seva.popular && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    Popular
                  </div>
                )}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={seva.image}
                    alt={seva.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {seva.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">{seva.title}</CardTitle>
                  <CardDescription className="text-gray-600">{seva.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-600">₹{seva.amount}</span>
                    <Link to={`/donate?seva=${encodeURIComponent(seva.title)}&amount=${seva.amount}`}>
                      <Button className="bg-orange-600 hover:bg-orange-700">
                        Donate Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredSevas.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No sevas found matching your criteria</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sevas;