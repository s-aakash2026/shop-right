const Footer = () => {
  return (
    <footer className="bg-dark text-white py-16 px-4" data-scroll-section>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-lg mb-4">shop-right</h4>
            <p className="text-gray-300 text-sm">Sustainable kitchenware for the conscious home.</p>
          </div>
          <div>
            <h5 className="font-bold mb-4">Shop</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">All Products</a></li>
              <li><a href="#" className="hover:text-white">Best Sellers</a></li>
              <li><a href="#" className="hover:text-white">New Arrivals</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Company</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Newsletter</h5>
            <div className="flex flex-col gap-2">
              <input type="email" placeholder="your@email.com" className="px-3 py-2 rounded text-black text-sm" />
              <button className="bg-amazon_btn text-black font-bold py-2 rounded hover:bg-yellow-500">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 shop-right. All rights reserved. | Sustainable kitchenware for eco-conscious living.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
