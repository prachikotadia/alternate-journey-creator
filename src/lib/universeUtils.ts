
import { toast } from "sonner";

// Types for the Universe generation
export interface UniverseInput {
  currentCareer: string;
  currentEducation: string;
  currentLocation: string;
  currentRelationship: string;
  alternativeScenario: string;
  alternativeDescription: string;
  personality: {
    openness: number;
    conscientiousness: number;
    extraversion: number;
    agreeableness: number;
    neuroticism: number;
  };
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  type: "career" | "education" | "relationship" | "location" | "achievement";
}

export interface SocialMediaPost {
  id: string;
  platform: "twitter" | "instagram" | "facebook";
  content: string;
  author: {
    name: string;
    handle: string;
    avatar?: string;
  };
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
}

export interface PersonalityTrait {
  trait: string;
  value: number;
  fullMark: number;
}

export interface Universe {
  id: string;
  title: string;
  description: string;
  image: string;
  careerPath: string;
  location: string;
  skills: string[];
  personality: string;
  story: string;
  timeline: TimelineEvent[];
  socialPosts: SocialMediaPost[];
  personalityTraits: PersonalityTrait[];
}

// This function would be replaced with an actual API call in a production app
export const generateUniverse = async (input: UniverseInput): Promise<Universe> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 3000));
  
  // In a real app, this would be an API call to generate content with AI
  // For now, we'll return mock data
  const newId = Math.random().toString(36).substring(2, 15);
  
  toast.success("Your parallel universe has been generated successfully!");
  
  return {
    id: newId,
    title: "Your Alternate Reality",
    description: `What if you ${input.alternativeDescription.toLowerCase()}`,
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    careerPath: generateCareerPath(input),
    location: generateLocation(input),
    skills: generateSkills(input),
    personality: generatePersonalityType(input),
    story: "Your AI-generated story would appear here, detailing your journey through this alternate reality.",
    timeline: generateMockTimeline(),
    socialPosts: generateMockSocialPosts(),
    personalityTraits: generateMockPersonalityTraits(input),
  };
};

// Helper functions that would be replaced with AI-driven content generation
const generateCareerPath = (input: UniverseInput): string => {
  if (input.alternativeScenario === "different-career") {
    return "Alternative Career Path";
  }
  return input.currentCareer;
};

const generateLocation = (input: UniverseInput): string => {
  if (input.alternativeScenario === "different-location") {
    return "New City, Country";
  }
  return input.currentLocation;
};

const generateSkills = (input: UniverseInput): string[] => {
  // This would be AI-generated based on the alternative scenario
  return ["Adaptability", "Creativity", "Problem Solving", "Communication", "Leadership"];
};

const generatePersonalityType = (input: UniverseInput): string => {
  const { openness, extraversion } = input.personality;
  
  if (openness > 70 && extraversion > 70) {
    return "Creative";
  } else if (openness > 70) {
    return "Visionary";
  } else if (extraversion > 70) {
    return "Outgoing";
  }
  
  return "Balanced";
};

const generateMockTimeline = (): TimelineEvent[] => {
  return [
    {
      id: "t1",
      date: "2010",
      title: "Career Change",
      description: "Made the pivotal decision to change careers.",
      type: "career",
    },
    {
      id: "t2",
      date: "2012",
      title: "Relocated",
      description: "Moved to a new city for better opportunities.",
      type: "location",
    },
    {
      id: "t3",
      date: "2015",
      title: "Key Achievement",
      description: "Reached a significant milestone in your new career path.",
      type: "achievement",
    },
  ];
};

const generateMockSocialPosts = (): SocialMediaPost[] => {
  return [
    {
      id: "s1",
      platform: "twitter",
      content: "Just made a life-changing decision! Excited for this new chapter. #NewBeginnings",
      author: {
        name: "Alternative You",
        handle: "alt_you",
      },
      likes: 45,
      comments: 12,
      shares: 5,
      timestamp: "2010",
    },
  ];
};

const generateMockPersonalityTraits = (input: UniverseInput): PersonalityTrait[] => {
  return [
    { trait: "Openness", value: input.personality.openness, fullMark: 100 },
    { trait: "Conscientiousness", value: input.personality.conscientiousness, fullMark: 100 },
    { trait: "Extraversion", value: input.personality.extraversion, fullMark: 100 },
    { trait: "Agreeableness", value: input.personality.agreeableness, fullMark: 100 },
    { trait: "Neuroticism", value: input.personality.neuroticism, fullMark: 100 },
  ];
};
