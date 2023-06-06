/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable spaced-comment */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="main">
                <div className="bg-texture">
                    <p className="text-center lg:text-[80px] md:text-[50px] text-[32px] fmb">
                        BRICKLAYER
                    </p>
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
                            {/* <Image
            className=''
            width={510}
            height={500}
            src="/b-orange 1.png"
            alt=''>
            </Image> */}
                            <model-viewer
                                src="/media/models/logo.gltf"
                                loading="eager"
                                auto-rotate
                                camera-controls
                                rotation-per-second="20deg"
                                shadow-intensity="1"
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
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                        </div>
                        <div className="md:mt-6">
                            <div className="flex justify-center font-semibold fmi">
                                <div className="vector1 relative"></div>
                                <button className="btn border-2 border-white flex text-[16px] p-2 md:inline-flex hidden">
                                    <span>Launch the app</span>
                                    <img width={18} className="ml-3 mt-1" src="/Arrow 1.svg" />
                                </button>
                            </div>
                            <div className="flex justify-center mt-24 pb-56">
                                <div className="box opacity-90 relative border-3 border-white text-center bg-[#E26E5D] h-[770px] sm:w-[700px] w-full mx-6">
                                    {/*Desktop design*/}
                                    <p className="title fmb text-[24px] mt-14 md:block hidden">
                                        Start laying $BRICKS
                                    </p>
                                    <div className="mt-3 font-semibold md:block hidden text-[16px]">
                                        <p>
                                            This platform provides our community with access to
                                            <br />
                                            institutional-grade occupiers and builds wealth
                                            <br />
                                            through sophisticated real estate transactions fueled
                                            <br />
                                            by digital asset growth. An original and simple
                                            <br />
                                            approach which prioritizes smart hedging strategies
                                            <br />
                                            consistent dividend generation, and creating capital
                                            <br />
                                            value appreciation.
                                        </p>
                                    </div>

                                    {/*Mobile design*/}
                                    <div className="title text-[24px] md:hidden mt-12">
                                        <p className="fmb">Start laying</p>
                                        <p className="fmb">$BRICKS</p>
                                    </div>
                                    <div className="mt-3 font-semibold md:hidden block text-[16px]">
                                        <p>
                                            This platform provides our community
                                            <br />
                                            with access to institutional-grade
                                            <br />
                                            occupiers and builds wealth through
                                            <br />
                                            sophisticated real estate
                                            <br />
                                            transactions fueled by digital asset
                                            <br />
                                            growth. An original and simple
                                            <br />
                                            approach which prioritizes smart
                                            <br />
                                            hedging strategies, consistent
                                            <br />
                                            dividend generation, and creating
                                            <br />
                                            capital value appreciation.
                                        </p>
                                    </div>
                                    <div className="flex video justify-center md:mt-16 mt-6 mx-7 h-[260px]">
                                        <Image
                                            width={45}
                                            height={45}
                                            src="/Ellipse 10.svg"
                                            alt=""
                                        ></Image>
                                    </div>
                                    <div className="flex vector justify-center mt-12 mb-9 font-semibold fmi mt-10">
                                        <button className="border-2 border-white flex text-[16px] p-2 md:inline-flex hidden">
                                            Launch the app
                                            <img
                                                width={18}
                                                className="ml-3 mt-1"
                                                src="/Arrow 1.svg"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
