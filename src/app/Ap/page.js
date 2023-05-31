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
                        <p className="fmb text-[24px] mt-4">Legal</p>
                        <p className="fmb text-[24px]">Advisor</p>
                        <div className="font-semibold mt-4">
                            <p>We are looking for a</p>
                            <p>versatile blockchain legal</p>
                            <p>advisor to consult on</p>
                            <p>compliance issues</p>
                            <p>internationally (including</p>
                            <p>AML/KYC), securities laws,</p>
                            <p>entity formations, and risk</p>
                            <p>estate experience helpful</p>
                            <p>but not required</p>
                        </div>
                    </div>
                    <div className="box-2 bg-[#E26E5D] bg-opacity-70 text-center border-3 border-transparent hover:border-white">
                        <p className="fmb text-[24px] mt-4">Blockchain</p>
                        <p className="fmb text-[24px]">(Full Stack)</p>
                        <p className="fmb text-[24px]">Developper</p>
                        <div className="font-semibold mt-4">
                            <p>We are looking for a</p>
                            <p>skilled developer who is</p>
                            <p>comfortable with both</p>
                            <p>front and back end</p>
                            <p>technologies. As a lead,</p>
                            <p>you will be responsible</p>
                            <p>for web applications,</p>
                            <p>periodic updates,</p>
                            <p>technical advisory on</p>
                            <p>implementation of DAO</p>
                            <p>mechanics, building</p>
                            <p>scalable APIs, on-</p>
                            <p>boarding and evaluating</p>
                            <p>developer partenrships</p>
                        </div>
                    </div>
                    <div className="box-3 bg-[#E26E5D] bg-opacity-70 text-center border-3 border-transparent hover:border-white">
                        <p className="fmb text-[24px] mt-4">Marketing</p>
                        <p className="fmb text-[24px]">Manager</p>
                        <div className="font-semibold mt-4">
                            <p>We are looking for a</p>
                            <p>passionate crypto and</p>
                            <p>blockchain ecosystems</p>
                            <p>marketing expert to drive</p>
                            <p>thr DAO's marketing</p>
                            <p>strategy and work closely</p>
                            <p>with the Founders and</p>
                            <p>Investor Relations Ap. This</p>
                            <p>AP will effectuate programs</p>
                            <p>to maximize the DAO's</p>
                            <p>presence in the blockchain</p>
                            <p>and real estate</p>
                            <p>communities. Must be able</p>
                            <p>to think creatively and act</p>
                            <p>decisively</p>
                        </div>
                    </div>
                    <div className="box-4 bg-[#E26E5D] bg-opacity-70 text-center border-3 border-transparent hover:border-white">
                        <p className="fmb text-[24px] mt-4">Investor</p>
                        <p className="fmb text-[24px]">Relations</p>
                        <div className="font-semibold mt-4">
                            <p>We are looking for an</p>
                            <p>experienced, high energy</p>
                            <p>investor relations lead to</p>
                            <p>work closely wiht the</p>
                            <p>Founders to engage new</p>
                            <p>investors and build</p>
                            <p>partenrships domestically in</p>
                            <p>U.S. as well as globally,</p>
                            <p>with special emphasis on</p>
                            <p>UAE.</p>
                        </div>
                    </div>
                    <div className="box-5 bg-[#E26E5D] bg-opacity-70 text-center border-3 border-transparent hover:border-white">
                        <p className="fmb text-[24px] mt-4">Project</p>
                        <p className="fmb text-[24px]">Accelerator</p>
                        <p className="fmb text-[24px]">-FILLED</p>
                        <div className="font-semibold mt-4">
                            <p>We are looking for highly</p>
                            <p>experienced project</p>
                            <p>accelerator thoroughly</p>
                            <p>versed in blockchain</p>
                            <p>technologies with specific</p>
                            <p>applications to commercial</p>
                            <p>real estate and/or</p>
                            <p>physical assets. The</p>
                            <p>project accelerator will</p>
                            <p>advise the founder team on</p>
                            <p>organizational growth,</p>
                            <p>grant applications,</p>
                            <p>technology selection, and</p>
                            <p>prospective VC</p>
                            <p>engagements. Must be able</p>
                            <p>to call out risks and be</p>
                            <p>no stranger to ambiguity.</p>
                        </div>
                    </div>
                    <div className="box-6 bg-[#E26E5D] bg-opacity-70 text-center border-3 border-transparent hover:border-white">
                        <p className="fmb text-[24px] mt-4">Accouting</p>
                        <p className="fmb text-[24px]">Manager -</p>
                        <p className="fmb text-[24px]">FILLED</p>
                        <div className="font-semibold mt-4">
                            <p>We are looking for an</p>
                            <p>experienced finance and</p>
                            <p>accounting leader readily</p>
                            <p>able to build accounting</p>
                            <p>systems and operating</p>
                            <p>procedures. Background in</p>
                            <p>financial modeling and</p>
                            <p>DeFi is essential.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
        </>
    )
}