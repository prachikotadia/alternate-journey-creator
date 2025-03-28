
import React from "react";
import { GitBranch, Github, Heart, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-universe-primary text-white">
                <GitBranch size={20} className="absolute" />
              </div>
              <span className="font-space-grotesk font-bold text-lg text-gray-900 dark:text-white">
                ParallelYou
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Explore alternative versions of your life based on different choices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-universe-primary dark:text-gray-400 dark:hover:text-universe-accent">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-universe-primary dark:text-gray-400 dark:hover:text-universe-accent">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-800 dark:text-gray-200 mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/create" className="text-sm text-gray-600 hover:text-universe-primary dark:text-gray-400 dark:hover:text-universe-accent">
                  Create Universe
                </Link>
              </li>
              <li>
                <Link to="/explore" className="text-sm text-gray-600 hover:text-universe-primary dark:text-gray-400 dark:hover:text-universe-accent">
                  Explore Universes
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-universe-primary dark:text-gray-400 dark:hover:text-universe-accent">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-800 dark:text-gray-200 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-sm text-gray-600 hover:text-universe-primary dark:text-gray-400 dark:hover:text-universe-accent">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-universe-primary dark:text-gray-400 dark:hover:text-universe-accent">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-universe-primary dark:text-gray-400 dark:hover:text-universe-accent">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-800 dark:text-gray-200 mb-4">Subscribe</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Join our newsletter to get updates on new features and universes.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800"
              />
              <button className="px-4 py-2 bg-universe-primary text-white rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} ParallelYou. Made with{" "}
            <Heart size={14} className="inline text-red-500" /> for exploring alternate realities.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
