import Script from "next/script";
import "./globals.scss";
import { Inter } from "next/font/google";

import Header from "./layout/header-layout";
import Footer from "./layout/footer-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <Script
                    src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.0.1/model-viewer.min.js"
                    type="module"
                />
            </head>

            <body className={inter.className}>
                <Header />
                <section className="mt-[69px]">{children}</section>
                <Footer />
            </body>
        </html>
    );
}
