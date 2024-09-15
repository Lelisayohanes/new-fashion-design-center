import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const HeroCarousel = () => {
    return (
        <div className="relative w-full h-[600px] overflow-hidden"> {/* Fixed height */}
            <Image
                src="/images/image.png"
                alt="Second slide"
                layout="fill" // Fills the entire container
                objectFit="cover" // Ensures the image covers the container, cropping if necessary
                className="rounded-lg"
            />
            {/* Overlay text in the center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h2 className="text-white text-6xl font-bold bg-black bg-opacity-20 px-4 py-2 rounded-lg mb-6 text-center">
                    OUR DESIGN <br/>SPEAKS <br/>YOUR LANGUAGE
                </h2>
                <div className='flex gap-8'>
                    <Button className='w-20'>Men</Button>
                    <Button className='w-20'>Women</Button>
                </div>
            </div>
        </div>
    );
}

export default HeroCarousel;
