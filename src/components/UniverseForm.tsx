
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";
import { BrainCircuit, Briefcase, Shuffle, GraduationCap, MapPin, Heart, Brain } from "lucide-react";

const UniverseForm = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState("current");
  const [loading, setLoading] = useState(false);
  
  // Current life details
  const [currentCareer, setCurrentCareer] = useState("");
  const [currentEducation, setCurrentEducation] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [currentRelationship, setCurrentRelationship] = useState("");
  
  // Alternative scenario
  const [alternativeScenario, setAlternativeScenario] = useState("");
  const [alternativeDescription, setAlternativeDescription] = useState("");
  
  // Personality traits
  const [openness, setOpenness] = useState([50]);
  const [conscientiousness, setConscientiousness] = useState([50]);
  const [extraversion, setExtraversion] = useState([50]);
  const [agreeableness, setAgreeableness] = useState([50]);
  const [neuroticism, setNeuroticism] = useState([50]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentCareer || !currentEducation || !currentLocation || !currentRelationship) {
      toast.error("Please fill in all your current life details");
      setCurrentTab("current");
      return;
    }
    
    if (!alternativeScenario) {
      toast.error("Please specify what alternative scenario you want to explore");
      setCurrentTab("alternative");
      return;
    }
    
    setLoading(true);
    
    try {
      // In a real app, this would be an API call to a backend service
      // For now, we'll just simulate a loading delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate universe creation success
      const newUniverseId = Math.random().toString(36).substring(2, 15);
      
      toast.success("Your parallel universe has been generated!");
      navigate(`/universe/${newUniverseId}`);
    } catch (error) {
      toast.error("Failed to generate universe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card className="universe-card">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Create Your Parallel Universe</CardTitle>
          <CardDescription>
            Tell us about your current life and what alternative path you'd like to explore
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Tabs value={currentTab} onValueChange={setCurrentTab}>
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="current" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span className="hidden sm:inline">Current Life</span>
              </TabsTrigger>
              <TabsTrigger value="alternative" className="flex items-center gap-2">
                <Shuffle className="h-4 w-4" />
                <span className="hidden sm:inline">Alternative Path</span>
              </TabsTrigger>
              <TabsTrigger value="personality" className="flex items-center gap-2">
                <Brain className="h-4 w-4" />
                <span className="hidden sm:inline">Personality</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="current" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-career" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-universe-primary" />
                  Current Career
                </Label>
                <Input
                  id="current-career"
                  placeholder="E.g., Software Engineer, Teacher, Doctor..."
                  value={currentCareer}
                  onChange={(e) => setCurrentCareer(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="current-education" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-universe-primary" />
                  Education Level
                </Label>
                <Select value={currentEducation} onValueChange={setCurrentEducation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your education level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high-school">High School</SelectItem>
                    <SelectItem value="associate">Associate Degree</SelectItem>
                    <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                    <SelectItem value="master">Master's Degree</SelectItem>
                    <SelectItem value="phd">PhD or Doctorate</SelectItem>
                    <SelectItem value="self-taught">Self-taught</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="current-location" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-universe-primary" />
                  Current Location
                </Label>
                <Input
                  id="current-location"
                  placeholder="E.g., New York, London, Tokyo..."
                  value={currentLocation}
                  onChange={(e) => setCurrentLocation(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="current-relationship" className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-universe-primary" />
                  Relationship Status
                </Label>
                <Select value={currentRelationship} onValueChange={setCurrentRelationship}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your relationship status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="dating">Dating</SelectItem>
                    <SelectItem value="married">Married</SelectItem>
                    <SelectItem value="complicated">It's Complicated</SelectItem>
                    <SelectItem value="divorced">Divorced</SelectItem>
                    <SelectItem value="widowed">Widowed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button
                type="button"
                onClick={() => setCurrentTab("alternative")}
                className="w-full bg-universe-primary hover:bg-universe-secondary"
              >
                Continue to Alternative Path
              </Button>
            </TabsContent>
            
            <TabsContent value="alternative" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="alternative-scenario" className="flex items-center gap-2">
                  <Shuffle className="h-4 w-4 text-universe-primary" />
                  What alternative path would you like to explore?
                </Label>
                <Select value={alternativeScenario} onValueChange={setAlternativeScenario}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an alternative scenario" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="different-career">Different Career Path</SelectItem>
                    <SelectItem value="different-education">Different Education Choice</SelectItem>
                    <SelectItem value="different-location">Living in Another Location</SelectItem>
                    <SelectItem value="different-relationship">Different Relationship Choice</SelectItem>
                    <SelectItem value="risk-taken">A Risk You Didn't Take</SelectItem>
                    <SelectItem value="custom">Custom Scenario</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="alternative-description">
                  Describe your alternative path in detail
                </Label>
                <Textarea
                  id="alternative-description"
                  placeholder="E.g., What if I had pursued a career in music instead of engineering? Or moved to Paris after college?"
                  value={alternativeDescription}
                  onChange={(e) => setAlternativeDescription(e.target.value)}
                  className="min-h-[120px]"
                />
              </div>
              
              <div className="flex justify-between space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentTab("current")}
                  className="w-full"
                >
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={() => setCurrentTab("personality")}
                  className="w-full bg-universe-primary hover:bg-universe-secondary"
                >
                  Continue to Personality
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="personality" className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <Label className="flex items-center gap-2">
                    <BrainCircuit className="h-4 w-4 text-universe-primary" />
                    Personality Profile
                  </Label>
                  <span className="text-xs text-gray-500">These traits help generate more accurate simulations</span>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="openness">Openness to Experience</Label>
                      <span className="text-sm text-gray-500">{openness[0]}%</span>
                    </div>
                    <Slider
                      id="openness"
                      min={0}
                      max={100}
                      step={1}
                      value={openness}
                      onValueChange={setOpenness}
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Practical, Traditional</span>
                      <span>Creative, Open to new ideas</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="conscientiousness">Conscientiousness</Label>
                      <span className="text-sm text-gray-500">{conscientiousness[0]}%</span>
                    </div>
                    <Slider
                      id="conscientiousness"
                      min={0}
                      max={100}
                      step={1}
                      value={conscientiousness}
                      onValueChange={setConscientiousness}
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Spontaneous, Flexible</span>
                      <span>Organized, Self-disciplined</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="extraversion">Extraversion</Label>
                      <span className="text-sm text-gray-500">{extraversion[0]}%</span>
                    </div>
                    <Slider
                      id="extraversion"
                      min={0}
                      max={100}
                      step={1}
                      value={extraversion}
                      onValueChange={setExtraversion}
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Reserved, Reflective</span>
                      <span>Outgoing, Energetic</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="agreeableness">Agreeableness</Label>
                      <span className="text-sm text-gray-500">{agreeableness[0]}%</span>
                    </div>
                    <Slider
                      id="agreeableness"
                      min={0}
                      max={100}
                      step={1}
                      value={agreeableness}
                      onValueChange={setAgreeableness}
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Challenging, Detached</span>
                      <span>Cooperative, Compassionate</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="neuroticism">Neuroticism</Label>
                      <span className="text-sm text-gray-500">{neuroticism[0]}%</span>
                    </div>
                    <Slider
                      id="neuroticism"
                      min={0}
                      max={100}
                      step={1}
                      value={neuroticism}
                      onValueChange={setNeuroticism}
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Calm, Emotionally stable</span>
                      <span>Sensitive, Emotionally reactive</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentTab("alternative")}
                  className="w-full"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-universe-primary hover:bg-universe-secondary"
                >
                  {loading ? "Generating Universe..." : "Generate Your Universe"}
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        
        <CardFooter className="flex justify-between border-t pt-4">
          <p className="text-xs text-gray-500">
            All stories are AI-generated fiction and not predictions of your actual future.
          </p>
        </CardFooter>
      </Card>
    </form>
  );
};

export default UniverseForm;
