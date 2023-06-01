"use client";

import Header from "../header-layout";
import Footer from "../footer-layout";
import React from "react";

import disclaimersArabic from "@/constants/disclaimerA";
import disclaimersEng from "@/constants/disclaimerE";
import paragraph from "@/constants/textE";
import "./about.scss"


export default function About() {
    
  const [isActive, setIsActive] = React.useState(false);
  const [activeText , setActivetext] = React.useState(0);
  const [activeStatus , setActiveStatus] = React.useState('english')

  function handleClickT(){
    setIsActive(false);
    setActiveStatus('english')
  }

  function handleClickF() {
    setIsActive(true)
    setActiveStatus('arabic')
  }

  function previewText(id , status) {
     setActivetext(id)
     setActiveStatus(status)
     console.log(id , status)
  }


    return (
        <>
        <div className="main">
            <div className="bg-texture flex flex-col">
              <Header />
              <div className="flex gap-12 mx-20 justify-center mt-12">
                <div className="column-1">
                    <div className="flex">
                      <div className="bg-[#E26E5D] border-2 border-white px-16 py-2">
                          <button
                            className={isActive ? 'text' : ''}
                            onClick= {handleClickT}
                            id='english'>
                            <span className="fmb">Eng</span>
                           </button>
                      </div>
                      <div className="bg-[#E26E5D] border-2 border-white fmb px-10 py-2">
                          <button 
                          className={isActive ? '' : 'text'}
                          onClick={handleClickF}
                          id='arabic'>
                            <span className="fmb">Arabic</span>
                          </button>
                      </div>
                    </div>
                    <br></br>
                    <section className={isActive ? 'hidden' : ''}>
                      <div className="font-semibold mt-1">
                        {disclaimersEng.map((item , index)=>(
                        <button 
                        onClick={() => previewText(index , item.status)}
                        key={item.id} 
                        className="hover:bg-[#E26E5D] opacity-90 border-transparent py-2 w-full block">
                            <div className={isActive ? 'hidden' : 'flex '}>
                              <span className="mr-4">{item.id}</span>
                              <span>{item.disclaimer}</span>
                            </div>
                        </button>  
                        ))} 
                      </div>
                    </section>
                    <section className={isActive ? '' : 'hidden'}>
                      <div className="font-semibold mt-1">
                        {disclaimersArabic.map((obj , index)=>(
                        <button 
                        onClick={() => previewText(index , obj.status)}
                        key={obj.id} 
                        className="hover:bg-[#E26E5D] opacity-90 border-transparent py-2 w-full block">
                            <div className={isActive ? 'justify-end flex' : 'hidden'}>
                              <span>{obj.disclaimer}</span>  
                              <span className="ml-4">{obj.id}</span>
                            </div>
                        </button>  
                        ))} 
                       </div>
                    </section>
                </div>
                <div className="column-2 bg-opacity-80 relative bg-[#E26E5D] border-3 border-white mb-56">
                    <div className={`cont p-16  ${activeText === 0 && activeStatus==='english' ? ' fade-in' : ' fade-out '}`}>
                        <p className="number fmb text-[24px]">0</p>
                        <p className="title fmb text-[24px]">{paragraph[0].title0}</p>
                        <div className="text-[20px] mt-3">
                          <p>{paragraph[0].text0para1}</p>
                          <br></br>
                          <p>{paragraph[0].text0para2}</p>
                          <br></br>
                          <p>{paragraph[0].text0para3}</p>
                          <br></br>
                          <p>{paragraph[0].text0para4}</p>
                        </div>
                    </div>
                    <div className={`p-16 ${activeText === 1 && activeStatus==='english' ? ' fade-in' : ' hidden'}`}>
                        <p className="number fmb text-[24px]">1</p>
                        <p className="title fmb text-[24px]">{paragraph[1].title1}</p>
                        <br></br>
                        <p className="italic mt-5">{paragraph[1].smalltitle1}</p>
                        <br></br>
                        <div className="text-[20px]">
                          <p>{paragraph[1].text1para1}</p>
                          <br></br>
                          <p>{paragraph[1].text1para2}</p>
                          <br></br>
                          <p>{paragraph[1].text1para3}</p>
                          <br></br>
                          <p>{paragraph[1].text1para4}</p>
                          <br></br>
                          <p>{paragraph[1].text1para5}</p>
                        </div>
                    </div>
                    <div className={`p-16 ${activeText === 2 && activeStatus==='english' ? ' fade-in' : ' fade-out'}`}>
                        <p className="number fmb text-[24px]">2</p>
                        <p className="title fmb text-[24px]">{paragraph[2].title2}</p>
                        <br></br>
                        <p className="italic mt-5">{paragraph[2].smalltitle2}</p>
                        <br></br>
                        <div className="text-[20px]">
                          {paragraph[2].text2para1}
                          <br></br>
                          <p className="italic text-[16px] mt-5">{paragraph[2].smalltitle12}</p>
                          <br></br>
                          {paragraph[2].text2para2}
                          <br></br>
                          {paragraph[2].text2para3}
                          <br></br>
                          <p>{paragraph[2].text2para4}</p>
                          <br></br>
                          <p className="italic text-[16px] mt-5">{paragraph[2].smalltitle13}</p>
                          <br></br>
                          {paragraph[2].text2para5}
                          <br></br>
                          {paragraph[2].text2para6}
                          <br></br>
                          {paragraph[2].text2para7}
                          <br></br>
                          <p className="italic text-[16px] mt-5">{paragraph[2].smalltitle14}</p>
                          <br></br>
                          {paragraph[2].text2para8}
                        </div>
                    </div>
                    <div className={`p-16 ${activeText === 3 && activeStatus==='english' ? ' fade-in' : ' hidden'}`}>
                        <p className="number fmb text-[24px]">3</p>
                        <p className="title fmb text-[24px]">{paragraph[3].title3}</p>
                        <br></br>
                        <p className="italic mt-5">{paragraph[3].smalltitle3}</p>
                        <br></br>
                        <div className="text-[20px]">
                          {paragraph[3].text3para1}
                          <br></br>
                          {paragraph[3].text3para2}
                          <br></br>
                          <p className="italic text-[16px] mt-5">{paragraph[3].smalltitle21}</p>
                          <br></br>
                          {paragraph[3].text3para3}
                          <br></br>
                          <p>{paragraph[3].text3para4}</p>
                          <br></br>
                          <p>{paragraph[3].text3para5}</p>
                          <br></br>
                          <p className="italic text-[16px] mt-5">{paragraph[3].smalltitle22}</p>
                          <br></br>
                          {paragraph[3].text2para6}
                          <br></br>
                          {paragraph[3].text2para7}
                          <br></br>
                          {paragraph[3].text2para8}
                          <br></br>
                        </div>
                    </div>
                    <div className={`p-16 ${activeText === 4 && activeStatus==='english' ? ' fade-in' : ' hidden'}`}>
                        <p className="number fmb text-[24px]">4</p>
                        <p className="title fmb text-[24px]">{paragraph[4].title4}</p>
                        <br></br>
                        <p className="italic mt-5">{paragraph[4].smalltitle3}</p>
                        <br></br>
                        <div className="text-[20px]">
                          {paragraph[4].text4para1}
                          <br></br>
                          <p className="italic text-[16px] mt-5">{paragraph[4].smalltitle31}</p>
                          <br></br>
                          {paragraph[4].text4para2}
                          <br></br>
                          {paragraph[4].text4para3}
                          <br></br>
                          <p className="italic text-[16px] mt-5">{paragraph[4].smalltitle32}</p>
                          <br></br>
                          <p>{paragraph[4].text4para4}</p>
                          <br></br>
                          <p>{paragraph[4].text4para5}</p>
                          <br></br>
                          {paragraph[4].text4para6}
                          <br></br>
                          {paragraph[4].text2para7}
                        </div>
                    </div>
                    <div className={`p-16 ${activeText === 5 && activeStatus==='english' ? ' fade-in' : ' hidden'}`}>
                        <p className="number fmb text-[24px]">5</p>
                        <p className="title fmb text-[24px]">{paragraph[5].title5}</p>
                        <br></br>
                        <div className="text-[20px]">
                          {paragraph[5].text5para1}
                          <br></br>
                          {paragraph[5].text5para2}
                          <br></br>
                          <p className="italic text-[16px] mt-5">{paragraph[5].smalltitle4}</p>
                          <br></br>
                          {paragraph[5].text5para3}
                          <br></br>
                          <p className="italic text-[16px] mt-5">{paragraph[5].smalltitle41}</p>
                          <br></br>
                          <p>{paragraph[5].text5para4}</p>
                          <br></br>
                          <p className="italic text-[16px] mt-5">{paragraph[5].smalltitle42}</p>
                          <br></br>
                          {paragraph[5].text5para5}
                          <br></br>
                          {paragraph[5].text5para6}
                          <br></br>
                          <p className="italic text-[16px] mt-5">{paragraph[5].smalltitle43}</p>
                          <br></br>
                          {paragraph[5].text5para7}
                          <br></br>
                          {paragraph[5].text5para8}
                        </div>
                    </div>
                    <div className={`p-16 ${activeText === 6 && activeStatus==='english' ? ' fade-in' : ' hidden'}`}>
                        <p className="number fmb text-[24px]">6</p>
                        <p className="title fmb text-[24px]">{paragraph[6].title6}</p>
                        <br></br>
                        <div className="text-[20px]">
                          {paragraph[6].text6para1}
                          <br></br>
                          <p className="italic text-[16px] mt-5">{paragraph[6].smalltitle5}</p>
                          <br></br>
                          {paragraph[6].text6para2}
                          <br></br>
                          <p className="italic text-[16px] mt-5">{paragraph[6].smalltitle51}</p>
                          <br></br>
                          {paragraph[6].text6para3}
                          <br></br>
                          <p className="italic text-[16px] mt-5">{paragraph[6].smalltitle52}</p>
                          <br></br>
                          {paragraph[6].text6para4}
                          <br></br>
                          {paragraph[6].text6para5}
                        </div>
                    </div>
                    <div className={`p-16 ${activeText === 7 && activeStatus==='english' ? ' fade-in' : ' hidden'}`}>
                      <p className="number fmb text-[24px]">7</p>
                      <p className="title fmb text-[24px]">TOKENOMICS</p>
                      <p className="text-[20px]">Please contact inquiries@bricklayerdao.xyz for further information</p>
                    </div>
                    <div className={`p-16 ${activeText === 8 && activeStatus==='english' ? ' fade-in' : ' hidden'}`}>
                        <p className="number fmb text-[24px]">8</p>
                        <p className="title fmb text-[24px]">{paragraph[7].title7}</p>
                        <br></br>
                        <div className="text-[20px]">
                          {paragraph[7].text7para1}
                          <br></br>
                          {paragraph[7].text7para2}
                          <br></br>
                          {paragraph[7].text7para3}
                          <br></br>
                          {paragraph[7].text7para4}
                          <p className="italic text-[16px] mt-5">{paragraph[7].smalltitle6}</p>
                          <br></br>
                          {paragraph[7].text7para5}
                          <br></br>
                          {paragraph[7].text7para6}
                          <br></br>
                        </div>
                    </div>
                    <div className={`p-16 ${activeText === 9 && activeStatus==='english' ? ' fade-in' : ' hidden'}`}>
                        <p className="number fmb text-[24px]">9</p>
                        <p className="title fmb text-[24px]">{paragraph[8].title8}</p>
                        <br></br>
                        <div className="text-[20px]">
                          {paragraph[8].text8para1}
                          <br></br>
                          {paragraph[8].text8para2}
                          <br></br>
                          {paragraph[8].text8para3}
                          <br></br>
                          {paragraph[8].text8para4}
                        </div>
                    </div>
                    <div className={`p-16 ${activeText === 10 && activeStatus==='english' ? ' fade-in' : ' hidden'}`}>
                        <p className="number fmb text-[24px]">10</p>
                        <p className="title fmb text-[24px]">{paragraph[9].title9}</p>
                        <br></br>
                        <p className="italic text-[16px] mt-5">{paragraph[9].smalltitle8}</p>
                          <br></br>
                        <div className="text-[20px]">
                          {paragraph[9].text9para1}
                          <br></br>
                          {paragraph[9].text9para2}
                          <br></br>
                          {paragraph[9].text9para3}
                          <br></br>
                          <p className="italic text-[16px] mt-5">{paragraph[9].smalltitle81}</p>
                          <br></br>
                          {paragraph[9].text9para4}
                          <br></br>
                          {paragraph[9].text9para5}
                          <br></br>
                          <p className="italic text-[16px] mt-5">{paragraph[9].smalltitle82}</p>
                          <br></br>
                          {paragraph[9].text9para6}
                          <br></br>
                          <p className="italic text-[16px] mt-5">{paragraph[9].smalltitle83}</p>
                          <br></br>
                          <p className="italic text-[16px] mt-5">{paragraph[9].smalltitle84}</p>
                        </div>
                    </div>
                    <div className={`p-16 ${activeText === 11 && activeStatus==='english' ? ' fade-in' : ' hidden'}`}>
                        <p className="number fmb text-[24px]">11</p>
                        <p className="title fmb text-[24px]">{paragraph[10].title10}</p>
                        <br></br>
                        <div className="text-[20px]">
                          {paragraph[10].text10para1}
                          <br></br>
                          {paragraph[10].text10para2}
                          <br></br>
                          {paragraph[10].text10para3}
                          <br></br>
                          {paragraph[10].text10para4}
                          <br></br>
                          {paragraph[10].text10para5}
                          <br></br>
                          {paragraph[10].text10para6}
                          <br></br>
                          {paragraph[10].text10para7}
                        </div>
                    </div>
                    <div className="">



                    </div>
                    <div className={`p-16 ${activeText === 13 && activeStatus==='english' ? ' fade-in' : ' hidden'}`}>
                        <p className="number fmb text-[24px]">13</p>
                        <p className="title fmb text-[24px]">{paragraph[11].title11}</p>
                        <br></br>
                        <div className="text-[20px]">
                          {paragraph[11].text11para1}
                          <br></br>
                          {paragraph[11].text11para2}
                        </div>
                    </div>
                    <div className={`p-16 ${activeText === 14 && activeStatus==='english' ? ' fade-in' : ' hidden'}`}>
                        <p className="number fmb text-[24px]">14</p>
                        <p className="title fmb text-[24px]">{paragraph[12].title12}</p>
                        <br></br>
                        <div className="text-[20px]">
                          {paragraph[12].text12para1}
                          <br></br>
                          {paragraph[12].text12para2}
                          <br></br>
                          {paragraph[12].text12para3}
                        </div>
                    </div>
                    <div className={`p-16 ${activeText === 15 && activeStatus==='english' ? ' fade-in' : ' hidden'}`}>
                        <p className="number fmb text-[24px]">15</p>
                        <p className="title fmb text-[24px]">{paragraph[13].title13}</p>
                        <br></br>
                        <div className="text-[20px]">
                          {paragraph[13].text13para1}
                          <br></br>
                          {paragraph[13].text9para2}
                          <br></br>
                          <p className="italic text-[16px] mt-5">{paragraph[13].smalltitle9}</p>
                          <br></br>
                          {paragraph[13].text13para3}
                          <br></br>
                          {paragraph[13].text13para4}
                          <br></br>
                          <p className="italic text-[16px] mt-5">{paragraph[13].smalltitle91}</p>
                          <br></br>
                          {paragraph[13].text13para5}
                          <br></br>
                          <p className="italic text-[16px] mt-5">{paragraph[13].smalltitle92}</p>
                          <br></br>
                          {paragraph[13].text13para6}
                          <br></br>
                          <p className="italic text-[16px] mt-5">{paragraph[13].smalltitle93}</p>
                          <br></br>
                          {paragraph[13].text13para7}
                          <br></br>
                          {paragraph[13].text13para8}
                          <br></br>
                          <p className="italic text-[16px] mt-5">{paragraph[13].smalltitle94}</p>
                          <br></br>
                          {paragraph[13].text13para9}
                          <br></br>
                          {paragraph[13].text13para10}
                          <br></br>
                          <p className="italic text-[16px] mt-5">{paragraph[13].smalltitle95}</p>
                          <br></br>
                          {paragraph[13].text13para11}
                          <br></br>
                          <p className="italic text-[16px] mt-5">{paragraph[13].smalltitle96}</p>
                          <br></br>
                          {paragraph[13].text13para12}
                          <br></br>
                          <p className="italic text-[16px] mt-5">{paragraph[13].smalltitle97}</p>
                          <br></br>
                          {paragraph[13].text13para13}
                          <br></br>
                          {paragraph[13].text13para14}
                          <br></br>
                          {paragraph[13].text13para15}
                          <br></br>
                          {paragraph[13].text13para16}
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