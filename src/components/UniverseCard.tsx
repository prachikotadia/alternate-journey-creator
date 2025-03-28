
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, User, MapPin, Briefcase, Glasses } from "lucide-react";
import { Link } from "react-router-dom";

export interface UniverseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  careerPath: string;
  location: string;
  skills: string[];
  personality: string;
}

const personalityColors: Record<string, string> = {
  "Creative": "from-pink-500 to-rose-500",
  "Visionary": "from-indigo-500 to-purple-500",
  "Adventurous": "from-emerald-500 to-teal-500",
  "Analytical": "from-blue-500 to-cyan-500",
  "Competitive": "from-orange-500 to-amber-500",
  "Determined": "from-green-500 to-emerald-500",
  "default": "from-universe-primary to-universe-secondary"
};

const UniverseCard: React.FC<UniverseCardProps> = ({
  id,
  title,
  description,
  image,
  careerPath,
  location,
  skills,
  personality,
}) => {
  const gradientClass = personalityColors[personality] || personalityColors["default"];

  return (
    <Card className="universe-card h-full flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-500 border-universe-accent/10">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <div className="absolute top-3 right-3">
          <Badge className={`bg-gradient-to-r ${gradientClass} border-0 text-white`}>
            {personality}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-2 relative">
        <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r border-0 opacity-75 ${gradientClass}"></div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-2 flex-grow">
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <Briefcase size={16} className={`mr-2 text-universe-primary`} />
          <span>{careerPath}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <MapPin size={16} className={`mr-2 text-universe-primary`} />
          <span>{location}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <Glasses size={16} className={`mr-2 text-universe-primary`} />
          <div className="flex flex-wrap gap-1 mt-1">
            {skills.slice(0, 3).map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-800">
                {skill}
              </Badge>
            ))}
            {skills.length > 3 && (
              <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-800">
                +{skills.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-2">
        <Button 
          asChild 
          className={`w-full transition-all duration-300 bg-gradient-to-r ${gradientClass} hover:opacity-90 border-0`}
        >
          <Link to={`/universe/${id}`} className="flex items-center justify-center">
            Explore This Universe
            <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UniverseCard;
