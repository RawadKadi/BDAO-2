"use client";

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const pathname = usePathname();

    const toggleDropdown = () => {
        setOpen(!isOpen);
    };

    // check scroll amount
    useEffect(() => {
        function checkScroll() {
            console.log(window.scrollY);
            setScrollY(window.scrollY);
        }

        window.addEventListener("scroll", checkScroll);

        return () => {
            window.removeEventListener("scroll", checkScroll);
        };
    }, []);

    return (
        <nav
            className={`bg-[#D86F60] md:bg-transparent  fixed w-full z-20 top-0 left-0  ${
                scrollY <= 100 ? "md:bg-transparent" : "md:bg-[#D86F60]"
            } transition-colors duration-300`}
        >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Brand */}
                <Link href="/" className="flex items-center">
                    <Image className="" width={32} height={32} src="/logos/B.svg" alt={""}></Image>
                </Link>

                <div className="flex md:order-2">
                    <button className="p-2 flex relative text-[14px] font-semibold border-2 border-white py-3">
                        <span>Leave a note</span>
                        <img width={18} className="ml-3 mt-1" src="/Arrow 1.svg" />
                    </button>
                </div>

                {/* Burger Button */}
                <div className="flex md:hidden">
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 text-sm text-white rounded-lg hover:bg-gray-100 hover:bg-opacity-25 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-sticky"
                        aria-expanded="true"
                        onClick={toggleDropdown}
                    >
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div
                    className={`header-menu items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                        isOpen ? "active" : ""
                    }`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col md:flex-row mt-4 md:mt-0 font-semibold  md:space-x-16 space-y-8 md:space-y-0 relative ">
                        <li>
                            <a
                                href="/"
                                className={`header-link  ${pathname === "/" ? "active" : ""}`}
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="/about"
                                className={`header-link  ${pathname === "/about" ? "active" : ""}`}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/Ap"
                                className={`header-link  ${pathname === "/ap" ? "active" : ""}`}
                            >
                                Ap
                            </a>
                        </li>
                        <li>
                            <a
                                href="/roadmap"
                                className={`header-link  ${
                                    pathname === "/roadmap" ? "active" : ""
                                }`}
                            >
                                RoadMap
                            </a>
                        </li>
                        <li className="down-bar"></li>
                    </ul>
                    {/* <Link
                        href="/"
                        className="ml-12 border-b border-transparent hover:border-white hover:border-b-2 pb-3"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="ml-12 border-b border-transparent hover:border-white hover:border-b-2 pb-3"
                    >
                        About
                    </Link>
                    <Link
                        href="/ap"
                        className="ml-12 border-b border-transparent hover:border-white hover:border-b-2 pb-3"
                    >
                        Ap
                    </Link>
                    <Link
                        href="/roadmap"
                        className="ml-12 border-b border-transparent hover:border-white hover:border-b-2 pb-3"
                    >
                        RoadMap
                    </Link> */}
                </div>

                {/* <div className="">
                    <button className="p-2 flex relative text-[14px] font-semibold border-2 border-white py-3">
                        <span>Leave a note</span>
                        <img width={18} className="ml-3 mt-1" src="/Arrow 1.svg" />
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
                </div> */}
            </div>
        </nav>
    );
};

export default Header;
