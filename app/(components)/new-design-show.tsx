import { Button } from '@/components/ui/button'
import React from 'react'
import  ProductCard  from './product-card' // Make sure it's imported correctly

const NewDesignShow = () => {
    const products = [
        {
            images: ['/images/image2.png','/images/image5.png','/images/image1.png', '/images/image3.png', '/images/image4.png', '/images/image6.png'], 
            name: 'Stylish Jacket',
            price: '$49.99',
            rating: 4,
            reviews: 23,
            description: 'Perfect for all seasons',
            discount: '10% OFF',
            stockStatus: 'In Stock'
        },
        {
            images: ['/images/image4.png','/images/image5.png','/images/image1.png', '/images/image2.png','/images/image3.png',  '/images/image6.png'], 
            name: 'Elegant Dress',
            price: '$79.99',
            rating: 5,
            reviews: 15,
            description: 'Beautiful evening wear',
            discount: '20% OFF',
            stockStatus: 'Limited Stock'
        },
        {
            images: ['/images/image1.png', '/images/image2.png','/images/image3.png', '/images/image4.png','/images/image5.png', '/images/image6.png'], 
            name: 'Casual Shirt',
            price: '$29.99',
            rating: 3,
            reviews: 40,
            description: 'Comfortable and stylish',
            stockStatus: 'In Stock'
        },
        {
            images: ['/images/image4.png','/images/image5.png','/images/image1.png', '/images/image2.png','/images/image3.png',  '/images/image6.png'], 
            name: 'Elegant Dress',
            price: '$79.99',
            rating: 5,
            reviews: 15,
            description: 'Beautiful evening wear',
            discount: '20% OFF',
            stockStatus: 'Limited Stock'
        },
        {
            images: ['/images/image1.png', '/images/image2.png','/images/image3.png', '/images/image4.png','/images/image5.png', '/images/image6.png'], 
            name: 'Casual Shirt',
            price: '$29.99',
            rating: 3,
            reviews: 40,
            description: 'Comfortable and stylish',
            stockStatus: 'In Stock'
        },
    ];

    return (
        <div className='bg-white py-4 px-16'>
            <div className='text-black text-center text-6xl font-extrabold mb-4'>
                NEW DESIGNS
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        images={product.images}
                        name={product.name}
                        price={product.price}
                        rating={product.rating}
                        reviews={product.reviews}
                        description={product.description}
                        discount={product.discount}
                        stockStatus={product.stockStatus}
                        className='mt-3'
                    />
                ))}
            </div>
            <div className="flex justify-center mt-4">
                <Button className="text-black border-2 border-gray-500 px-6 py-3 text-lg rounded-3xl hover:bg-gray-100 hover:border-black w-52 h-14" variant="outline">
                    View all
                </Button>
            </div>
        </div>
    )
}

export default NewDesignShow;
