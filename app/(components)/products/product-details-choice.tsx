import { Star } from "lucide-react"; // Import the star icon
import { CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type CardProps = React.ComponentProps<typeof Card>;

export function ProductDetailChoiceCard({ className, ...props }: CardProps) {
    return (
        <div className="">
            <Card className={cn("w-[380px]", "border-none", className)} {...props}>
                <CardHeader>
                    <CardTitle className="text-red-500">Welcome deal</CardTitle>
                    {/* <CardDescription>How do you want your product to come?</CardDescription> */}
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="flex items-center rounded-md p-4">
                        <div className="flex-1 space-y-1">
                            <div className="flex w-full gap-2 items-end ">
                                <div className="font-bold text-xl">ETB</div>
                                <div className="text-red-500 text-3xl font-bold">239.5</div>
                                <div className="text-lg "><span className="line-through mr-2">879</span>ETB</div>
                                <div className="text-lg "><span className="line-through mr-2">879</span>ETB</div>
                                <div className="text-lg text-red-500">save 7%</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>Extra discount by buying many</div>
                        <div className="font-semibold">
                            Description: Women Casual Solid Slim Fit Pullovers Tees Shirts. Street wear Base Tees Tops Casual.
                        </div>

                        <div className="pt-4 flex flex-col gap-4">
                            {/* Color Selection */}
                            <div>
                                <p className="font-medium">Color:</p>
                                <div className="flex space-x-2">
                                    <button className="w-6 h-6 rounded-full bg-red-500 border-none" title="Red"></button>
                                    <button className="w-6 h-6 rounded-full bg-blue-500 border-none" title="Blue"></button>
                                    <button className="w-6 h-6 rounded-full bg-green-500 border-none" title="Green"></button>
                                    <button className="w-6 h-6 rounded-full bg-gray-500 border-none" title="Gray"></button>
                                </div>
                            </div>

                            {/* Size Selection */}
                            <div>
                                <p className="font-medium">Size:</p>
                                <div className="flex space-x-2">
                                    <button className="px-3 py-1 rounded border-none">S</button>
                                    <button className="px-3 py-1 rounded border-none">M</button>
                                    <button className="px-3 py-1 rounded border-none">L</button>
                                    <button className="px-3 py-1 rounded border-none">XL</button>
                                </div>
                            </div>

                            <div className="pt-4 flex items-center space-x-2">
                                <div className="flex items-center space-x-1">
                                    {/* Star Rating */}
                                    <Star className="w-6 h-6 text-yellow-500" />
                                    <Star className="w-6 h-6 text-yellow-500" />
                                    <Star className="w-6 h-6 text-yellow-500" />
                                    <Star className="w-6 h-6 text-yellow-500" />
                                    <Star className="w-6 h-6 text-gray-300" /> {/* Optional empty star */}
                                    <div className="ml-2">4.8</div>
                                </div>
                                <div className="text-gray-500 text-sm">(1,000 reviews)</div>
                                <div className="text-gray-500 text-sm">1,000 sold</div>
                            </div>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    {/* <Button className="w-full">
                    <CheckIcon className="mr-2 h-4 w-4" /> Mark all as read
                </Button> */}
                </CardFooter>
            </Card>
        </div>
    );
}
