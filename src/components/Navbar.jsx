import { FaSearch, FaShoppingCart, FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar bg-primary text-white fixed top-0 z-50 px-4 h-16 shadow-md">
      <div className="flex-none gap-2">
        <button className="btn btn-square btn-ghost lg:hidden">
          <FaBars size={20} />
        </button>
        <a className="text-xl font-bold tracking-widest uppercase">shop-right.</a>
      </div>

      <div className="flex-1 mx-4 hidden lg:flex max-w-2xl">
        <div className="join w-full">
          <select className="select select-bordered join-item text-black bg-gray-100 focus:outline-none">
            <option>All</option>
            <option>Kitchen</option>
            <option>Bamboo</option>
          </select>
          <input 
            className="input input-bordered join-item w-full text-black focus:outline-none" 
            placeholder="Search sustainable goods..." 
          />
          <button className="btn join-item bg-amazon_btn border-none text-black hover:bg-yellow-500">
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="flex-none gap-4">
        <div className="hidden lg:block text-xs">
          <p>Hello, Guest</p>
          <p className="font-bold cursor-pointer">Account & Lists</p>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FaShoppingCart size={24} />
              <span className="badge badge-sm indicator-item bg-amazon_btn text-black border-none">2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
