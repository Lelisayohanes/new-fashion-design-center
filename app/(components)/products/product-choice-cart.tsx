import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PrintableCertificate } from './PrintableCertificate';
import ReactDOMServer from 'react-dom/server';

type CardProps = React.ComponentProps<typeof Card>;

export function ProductChoiceCartCard({ className, ...props }: CardProps) {
    // Sample data for items
    const [quantity, setQuantity] = useState(1);
    const items = [
        { name: "Item 1", price: "100.00 ETB" },
        { name: "Item 2", price: "150.00 ETB" },
        { name: "Item 3", price: "200.00 ETB" }
    ];

    // Calculate total price based on quantity
    const totalPrice = items.reduce((acc, item) => acc + (parseFloat(item.price.split(" ")[0]) * quantity), 0);

    // Increment and Decrement handlers
    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    // Print handler
    const printCertificate = () => {
        const printWindow = window.open('', '', 'height=600,width=800');
        
        if (printWindow) {
            // Render PrintableCertificate to static HTML
            const certificateHtml = ReactDOMServer.renderToStaticMarkup(
                <PrintableCertificate
                    items={items}
                    quantity={quantity}
                    totalPrice={totalPrice}
                />
            );

            // Write the HTML to the print window
            printWindow.document.open();
            printWindow.document.write(`
                <html>
                <head>
                    <title>Certificate</title>
                    <style>
                        body { font-family: Arial, sans-serif; }
                        .certificate { padding: 20px; text-align: center; }
                        .certificate-header { font-size: 24px; font-weight: bold; }
                        .certificate-content { margin-top: 20px; }
                        .certificate-footer { margin-top: 30px; font-size: 14px; }
                    </style>
                </head>
                <body>
                    ${certificateHtml}
                </body>
                </html>
            `);
            printWindow.document.close();
            printWindow.focus();
            printWindow.print();
        }
    };

    return (
        <div className="">
            <Card className={cn("w-[380px]", "border border-gray-300 overflow-hidden", className)} {...props}>
                <CardHeader className="flex justify-between">
                    <Button className="bg-red-500 hover:bg-red-600 rounded-3xl">Add to cart</Button>
                    <Button className="rounded-3xl">View details</Button>
                </CardHeader>
                <CardContent className="grid gap-4 overflow-hidden">
                    <div className="flex items-center rounded-md p-4">
                        <div className="flex-1 space-y-1">
                            <div className="flex w-full gap-2 items-end">
                                <div className="font-bold text-xl">ETB</div>
                                <div className="text-red-500 text-3xl font-bold">{totalPrice.toFixed(2)}</div>
                                <div className="text-lg"><span className="line-through mr-2">879</span>ETB</div>
                                <div className="text-lg text-red-500">save 7%</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2">
                        <div className="flex items-center justify-center space-x-2">
                            <div>Quantity</div>
                            <Button 
                                onClick={decrementQuantity} 
                                className="px-3 py-1 border rounded"
                            >
                                -
                            </Button>
                            <span className="text-lg">{quantity}</span>
                            <Button 
                                onClick={incrementQuantity} 
                                className="px-3 py-1 border rounded"
                            >
                                +
                            </Button>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <div className="flex flex-col gap-4">
                        <div className="font-medium text-lg">Items:</div>
                        <ul className="list-disc pl-5 space-y-1">
                            {items.map((item, index) => (
                                <li key={index} className="text-sm">{item.name} - {item.price}</li>
                            ))}
                        </ul>
                        <div className="font-semibold text-lg mt-2">Total: {totalPrice.toFixed(2)} ETB</div>
                        <Button onClick={printCertificate} className="bg-blue-500 hover:bg-blue-600 rounded-3xl">Print Certificate</Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
