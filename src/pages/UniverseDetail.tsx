import React from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UniverseTimeline from "@/components/UniverseTimeline";
import SocialMediaPost from "@/components/SocialMediaPost";
import PersonalityChart from "@/components/PersonalityChart";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Download, Share, Star, ArrowLeft, MessageCircle, Heart, User, MapPin, Briefcase, GraduationCap, Clock } from "lucide-react";

const universeData = {
  "1": {
    title: "The Artistic Path",
    description: "What if you pursued your passion for art and became a renowned painter in Paris?",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    careerPath: "Professional Artist",
    location: "Paris, France",
    skills: ["Painting", "Art History", "Gallery Management", "Color Theory", "Exhibition Design"],
    personality: "Creative",
    story: `You always had a knack for art, but in your original timeline, practicality won out. In this universe, you took that leap of faith after college and moved to Paris with just a few hundred dollars and your art supplies.

The first years were challenging. You found a tiny apartment in Montmartre, surrounded by other struggling artists. You worked at a local café during the day and painted furiously at night, developing your unique style that blended abstract expressionism with elements of street art.

Your breakthrough came three years in, when a gallery owner spotted your work at a small exhibition. Your first solo show sold out completely, and critics praised your "bold American perspective with a distinctly Parisian sensitivity."

Over the next decade, you became known for your large-scale paintings that captured urban life through a dreamlike lens. Museums around Europe began acquiring your work, and you established your own studio where you now mentor young artists from around the world.

Your decision to follow your passion not only led to professional success but also introduced you to a community of creative souls who became your chosen family in Paris. Though the path wasn't always easy, this universe shows a life filled with color, expression, and the satisfaction of creating beauty that touches others.`,
    timeline: [
      {
        id: "t1",
        date: "2010",
        title: "Moved to Paris",
        description: "Took the leap and moved to Paris with just a few hundred dollars and art supplies.",
        type: "location" as "location" | "career" | "education" | "relationship" | "achievement",
      },
      {
        id: "t2",
        date: "2010-2013",
        title: "The Struggle Period",
        description: "Worked at Café Montmartre while developing your artistic style at night.",
        type: "career" as "location" | "career" | "education" | "relationship" | "achievement",
      },
      {
        id: "t3",
        date: "2013",
        title: "First Gallery Exhibition",
        description: "Your breakthrough show at Galerie Lumière sold out completely.",
        type: "achievement" as "location" | "career" | "education" | "relationship" | "achievement",
      },
      {
        id: "t4",
        date: "2015",
        title: "Met Sophie",
        description: "Began relationship with Sophie, a French art curator who championed your work.",
        type: "relationship" as "location" | "career" | "education" | "relationship" | "achievement",
      },
      {
        id: "t5",
        date: "2017",
        title: "Museum Acquisition",
        description: "Centre Pompidou acquired your painting 'Urban Dreams' for their permanent collection.",
        type: "achievement" as "location" | "career" | "education" | "relationship" | "achievement",
      },
      {
        id: "t6",
        date: "2019",
        title: "Established Studio",
        description: "Opened Studio Nouveau to create and mentor emerging artists.",
        type: "career" as "location" | "career" | "education" | "relationship" | "achievement",
      },
      {
        id: "t7",
        date: "2023",
        title: "Retrospective Exhibition",
        description: "Major retrospective of your work toured major European cities.",
        type: "achievement" as "location" | "career" | "education" | "relationship" | "achievement",
      },
    ],
    socialPosts: [
      {
        id: "s1",
        platform: "instagram" as "instagram" | "twitter" | "facebook",
        content: "First day in my new Montmartre studio! Can't believe this is actually happening. The light here is everything an artist dreams of. #ParisianArtist #NewBeginnings",
        author: {
          name: "You in Paris",
          handle: "artist_in_paris",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        },
        image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        likes: 236,
        comments: 42,
        shares: 12,
        timestamp: "2010",
      },
      {
        id: "s2",
        platform: "twitter" as "instagram" | "twitter" | "facebook",
        content: "Just sold my first painting at Galerie Lumière! The journey from serving coffee to seeing my art on gallery walls has been surreal. Grateful for everyone who believed in me.",
        author: {
          name: "You in Paris",
          handle: "artist_in_paris",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        },
        likes: 523,
        comments: 87,
        shares: 65,
        timestamp: "2013",
      },
      {
        id: "s3",
        platform: "facebook" as "instagram" | "twitter" | "facebook",
        content: "HUGE NEWS: Centre Pompidou has acquired 'Urban Dreams' for their permanent collection! From that tiny apartment where I painted this to one of the world's premier museums. If you're reading this and doubting your creative path, please don't give up. The world needs your vision. ❤️",
        author: {
          name: "You in Paris",
          handle: "artist_in_paris",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        },
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        likes: 1482,
        comments: 312,
        shares: 189,
        timestamp: "2017",
      },
    ],
    personalityTraits: [
      { trait: "Creativity", value: 90, fullMark: 100 },
      { trait: "Openness", value: 85, fullMark: 100 },
      { trait: "Risk-Taking", value: 75, fullMark: 100 },
      { trait: "Resilience", value: 80, fullMark: 100 },
      { trait: "Sociability", value: 65, fullMark: 100 },
      { trait: "Structure", value: 40, fullMark: 100 },
    ],
  },
  "2": {
    title: "The Tech Entrepreneur",
    description: "Explore a life where you founded a successful tech startup that changed the world.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    careerPath: "Startup Founder & CEO",
    location: "San Francisco, CA",
    skills: ["Leadership", "Product Development", "Venture Capital", "Strategic Planning", "Public Speaking"],
    personality: "Visionary",
    story: `In this universe, you took that idea you once dismissed as "too risky" and turned it into your life's mission. After noticing how inefficient healthcare communication systems were, you developed a secure messaging platform specifically for medical professionals.

You started coding the prototype at night while still working your day job. When your savings hit $50,000, you quit and went all-in. The first six months were grueling—working 80-hour weeks from your apartment, eating ramen, and facing rejection from countless investors.

The turning point came when you convinced Dr. Sarah Chen, a respected physician frustrated with existing systems, to become your co-founder. Her expertise and your technical vision made a compelling duo. Your first seed round brought in $2 million, allowing you to hire a small team.

Three years in, your platform "MedConnect" was being used in over 200 hospitals. Your Series B financing round valued the company at $300 million. You relocated to San Francisco, where your company grew to 200 employees.

The work was demanding, but the impact was profound—your technology reduced medical errors by 32% in hospitals that adopted it. After seven years, your company went public in a $1.2 billion IPO. While the wealth changed aspects of your life, what brings you the most satisfaction in this universe is knowing that your risk paid off not just financially, but in saving countless lives.`,
    timeline: [
      {
        id: "t1",
        date: "2012",
        title: "The Initial Prototype",
        description: "Built the first prototype of MedConnect while working your day job.",
        type: "career" as "location" | "career" | "education" | "relationship" | "achievement",
      },
      {
        id: "t2",
        date: "2013",
        title: "Full-Time Commitment",
        description: "Quit your job to focus on your startup full-time.",
        type: "career" as "location" | "career" | "education" | "relationship" | "achievement",
      },
      {
        id: "t3",
        date: "2014",
        title: "Co-Founder & Seed Funding",
        description: "Partnered with Dr. Chen and raised $2 million in seed funding.",
        type: "achievement" as "location" | "career" | "education" | "relationship" | "achievement",
      },
      {
        id: "t4",
        date: "2016",
        title: "Moved to San Francisco",
        description: "Relocated the company to Silicon Valley's tech hub.",
        type: "location" as "location" | "career" | "education" | "relationship" | "achievement",
      },
      {
        id: "t5",
        date: "2017",
        title: "Series B Funding",
        description: "Raised $45 million in Series B with $300 million valuation.",
        type: "achievement" as "location" | "career" | "education" | "relationship" | "achievement",
      },
      {
        id: "t6",
        date: "2018",
        title: "Healthcare Impact Award",
        description: "MedConnect won the National Healthcare Innovation Award.",
        type: "achievement" as "location" | "career" | "education" | "relationship" | "achievement",
      },
      {
        id: "t7",
        date: "2020",
        title: "Initial Public Offering",
        description: "Company went public with a $1.2 billion valuation.",
        type: "achievement" as "location" | "career" | "education" | "relationship" | "achievement",
      },
    ],
    socialPosts: [
      {
        id: "s1",
        platform: "twitter" as "instagram" | "twitter" | "facebook",
        content: "Just submitted my resignation letter. Terrified and excited to go all-in on MedConnect. No safety net now! #StartupLife #TakingTheLeap",
        author: {
          name: "You the Founder",
          handle: "medconnect_ceo",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        },
        likes: 187,
        comments: 53,
        shares: 21,
        timestamp: "2013",
      },
      {
        id: "s2",
        platform: "instagram" as "instagram" | "twitter" | "facebook",
        content: "Our first REAL office! No more working from my apartment. Still can't afford furniture though... 😂 #StartupLife #MedConnect",
        author: {
          name: "You the Founder",
          handle: "medconnect_ceo",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        },
        image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        likes: 431,
        comments: 62,
        shares: 15,
        timestamp: "2014",
      },
      {
        id: "s3",
        platform: "facebook" as "instagram" | "twitter" | "facebook",
        content: "Words can't express what today means. Standing on the NYSE trading floor watching MedConnect go public has been surreal. From coding in my apartment to a $1.2B IPO in 7 years. But the most meaningful moment was getting this message from Dr. Ramirez at Chicago General: 'Your platform helped us save a child's life tonight. The team coordination it enabled made all the difference.' THAT is why we built this company. Thank you to everyone who believed in us, even when I barely believed in myself.",
        author: {
          name: "You the Founder",
          handle: "medconnect_ceo",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        },
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        likes: 8762,
        comments: 1543,
        shares: 921,
        timestamp: "2020",
      },
    ],
    personalityTraits: [
      { trait: "Vision", value: 85, fullMark: 100 },
      { trait: "Persistence", value: 95, fullMark: 100 },
      { trait: "Risk-Taking", value: 80, fullMark: 100 },
      { trait: "Leadership", value: 75, fullMark: 100 },
      { trait: "Work Ethic", value: 90, fullMark: 100 },
      { trait: "Adaptability", value: 70, fullMark: 100 },
    ],
  },
  // Similar data structure for other universes
};

const UniverseDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Use the ID to fetch the corresponding universe data
  // In a real app, this would come from an API call
  const universe = id && universeData[id as keyof typeof universeData];
  
  if (!universe) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Universe not found</h2>
            <p className="mb-6">The universe you're looking for doesn't exist or has been deleted.</p>
            <Button asChild>
              <a href="/explore">Explore Other Universes</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative">
          <div className="h-64 md:h-96 w-full overflow-hidden">
            <img
              src={universe.image}
              alt={universe.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
          
          <div className="container px-4 mx-auto">
            <div className="relative -mt-24 md:-mt-32 mb-12 max-w-4xl mx-auto">
              <div className="universe-card p-6 md:p-8">
                <div className="mb-6">
                  <a href="/explore" className="inline-flex items-center text-universe-primary hover:text-universe-secondary mb-4">
                    <ArrowLeft size={16} className="mr-1" />
                    Back to Explore
                  </a>
                  
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h1 className="text-3xl md:text-4xl font-bold mb-2">{universe.title}</h1>
                      <p className="text-gray-600 dark:text-gray-400">{universe.description}</p>
                    </div>
                    <Badge variant="outline" className="text-base bg-universe-primary/10 text-universe-primary border-universe-primary/20">
                      {universe.personality}
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-universe-primary" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Career Path</p>
                      <p className="font-medium">{universe.careerPath}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-universe-primary" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                      <p className="font-medium">{universe.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2 text-universe-primary" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Key Skills</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {universe.skills.slice(0, 3).map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {universe.skills.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{universe.skills.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Star className="h-4 w-4" /> Save
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Share className="h-4 w-4" /> Share
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" /> Download PDF
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Content Section */}
        <section className="py-8">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="story">
                <TabsList className="w-full">
                  <TabsTrigger value="story" className="flex-1">
                    <MessageCircle className="h-4 w-4 mr-2" /> Your Story
                  </TabsTrigger>
                  <TabsTrigger value="timeline" className="flex-1">
                    <Clock className="h-4 w-4 mr-2" /> Timeline
                  </TabsTrigger>
                  <TabsTrigger value="social" className="flex-1">
                    <Heart className="h-4 w-4 mr-2" /> Social Media
                  </TabsTrigger>
                  <TabsTrigger value="personality" className="flex-1">
                    <User className="h-4 w-4 mr-2" /> Personality
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="story" className="mt-6">
                  <div className="universe-card p-6">
                    <div className="prose dark:prose-invert max-w-none">
                      <h2 className="text-2xl font-bold mb-4">Your Alternate Life Story</h2>
                      <div className="whitespace-pre-line">
                        {universe.story}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="timeline" className="mt-6">
                  <div className="universe-card p-6">
                    <h2 className="text-2xl font-bold mb-6">Your Life Timeline</h2>
                    <UniverseTimeline events={universe.timeline} />
                  </div>
                </TabsContent>
                
                <TabsContent value="social" className="mt-6">
                  <div className="universe-card p-6">
                    <h2 className="text-2xl font-bold mb-6">Your Social Media Feed</h2>
                    <div className="space-y-6">
                      {universe.socialPosts.map((post) => (
                        <SocialMediaPost key={post.id} {...post} />
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="personality" className="mt-6">
                  <div className="universe-card p-6">
                    <h2 className="text-2xl font-bold mb-6">Your Personality Profile</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <PersonalityChart data={universe.personalityTraits} title="Key Personality Traits" />
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">How This Life Changed You</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          In this universe, your personality evolved in response to the challenges and opportunities of your chosen path.
                        </p>
                        <div className="space-y-3 mt-4">
                          {universe.personalityTraits.map((trait) => (
                            <div key={trait.trait} className="space-y-1">
                              <div className="flex justify-between">
                                <span className="font-medium">{trait.trait}</span>
                                <span>{trait.value}%</span>
                              </div>
                              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-universe-primary rounded-full"
                                  style={{ width: `${trait.value}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Want to explore another universe?</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Create a new parallel universe based on different choices, or browse more examples for inspiration.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-universe-primary hover:bg-universe-secondary">
                <a href="/create">Create New Universe</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/explore">Explore More Examples</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default UniverseDetail;
