
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Repeat, Share } from "lucide-react";

export interface SocialMediaPostProps {
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

const SocialMediaPost: React.FC<SocialMediaPostProps> = ({
  platform,
  content,
  author,
  image,
  likes,
  comments,
  shares,
  timestamp,
}) => {
  const getPlatformClass = () => {
    switch (platform) {
      case "twitter":
        return "border-blue-400 bg-gradient-to-r from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-900";
      case "instagram":
        return "border-pink-400 bg-gradient-to-r from-pink-50 to-white dark:from-pink-900/20 dark:to-gray-900";
      case "facebook":
        return "border-indigo-400 bg-gradient-to-r from-indigo-50 to-white dark:from-indigo-900/20 dark:to-gray-900";
      default:
        return "";
    }
  };

  const getPlatformIcon = () => {
    switch (platform) {
      case "twitter":
        return (
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-blue-500">
            <g>
              <path d="M14.258 10.152L23.176 0h-2.113L13.736 8.08 8.323 0H0l8.15 12.146L0 23h2.113l7.827-8.343L15.677 23H24l-8.578-12.848zM2.519 1.692h3.447l15.55 20.654h-3.446L2.52 1.692z"></path>
            </g>
          </svg>
        );
      case "instagram":
        return (
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-pink-500">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      case "facebook":
        return (
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-indigo-500">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.644c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.738-.9 10.125-5.864 10.125-11.854z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <Card className={`overflow-hidden border-l-4 ${getPlatformClass()}`}>
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Avatar className="h-10 w-10">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback className="bg-universe-primary text-white">
                {author.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-sm text-gray-900 dark:text-gray-100">{author.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">@{author.handle}</p>
            </div>
          </div>
          <div>{getPlatformIcon()}</div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">{content}</p>
        {image && (
          <div className="mt-3 rounded-md overflow-hidden">
            <img src={image} alt="Post" className="w-full h-auto" />
          </div>
        )}
      </CardContent>
      
      <CardFooter className="p-4 pt-0 border-t border-gray-100 dark:border-gray-800">
        <div className="flex justify-between w-full text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-1">
            <Heart size={14} className="text-red-500" />
            <span>{likes}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MessageCircle size={14} />
            <span>{comments}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Repeat size={14} />
            <span>{shares}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Share size={14} />
            <span>{timestamp}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SocialMediaPost;
