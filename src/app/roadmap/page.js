"use client";
import "./roadmap.scss";
import React, { useEffect } from "react";

export default function useRoadmap() {
    const [activeYear, setActiveYear] = React.useState(null);

    useEffect(() => {
        setActiveYear(1);
    }, []);

    const handleYearClick = (year) => {
        setActiveYear(year);
    };

    const renderContent = () => {
        switch (activeYear) {
            case 1:
                return (
                    <div className="ccontainer">
                        <div className="row transform translate-x-[0rem] md:translate-x-[-5rem] lg:translate-x-[-14rem]">
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>

                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:block`}
                            ></div>
                            <div className="boxes b border-2 border-white  bg-[#E26E5D]">
                                <div className="flex gap-5 mt-4 ml-4">
                                    <span className="fmb">1</span>
                                    <span className="font-semibold">
                                        Formation of UAE <br /> Legal Entity
                                    </span>{" "}
                                    {/* Added font-semibold class */}
                                </div>
                            </div>
                            <div
                                className={`boxes border-2 border-white  hidden md:block`}
                            ></div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>
                        </div>
                        <div className="row transform translate-x-[-0rem] md:translate-x-[0rem]">
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>

                            <div
                                className={`boxes border-2 border-white  bg-opacity-30 hidden md:block`}
                            ></div>
                            <div className="boxes b border-2 border-white h-[362.44px] w-[623.37px] bg-[#E26E5D] mx-auto md:mx-0 md:text-center">
                                <div className="flex gap-5 mt-4 ml-4">
                                    <span className="fmb">2</span>{" "}
                                    {/* Added inline style for right margin */}
                                    <span className="font-semibold">
                                        Blockchain Grant <br /> Application
                                    </span>
                                </div>
                            </div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>

                            <div
                                className={`boxes border-2 border-white  bg-opacity-30 hidden md:block`}
                            ></div>
                        </div>
                        <div className="row transform translate-x-[0rem] md:translate-x-[-19rem]">
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:block`}
                            ></div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>

                            <div className="boxes b">
                                <div className="flex gap-5 mt-4 ml-4">
                                    <span className="fmb">3</span>{" "}
                                    {/* Added inline style for right margin */}
                                    <span className="font-semibold">
                                        Full Scale Project
                                        <br /> Developpement
                                    </span>
                                </div>
                            </div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:block`}
                            ></div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>
                        </div>
                        <div className="row transform translate-x-[0rem] md:translate-x-[-6rem]">
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:block`}
                            ></div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>

                            <div className="boxes b">
                                <div className="flex gap-5 mt-4 ml-4">
                                    <span className="fmb">4</span>{" "}
                                    {/* Added inline style for right margin */}
                                    <span className="font-semibold">
                                        Smart Contract Code <br />
                                        Review, Testing & <br />
                                        Audit via Certik
                                    </span>
                                </div>
                            </div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>

                            <div
                                className={`boxes border-2 border-white  bg-opacity-30 hidden md:block`}
                            ></div>
                        </div>
                        <div className="row transform  md:translate-x-[0rem]">
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:block`}
                            ></div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>

                            <div className="boxes b">
                                <div className="flex gap-5 mt-4 ml-4">
                                    <span className="fmb">5</span>{" "}
                                    {/* Added inline style for right margin */}
                                    <span className="font-semibold">
                                        Active Participant <br />
                                        Formation, Vote and <br />
                                        Selection
                                    </span>
                                </div>
                            </div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>

                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:block`}
                            ></div>
                        </div>
                        <div className="row transform  md:translate-x-[-10rem]">
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:block`}
                            ></div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>

                            <div className="boxes b">
                                {" "}
                                <div className="flex gap-5 mt-4 ml-4">
                                    <span className="fmb">6</span>{" "}
                                    {/* Added inline style for right margin */}
                                    <span className="font-semibold">
                                        BrickLayer Tenant <br />
                                        Acquisition Service
                                        <br />
                                        and release 1st <br /> Partner Occupier
                                    </span>
                                </div>
                            </div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>

                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:block`}
                            ></div>
                        </div>
                        <div className="row transform md:translate-x-[0rem]">
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:block`}
                            ></div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>

                            <div className="boxes b">
                                <div className="flex gap-5 mt-4 ml-4">
                                    <span className="fmb">7</span>{" "}
                                    {/* Added inline style for right margin */}
                                    <span className="font-semibold">
                                        Tax Qualification : <br />
                                        Business Expense
                                        <br />
                                        Opportunities
                                    </span>
                                </div>
                            </div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>

                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:block`}
                            ></div>
                        </div>
                        <div className="row transform  md:translate-x-[-8rem]">
                            <div
                                className={`boxes border-2 border-white  bg-opacity-30 hidden md:block`}
                            ></div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>

                            <div className="boxes b">
                                {" "}
                                <div className="flex gap-5 mt-4 ml-4">
                                    <span className="fmb">8</span>{" "}
                                    {/* Added inline style for right margin */}
                                    <span className="font-semibold">
                                        Genesis Asset Vote <br />
                                        Proposal
                                    </span>
                                </div>
                            </div>
                            <div
                                className={`boxes border-2 border-white  bg-opacity-30 hidden md:block`}
                            ></div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>
                        </div>
                        <div className="row transform  md:translate-x-[-3rem]">
                            <div
                                className={`boxes border-2 border-white  bg-opacity-30 hidden md:block`}
                            ></div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>

                            <div className="boxes b">
                                <div className="flex gap-5 mt-4 ml-4">
                                    <span className="fmb">9</span>{" "}
                                    {/* Added inline style for right margin */}
                                    <span className="font-semibold">BRICKS Token Issuance</span>
                                </div>
                            </div>
                            <div
                                className={`boxes border-2 border-white  bg-opacity-30 hidden md:block`}
                            ></div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>
                        </div>
                        <div className="row transform  md:translate-x-[-15rem]">
                            <div
                                className={`boxes border-2 border-white  bg-opacity-30 hidden md:block`}
                            ></div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>

                            <div className="boxes b">
                                <div className="flex gap-5 mt-4 ml-4">
                                    <span className="fmb">10</span>{" "}
                                    {/* Added inline style for right margin */}
                                    <span className="font-semibold">
                                        Launch Commercial
                                        <br />
                                        Real Estate
                                        <br />
                                        Introduction
                                        <br />
                                        Program
                                    </span>
                                </div>
                            </div>
                            <div
                                className={`boxes border-2 border-white  bg-opacity-30 hidden md:block`}
                            ></div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>
                        </div>
                        <div className="row transform  md:translate-x-[rem]">
                            <div
                                className={`boxes border-2 border-white  bg-opacity-30 hidden md:block`}
                            ></div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>

                            <div className="boxes b">
                                <div className="flex gap-5 mt-4 ml-4">
                                    <span className="fmb">11</span>{" "}
                                    {/* Added inline style for right margin */}
                                    <span className="font-semibold">
                                        Launch Brickworks
                                        <br />
                                        Staking Program
                                    </span>
                                </div>
                            </div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:block`}
                            ></div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>
                        </div>
                        <div className="row transform md:translate-x-[-8rem]">
                            <div
                                className={`boxes border-2 border-white  bg-opacity-30 hidden md:block`}
                            ></div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>

                            <div className="boxes b">
                                <div className="flex gap-5 mt-4 ml-4">
                                    <span className="fmb">12</span>{" "}
                                    {/* Added inline style for right margin */}
                                    <span className="font-semibold">
                                        Genesis Layer
                                        <br />
                                        Transaction
                                        <br />
                                        Completition &<br />
                                        Trasnfer to
                                        <br />
                                        Treasury
                                    </span>
                                </div>
                            </div>
                            <div
                                className={`boxes border-2 border-white  bg-opacity-30 hidden md:block`}
                            ></div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>
                        </div>
                        <div className="row transform md:translate-x-[-15rem]">
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>

                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:block`}
                            ></div>
                            <div className="boxes b mb-56">
                                <div className="flex gap-5 mt-4 ml-4">
                                    <span className="fmb">13</span>{" "}
                                    {/* Added inline style for right margin */}
                                    <span className="font-semibold">
                                        Release 2nd Partner
                                        <br />
                                        Occupier
                                    </span>
                                </div>
                            </div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:block`}
                            ></div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="ccontainer">
                        <div className="row transform translate-x-[0rem] md:translate-x-[-5rem] lg:translate-x-[-14rem]">
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>

                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:block`}
                            ></div>
                            <div className="boxes b border-2 border-white  bg-[#E26E5D]">
                                <div className="flex gap-5 mt-4 ml-4">
                                    <span className="fmb">1</span>
                                    <span className="font-semibold">
                                        Launch of Bricklayer Listing Portal Bricklayer <br /> NFT
                                        Asset Sales and Escrow Platform Voting Platform
                                    </span>{" "}
                                    {/* Added font-semibold class */}
                                </div>
                            </div>
                            <div
                                className={`boxes border-2 border-white h-[362.44px] w-[623.37px] bg-opacity-30 hidden md:block`}
                            ></div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>
                        </div>
                        <div className="row transform translate-x-[-0rem] md:translate-x-[0rem]">
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>

                            <div
                                className={`boxes border-2 border-white h-[362.44px] w-[623.37px] bg-opacity-30 hidden md:block`}
                            ></div>
                            <div className="boxes b border-2 border-white h-[362.44px] w-[623.37px] bg-[#E26E5D] mx-auto md:mx-0 md:text-center">
                                <div className="flex gap-5 mt-4 ml-4">
                                    <span className="fmb">2</span>{" "}
                                    {/* Added inline style for right margin */}
                                    <span className="font-semibold">
                                        Layer 2 Proposals Release 3rd <br /> Partner Occupier Launch
                                        the Brickworks Tapestry
                                    </span>
                                </div>
                            </div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>

                            <div
                                className={`boxes border-2 border-white h-[362.44px] w-[623.37px] bg-opacity-30 hidden md:block`}
                            ></div>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="ccontainer">
                        <div className="row transform translate-x-[0rem] md:translate-x-[-5rem] lg:translate-x-[-14rem]">
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>

                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:block`}
                            ></div>
                            <div className="boxes b border-2 border-white  bg-[#E26E5D]">
                                <div className="flex gap-5 mt-4 ml-4">
                                    <span className="fmb">1</span>
                                    <span className="font-semibold">
                                        Decentralized Certification Release 4th and 5th <br />{" "}
                                        Partner Occupiers Voting Platform
                                    </span>{" "}
                                    {/* Added font-semibold class */}
                                </div>
                            </div>
                            <div
                                className={`boxes border-2 border-white h-[362.44px] w-[623.37px] bg-opacity-30 hidden md:block`}
                            ></div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>
                        </div>
                        <div className="row transform translate-x-[-0rem] md:translate-x-[0rem]">
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>

                            <div
                                className={`boxes border-2 border-white h-[362.44px] w-[623.37px] bg-opacity-30 hidden md:block`}
                            ></div>
                            <div className="boxes b border-2 border-white h-[362.44px] w-[623.37px] bg-[#E26E5D] mx-auto md:mx-0 md:text-center">
                                <div className="flex gap-5 mt-4 ml-4">
                                    <span className="fmb">2</span>{" "}
                                    {/* Added inline style for right margin */}
                                    <span className="font-semibold">
                                        – Lending and Financial <br /> Partnerships
                                    </span>
                                </div>
                            </div>
                            <div
                                className={`boxes border-2 border-white bg-opacity-30 hidden md:hidden lg:block`}
                            ></div>

                            <div
                                className={`boxes border-2 border-white h-[362.44px] w-[623.37px] bg-opacity-30 hidden md:block`}
                            ></div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };
    return (
        <>
            <div className="main overflow-x-hidden ">
                <div className="bg-road">
                    <div className="title fmb text-4xl sm:text-7xl text-center mt-14">ROADMAP</div>
                    <div className="bg-blur mt-8">
                        <div className="flex justify-center gap-6 py-4">
                        <button
        className={`bg-transparent hover:bg-[#E26E5D] border-3 border-white hover:border-[#E26E5D] fmb p-2 w-32 text-sm sm:w-auto sm:text-base ${
          activeYear === 1 ? "active" : ""
        }`}
        style={{
          backgroundColor: activeYear === 1 ? "#E26E5D" : "transparent",
        }}
        onClick={() => handleYearClick(1)}
      >
        Year 1
      </button>
      <button
        className={`bg-transparent hover:bg-[#E26E5D] border-3 border-white hover:border-[#E26E5D] fmb p-2 w-32 text-sm sm:w-auto sm:text-base ${
          activeYear === 2 ? "active" : ""
        }`}
        style={{
          backgroundColor: activeYear === 2 ? "#E26E5D" : "transparent",
        }}
        onClick={() => handleYearClick(2)}
      >
        Year 2
      </button>
      <button
        className={`bg-transparent hover:bg-[#E26E5D] border-3 border-white hover:border-[#E26E5D] fmb p-2 w-32 text-sm sm:w-auto sm:text-base ${
          activeYear === 3 ? "active" : ""
        }`}
        style={{
          backgroundColor: activeYear === 3 ? "#E26E5D" : "transparent",
        }}
        onClick={() => handleYearClick(3)}
      >
        Year 3
      </button>
                        </div>
                    </div>
                    <br />
                    {renderContent()}
                </div>
            </div>
        </>
    );
}
