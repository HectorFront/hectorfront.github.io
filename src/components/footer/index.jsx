import { memo } from "react";

const Footer = memo(() => {
    return (
        <footer className="select-none bg-gray-100 w-full h-auto flex flex-col items-center flex-row flex-wrap justify-center p-10 gap-3">
            <div className="flex flex-col relative group">
                <span className="text-3xl font-bold text-indigo-600 uppercase">🌐 Social media</span>
                <div className="transition-all duration-300 w-full h-4 bg-indigo-600 opacity-20 absolute top-5 group-hover:top-7"/>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-4">
                <li className="flex items-center justify-center m-0 cursor-pointer">
                    <a target="_blank" href="https://www.instagram.com/hect_sv/">
                        <img src="assets/instagram.png" className="hover:scale-110 transition-all rounded-full" width={35} alt="Instagram"/>
                    </a>
                </li>
                <li className="flex items-center justify-center m-0 cursor-pointer">
                    <a target="_blank" href="https://www.facebook.com/hectddos103/">
                        <img src="assets/facebook.png" className="hover:scale-110 transition-all rounded-full" width={35} alt="Facebook"/>
                    </a>
                </li>
                <li className="flex items-center justify-center m-0 cursor-pointer">
                    <a target="_blank" href="https://www.linkedin.com/in/hector-rodrigues-da-silva-4073b3191/">
                        <img src="assets/in.png" className="hover:scale-110 transition-all rounded-full" width={35} alt="LinkedIn"/>
                    </a>
                </li>
                <li className="flex items-center justify-center m-0 cursor-pointer">
                    <a target="_blank" href="https://github.com/HectorFront">
                        <img src="assets/github.png" className="hover:scale-110 transition-all rounded-full" width={35} alt="GitHub"/>
                    </a>
                </li>
            </div>
            <p>
                Development by <span className="font-extrabold text-transparent bg-gradient-to-l from-red-600 to-indigo-600 bg-clip-text">Hector Silva</span>
            </p>
        </footer>
    );
});

export default Footer;