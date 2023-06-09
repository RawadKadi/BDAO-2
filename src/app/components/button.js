import "./buttons.scss";
import button from "./button-3d.svg";
import Image from "next/image";

export default function Button({ buttonText, imgUrl, children }) {
    return (
        <>
            <div id="contact-button">
                <p style={{ color: "white" }}>{children}</p>
                <Image src={button} alt="Button Image" width={400} height={300} />
            </div>
        </>
    );
}
