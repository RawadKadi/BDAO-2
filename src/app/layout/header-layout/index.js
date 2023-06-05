"use client";

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
    const [isOpen, setOpen] = React.useState(false);

    const toggleDropdown = () => {
        setOpen(!isOpen);
    };

    return (
        <nav className="bg-[#F3B79D] fixed w-full z-20 top-0 left-0 border-b ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" class="flex items-center">
                    <Image className="" width={32} height={32} src="/B.svg" alt={""}></Image>
                </Link>
                {/* <div>
                    <Link href="/">
                        <Image className="" width={32} height={32} src="/B.svg" alt={""}></Image>
                    </Link>
                </div> */}
                <div
                    class="items-center justify-between w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 border-opacity-20 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                        <li>
                            <a
                                href="/"
                                class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:rounded-none md:bg-transparent md:text-blue-700 md:p-0 ml-12 border-b border-transparent hover:border-white hover:border-b-2"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="/about"
                                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/ap"
                                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Ap
                            </a>
                        </li>
                        <li>
                            <a
                                href="/roadmap"
                                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                RoadMap
                            </a>
                        </li>
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
