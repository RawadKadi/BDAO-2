/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable spaced-comment */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import "./page.scss";
import "../scss/globals.scss";

export default function Home() {
    return (
        <section>
            <div className="text-center lg:text-[80px] md:text-[50px] text-[32px] pt-6 fmb bg-blur1">
                BRICKLAYER
            </div>
            <div className="text-center text-[20px] md:block hidden font-semibold fmi">
                <p>
                    We are proud to present Bricklayer, the 'Real Estate' DAO.
                    <br />
                    A truly unique project on the blockchain underpinned by
                    <br />
                    the safest of asset classes
                </p>
            </div>
            <div className="text-center text-[16px] md:hidden font-semibold fmi mt-8">
                <p>
                    We are proud to present
                    <br />
                    BrickLayer, the 'Real Estate' DAO.
                    <br />
                    A truly unique project on the
                    <br />
                    blockchain underpinned by the
                    <br />
                    safest of asset classes
                </p>
            </div>
            <section className="bg-img">
                <div className="flex justify-center mt-7">
                    <model-viewer
                        src="/media/models/brickLogo.glb"
                        loading="eager"
                        auto-rotate
                        camera-controls
                        rotation-per-second="20deg"
                        touch-action="pan-y"
                        disable-zoom
                        exposure="0.6"
                        style={{
                            width: "100%",
                            height: 500,
                        }}
                    ></model-viewer>
                </div>
                <div className="bg-small-img md:hidden">
                    <br></br>
                    <br></br>
                </div>
                <div className="md:mt-6">
                    <div
                        className="flex  justify-center mt-12 mb-9 font-semibold fmi mt-10 "
                        style={{ marginBottom: "90px" }}
                    >
                        <button className="button3D inline-flex md:p-3 sm:w-[200px] w-[160px]">
                                Launch the App
                            <img width={18} className="ml-3 mt-1" src="/Arrow 1.svg" />
                        </button>
                    </div>
                    <div className="flex justify-center mt-24 pb-56">
                        <div className="box relative border-3 border-white text-center  sm:w-[700px] w-full mx-6 md:p-8 sm:p-2">
                            {/* Desktop design */}
                            <p className="title fmb text-[24px] mt-14 md:block hidden vector1">
                                Start laying $BRICKS
                            </p>
                            <div className="mt-3 md:font-semibold font-normal text-sm sm:text-base md:text-lg md:block hidden">
                                <p>
                                    This platform provides our community with access to
                                    institutional-grade occupiers and builds wealth through
                                    sophisticated real estate transactions fueled by digital asset
                                    growth. An original and simple approach which prioritizes smart
                                    hedging strategies, consistent dividend generation, and creating
                                    capital value appreciation.
                                </p>
                            </div>

                            {/* Mobile design */}
                            <div className="title text-[24px] md:hidden mt-12 vector1">
                                <p className="fmb">Start laying</p>
                                <p className="fmb">$BRICKS</p>
                            </div>
                            <div className="mt-3 font-semibold md:hidden block text-[16px]">
                                <p>
                                    This platform provides our community with access to
                                    institutional-grade occupiers and builds wealth through
                                    sophisticated real estate transactions fueled by digital asset
                                    growth. An original and simple approach which prioritizes smart
                                    hedging strategies, consistent dividend generation, and creating
                                    capital value appreciation.
                                </p>
                            </div>

                            <div
                                className="flex video justify-center md:mt-16 mt-6 mx-7 my-2 h-[300px]"
                                style={{
                                    cursor: "pointer",
                                    position: "relative",
                                    borderRadius: "5px",
                                }}
                            >
                                <Image width={45} height={45} src="/Ellipse 10.svg" alt="" />
                                <div className="absolute md:left-[0px] md:bottom-[-5px] bottom-[0px] left-[30px] md:w-44 md:h-44 w-24 h-24 ">
                                    <Image
                                        src="/shovel.png"
                                        width={175}
                                        height={175}
                                        alt=""
                                        style={{
                                            position: "absolute",
                                            left: -65,
                                            bottom: -55,
                                            zIndex: 1,
                                        }}
                                    />
                                </div>
                                <div className="absolute md:w-44 md:h-44 w-24 h-24 md:top-[-50px] top-[-20px] right-0 ">
                                    <Image src="/brick.png" width={185} height={175} alt="" />
                                </div>
                            </div>
                            <div
                                className="flex vector justify-center mt-12 mb-9 font-semibold fmi mt-10"
                                style={{ marginBottom: "90px",zIndex:1 }}
                            >
                                <button className="button3D inline-flex md:p-3 sm:w-[200px] w-[160px]">
                                    
                                        JOIN the WAIT
                                    
                                    <img width={18} className="ml-3 mt-1" src="/Arrow 1.svg" />
                                </button>
                            </div>
                            <div
                            className="bricktop"
                                style={{
                                    position: "absolute",
                                    
                                    bottom: "-10px",
                                    left: "75%",
                                    padding: "10px",
                                     
                                    zIndex:0
                                }}
                            >
                                <img
                                    src="/Bricktop 1.png"
                                    width={185}
                                    height={175}
                                    alt=""
                                    className="desktop-image" /* Add this className for desktop styling */
                                />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
