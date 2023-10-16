import React from "react";
import { FaSearch } from "react-icons/fa";
import productAImage from "../assets/product-a.jpg"; // Import the image
import productBImage from "../assets/product-b.jpg"; // Import the image

// Sample product data
const products = [
  {
    name: "Product A",
    description:
      "There are many variations of passages of Lorem Ipsum available",
    stock: 100,
    price: "$10",
    totalSale: "$1000",
    image: productAImage, // Use the imported image
  },
  {
    name: "Product B",
    description: " If you are going to use a passage of Lorem Ipsum",
    stock: 50,
    price: "$20",
    totalSale: "$1000",
    image: productBImage, // Use the imported image
  },
  // Add more products as needed
];

const ProductSell = () => {
  return (
    <div className="p-4 m-4 md:p-6 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col items-center md:flex-row justify-between">
        <h1 className="text-2xl font-bold mb-4">Product Sell</h1>
        <div className="flex items-center space-x-4">
          <div className="relative flex items-center">
            <FaSearch className="absolute text-gray-400 left-2" />
            <input
              type="text"
              placeholder="Search"
              className="py-2 pl-8 pr-3 border rounded-lg w-24 md:w-full" // Reduce width on mobile screens
            />
          </div>
          <select className="p-2 border rounded-lg w-24 md:w-full">
            <option>Last 7 days</option>
            <option selected>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto mt-4">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="py-2 text-left">Product Name</th>
              <th className="py-2 text-center">Stock</th>
              <th className="py-2 text-center">Price</th>
              <th className="py-2 text-center">Total Sale</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 text-left">
                  <div className="flex items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 object-contain h-12 mr-2 rounded-lg hidden md:block"
                    />
                    <div>
                      <p className="text-lg font-semibold">{product.name}</p>
                      <p className="text-sm text-gray-600">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-2 text-center">{product.stock}</td>
                <td className="py-2 text-center">{product.price}</td>
                <td className="py-2 text-center">{product.totalSale}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductSell;
