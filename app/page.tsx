import Image from "next/image";
import HeroCarousel from "./(components)/hero-carousel";
import NewDesignShow from "./(components)/new-design-show";


import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <div className="flex flex-grow bg-purple-500 flex-col">
      <HeroCarousel/>
      <NewDesignShow/>
      
    </div>
  );
}
