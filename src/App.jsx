import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import BrandStory from './components/BrandStory';
import Footer from './components/Footer';
import useLocoScroll from './hooks/useLocoScroll';
import './App.css';

const products = [
  { id: 1, title: "Premium Bamboo Cutting Board Set", price: 29, img: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=400&fit=crop", rating: 4.8, reviews: 128, isPrime: true },
  { id: 2, title: "Eco-Friendly Reusable Utensils", price: 14, img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=400&fit=crop", rating: 4.9, reviews: 95, isPrime: true },
  { id: 3, title: "Organic Cotton Kitchen Towels", price: 19, img: "https://images.unsplash.com/photo-1564540570661-1875ec29a514?w=400&h=400&fit=crop", rating: 4.7, reviews: 142, isPrime: false },
  { id: 4, title: "Glass & Bamboo Spice Jars", price: 34, img: "https://images.unsplash.com/photo-1578902494516-52f1f40a1efb?w=400&h=400&fit=crop", rating: 4.9, reviews: 87, isPrime: true },
  { id: 5, title: "Sustainable Bamboo Dinnerware", price: 45, img: "https://images.unsplash.com/photo-1584568694244-14fbfdc445a1?w=400&h=400&fit=crop", rating: 5.0, reviews: 203, isPrime: true },
  { id: 6, title: "Eco Friendly Lunch Boxes", price: 24, img: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=400&fit=crop", rating: 4.8, reviews: 156, isPrime: true },
  { id: 7, title: "Natural Bamboo Spatula Set", price: 18, img: "https://images.unsplash.com/photo-1578902494516-52f1f40a1efb?w=400&h=400&fit=crop", rating: 4.6, reviews: 112, isPrime: false },
  { id: 8, title: "Premium Bamboo Knife Block", price: 52, img: "https://images.unsplash.com/photo-1564540570661-1875ec29a514?w=400&h=400&fit=crop", rating: 4.9, reviews: 89, isPrime: true },
];

function App() {
  const [preloader, setPreloader] = useState(true);
  useLocoScroll(!preloader);

  useEffect(() => {
    setTimeout(() => setPreloader(false), 500);
  }, []);

  if (preloader) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-primary">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">shop-right</h1>
          <div className="w-16 h-1 bg-amazon_btn mx-auto animate-pulse rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans bg-secondary/20 min-h-screen text-dark">
      <Navbar />
      <div id="main-container" data-scroll-container>
        <Hero />
        <section className="py-24 px-4 lg:px-12 max-w-7xl mx-auto" data-scroll-section>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold border-l-4 border-primary pl-4 mb-2">Best Sellers</h2>
              <p className="text-gray-600 pl-4 text-lg">Handpicked sustainable favorites</p>
            </div>
            <a href="#" className="hidden md:block text-primary hover:text-dark font-semibold underline underline-offset-4">View all →</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(p => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </section>
        <BrandStory />
        <Footer />
      </div>
    </div>
  );
}

export default App;
