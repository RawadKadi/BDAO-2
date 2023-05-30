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
            <div className="bg-texture">
              <Header />
              <div className="flex gap-12 mt-12">
                <div className="column-1 ml-40">
                    <div className="flex">
                      <div id="eng" className="bg-[#E26E5D] border-2 border-white fmb px-16 py-2">
                          <button className="text fmb">Eng</button>
                      </div>
                      <div id="arabic" className="bg-[#E26E5D] border-2 border-white fmb px-10 py-2">
                          <button className="text fmb">Arabic</button>
                      </div>
                    </div>
                    <div className="font-semibold mt-7">
                        <button className="hover:bg-[#E26E5D] border-transparent py-2 disclaimers ">
                            <span className="mr-20">0</span><span className="mr-12">Front Disclaimer</span>
                        </button>
                    </div>
                    <div className="font-semibold mt-1">
                        <button className="hover:bg-[#E26E5D] border-transparent py-2 disclaimers ">
                            <span className="mr-20">1</span><span className="mr-20">What is BDAO</span>
                        </button>
                    </div>
                    {items.map((item)=>(
                        <div className="font-semibold mt-1" key={item.id}>
                        <button className="hover:bg-[#E26E5D] border-transparent py-2 disclaimers ">
                            <span className="mr-28">{item.id}</span><span className="mr-28">{item.disclaimer}</span>
                        </button>
                    </div>
                    ))}      
                </div>
                <div className="column-2 bg-[#E26E5D] border-3 border-white">
                    <div className="title fmb ml-16 mt-14">
                        SOME TITLE
                    </div>
                </div>
              </div>
              <Footer />
            </div>
        </div>
        </>
    )
}