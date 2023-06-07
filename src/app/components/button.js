import "./buttons.scss";
import button from "./button-3d.png"
import Image from "next/image";

export default function Button() {
    return (
        <>
    <div id="contact-button" >
                <p>Leave a note </p>
                <Image src={button} alt="Button Image" width={300} height={200} />

            </div>
        </>
    );
}
