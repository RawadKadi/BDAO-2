import Header from "../header-layout";
import Footer from "../footer-layout";
import "./about.scss"

const items = [
    {id: 3, disclaimer:'About'},
    {id: 4, disclaimer:'About'},
    {id: 5, disclaimer:'About'},
    {id: 6, disclaimer:'About'},
    {id: 7, disclaimer:'About'},
    {id: 8, disclaimer:'About'},
    {id: 9, disclaimer:'About'},
    {id: 10, disclaimer:'About'},
    {id: 11, disclaimer:'About'},
    {id: 12, disclaimer:'About'},
    {id: 13, disclaimer:'About'},
    {id: 14, disclaimer:'About'},
    {id: 15, disclaimer:'About'},
]

export default function About() {
    return (
        <>
        <div className="main">
            <div className="bg-texture flex flex-col">
              <Header />
              <div className="flex gap-12 mx-20 justify-center mt-12">
                <div className="column-1">
                    <div className="flex">
                      <div id="eng" className="bg-[#E26E5D] border-2 border-white fmb px-16 py-2">
                          <button className="text fmb">Eng</button>
                      </div>
                      <div id="arabic" className="bg-[#E26E5D] border-2 border-white fmb px-10 py-2">
                          <button className="text fmb">Arabic</button>
                      </div>
                    </div>
                    <div className="font-semibold mt-7">
                        <button className="hover:bg-[#E26E5D] bg-opacity-80 border-transparent py-2 disclaimers ">
                            <span className="mr-20">0</span><span className="mr-12">Front Disclaimer</span>
                        </button>
                    </div>
                    <div className="font-semibold mt-1">
                        <button className="hover:bg-[#E26E5D] bg-opacity-80 border-transparent py-2 disclaimers ">
                            <span className="mr-20">1</span><span className="mr-20">What is BDAO</span>
                        </button>
                    </div>
                    {items.map((item)=>(
                    <div className="font-semibold mt-1" key={item.id}>
                        <button className="hover:bg-[#E26E5D] bg-opacity-80 border-transparent py-2 disclaimers ">
                            <span className="mr-28">{item.id}</span><span className="mr-28">{item.disclaimer}</span>
                        </button>
                    </div>
                    ))}      
                </div>
                <div className="column-2 bg-opacity-80 relative bg-[#E26E5D] border-3 border-white mb-56">
                    <div className="p-16">
                        <p className="title fmb text-[24px]">SOME TITLE</p>
                        <p className="italic text-[#FFBCBC] mt-5">italic title</p>
                        <div className="text-[20px] mt-3">
                          <p>In this pursuit, Bricklayer DAO project uses blockchain</p>
                          <p>technology to harness the permissionless</p>
                          <p>functionalities of a DAO to present a pioneering model</p>
                          <p>technology to harness the permissionless</p>
                          <p>of managing a commercial real estate investment fund</p>
                          <p>technology to harness the permissionless</p>
                          <p>that expands the DAO Treasury. The DAO will also</p>
                          <p>incorporate an NFT platform for value generation</p>
                          <p>and accessing certain privileges based upon</p>
                        </div>
                        <p className="italic text-[#FFBCBC] mt-7">italic title</p>
                        <div className="text-[20px] mt-3 mb-28">
                            <p>Real Estate Investment Trusts (REITs) have been around</p>
                            <p>for years. Until now, REITs have generated total</p>
                            <p>competitive returns based on high, consistent dividend</p>
                            <p>income and long-term capital appreciation. In addition,</p>
                            <p>their very low correlation with other assets renders</p>
                            <p>them an effective portfolio diversifier that may help</p>
                            <p> decrease overall portfolio risk and boost returns.</p>
                        </div>
                    </div>
                </div>
              </div>
              <Footer />
            </div>
        </div>
        </>
    )
}