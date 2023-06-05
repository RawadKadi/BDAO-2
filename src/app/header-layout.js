"use client";

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const Header = () => {
    const [isOpen, setOpen] = React.useState(false);
    const router = useRouter();

    const isActiveLink = (path) => {
        return router.pathname === path ? "border-b border-white" : "border-b border-transparent";
    };
    const toggleDropdown = () => {
        setOpen(!isOpen);
    };

    return (
        <header>
            <div className="header flex items-center justify-around pt-12">
                <div>
                    <Image className="" width={32} height={32} src="/B.svg" alt={""}></Image>
                </div>
                <div className="flex text-sm font-semibold fmi hidden md:block">
                    <Link href="/" passHref>
                        <span
                            className={`ml-12 pb-3 ${isActiveLink("/")} hover:border-white hover:border-b-2`}
                            aria-current={router.pathname === "/" ? "page" : undefined}
                        >
                            Home
                        </span>
                    </Link>
                    <Link href="/about" passHref>
                        <span
                            className={`ml-12 pb-3 ${isActiveLink("/about")} hover:border-white hover:border-b-2`}
                            aria-current={router.pathname === "/about" ? "page" : undefined}
                        >
                            About
                        </span>
                    </Link>
                    <Link href="/Ap" passHref>
                        <span
                            className={`ml-12 pb-3 ${isActiveLink("/Ap")} hover:border-white hover:border-b-2`}
                            aria-current={router.pathname === "/Ap" ? "page" : undefined}
                        >
                            Ap
                        </span>
                    </Link>
                    <Link href="/roadmap" passHref>
                        <span
                            className={`ml-12 pb-3 ${isActiveLink("/roadmap")} hover:border-white hover:border-b-2`}
                            aria-current={router.pathname === "/roadmap" ? "page" : undefined}
                        >
                            RoadMap
                        </span>
                    </Link>
                </div>

                <div className="">
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
                </div>
            </div>
        </header>
    );
};

export default Header;
