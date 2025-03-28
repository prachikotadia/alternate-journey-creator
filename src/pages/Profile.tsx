
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import PersonalityChart from "@/components/PersonalityChart";
import { User, Settings, BookOpen, PenTool, Shield, Moon, Sun, Briefcase, GraduationCap, Map, Heart } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { toast } from "sonner";

// Mock user data
const userData = {
  name: "Alex Johnson",
  username: "alex_parallel",
  email: "alex@example.com",
  bio: "Exploring alternate realities and what-ifs. Currently a software engineer, but in another universe I might be a novelist.",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  joinDate: "January 2023",
  savedUniverses: 12,
  createdUniverses: 5,
  currentCareer: "Software Engineer",
  education: "Computer Science, BSc",
  location: "San Francisco, CA",
  lifeChoicesMade: ["Career: Tech Industry", "Location: West Coast", "Education: Computer Science"],
  personalityTraits: [
    { trait: "Creativity", value: 70, fullMark: 100 },
    { trait: "Analytical", value: 85, fullMark: 100 },
    { trait: "Adventurous", value: 65, fullMark: 100 },
    { trait: "Empathetic", value: 75, fullMark: 100 },
    { trait: "Organized", value: 60, fullMark: 100 },
    { trait: "Resilience", value: 80, fullMark: 100 },
  ],
};

