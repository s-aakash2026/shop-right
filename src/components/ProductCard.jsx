import { FaStar } from "react-icons/fa";

const ProductCard = ({ title, price, img, rating, reviews, isPrime }) => {
  return (
    <div className="card w-full bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden border border-gray-100 product-card">
      <figure className="h-48 bg-gray-50 p-4 product-image">
        <img src={img} alt={title} className="object-contain h-full w-full" />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-medium text-dark leading-tight line-clamp-2">
          {title}
        </h2>
        
        <div className="flex items-center gap-1 text-yellow-500 text-sm my-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-400 ml-1">({reviews})</span>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-xs align-top">$</span>
          <span className="text-2xl font-bold text-gray-900">{price}</span>
          <span className="text-sm text-gray-500 line-through">${price + 10}</span>
        </div>
        
        {isPrime && <p className="text-xs text-primary mb-3">✓ Prime Delivery</p>}

        <div className="card-actions justify-end">
          <button className="btn bg-amazon_btn text-black hover:bg-yellow-500 w-full border-none btn-sm text-xs font-bold uppercase tracking-wide">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
