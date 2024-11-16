'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // For cart icon
import { useRouter } from 'next/navigation';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

const PRODUCTS_PER_PAGE = 12; // Number of products per "page" (3 rows of 4 products each)

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [cart, setCart] = useState<Product[]>([]); // State to store the cart items
  const [addingToCart, setAddingToCart] = useState<boolean>(false); // Animation state
  const [currentPage, setCurrentPage] = useState<number>(0); // State for carousel index
  const router = useRouter();

  // Fetching products only on client side
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) throw new Error('Failed to fetch products');
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred');
        }
      }
    }

    fetchProducts();

    // Load cart from localStorage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart)); // Parse and set the cart from localStorage
    }
  }, []); // Empty dependency array ensures it's run only once on mount

  // Function to add product to cart with animation
  const addToCart = (product: Product) => {
    setAddingToCart(true);
    setTimeout(() => {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save updated cart to localStorage
      setAddingToCart(false);
    }, 1000); // Reset animation after 1 second
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const goToNextPage = () => {
    if (currentPage < Math.ceil(products.length / PRODUCTS_PER_PAGE) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (error) {
    return <p style={{ color: 'red', textAlign: 'center' }}>Error: {error}</p>;
  }

  if (!products.length) {
    return <p style={{ textAlign: 'center' }}>Loading...</p>;
  }

  const startIndex = currentPage * PRODUCTS_PER_PAGE;
  const selectedProducts = products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  return (
    <main style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Navigation Bar */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1rem 2rem',
          backgroundColor: '#333',
          color: 'white',
          alignItems: 'center',
        }}
      >
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          E-Commerce Site
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a
            href="#home"
            onClick={() => scrollToSection('home')}
            style={navLinkStyle}
          >
            Home
          </a>
          <a
            href="#products"
            onClick={() => scrollToSection('products')}
            style={navLinkStyle}
          >
            Products
          </a>
          <a
            href="#about"
            onClick={() => scrollToSection('about')}
            style={navLinkStyle}
          >
            About
          </a>
          <a href="/cart" style={{ ...navLinkStyle, display: 'flex', alignItems: 'center' }}>
            <FaShoppingCart size={24} />
            <span style={{ marginLeft: '8px' }}>{cart.length}</span>
          </a>
        </div>
      </nav>

      <h1 id="home" style={{ textAlign: 'center', padding: '2rem', fontSize: '35px' }}>
        Trending today
      </h1>

      {/* Products Section */}
      <div
        id="products"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '2rem',
          padding: '1rem 2rem',
        }}
      >
        {selectedProducts.map((product) => (
          <div
            key={product.id}
            style={productCardStyle}
          >
            <Image
              src={product.image}
              alt={product.title}
              width={250} // Fixed width for uniformity
              height={250} // Fixed height for uniformity
              style={{ objectFit: 'cover', marginBottom: '1rem', borderRadius: '8px' }}
            />
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#fff', marginBottom: '0.5rem' }}>
              {product.title}
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#ccc', marginBottom: '1rem' }}>
              {product.description.substring(0, 75)}...
            </p>
            <p style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#fff' }}>${product.price}</p>
            <button
              style={addToCartButtonStyle}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginTop: '2rem',
        }}
      >
        <button
          onClick={goToPrevPage}
          style={paginationButtonStyle}
        >
          Previous
        </button>
        <button
          onClick={goToNextPage}
          style={paginationButtonStyle}
        >
          Next
        </button>
      </div>

      {/* About Section */}
      <section
        id="about"
        style={{
          padding: '4rem 2rem',
          backgroundColor: 'black',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <h2 style={{fontSize: '1.7rem'}}>About Us</h2>
        <p style={{ fontSize: '1.1rem', color: '#ddd', maxWidth: '100vw', margin: 'auto' }}>
          Welcome to Simple E-Commerce, where we bring the best products right to your door. Our goal is to provide an easy and efficient shopping experience with a wide range of quality products. Whether you are shopping for electronics, fashion, or home goods, we have something for everyone. Our team is dedicated to delivering the best customer service and ensuring your shopping experience is seamless.
        </p>
      </section>
    </main>
  );
}

// Inline styling for the navbar links
const navLinkStyle: React.CSSProperties = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 15px',
  fontSize: '1rem',
  cursor: 'pointer',
  padding: '5px 10px',
  borderRadius: '4px',
  transition: 'background-color 0.3s',
};

// Product Card Styling (Larger and Well Aligned)
const productCardStyle: React.CSSProperties = {
  backgroundColor: '#2d2d2d', // Match with the dark background
  borderRadius: '8px',
  padding: '1rem',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
  height: 'auto', // Allow flexible height
  width: '100%',
  maxWidth: '250px',
  overflow: 'hidden',
  color: 'white', // Ensure text is readable on dark background
};

const addToCartButtonStyle: React.CSSProperties = {
  padding: '0.5rem 1rem',
  backgroundColor: '#0070f3',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const paginationButtonStyle: React.CSSProperties = {
  padding: '0.5rem 1rem',
  backgroundColor: '#0070f3',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};
