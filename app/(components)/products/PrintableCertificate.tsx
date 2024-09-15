// components/PrintableCertificate.tsx

import React from 'react';

type PrintableCertificateProps = {
    items: { name: string; price: string }[];
    quantity: number;
    totalPrice: number;
};

export const PrintableCertificate: React.FC<PrintableCertificateProps> = ({ items, quantity, totalPrice }) => {
    return (
        <html>
            <head>
                <title>Certificate</title>
                <style>
                    {`
                        body { font-family: Arial, sans-serif; }
                        .certificate { padding: 20px; text-align: center; }
                        .certificate-header { font-size: 24px; font-weight: bold; }
                        .certificate-content { margin-top: 20px; }
                        .certificate-footer { margin-top: 30px; font-size: 14px; }
                    `}
                </style>
            </head>
            <body>
                <div className="certificate">
                    <div className="certificate-header">Certificate of Purchase</div>
                    <div className="certificate-content">
                        <p>Thank you for your purchase!</p>
                        <p>Item Details:</p>
                        <ul>
                            {items.map((item, index) => (
                                <li key={index}>{item.name} - {item.price}</li>
                            ))}
                        </ul>
                        <p>Quantity: {quantity}</p>
                        <p>Total Price: {totalPrice.toFixed(2)} ETB</p>
                    </div>
                    <div className="certificate-footer">
                        <p>This certificate serves as proof of your purchase.</p>
                    </div>
                </div>
            </body>
        </html>
    );
};
