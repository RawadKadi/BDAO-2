/* eslint-disable react/no-unescaped-entities */
import "./Ap.scss";
import ap from "@/constants/app";

export default function Ap() {
    return (
        <section>
            <div className="title text-center text-[48px] mt-16">
                <p className="fmb">Active Participant</p>
                <p className="fmb">Positions</p>
            </div>
            <div className="max-w-screen-xl xl:mx-auto p-4 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mt-20 pb-56">
                {ap.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className="xl:hover:translate-y-[-30px] transition duration-500 ease-in-out bg-[#E26E5D] bg-opacity-70 text-center border-3 border-[#a9a9a9] hover:border-white px-6 pb-7"
                        >
                            <div className="mt-5">{item.image()}</div>
                            <h1 className="fmb text-[24px] mt-4">{item.title}</h1>
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
