import "./buttons.scss";
// import button from "./button-3d.svg";
// import Image from "next/image";

export default function Button({ buttonText, imgUrl, children, ...rest }) {
    return (
        <>
            <button className="button3D" {...rest}>
                {children}
                {/* <p style={{ color: "white" }}>{children}</p>
                <Image src={button} alt="Button Image" width={400} height={300} /> */}
            </button>
        </>
    );
}
