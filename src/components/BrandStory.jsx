const BrandStory = () => {
  return (
    <section className="bg-primary text-white py-32 px-4" data-scroll-section>
      <div className="max-w-4xl mx-auto text-center" data-scroll data-scroll-speed="2">
        <h2 className="text-5xl font-bold mb-8">Why shop-right?</h2>
        <p className="text-lg opacity-90 leading-relaxed mb-8">
          We believe in quality that doesn't cost the earth. Every product in our catalog is 
          vetted for sustainability, durability, and ethical production. From bustling city kitchens 
          to cozy countryside homes, shop-right brings the future of sustainable living to your doorstep.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div>
            <h3 className="text-2xl font-bold mb-3">100% Sustainable</h3>
            <p className="opacity-80">Materials sourced responsibly</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">Lifetime Quality</h3>
            <p className="opacity-80">Built to last decades, not seasons</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">Fair Trade</h3>
            <p className="opacity-80">Ethical production practices</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
