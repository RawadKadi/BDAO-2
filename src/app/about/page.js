"use client";

import Header from "../header-layout";
import Footer from "../footer-layout";
import React from "react";

import disclaimersArabic from "@/constants/disclaimerA";
import disclaimersEng from "@/constants/disclaimerE";
import "./about.scss"


export default function About() {
    
  const [isActive, setIsActive] = React.useState(false);
  const [activeText , setActivetext] = React.useState(0);

  const switchLang = () => {
    if (activeLang === disclaimersEng) setActiveLang(disclaimersArabic);
    else setActiveLang(disclaimersEng);
};

  function handleClickT(){
    setIsActive(false);
  }

  function handleClickF() {
    setIsActive(true)
  }

  function previewText(id) {
     setActivetext(id)
     console.log(id)
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
                        onClick={() => previewText(index)}
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
                  <section className="p-16">
                     {disclaimersEng.map((item) => {
                     if (item.id === activeText) {
                     return (
                      <div key={item.id} className="fade-in">
                         <p className="number fmb text-[24px]">{item.id}</p>
                         <h1 className="title fmb text-[24px]">{item.title}</h1>
                         {item.content()}
                         <br></br>
                      </div>
                     );
                     }})}        
                  </section>
                </div>
              </div>
              <Footer />
            </div>
        </div>
        </>
    )
}