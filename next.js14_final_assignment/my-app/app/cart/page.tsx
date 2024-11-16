'use client';

import { useEffect, useState } from 'react'; // Import useEffect and useState
import { useRouter } from 'next/navigation';
import { FaTrash } from 'react-icons/fa';
import Image from 'next/image'; // Import Image from next/image
import { Product } from "../page.jsx"; // Ensure Product is imported correctly from Home

export default function CartPage() {
  const router = useRouter();
  const [cart, setCart] = useState<Product[]>([]); // Initialize cart state
  const [loading, setLoading] = useState<boolean>(true); // Set loading state for cart

  // Load cart from localStorage if it exists
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        if (Array.isArray(parsedCart)) {
          setCart(parsedCart); // Update the cart state
        }
      } catch (error) {
        console.error('Error parsing cart from localStorage:', error);
      }
    }
    setLoading(false); // Stop loading after cart is fetched
  }, []);

  // Remove item from cart
  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage after removing item
  };

  if (loading) {
    return <p>Loading cart...</p>;
  }

  if (!cart.length) {
    return (
      <main style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>Your Cart is Empty</h2>
        <button
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '1rem',
          }}
          onClick={() => router.push('/')} // Navigate back to home
        >
          Go back to shopping
        </button>
      </main>
    );
  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Your Cart</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
        }}
      >
        {cart.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '1rem',
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            {product.image ? (
              <Image
                src={product.image}
                alt={product.title}
                width={150}
                height={150}
                style={{ objectFit: 'contain', marginBottom: '1rem' }}
              />
            ) : (
              <div style={{ marginBottom: '1rem', color: 'gray' }}>No image available</div>
            )}
            <h3>{product.title}</h3>
            <p>{product.description.substring(0, 100)}...</p>
            <p style={{ fontWeight: 'bold' }}>${product.price}</p>
            <button
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#e74c3c',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onClick={() => removeFromCart(product.id)} // Remove item from cart
            >
              <FaTrash style={{ marginRight: '8px' }} /> Remove
            </button>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          Total: ${cart.reduce((total, product) => total + product.price, 0)}
        </p>
        <button
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#2ecc71',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Proceed to Checkout
        </button>
      </div>
    </main>
  );
}
