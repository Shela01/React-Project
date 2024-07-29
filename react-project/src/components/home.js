import React from 'react'
import Product from './product';

const Home =() =>{
const products = [
    {
        name: 'Computer',
        image: 'https://tech.co.za/wp-content/uploads/2024/01/Q6-O1a-500x375.jpg.webp',
    description: 'This is a sample product description for computer',
    price: 29.99,
    quality: 10,
    },
    {
    name: 'LGTV',
    image:'https://th.bing.com/th/id/OIP.Fqx4Gkba-6QxagwWHcisvwHaE6?w=263&h=180&c=7&r=0&o=5&pid=1.7',
    description: 'This is a sample product description for LGTV',
    price: 49.99,
    quality: 5,
    },
    {
    name: 'Printer',
    image: 'https://th.bing.com/th/id/OIP.5Z-1-dXUKSg1qpN1sBu0SAHaGQ?rs=1&pid=ImgDetMain',
    description: 'This is a sample product description for Printer',
    price: 19.99,
    quality: 20,
    },
    {
    name: 'Laptop',
    image: 'https://tech.co.za/wp-content/uploads/2023/03/IdeaPad-1-15IGL7-Cloud-Greya-500x375.png.webp',
    description: 'This is a sample product description for Laptop',
    price: 39.99,
    quality: 30,
    },
    ];
    

return (
    <div>
        <h1>Home Component</h1>
        {products.map((product, index) => (
        <Product
        key={index}
        name={product.name}
        image={product.image}
        description={product.description}
        price={product.price}
        quality={product.quality}
        />
    ))}
    </div>
);
};

export default Home;
    
