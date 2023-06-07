import "./buttons.scss";
import button from "./button-3d.svg"
import Image from "next/image";

export default function Button() {
    return (
        <>
    <div id="contact-button" >
                <p style={{color:"white"}}>Leave a note </p>
                <Image src={button} alt="Button Image" width={300} height={200} />

            </div>
        </>
    );
}
