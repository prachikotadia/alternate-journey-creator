
import React from "react";
import { Calendar, MapPin, Briefcase, GraduationCap, Heart } from "lucide-react";

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  type: "career" | "education" | "relationship" | "location" | "achievement";
}

interface UniverseTimelineProps {
  events: TimelineEvent[];
}

const UniverseTimeline: React.FC<UniverseTimelineProps> = ({ events }) => {
  const getEventIcon = (type: string) => {
    switch (type) {
      case "career":
        return <Briefcase className="h-5 w-5 text-universe-primary" />;
      case "education":
        return <GraduationCap className="h-5 w-5 text-universe-primary" />;
      case "relationship":
        return <Heart className="h-5 w-5 text-universe-primary" />;
      case "location":
        return <MapPin className="h-5 w-5 text-universe-primary" />;
      default:
        return <Calendar className="h-5 w-5 text-universe-primary" />;
    }
  };

  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-universe-primary/50 before:via-universe-primary before:to-universe-accent/50">
      {events.map((event, index) => (
        <div
          key={event.id}
          className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${
            index === 0 ? "animate-fade-in" : ""
          }`}
          style={{
            animationDelay: `${index * 150}ms`,
          }}
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            {getEventIcon(event.type)}
          </div>

          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl universe-card shadow-sm">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {event.title}
              </h3>
              <time className="font-mono text-sm text-universe-primary/80">
                {event.date}
              </time>
            </div>
            <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UniverseTimeline;
