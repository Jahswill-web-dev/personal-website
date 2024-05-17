'use client';
import { Sling as Hamburger } from "hamburger-react";
import Image from "next/image";
import logo from "../../public/images/JDev.png";
import Link from "next/link";
import { useState } from "react";
function Nav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () =>{
        setIsMobileMenuOpen(!isMobileMenuOpen)
        console.log(isMobileMenuOpen)
    }
  return (
    <nav className="pt-3 max-w-7xl mx-auto">
      <div className="flex justify-between items-center ">
        {/* logo  */}
        <div className="flex justify-between items-center relative z-10">
          <Image src={logo} width={70} height={70} className="w-[5rem]" />
        </div>
        {/* Navigation links desktop */}
        <div className="hidden md:flex md:gap-4">
          <Link href="#about" className="text-primary font-medium">About</Link>
          <Link href="#contact" className="text-primary font-medium">Contact</Link>
          <Link href="#tech" className="text-primary font-medium">Tech Stack</Link>
          <Link href="#portfolio" className="text-primary font-medium">Portfolio</Link>
        </div> 
        {/* hamburger */}
        <div className="md:hidden relative z-10" onClick={toggleMobileMenu}>
          <Hamburger color="#3B88ED" />
        </div>
        {/* Mobile navlist */}
         <div className={`md:hidden ${isMobileMenuOpen ?'':'hidden'} absolute text-primary text-5xl 
        flex flex-col justify-center items-center gap-10 top-0 left-0 right-0 bottom-0 bg-black`}>
          <Link href="#about" className="">About</Link>
          <Link href="#contact">Contact</Link>
          <Link href="#tech">Tech Stack</Link>
          <Link href="#portfolio">Portfolio</Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
