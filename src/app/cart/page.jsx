"use client";

import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  resetCart,
} from "../../../redux/shopperSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.shopper.productData);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold">Your cart is empty 🛒</h2>
      </div>
    );
  }

  return (
    <div className="max-w-[1000px] mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border border-gray-300 p-4 rounded-lg shadow-sm"
          >
            {/* Image + Details */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => dispatch(decreaseQuantity({ id: item.id }))}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
              >
                -
              </button>
              <span className="font-semibold">{item.quantity}</span>
              <button
                onClick={() => dispatch(increaseQuantity({ id: item.id }))}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
              >
                +
              </button>
            </div>

            {/* Subtotal + Delete */}
            <div className="flex items-center gap-4">
              <p className="font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => dispatch(deleteItem({ id: item.id }))}
                className="text-red-500 font-semibold hover:underline cursor-pointer"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total + Reset */}
      <div className="mt-8 flex justify-between items-center border-t border-gray-300  pt-4">
        <h2 className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
        <button
          onClick={() => dispatch(resetCart())}
          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartPage;

