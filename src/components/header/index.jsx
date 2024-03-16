import { memo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = memo(() => {
    const router = useRouter();
    return (
        <header className="bg-white w-full h-auto flex items-center flex-row flex-wrap justify-center p-5 gap-5 md:gap-52">
            <h1 className="font-extrabold text-black text-xl text-ellipsis relative group cursor-pointer select-none">
                Hector Silva
                <div className="h-1 w-0 bg-red-600 transition-all absolute duration-300 group-hover:w-full"/>
            </h1>
            <nav>
                <ul className="text-black flex flex-row flex-wrap gap-5 font-semibold select-none">
                    <Link href="/">
                        <li className={`group relative ${router.pathname === "/" ? "text-black border-b-red-600" : "text-gray-400 hover:text-black"}`}>
                            Projects
                            <div className="h-1 w-0 bg-red-600 transition-all absolute duration-300 group-hover:w-full"/>
                        </li>
                    </Link>
                    <Link href="/about">
                        <li className={`group relative ${router.pathname === "/about" ? "text-black border-b-red-600" : "text-gray-400 hover:text-black"}`}>
                            About me
                            <div className="h-1 w-0 bg-red-600 transition-all absolute duration-300 group-hover:w-full"/>
                        </li>
                    </Link>
                    <a target="_blank" href="assets/me.pdf">
                        <li className="group relative border-b-4 border-transparent hover:border-b-red-600 text-gray-400 hover:text-black transition">
                            Resume
                            <div className="h-1 w-0 bg-red-600 transition-all absolute duration-300 group-hover:w-full"/>
                        </li>
                    </a>
                </ul>
            </nav>
        </header>
    );
});

export default Header;