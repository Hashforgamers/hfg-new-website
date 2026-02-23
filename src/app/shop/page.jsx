"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ShopGearPage() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products = [
    { id: 1, name: "Gaming Headset", price: 2999 },
    { id: 2, name: "Mechanical Keyboard", price: 4499 },
    { id: 3, name: "RGB Gaming Mouse", price: 1999 },
    { id: 4, name: "PS5 Controller", price: 5999 },
    { id: 5, name: "Gaming Chair", price: 12999 },
    { id: 6, name: "Gaming Mousepad", price: 999 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-16 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold 
        bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
        bg-clip-text text-transparent">
          Shop Gaming Gear
        </h1>

        <button
          onClick={() => setIsCartOpen(true)}
          className="bg-purple-600 px-6 py-2 rounded-xl hover:bg-purple-500 transition"
        >
          Cart ({cart.length})
        </button>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-900 p-6 rounded-2xl 
            border border-purple-500/20 shadow-lg"
          >
            <div className="h-48 bg-zinc-800 rounded-xl mb-6 flex items-center justify-center text-gray-500">
              Product Image
            </div>

            <h2 className="text-xl font-semibold">
              {product.name}
            </h2>

            <p className="text-green-400 font-bold mt-2">
              ₹{product.price}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="mt-6 w-full bg-cyan-500 py-2 rounded-xl hover:bg-cyan-400 transition"
            >
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>

      {/* CART MODAL */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
          <div className="bg-zinc-900 p-8 rounded-2xl w-[95%] max-w-md relative">

            <button
              onClick={() => setIsCartOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">
              Your Cart
            </h2>

            {cart.length === 0 ? (
              <p className="text-gray-400 text-center">
                Cart is empty
              </p>
            ) : (
              <>
                <ul className="space-y-3 mb-6">
                  {cart.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between text-sm"
                    >
                      <span>{item.name}</span>
                      <span>₹{item.price}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-right text-green-400 font-bold mb-6">
                  Total: ₹{totalPrice}
                </div>

                <button
                  onClick={() => {
                    alert("Order Placed Successfully 🎮");
                    setCart([]);
                    setIsCartOpen(false);
                  }}
                  className="w-full bg-green-500 py-3 rounded-xl hover:bg-green-400 transition"
                >
                  Checkout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}