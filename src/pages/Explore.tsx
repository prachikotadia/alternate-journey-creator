
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UniverseCard from "@/components/UniverseCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Sparkles, Globe, Clock } from "lucide-react";

// Enhanced data for the explore page with more creative entries
const universeData = [
  {
    id: "1",
    title: "The Artistic Path",
    description: "What if you pursued your passion for art and became a renowned painter in Paris?",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    careerPath: "Professional Artist",
    location: "Paris, France",
    skills: ["Painting", "Art History", "Gallery Management"],
    personality: "Creative",
  },
  {
    id: "2",
    title: "The Tech Entrepreneur",
    description: "Explore a life where you founded a successful tech startup that changed the world.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    careerPath: "Startup Founder & CEO",
    location: "San Francisco, CA",
    skills: ["Leadership", "Product Development", "Venture Capital"],
    personality: "Visionary",
  },
  {
    id: "3",
    title: "The Digital Nomad",
    description: "What if you decided to work remotely while traveling the world?",
    image: "https://images.unsplash.com/photo-1528215747454-3d0e0902fff2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    careerPath: "Freelance Designer",
    location: "Global (Currently: Bali)",
    skills: ["UX/UI Design", "Remote Work", "Cultural Adaptability"],
    personality: "Adventurous",
  },
  {
    id: "4",
    title: "The Medical Doctor",
    description: "Explore a life where you pursued medicine and became a respected surgeon.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    careerPath: "Neurosurgeon",
    location: "Boston, MA",
    skills: ["Medicine", "Surgery", "Research"],
    personality: "Analytical",
  },
  {
    id: "5",
    title: "The Professional Athlete",
    description: "What if you had pursued your athletic talents and became a professional sports star?",
    image: "https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    careerPath: "Professional Athlete",
    location: "Los Angeles, CA",
    skills: ["Athletics", "Team Leadership", "Sponsorships"],
    personality: "Competitive",
  },
  {
    id: "6",
    title: "The Culinary Expert",
    description: "Discover a parallel life where you became a celebrated chef with your own restaurant.",
    image: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    careerPath: "Executive Chef & Restaurant Owner",
    location: "New York, NY",
    skills: ["Cooking", "Restaurant Management", "Menu Design"],
    personality: "Creative",
  },
  {
    id: "7",
    title: "The Space Explorer",
    description: "What if you followed your childhood dreams and became an astronaut exploring the cosmos?",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    careerPath: "NASA Astronaut",
    location: "International Space Station",
    skills: ["Astrophysics", "Engineering", "Space Navigation"],
    personality: "Analytical",
  },
  {
    id: "8",
    title: "The Fashion Icon",
    description: "Explore a reality where you revolutionized the fashion industry with your bold designs.",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    careerPath: "Fashion Designer",
    location: "Milan, Italy",
    skills: ["Fashion Design", "Textile Knowledge", "Brand Building"],
    personality: "Creative",
  },
  {
    id: "9",
    title: "The Environmental Activist",
    description: "What if you dedicated your life to protecting the planet and changing environmental policy?",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    careerPath: "Environmental Scientist & Activist",
    location: "Costa Rica",
    skills: ["Environmental Science", "Public Speaking", "Policy Development"],
    personality: "Determined",
  },
];

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  
  const filteredUniverses = universeData.filter((universe) => {
    // Apply search filter
    const matchesSearch = searchTerm === "" || 
      universe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      universe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      universe.careerPath.toLowerCase().includes(searchTerm.toLowerCase()) ||
      universe.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Apply category filter
    const matchesCategory = categoryFilter === "all" || universe.personality === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-16">
        <section className="py-12 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-universe-primary/20 rounded-full filter blur-3xl opacity-50 animate-float"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-universe-accent/30 rounded-full filter blur-3xl opacity-30 animate-float animation-delay-2000"></div>
          </div>
          
          <div className="container px-4 mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 py-1 bg-universe-primary/10 text-universe-primary rounded-full text-sm font-medium mb-4">
                Explore Realities
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-universe-primary to-universe-secondary bg-clip-text text-transparent">
                Discover Parallel Universes
              </h1>
              <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
                Browse through a collection of fascinating alternate realities to get inspired for your own.
                Each universe represents a different path your life could have taken.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    placeholder="Search for universes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                  />
                </div>
                
                <div className="relative">
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="min-w-[180px] bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                      <div className="flex items-center">
                        <Filter size={18} className="mr-2 text-gray-500" />
                        <SelectValue placeholder="All Categories" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Personalities</SelectItem>
                      <SelectItem value="Creative">Creative</SelectItem>
                      <SelectItem value="Visionary">Visionary</SelectItem>
                      <SelectItem value="Adventurous">Adventurous</SelectItem>
                      <SelectItem value="Analytical">Analytical</SelectItem>
                      <SelectItem value="Competitive">Competitive</SelectItem>
                      <SelectItem value="Determined">Determined</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex rounded-md shadow-sm">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    onClick={() => setViewMode("grid")}
                    className={`px-3 ${viewMode === "grid" ? "bg-universe-primary hover:bg-universe-secondary" : ""}`}
                  >
                    <Sparkles size={18} />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    onClick={() => setViewMode("list")}
                    className={`px-3 ${viewMode === "list" ? "bg-universe-primary hover:bg-universe-secondary" : ""}`}
                  >
                    <Clock size={18} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 relative">
          <div className="container px-4 mx-auto">
            {filteredUniverses.length > 0 ? (
              <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}>
                {filteredUniverses.map((universe) => (
                  <div key={universe.id} className={viewMode === "list" ? "w-full" : ""}>
                    <UniverseCard {...universe} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700">
                <Globe className="w-16 h-16 mx-auto text-universe-primary opacity-50 mb-4" />
                <h3 className="text-xl font-semibold mb-2">No universes found</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setCategoryFilter("all");
                  }}
                  className="bg-universe-primary hover:bg-universe-secondary"
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>
        
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-universe-primary/10 to-universe-accent/5 dark:from-universe-dark/80 dark:to-universe-primary/20"></div>
          <div className="container px-4 mx-auto text-center relative z-10">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to create your own universe?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Design a parallel life based on different choices you could have made.
                Explore how your personality, career, and life satisfaction might change.
              </p>
              <Button asChild className="bg-universe-primary hover:bg-universe-secondary text-lg px-8 py-6 h-auto">
                <a href="/create">Create Your Universe</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Explore;
