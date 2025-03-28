
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, GitBranch, Home, User } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-universe-primary text-white">
            <GitBranch size={20} className="absolute" />
            <div className="absolute w-8 h-8 rounded-full bg-universe-primary animate-pulse-slow"></div>
          </div>
          <span className="font-space-grotesk font-bold text-lg text-gray-900 dark:text-white">
            ParallelYou
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/" className="flex items-center space-x-1">
              <Home size={18} />
              <span>Home</span>
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/explore" className="flex items-center space-x-1">
              <BookOpen size={18} />
              <span>Explore</span>
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/profile" className="flex items-center space-x-1">
              <User size={18} />
              <span>Profile</span>
            </Link>
          </Button>
          <Button size="sm" className="ml-2 bg-universe-primary hover:bg-universe-secondary">
            Create Universe
          </Button>
        </nav>
        
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
