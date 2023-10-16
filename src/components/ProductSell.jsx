import React from "react";
import { FaSearch } from "react-icons/fa";
import productAImage from "../assets/product-a.jpg";
import productBImage from "../assets/product-b.jpg";

const products = [
  {
    name: "Product A",
    description:
      "There are many variations of passages of Lorem Ipsum available",
    stock: 100,
    price: "$10",
    totalSale: "$1000",
    image: productAImage,
  },
  {
    name: "Product B",
    description: "If you are going to use a passage of Lorem Ipsum",
    stock: 50,
    price: "$20",
    totalSale: "$1000",
    image: productBImage,
  },
];

const ProductSell = () => {
  return (
    <div className="p-4 m-4 bg-white rounded-lg shadow-lg md:p-6">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <h1 className="mb-4 text-2xl font-bold">Product Sell</h1>
        <div className="flex items-center space-x-4">
          <div className="relative flex items-center">
            <FaSearch className="absolute text-gray-400 left-2" />
            <input
              type="text"
              placeholder="Search"
              className="w-24 py-2 pl-8 pr-3 border rounded-lg md:w-full"
            />
          </div>
          <select className="w-24 p-2 border rounded-lg md:w-full">
            <option>Last 7 days</option>
            <option selected>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>

      <div className="mt-4 overflow-x-auto">
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
                      className="hidden object-contain w-16 h-12 mr-2 rounded-lg md:block"
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
