"use client";

import React from "react";

import disclaimersArabic from "@/constants/disclaimerA";
import disclaimersEng from "@/constants/disclaimerE";
import "./about.scss";

export default function About() {
    const [activeLang, setActiveLang] = React.useState(disclaimersEng);
    const [activeEl, setActiveEl] = React.useState(activeLang[0]);
    const [selectedOption, setSelectedOption] = React.useState(0);
    const [isFade, setIsFade] = React.useState(false);
    const [isFadeButtons, setIsFadeButtons] = React.useState(false);
    const [activeTarget, setIsTarget] = React.useState(0);

    const onChange = (e) => {
        const selectedValue = e.target.value;
        setTimeout(() => setSelectedOption(selectedValue), 500);
        setIsFade(true);
        setTimeout(() => setIsFade(false), 500);
    };

    const switchLang = () => {
        if (activeLang === disclaimersEng) {
            setIsFade(true);
            setTimeout(() => setIsFade(false), 500);
            setIsFadeButtons(true);
            setTimeout(() => setActiveLang(disclaimersArabic), 500);
            setTimeout(() => setIsFadeButtons(false), 500);
            setTimeout(() => setActiveEl(disclaimersArabic[activeTarget]), 500);
        } else if (activeLang === disclaimersArabic) {
            setIsFade(true);
            setTimeout(() => setIsFade(false), 500);
            setTimeout(() => setActiveLang(disclaimersEng), 500);
            setIsFadeButtons(true);
            setTimeout(() => setIsFadeButtons(false), 500);
            setTimeout(() => setActiveEl(disclaimersEng[activeTarget]), 500);
        }
    };

    const onButtonClick = (e) => {
        const target = e.currentTarget.dataset.id;
        setIsTarget(target);
        setIsFade(true);
        setTimeout(() => setIsFade(false), 500);
        setTimeout(() => setActiveEl(activeLang[target]), 500);
    };

    return (
        <>
            <div className="main">
                <div className="bg-texture flex flex-col">
                    <div className="lg:flex gap-12 lg:mx-20 justify-center mt-12">
                        <div className="column-1 lg:block md:flex md:justify-around">
                            <div className="flex mx-3">
                                <div className="bg-[#E26E5D] border-2 border-white text-center w-full md:px-16 py-2">
                                    <button
                                        className={activeLang === disclaimersEng ? "" : "text"}
                                        onClick={switchLang}
                                        id="english"
                                    >
                                        <span className="fmb">Eng</span>
                                    </button>
                                </div>
                                <div className="bg-[#E26E5D] border-2 border-white fmb text-center w-full md:px-10 py-2">
                                    <button
                                        className={activeLang === disclaimersArabic ? "" : "text"}
                                        onClick={switchLang}
                                        id="arabic"
                                    >
                                        <span className="fmb">Arabic</span>
                                    </button>
                                </div>
                            </div>
                            <br></br>
                            <section
                                className={`lg:block hidden ${isFadeButtons ? "fade" : "show"}`}
                            >
                                <div className="font-semibold mt-1">
                                    {activeLang.map((item) => (
                                        <button
                                            onClick={onButtonClick}
                                            key={item.id}
                                            data-id={item.id}
                                            className="hover:bg-[#E26E5D] opacity-90 border-transparent py-2 w-full block"
                                        >
                                            <div
                                                className={
                                                    activeLang === disclaimersEng
                                                        ? "flex gap-5"
                                                        : "flex gap-5 justify-end"
                                                }
                                            >
                                                <span
                                                    className={`mr-4 ${
                                                        activeLang === disclaimersEng
                                                            ? ""
                                                            : "order-2"
                                                    }`}
                                                >
                                                    {item.id}
                                                </span>
                                                <span>{item.disclaimer}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </section>
                            <section className="lg:hidden mx-3">
                                <select
                                    onChange={onChange}
                                    className="bg-[#E26E5D] font-semibold p-2.5 rounded border-2 border-white w-full"
                                >
                                    {activeLang.map((item) => (
                                        <option value={item.id} key={item.id}>
                                            <div>
                                                <span>{item.id} </span>
                                                <span className="translate">{item.disclaimer}</span>
                                            </div>
                                        </option>
                                    ))}
                                </select>
                            </section>
                        </div>
                        <div className="column-2 bg-opacity-80 relative bg-[#E26E5D] border-3 border-white mb-56 lg:block hidden">
                            <section className={`p-16 ${isFade ? "fade" : "show"}`}>
                                <p className="number fmb text-[24px]">{activeEl.id}</p>
                                <h1 className="title fmb text-[24px]">{activeEl.title}</h1>
                                {activeEl.content()}
                                <br></br>
                            </section>
                        </div>
                    </div>
                    {/* Mobile version */}
                    <div className="column-2 bg-opacity-80 relative bg-[#E26E5D] border-3 border-white mb-56 lg:hidden mx-9 mt-12">
                        <section className={`md:p-16 pt-9 pl-4 ${isFade ? "fade" : "show"}`}>
                            <p className="number fmb text-[20px]">
                                {activeLang[selectedOption].id}
                            </p>
                            <h1 className="title fmb text-[20px]">
                                {activeLang[selectedOption].title}
                            </h1>
                            {activeLang[selectedOption].content()}
                            <br></br>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}
