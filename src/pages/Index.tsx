
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GitBranch, Sparkles, Shuffle, Brain, Users, Gift } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UniverseCard from "@/components/UniverseCard";

// Example data for showcasing
const featuredUniverses = [
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
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-universe-primary/10 via-white to-universe-accent/20 dark:from-universe-dark dark:via-gray-900 dark:to-universe-primary/20">
          <div className="absolute inset-0 universe-grid opacity-30"></div>
          <div className="relative container px-4 mx-auto z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center p-2 mb-6 bg-white/80 backdrop-blur-sm rounded-full border border-universe-accent/20 dark:bg-universe-primary/10 dark:border-universe-primary/30">
                <GitBranch className="mr-2 h-5 w-5 text-universe-primary" />
                <span className="text-sm font-medium text-universe-secondary">
                  Explore your alternate realities
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-universe-secondary via-universe-primary to-universe-accent bg-clip-text text-transparent">
                Discover Your Parallel Universes
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
                See how different choices could have shaped your life. AI-powered simulations create vivid stories, images, and social media from your alternate timelines.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Button asChild size="lg" className="bg-universe-primary hover:bg-universe-secondary">
                  <Link to="/create">Create Your Universe</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/explore">Explore Examples</Link>
                </Button>
              </div>
              
              <div className="relative w-full max-w-xl mx-auto">
                <div className="relative h-24 w-24 mx-auto animate-float">
                  <div className="absolute inset-0 rounded-full bg-universe-primary/20 animate-pulse-slow"></div>
                  <div className="absolute inset-2 rounded-full bg-universe-primary/30 animate-pulse-slow" style={{ animationDelay: "0.5s" }}></div>
                  <div className="absolute inset-4 rounded-full bg-universe-primary/40 animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
                  <div className="absolute inset-6 rounded-full bg-universe-primary/50 animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
                  <div className="absolute inset-8 rounded-full bg-universe-primary animate-spin-slow"></div>
                  <Shuffle className="absolute inset-0 m-auto h-10 w-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Our AI-powered platform creates immersive alternate realities based on your life choices and "what if" scenarios.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="universe-card p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-universe-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shuffle className="h-8 w-8 text-universe-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Alternative Choices</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Input your current life details and the alternative paths you wish you had taken.
                </p>
              </div>
              
              <div className="universe-card p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-universe-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-universe-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI Generation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our AI creates detailed stories, social media posts, and images of your alternate life.
                </p>
              </div>
              
              <div className="universe-card p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-universe-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-universe-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Explore & Share</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Discover multiple outcomes and share your favorite alternate universes with friends.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Universes Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Featured Universes</h2>
              <Link to="/explore" className="text-universe-primary hover:text-universe-secondary font-medium">
                View all →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredUniverses.map((universe) => (
                <UniverseCard key={universe.id} {...universe} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What People Are Saying</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Discover how ParallelYou has helped people explore their alternative lives and gain new perspectives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="universe-card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                      alt="Sarah Johnson"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Marketing Director</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  "Seeing my alternate life as a travel photographer was eye-opening. I've now started taking photography classes on weekends!"
                </p>
              </div>
              
              <div className="universe-card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                      alt="Michael Chen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Michael Chen</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Software Engineer</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  "I was stuck in a career rut until I saw my parallel universe as a startup founder. It gave me the confidence to pitch my own ideas!"
                </p>
              </div>
              
              <div className="universe-card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                      alt="Emily Rodriguez"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Emily Rodriguez</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Teacher</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  "The social media timeline from my alternate reality as a digital nomad was so detailed! It inspired me to finally plan that sabbatical year."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-universe-primary">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Discover Your Alternate Lives?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Create your first parallel universe today and see where different choices might have led you.
              </p>
              <Button asChild size="lg" variant="secondary" className="bg-white text-universe-primary hover:bg-gray-100">
                <Link to="/create">Create Your Universe Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
