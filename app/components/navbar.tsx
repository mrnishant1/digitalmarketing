import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsGoogle } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";
import { User } from "firebase/auth";
import { signinhandler } from "../signin/signInHandler";

export default function Navbar({ user }:{user:User|null}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full rounded-2xl flex justify-between items-center px-6 py-3 z-[100] relative">
      {/* Brand */}
      <div className="text-4xl md:text-6xl font-sans font-bold text-[#003566] ">
        LeadZup
      </div>

      {/* Hamburger button (mobile only) */}
      <button
        className="md:hidden text-3xl text-[#003566] focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Nav Links */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } absolute top-full left-0 w-full flex-col font-sans rounded-2xl backdrop-blur-2xl md:backdrop-blur-none text-gray-800 md:bg-transparent md:static md:flex md:flex-row justify-end items-center md:space-x-8 text-xl md:text-2xl transition-all duration-300`}
      >
        <Link
          href="#howitworks"
          className="py-2 md:py-0 hover:text-emerald-400 hover:scale-[1.05] active:scale-[0.95] hover:underline transition-all duration-200"
          onClick={() => setMenuOpen(false)}
        >
          How We Work
        </Link>

        <Link
          href="/pricing"
          className="py-2 md:py-0 hover:text-emerald-400 hover:scale-[1.05] active:scale-[0.95] hover:underline transition-all duration-200"
          onClick={() => setMenuOpen(false)}
        >
          Pricing
        </Link>

        {user === null ? (
          <button
            onClick={() => {
              signinhandler();
              setMenuOpen(false);
            }}
            className="flex items-center gap-2.5 hover:scale-[1.05] active:scale-[0.95] hover:underline transition-all duration-200 py-2 md:py-0"
          >
            <BsGoogle /> Login
          </button>
        ) : (
          <>
            <Link
              href="/profile"
              className="py-2 md:py-0 hover:text-emerald-400 hover:scale-[1.05] active:scale-[0.95] hover:underline transition-all duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </Link>

            <Link
              href="/profile"
              className="w-[35px] h-[35px] rounded-full bg-amber-50 overflow-hidden cursor-pointer hover:scale-[1.1] active:scale-[0.95] mt-2 md:mt-0"
              onClick={() => setMenuOpen(false)}
            >
              <Image
                alt="profile photo of users"
                src={user?.photoURL || "/"}
                height={35}
                width={35}
              />
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
