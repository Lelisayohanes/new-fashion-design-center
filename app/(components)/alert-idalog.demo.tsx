// components/AlertDialogDemo.tsx
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
import { ProductImageCard } from "./products/product-details-image"
import { X } from "lucide-react"
import { ProductDetailChoiceCard } from "./products/product-details-choice"
import { ProductChoiceCartCard } from "./products/product-choice-cart"

export function AlertDialogDemo() {
    return (
        <div className="">
            <AlertDialog >
                <AlertDialogTrigger asChild>
                    <Button variant="outline">Show Dialog</Button>
                </AlertDialogTrigger>
                <div className="bg-yellow-700">
                    <AlertDialogContent className="lg:min-w-[1300px] min-h-[680px] bg-white gap-0 text-black flex flex-col" >
                        <div className="flex justify-between items-end">
                            <div></div>
                            <AlertDialogCancel className=" m-2 "><X /></AlertDialogCancel>

                        </div>
                        <div className="flex flex-col text-black justify-between bg-y ">
                            <div className="flex  w-full">
                                {/* product images and color option and size option */}
                                <div className="flex-1 w-2/5">
                                    <ProductImageCard
                                        className="my-custom-class"
                                        imageUrl="/images/image1.png"
                                        footerImages={[
                                            "/images/image1.png",
                                            "/images/image2.png",
                                            "/images/image3.png",
                                            "/images/image1.png",
                                            "/images/image2.png",
                                            "/images/image3.png",
                                            "/images/image1.png",
                                            "/images/image2.png",
                                            "/images/image3.png",
                                        ]}
                                    />

                                </div >
                                {/* product description  */}
                                <div className="flex-1 ">

                                    <ProductDetailChoiceCard />

                                </div>
                                {/* price and rate  */}
                                <div className="flex-1 ">
                                    <ProductChoiceCartCard/>
                                </div>
                            </div>
                            <div className="flex items-end">

                            </div>
                        </div>
                    </AlertDialogContent>
                </div>

            </AlertDialog>
        </div>
    )
}
