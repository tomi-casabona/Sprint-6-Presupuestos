import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-gradient-to-r from-indigo-400 to-red-400 justify-evenly w-full rounded    ">
      <Link
        className="btn btn-ghost text-base w-1/2 md:w-56  hover:ring-2 hover:ring-green-500"
        to="/"
      >
        Home
      </Link>
      <Link
        className="btn btn-ghost text-base w-1/2   md:w-56 hover:ring-2 hover:ring-green-500"
        to="/QuotationMaker"
      >
        Make your quote
      </Link>
    </div>
  );
}
