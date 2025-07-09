import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "The Science of Meditation: Ancient Wisdom Meets Modern Research",
    excerpt: "Exploring how traditional meditation practices are validated by contemporary neuroscience",
    author: "Swami Vidyananda",
    date: "December 20, 2024",
    category: "Spirituality",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=400&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Celebrating Makara Sankranti: The Festival of Transformation",
    excerpt: "Understanding the deeper spiritual significance of this auspicious celebration",
    author: "Dr. Priya Shastri",
    date: "December 18, 2024",
    category: "Festivals",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
    featured: false
  },
  {
    id: 3,
    title: "Seva as Spiritual Practice: The Path of Selfless Service",
    excerpt: "How dedicated service becomes a transformative spiritual discipline",
    author: "Acharya Ramakrishna",
    date: "December 15, 2024",
    category: "Philosophy",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
    featured: false
  },
  {
    id: 4,
    title: "Digital Dharma: Preserving Sacred Traditions in the Modern Age",
    excerpt: "How technology can serve spiritual growth while maintaining authentic traditions",
    author: "Sri Technanda",
    date: "December 12, 2024",
    category: "Technology",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
    featured: true
  },
  {
    id: 5,
    title: "The Art of Sacred Architecture: Symbolism in Temple Design",
    excerpt: "Decoding the spiritual meanings embedded in traditional temple structures",
    author: "Prof. Madhava Architect",
    date: "December 10, 2024",
    category: "Culture",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    featured: false
  },
  {
    id: 6,
    title: "Vedic Wisdom for Modern Wellness: Timeless Health Principles",
    excerpt: "Ancient Ayurvedic insights for maintaining physical and mental well-being",
    author: "Dr. Ayurveda Devi",
    date: "December 8, 2024",
    category: "Wellness",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    featured: false
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Spiritual Insights & News</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Discover timeless wisdom and contemporary spiritual perspectives
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-4">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-orange-600 text-white shadow-lg"
                      : "bg-gray-200 text-gray-700 hover:bg-orange-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                    <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                    <div className="text-sm text-orange-600 font-medium">
                      By {post.author}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button className="bg-orange-600 hover:bg-orange-700 w-full">
                      Read Full Article
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                  <div className="text-sm text-orange-600 font-medium">
                    By {post.author}
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-orange-300 text-orange-600 hover:bg-orange-600 hover:text-white">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No articles found matching your criteria</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;