const Profile = () => {
  const { theme, setTheme } = useTheme();
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState(userData);

  const handleSaveProfile = () => {
    setEditMode(false);
    toast.success("Profile updated successfully!");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-16">
        <div className="container px-4 mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <Card className="sticky top-24 bg-gradient-to-b from-card to-card/80 dark:from-gray-800 dark:to-gray-900 shadow-lg border-universe-accent/10">
                <CardHeader className="text-center pb-2">
                  <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-universe-primary/20">
                    <AvatarImage src={profileData.avatar} alt={profileData.name} />
                    <AvatarFallback>{profileData.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl mb-1">{profileData.name}</CardTitle>
                  <CardDescription className="text-sm">@{profileData.username}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4 pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Joined</span>
                    <span>{profileData.joinDate}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 py-2">
                    <div className="text-center p-2 bg-universe-primary/10 rounded-lg">
                      <p className="text-lg font-semibold">{profileData.savedUniverses}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Saved</p>
                    </div>
                    <div className="text-center p-2 bg-universe-primary/10 rounded-lg">
                      <p className="text-lg font-semibold">{profileData.createdUniverses}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Created</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Briefcase className="w-4 h-4 mr-2 text-universe-primary" />
                      <span>{profileData.currentCareer}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <GraduationCap className="w-4 h-4 mr-2 text-universe-primary" />
                      <span>{profileData.education}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Map className="w-4 h-4 mr-2 text-universe-primary" />
                      <span>{profileData.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-center pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => setEditMode(!editMode)}
                    >
                      {editMode ? "Cancel" : "Edit Profile"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Main Content */}
            <div className="md:col-span-3">
              <Tabs defaultValue="profile" className="w-full">
                <TabsList className="mb-6 bg-muted/60 dark:bg-gray-800/60 backdrop-blur-sm">
                  <TabsTrigger value="profile" className="data-[state=active]:bg-background dark:data-[state=active]:bg-gray-700">
                    <User className="h-4 w-4 mr-2" /> Profile
                  </TabsTrigger>
                  <TabsTrigger value="universes" className="data-[state=active]:bg-background dark:data-[state=active]:bg-gray-700">
                    <BookOpen className="h-4 w-4 mr-2" /> My Universes
                  </TabsTrigger>
                  <TabsTrigger value="personality" className="data-[state=active]:bg-background dark:data-[state=active]:bg-gray-700">
                    <Heart className="h-4 w-4 mr-2" /> Personality
                  </TabsTrigger>
                  <TabsTrigger value="settings" className="data-[state=active]:bg-background dark:data-[state=active]:bg-gray-700">
                    <Settings className="h-4 w-4 mr-2" /> Settings
                  </TabsTrigger>
                </TabsList>
                
                {/* Profile Tab */}
                <TabsContent value="profile">
                  <Card className="bg-gradient-to-br from-card to-card/90 dark:from-gray-800 dark:to-gray-900/90 shadow-lg border-universe-accent/10">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Profile Information</span>
                        {editMode && (
                          <Button onClick={handleSaveProfile} size="sm" className="bg-universe-primary hover:bg-universe-secondary">
                            Save Changes
                          </Button>
                        )}
                      </CardTitle>
                      <CardDescription>
                        Your personal details and current life path
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {editMode ? (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="name">Full Name</Label>
                              <Input 
                                id="name" 
                                name="name" 
                                value={profileData.name} 
                                onChange={handleInputChange} 
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="username">Username</Label>
                              <Input 
                                id="username" 
                                name="username" 
                                value={profileData.username} 
                                onChange={handleInputChange} 
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="bio">Bio</Label>
                            <Textarea 
                              id="bio" 
                              name="bio" 
                              value={profileData.bio} 
                              onChange={handleInputChange} 
                              rows={4} 
                            />
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="currentCareer">Current Career</Label>
                              <Input 
                                id="currentCareer" 
                                name="currentCareer" 
                                value={profileData.currentCareer} 
                                onChange={handleInputChange} 
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="education">Education</Label>
                              <Input 
                                id="education" 
                                name="education" 
                                value={profileData.education} 
                                onChange={handleInputChange} 
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="location">Location</Label>
                              <Input 
                                id="location" 
                                name="location" 
                                value={profileData.location} 
                                onChange={handleInputChange} 
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          <div className="prose dark:prose-invert max-w-none">
                            <p>{profileData.bio}</p>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-medium mb-3">Life Choices Made</h3>
                            <div className="flex flex-wrap gap-2">
                              {profileData.lifeChoicesMade.map((choice, index) => (
                                <Badge key={index} variant="secondary" className="bg-universe-primary/10 text-foreground">
                                  {choice}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Universes Tab */}
                <TabsContent value="universes">
                  <Card className="bg-gradient-to-br from-card to-card/90 dark:from-gray-800 dark:to-gray-900/90 shadow-lg border-universe-accent/10">
                    <CardHeader>
                      <CardTitle>My Universes</CardTitle>
                      <CardDescription>
                        Universes you've created and saved
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-12">
                        <BookOpen className="h-16 w-16 mx-auto text-universe-primary opacity-50 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">You haven't created any universes yet</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                          Start creating your own parallel universes to see how different choices might lead to different life outcomes.
                        </p>
                        <Button asChild className="bg-universe-primary hover:bg-universe-secondary">
                          <a href="/create">Create Your First Universe</a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Personality Tab */}
                <TabsContent value="personality">
                  <Card className="bg-gradient-to-br from-card to-card/90 dark:from-gray-800 dark:to-gray-900/90 shadow-lg border-universe-accent/10">
                    <CardHeader>
                      <CardTitle>Personality Profile</CardTitle>
                      <CardDescription>
                        Your personality traits based on your choices
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <PersonalityChart data={profileData.personalityTraits} title="Your Personality Traits" />
                        </div>
                        <div className="space-y-5">
                          <h3 className="text-lg font-medium mb-3">Trait Analysis</h3>
                          <div className="space-y-4">
                            {profileData.personalityTraits.map((trait) => (
                              <div key={trait.trait} className="space-y-1">
                                <div className="flex justify-between items-center">
                                  <span className="font-medium">{trait.trait}</span>
                                  <span>{trait.value}%</span>
                                </div>
                                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                  <div
                                    className={`h-full rounded-full ${
                                      trait.value > 75 
                                        ? "bg-green-500"
                                        : trait.value > 50
                                        ? "bg-universe-primary"
                                        : "bg-amber-500"
                                    }`}
                                    style={{ width: `${trait.value}%` }}
                                  ></div>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                  {trait.trait === "Creativity" && "Your ability to think outside the box and generate novel solutions."}
                                  {trait.trait === "Analytical" && "Your ability to break down complex problems and find logical solutions."}
                                  {trait.trait === "Adventurous" && "Your willingness to try new things and take calculated risks."}
                                  {trait.trait === "Empathetic" && "Your ability to understand and share the feelings of others."}
                                  {trait.trait === "Organized" && "Your ability to plan, prioritize, and structure your approach to challenges."}
                                  {trait.trait === "Resilience" && "Your capacity to recover quickly from difficulties or setbacks."}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Settings Tab */}
                <TabsContent value="settings">
                  <Card className="bg-gradient-to-br from-card to-card/90 dark:from-gray-800 dark:to-gray-900/90 shadow-lg border-universe-accent/10 mb-6">
                    <CardHeader>
                      <CardTitle>Appearance</CardTitle>
                      <CardDescription>
                        Customize how ParallelYou looks
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {theme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                          <Label htmlFor="theme-mode">Theme Mode</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Label htmlFor="theme-mode" className="text-sm text-muted-foreground">Light</Label>
                          <Switch 
                            id="theme-mode" 
                            checked={theme === "dark"}
                            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                          />
                          <Label htmlFor="theme-mode" className="text-sm text-muted-foreground">Dark</Label>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-card to-card/90 dark:from-gray-800 dark:to-gray-900/90 shadow-lg border-universe-accent/10 mb-6">
                    <CardHeader>
                      <CardTitle>Universe Customization</CardTitle>
                      <CardDescription>
                        Settings for universe creation and analysis
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-base font-medium">Default Personality Settings</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {profileData.personalityTraits.map((trait) => (
                            <div key={trait.trait} className="space-y-1">
                              <div className="flex justify-between">
                                <Label htmlFor={`trait-${trait.trait}`}>{trait.trait}</Label>
                                <span className="text-sm">{trait.value}%</span>
                              </div>
                              <Input 
                                id={`trait-${trait.trait}`}
                                type="range" 
                                min="0" 
                                max="100" 
                                value={trait.value}
                                onChange={(e) => {
                                  const updatedTraits = profileData.personalityTraits.map(t => 
                                    t.trait === trait.trait 
                                      ? { ...t, value: parseInt(e.target.value) } 
                                      : t
                                  );
                                  setProfileData({
                                    ...profileData,
                                    personalityTraits: updatedTraits
                                  });
                                }}
                                className="w-full"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-base font-medium">Life Path Customization</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="career-pref">Career Preferences</Label>
                            <Input 
                              id="career-pref" 
                              placeholder="Enter career interests (e.g., Art, Tech, Medicine)" 
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="location-pref">Location Preferences</Label>
                            <Input 
                              id="location-pref" 
                              placeholder="Enter location interests (e.g., Europe, Beach towns)" 
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="education-pref">Education Preferences</Label>
                            <Input 
                              id="education-pref" 
                              placeholder="Enter education interests (e.g., PhDs, Arts)" 
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="relationship-pref">Relationship Preferences</Label>
                            <Input 
                              id="relationship-pref" 
                              placeholder="Enter relationship interests" 
                            />
                          </div>
                        </div>
                      </div>
                      
                      <Button className="bg-universe-primary hover:bg-universe-secondary">
                        Save Preferences
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-card to-card/90 dark:from-gray-800 dark:to-gray-900/90 shadow-lg border-universe-accent/10">
                    <CardHeader>
                      <CardTitle>Privacy & Security</CardTitle>
                      <CardDescription>
                        Manage your account privacy settings
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Profile Visibility</Label>
                          <p className="text-sm text-muted-foreground">
                            Control who can see your profile and created universes
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Data Collection</Label>
                          <p className="text-sm text-muted-foreground">
                            Allow us to analyze your choices to improve universe generation
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <div className="pt-4">
                        <Button variant="outline" className="w-full">
                          <Shield className="h-4 w-4 mr-2" /> Advanced Security Settings
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
