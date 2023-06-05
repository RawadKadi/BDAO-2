import Image from "next/image";

import styles from "./footer.module.scss";

const { doll } = styles;

export default function Footer() {
    return (
        <footer>
            <div className="footer  relative">
                <Image
                    className={`ml-32 absolute bottom-[100%] ${doll}`}
                    width={103}
                    height={162}
                    src="/footer/little-man.png"
                    alt=""
                ></Image>
                <Image
                    className="sm:block hidden"
                    width={2000}
                    height={700}
                    src="/Group 25.png"
                    alt=""
                ></Image>
                <Image
                    className="sm:hidden block"
                    width={768}
                    height={50}
                    src="/Group 146.jpg"
                    alt=""
                ></Image>
                <div className="socials bg-[#242424] py-4 flex justify-between">
                    <h1 className="fmi font-medium text-[20px] ml-12">@2023 BrickLayer</h1>
                    <div className="fmi font-medium text[20px] flex mr-12">
                        <Image
                            className="mr-6"
                            width={18}
                            height={16}
                            alt=""
                            src="/Vector (1).svg"
                        ></Image>
                        <Image
                            className="mr-6"
                            width={18}
                            height={16}
                            alt=""
                            src="/tabler-icon-brand-linkedin.svg"
                        ></Image>
                        <Image
                            className=""
                            width={18}
                            height={16}
                            alt=""
                            src="/Vector (2).svg"
                        ></Image>
                    </div>
                </div>
            </div>
        </footer>
    );
}
