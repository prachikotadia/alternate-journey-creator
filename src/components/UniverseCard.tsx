
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
  return (
    <Card className="universe-card h-full flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <Badge variant="outline" className="bg-universe-primary/10 text-universe-primary border-universe-primary/20">
            {personality}
          </Badge>
        </div>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-2 flex-grow">
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <Briefcase size={16} className="mr-2 text-universe-primary" />
          <span>{careerPath}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <MapPin size={16} className="mr-2 text-universe-primary" />
          <span>{location}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <Glasses size={16} className="mr-2 text-universe-primary" />
          <div className="flex flex-wrap gap-1 mt-1">
            {skills.slice(0, 3).map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {skills.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{skills.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-2">
        <Button asChild className="w-full bg-universe-primary hover:bg-universe-secondary">
          <Link to={`/universe/${id}`} className="flex items-center justify-center">
            Explore This Universe
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UniverseCard;
