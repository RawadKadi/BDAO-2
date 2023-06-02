/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import Header from "../header-layout";
import Footer from "../footer-layout"
import "./Ap.scss"


export default function Ap() {
    return (
        <>
        <div className="main">
            <div className="bg-texture">
                <Header />
                <div className="title text-center text-[48px] mt-16">
                    <p className="fmb">Active Participant</p>
                    <p className="fmb">Positions</p>
                </div>
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20 lg:mx-36 sm:mx-12 mx-10 mt-20">
                    <div className="box-1 bg-[#E26E5D] bg-opacity-70 text-center border-3 border-transparent hover:border-white">
                        <h1 className="fmb text-[24px] mt-4">
                            Legal <br />
                            Advisor
                        </h1>
                        <br />
                        <div className="font-semibold mt-4">
                            <p>
                                We are looking for a
                                <br />
                                versatile blockchain legal
                                <br />
                                advisor to consult on
                                <br />
                                compliance issues
                                <br />
                                internationally (including
                                <br />
                                AML/KYC), securities laws,
                                <br />
                                entity formations, and risk
                                <br />
                                estate experience helpful
                                <br />
                                but not required
                            </p>
                        </div>
                    </div>
                    <div className="box-2 bg-[#E26E5D] bg-opacity-70 text-center border-3 border-transparent hover:border-white">
                        <h1 className="fmb text-[24px] mt-4">
                            Blockchain <br />
                            (Full Stack) <br />
                            Developper
                        </h1>
                        <br />
                        <div className="font-semibold mt-4">
                            <p>
                                We are looking for a
                                <br />
                                skilled developer who is
                                <br />
                                comfortable with both
                                <br />
                                front and back end
                                <br />
                                technologies. As a lead,
                                <br />
                                you will be responsible
                                <br />
                                for web applications,
                                <br />
                                periodic updates,
                                <br />
                                technical advisory on
                                <br />
                                implementation of DAO
                                <br />
                                mechanics, building
                                <br />
                                scalable APIs, on-
                                <br />
                                boarding and evaluating
                                <br />
                                developer partenrships
                            </p>
                        </div>
                    </div>
                    <div className="box-3 bg-[#E26E5D] bg-opacity-70 text-center border-3 border-transparent hover:border-white">
                        <h1 className="fmb text-[24px] mt-4">
                            Marketing <br />
                            Manager
                        </h1>
                        <br />
                        <div className="font-semibold mt-4">
                            <p>
                                We are looking for a
                                <br />
                                passionate crypto and
                                <br />
                                blockchain ecosystems
                                <br />
                                marketing expert to drive
                                <br />
                                the DAO's marketing
                                <br />
                                strategy and work closely
                                <br />
                                with the Founders and
                                <br />
                                Investor Relations Ap. This
                                <br />
                                AP will effectuate programs
                                <br />
                                to maximize the DAO's
                                <br />
                                presence in the blockchain
                                <br />
                                and real estate
                                <br />
                                communities. Must be able
                                <br />
                                to think creatively and act
                                <br />
                                decisively
                            </p>
                        </div>
                    </div>
                    <div className="box-4 bg-[#E26E5D] bg-opacity-70 text-center border-3 border-transparent hover:border-white">
                        <h1 className="fmb text-[24px] mt-4">
                            Investor <br />
                            Relations
                        </h1>
                        <br />
                        <div className="font-semibold mt-4">
                            <p>
                                We are looking for an
                                <br />
                                experienced, high energy
                                <br />
                                investor relations lead to
                                <br />
                                work closely wiht the
                                <br />
                                Founders to engage new
                                <br />
                                investors and build
                                <br />
                                partenrships domestically in
                                <br />
                                U.S. as well as globally,
                                <br />
                                with special emphasis on
                                <br />
                                UAE.
                            </p>
                        </div>
                    </div>
                    <div className="box-5 bg-[#E26E5D] bg-opacity-70 text-center border-3 border-transparent hover:border-white">
                        <h1 className="fmb text-[24px] mt-4">
                            Project <br />
                           Accelerator <br />
                           -FILLED
                        </h1>
                        <br />
                        <div className="font-semibold mt-4">
                            <p>
                                We are looking for highly
                                <br />
                                experienced project
                                <br />
                                accelerator thoroughly
                                <br />
                                versed in blockchain
                                <br />
                                technologies with specific
                                <br />
                                applications to commercial
                                <br />
                                real estate and/or
                                <br />
                                physical assets. The
                                <br />
                                project accelerator will
                                <br />
                                advise the founder team on
                                <br />
                                organizational growth,
                                <br />
                                grant applications,
                                <br />
                                technology selection, and
                                <br />
                                prospective VC
                                <br />
                                engagements. Must be able
                                <br />
                                to call out risks and be
                                <br />
                                no stranger to ambiguity.
                            </p>
                        </div>
                    </div>
                    <div className="box-6 bg-[#E26E5D] bg-opacity-70 text-center border-3 border-transparent hover:border-white">
                        <h1 className="fmb text-[24px] mt-4">
                            Accouting <br />
                            Manager - <br />
                            FILLED
                        </h1>
                        <br />
                        <div className="font-semibold mt-4">
                            <p>
                                We are looking for an
                                <br />
                                experienced finance and
                                <br />
                                accounting leader readily
                                <br />
                                able to build accounting
                                <br />
                                systems and operating
                                <br />
                                procedures. Background in
                                <br />
                                financial modeling and
                                <br />
                                DeFi is essential.
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
        </>
    )
}