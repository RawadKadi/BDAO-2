/* eslint-disable react/no-unescaped-entities */
import "./Ap.scss";
import ap from "@/constants/app";

export default function Ap() {
    return (
        <section>
            <div className="title text-center lg:text-[48px] sm:text-[30px] text-[25px] pt-10 bg-blur1">
                <p className="fmb">Active Participant</p>
                <p className="fmb">Positions</p>
            </div>
            <div className="max-w-screen-xl xl:mx-auto p-4 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mt-8 pb-56 bg-blur2">
                {ap.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className="xl:hover:translate-y-[-30px] transition duration-500 ease-in-out bg-[#E26E5D] bg-opacity-70 text-center border-3 border-[#a9a9a9] hover:border-white px-6 pb-7"
                        >
                            <div className="mt-5">{item.image()}</div>
                            <h1 className="fmb sm:text-[24px] text-[19px]">{item.title}</h1>
                            <div className="font-semibold mt-9">
                                <p>{item.text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
