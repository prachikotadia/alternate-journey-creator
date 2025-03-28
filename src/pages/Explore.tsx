
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UniverseCard from "@/components/UniverseCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

// Example data for the explore page
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
];

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  
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
        <section className="py-12 bg-gradient-to-r from-universe-primary/10 to-universe-accent/10 dark:from-universe-dark dark:to-universe-primary/20">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Explore Parallel Universes</h1>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Browse through a collection of fascinating alternate realities to get inspired for your own.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    placeholder="Search for universes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <div className="relative">
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="min-w-[180px]">
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
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container px-4 mx-auto">
            {filteredUniverses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUniverses.map((universe) => (
                  <UniverseCard key={universe.id} {...universe} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No universes found</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setCategoryFilter("all");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>
        
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to create your own universe?</h2>
            <Button asChild className="bg-universe-primary hover:bg-universe-secondary">
              <a href="/create">Create Your Universe</a>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Explore;
