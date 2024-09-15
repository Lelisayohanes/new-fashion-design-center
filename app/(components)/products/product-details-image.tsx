import { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart as HeartIcon } from "lucide-react"; // Import Lucide icons

type CardProps = React.ComponentProps<typeof Card> & {
    imageUrl: string;  // Main image at the top
    footerImages?: string[];  // Optional array of images for the footer
};

export function ProductImageCard({ className, imageUrl, footerImages, ...props }: CardProps) {
    const [selectedImage, setSelectedImage] = useState(imageUrl); // Set initial image to the main image
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);
    const [isFavorited, setIsFavorited] = useState(false); // State to manage favorite status
    const scrollRef = useRef<HTMLDivElement>(null); // Ref for the scrollable container

    const checkScrollArrows = useCallback(() => {
        if (scrollRef.current) {
            const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollWidth > clientWidth + scrollLeft);
        }
    }, []);

    useEffect(() => {
        checkScrollArrows();
        window.addEventListener("resize", checkScrollArrows);
        return () => {
            window.removeEventListener("resize", checkScrollArrows);
        };
    }, [checkScrollArrows]);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -100, behavior: 'smooth' });
            checkScrollArrows();
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 100, behavior: 'smooth' });
            checkScrollArrows();
        }
    };

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <Card className={cn("w-[380px]", className)} {...props}>
            <CardContent className="relative">
                <div className="flex justify-center">
                    <Image
                        src={selectedImage} // Display the selected image (hovered or clicked)
                        alt="Product Image"
                        width={100}
                        height={100}
                        className="w-[380px] h-[400px] object-cover"
                    />
                    <button
                        onClick={toggleFavorite}
                        className={`absolute top-2 right-2 p-2 rounded-full bg-white shadow-md ${isFavorited ? 'text-red-500' : 'text-gray-500'}`}
                    >
                        <HeartIcon className="w-6 h-6" />
                    </button>
                </div>
            </CardContent>

            {/* Optional Footer with scrollable images */}
            {footerImages && footerImages.length > 0 && (
                <CardFooter className="relative">
                    {showLeftArrow && (
                        <button
                            onClick={scrollLeft}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 z-10"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                    )}
                    <div
                        ref={scrollRef}
                        className="flex space-x-2 py-2"
                        style={{
                            overflowX: 'auto', // Allow horizontal scrolling
                            overflowY: 'hidden', // Hide vertical scrollbar
                            scrollbarWidth: 'none', // Hide scrollbar for Firefox
                            msOverflowStyle: 'none', // Hide scrollbar for Internet Explorer and Edge
                        }}
                    >
                        {footerImages.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                alt={`Footer Image ${index + 1}`}
                                width={60}
                                height={60}
                                className="w-[60px] h-[60px] object-cover rounded-md cursor-pointer"
                                onMouseEnter={() => setSelectedImage(image)} // Change image on hover
                                onClick={() => setSelectedImage(image)} // Change image on click
                            />
                        ))}
                    </div>
                    {showRightArrow && (
                        <button
                            onClick={scrollRight}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 z-10"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    )}
                </CardFooter>
            )}
        </Card>
    );
}
