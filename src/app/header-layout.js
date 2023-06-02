"use client";

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Header = () => {

  const[isOpen , setOpen] = React.useState(false)

  const toggleDropdown = () => {
    setOpen(!isOpen)
  }

    return (
      <header>
      <div className='header flex items-center justify-around pt-12'>
        <div>
          <Image
              className=''
              width={32}
              height={32}
              src="/B.svg"
              alt={''}         
          >
          </Image>
        </div>
        <div className='flex text-sm font-semibold fmi hidden md:block'>
          <Link href='/' className='ml-12 border-b border-transparent hover:border-white hover:border-b-2 pb-3'>
            Home
          </Link>
          <Link href='/about' className='ml-12 border-b border-transparent hover:border-white hover:border-b-2 pb-3'>
            About
          </Link>
          <Link href='/Ap' className='ml-12 border-b border-transparent hover:border-white hover:border-b-2 pb-3'>
            Ap
          </Link>
          <Link href='/roadmap' className='ml-12 border-b border-transparent hover:border-white hover:border-b-2 pb-3'>
            RoadMap
          </Link>
        </div>
        <div className="">
            <button className='p-2 flex relative text-[14px] font-semibold border-2 border-white py-3'>
              <span>Leave a note</span>
              <img width={18} className='ml-3 mt-1' src="/Arrow 1.svg"/>
            </button>
        </div>
        <div onClick={toggleDropdown} className="md:hidden cursor-pointer">
          <Image
          className=""
          width={30}
          height={30}
          src="/tabler-icon-menu-2.svg"
          alt=""
          ></Image>
          </div>
      </div>
      </header>
    );
  };

  export default Header;