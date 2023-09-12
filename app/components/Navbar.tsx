"use client"
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { AiOutlineSearch, AiOutlineHeart  } from 'react-icons/ai'
import { SlArrowDown } from 'react-icons/sl'

const navbarContents = [
  {
    label: "What's on",
    href: "/whats-on",
  },
  {
    label: "See and do",
    href: "/see-and-do",
  },
  {
    label: "Travel and stay",
    href: "/travel-and-stay",
  },
  {
    label: "City Card and tickets",
    href: "/city-card",
  },
];

const Top = () => {
  return (
    <div className="w-full h-10 bg-neutral-100 px-4 flex justify-between items-center text-xs">
      <ul className="flex gap-5 items-center h-full font-normal">
        <li className="font-bold">Discover Amsterdam</li>
        <li><a href="/">Meetings and Conventions</a></li>
        <li><a href="/">Business</a></li>
        <li><a href="/">Live, Work, and Study</a></li>
      </ul>
      <button className="font-medium">English</button>
    </div>
  );
};

const Navbar = () => {
  
  const [revealHeight, setRevealHeight] = useState('0rem');
  const [allowReveal, setRevealPermission] = useState(true)
  const expandedNavbar = useRef<HTMLDivElement>(null);

  const handleHover = () => {
    if(allowReveal){
      setRevealHeight('30rem');
    }
  };

  const handleMouseLeave = () => {
    setRevealHeight('0rem');
    setRevealPermission(true)
  };

  const handleLinkClick = () => {
    setRevealPermission(false)
    setRevealHeight('0rem');
  };

  useEffect(() => {
    const navbarContainers = document.querySelectorAll('.main-navigation-container');
    const navbarLinks = document.querySelectorAll('.main-navigation')

    navbarContainers.forEach((container) => {
      container.addEventListener('mouseenter', handleHover);
      container.addEventListener('mouseleave', handleMouseLeave);
    });

    navbarLinks.forEach((links) => {
      links.addEventListener('click', handleLinkClick)
    })

    return () => {
      navbarContainers.forEach((container) => {
        container.removeEventListener('mouseenter', handleHover);
        container.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
  
  return (
    <>
      <nav className="sticky top-0 h-max pointer-events-none border-b-neutral-200 border-b-2 bg-white w-screen z-50">
        <div className="w-full flex justify-between h-28 px-4"> 
          <ul className="flex gap-8 items-center h-full text-md select-none pointer-events-auto">
            <li className="font-bold" >
              <Link href="/">
              <div className="text-lg">
                <span className="text-red-500">I am</span>sterdam
              </div>
              <div>
                <p className="font-light text-xs text-neutral-600">Discover Amsterdam</p>
              </div>
              </Link>
            </li>
            
            {navbarContents.map((item) => (
              <li key={item.href} className="main-navigation-container h-full font-semibold flex gap-2 items-center">
                <Link href={item.href} className="main-navigation">{item.label}</Link>
                <SlArrowDown/>
              </li>
            ))}
          </ul>

          <ul className="flex gap-8 items-center h-full text-md">
            <li className="font-semibold bg-blue-600 text-white px-6 py-3 rounded-3xl"><a href="/">Order your City Card</a></li>
            <li className="font-semibold bg-neutral-100 rounded-full w-10 aspect-square h-auto grid place-items-center">
              <a href="/">
                <AiOutlineHeart />
              </a>
            </li>
            <li className="font-semibold bg-neutral-100 rounded-full w-10 aspect-square h-auto grid place-items-center">
              <a href="/">
                <AiOutlineSearch />
              </a>
            </li>
          </ul>
        </div>
        
        <div
          ref={expandedNavbar}
          className={`bg-white w-screen absolute reveal transition-height duration-300 shadow-2xl`}
          style={{ height: revealHeight }}
        >
        </div>
      </nav>
    </>
  );
};

export default Navbar 
