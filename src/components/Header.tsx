
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { 
  BookOpen, 
  GitBranch, 
  Home, 
  User, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  PenTool
} from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

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
          <Badge variant="outline" className="hidden md:flex bg-universe-primary/10 text-universe-primary border-universe-primary/20">
            Beta
          </Badge>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          <Button 
            variant={isActive("/") ? "default" : "ghost"} 
            size="sm" 
            asChild
            className={isActive("/") ? "bg-universe-primary hover:bg-universe-secondary" : ""}
          >
            <Link to="/" className="flex items-center space-x-1">
              <Home size={18} />
              <span>Home</span>
            </Link>
          </Button>
          <Button 
            variant={isActive("/explore") ? "default" : "ghost"} 
            size="sm" 
            asChild
            className={isActive("/explore") ? "bg-universe-primary hover:bg-universe-secondary" : ""}
          >
            <Link to="/explore" className="flex items-center space-x-1">
              <BookOpen size={18} />
              <span>Explore</span>
            </Link>
          </Button>
          <Button 
            variant={isActive("/profile") ? "default" : "ghost"} 
            size="sm" 
            asChild
            className={isActive("/profile") ? "bg-universe-primary hover:bg-universe-secondary" : ""}
          >
            <Link to="/profile" className="flex items-center space-x-1">
              <User size={18} />
              <span>Profile</span>
            </Link>
          </Button>
          <Button size="sm" className="ml-2 bg-universe-primary hover:bg-universe-secondary" asChild>
            <Link to="/create" className="flex items-center space-x-1">
              <PenTool size={18} className="mr-1" />
              Create Universe
            </Link>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="ml-2">
                {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer">
                <Sun className="h-4 w-4 mr-2" /> Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer">
                <Moon className="h-4 w-4 mr-2" /> Dark
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        
        <div className="md:hidden flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer">
                <Sun className="h-4 w-4 mr-2" /> Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer">
                <Moon className="h-4 w-4 mr-2" /> Dark
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-lg animate-fade-in">
          <nav className="container flex flex-col py-4 px-4">
            <Link 
              to="/" 
              className={`flex items-center py-3 px-4 rounded-md ${isActive("/") ? "bg-universe-primary/10 text-universe-primary" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Home size={18} className="mr-2" />
              <span>Home</span>
            </Link>
            <Link 
              to="/explore" 
              className={`flex items-center py-3 px-4 rounded-md ${isActive("/explore") ? "bg-universe-primary/10 text-universe-primary" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <BookOpen size={18} className="mr-2" />
              <span>Explore</span>
            </Link>
            <Link 
              to="/profile" 
              className={`flex items-center py-3 px-4 rounded-md ${isActive("/profile") ? "bg-universe-primary/10 text-universe-primary" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <User size={18} className="mr-2" />
              <span>Profile</span>
            </Link>
            <Link 
              to="/create" 
              className="flex items-center py-3 px-4 mt-2 bg-universe-primary text-white rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              <PenTool size={18} className="mr-2" />
              <span>Create Universe</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
