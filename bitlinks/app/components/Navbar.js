import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <nav className="h-16 bg-purple-700 flex justify-between px-3 items-center text-white">
        <div className="logo font-bold text-lg"><img src="url.png" alt="logo" width={30} /></div>
        <ul className="flex justify-center gap-4 items-center">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/shorten">
            <li>Shortner</li>
          </Link>
          <Link href="/contact">
            <li>Contact Us</li>
          </Link>
          <li className="flex gap-3">
            <Link href="/shorten">
              <button className="cursor-pointer bg-purple-500  rounded-lg shadow-lg p-3 py-1 font-bold">
                Try Now
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
