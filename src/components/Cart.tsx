import React from 'react';
import { useCartStore } from '../store/cartStore';
import { Trash2 } from 'lucide-react';

export const Cart: React.FC = () => {
  const { items, removeItem, clearCart } = useCartStore();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-4">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <div className="flex justify-between items-center font-bold text-lg">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="mt-4 space-y-2">
              <button
                onClick={() => clearCart()}
                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
              >
                Clear Cart
              </button>
              <button
                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};