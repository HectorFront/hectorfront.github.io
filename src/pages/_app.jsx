import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { MoreExperiences } from "@/components/more";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
    return (
        <div className={`${inter.className}`}>
            <Header/>
            <div className="animate-fade">
                <Component {...pageProps} />
                <MoreExperiences/>
                <Footer/>
            </div>
        </div>
    );
};