"use client";

import { Star } from "lucide-react"; // For rating stars
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { AlertDialogDemo } from "./alert-idalog.demo";

type ProductCardProps = React.ComponentProps<typeof Card> & {
  images: string[]; // Accept an array of images
  name: string;
  price: string;
  rating: number;
  reviews: number;
  description?: string;
  discount?: string;
  stockStatus?: string;
};

export default function ProductCard({
  className,
  images,
  name,
  price,
  rating,
  reviews,
  description,
  discount,
  stockStatus,
  ...props
}: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoverImageIndex, setHoverImageIndex] = useState<number | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false); // State for dialog visibility

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
    setHoverImageIndex(null); // Clear hover effect when clicking a dot
  };

  const handleThumbnailHover = (index: number) => {
    setHoverImageIndex(index);
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
    setHoverImageIndex(null); // Clear hover effect when clicking a thumbnail
  };

  const handleSeePreview = () => {
    setIsPreviewOpen(true); // Open the dialog when "See preview" is clicked
  };

  const orderedThumbnails = images.slice(0, 4); // Limit thumbnails to first 4 images
  const displayImage = hoverImageIndex !== null ? images[hoverImageIndex] : images[currentImageIndex];

  return (
    <div className="max-w-xs">
      <Card
        className={cn("shadow-lg rounded-lg overflow-hidden w-72 h-[30rem] hover:h-[34rem]", className)} // Set fixed width and height
        {...props}
      >
        <CardContent className="px-4 pt-4 pb-2">
          <div className="relative h-64 w-full">
            {discount && (
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow-sm">
                {discount}
              </span>
            )}
            <div className="flex justify-center items-center w-full h-full">
              <Image
                src={displayImage}
                alt={name}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex space-x-2 justify-center mt-2">
            {orderedThumbnails.map((imgSrc, index) => (
              <Image
                key={index}
                src={imgSrc}
                alt={`${name} - thumbnail ${index}`}
                width={48}
                height={48}
                className={`w-12 h-12 object-cover rounded-md border ${imgSrc === images[currentImageIndex] ? "border-blue-500" : "border-gray-200"
                  } cursor-pointer hover:opacity-80`}
                onMouseEnter={() => handleThumbnailHover(index)}
                onClick={() => handleThumbnailClick(index)}
                loading="lazy"
              />
            ))}
          </div>

          {/* Product Info */}
          <div className="mt-4">
            <CardTitle className="text-lg font-bold">{name}</CardTitle>
            <CardDescription className="text-sm text-gray-500">{description || "Perfect for all seasons"}</CardDescription>
            <div className="flex items-center space-x-1 mt-2">
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  className={`h-4 w-4 ${index < rating ? "text-yellow-500" : "text-gray-300"}`}
                />
              ))}
              <span className="text-sm text-gray-500">({reviews} reviews)</span>
            </div>
            <div className="mt-2 text-lg font-bold text-gray-800">{price}</div>
          </div>
        </CardContent>

        <CardFooter className="p-4">
          <div className="flex justify-between space-x-2 w-full">
            <AlertDialogDemo/>
            <Button className="w-full" variant="secondary" onClick={handleSeePreview}>See preview</Button>
          </div>
        </CardFooter>
      </Card>

      {/* Dialog for "See preview" */}
      
    </div>
  );
}
