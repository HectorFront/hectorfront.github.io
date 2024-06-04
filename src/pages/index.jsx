import { memo } from "react";
import Head from "next/head";
import Link from "next/link";
import { useScrollY } from "@/hooks/useScrollY";

const Home = memo(() => {
    const { scrollY } = useScrollY();
    return (
        <>
            <Head>
                <title>Projects | Hector Silva</title>
            </Head>
            <div className="w-full animate-fade">
                <div
                    style={{ height: 700 }}
                    className="bg-transparent flex items-center justify-center flex-col relative"
                >
                    <div
                        className="absolute w-full bg-cover bg-no-repeat h-full bg-[url('/assets/wallpaper.jpg')]"
                        style={{ backgroundPosition: "center 70%", transform: `translate3d(0, ${scrollY * .3}px, 0)`, zIndex: -1 }}
                    />
                    <div className="px-5 xl:w-6/12">
                        <h1 className="text-5xl lg:text-7xl font-extrabold text-black leading-none mb-5">
                            Hello, I'm Hector
                        </h1>
                        <p className="text-2xl lg:text-3xl font-semibold text-black drop-shadow-xl">
                            Lead Front-end Engineer Senior at&nbsp;
                            <a target="_blank" href="https://fulltime.com.br/" className="font-extrabold text-red-600 border-b-8 border-transparent transition duration-300 hover:border-red-400 hover:text-red-400 cursor-pointer">
                                @Fulltime
                            </a>
                            &nbsp;&
                        </p>
                        <p className="text-2xl lg:text-3xl font-semibold text-black drop-shadow-xl mt-3">
                            Founder/Software Engineer at&nbsp;
                            <a target="_blank" href="https://www.mexpenses.net" className="font-extrabold text-indigo-600 border-b-8 border-transparent transition duration-300 hover:border-indigo-400 hover:text-indigo-400 cursor-pointer">
                                @Mexpenses
                            </a>
                        </p>
                        <small className="font-semibold">Sorry for my english, i'm brazilian and have improving :)</small>
                    </div>
                </div>
                <main className="z-20">
                    <div className="flex bg-white items-center flex-col justify-center pb-10 px-5 lg:px-24">
                        <div className="w-full flex flex-col items-center justify-center my-20">
                            <h3 className="text-4xl lg:text-6xl font-semibold text-center leading-normal w-full lg:w-10/12 relative">
                                Tools of more utilization in my day
                                <div className="h-4 bg-indigo-600 absolute w-8/12 top-12 opacity-0 lg:opacity-30"/>
                            </h3>
                        </div>
                        <div className="w-full flex flex-row flex-wrap border-2 border-white">
                            <div className="w-full lg:w-6/12 h-96 relative group border-2 border-white">
                                <div className="group bg-transparent w-full h-full hover:bg-red-500 opacity-0 hover:opacity-100 absolute transition hover:bg-opacity-80 group-hover:top-0 flex items-center justify-center">
                                    <h1 className="px-2 select-none text-center text-white font-bold drop-shadow-lg mt-96 transition-all duration-500 opacity-0 transition group-hover:opacity-100 group-hover:mt-0 text-3xl">
                                        Figma ⭐⭐⭐⭐🌟
                                    </h1>
                                </div>
                                <img src="/assets/figma.png" className="h-full w-full object-cover" alt="Figma"/>
                            </div>
                            <div className="w-full lg:w-6/12 h-96 relative group border-2 border-white">
                                <div className="group bg-transparent w-full h-full hover:bg-black opacity-0 hover:opacity-100 absolute transition hover:bg-opacity-80 group-hover:top-0 flex items-center justify-center">
                                    <h1 className="px-2 select-none text-center text-white font-bold drop-shadow-lg mt-96 transition-all duration-500 opacity-0 transition group-hover:opacity-100 group-hover:mt-0 text-3xl">
                                        Next ⭐⭐⭐⭐
                                    </h1>
                                </div>
                                <img src="/assets/next.png" className="h-full w-full object-cover" alt="Next.js"/>
                            </div>
                            <div className="w-full lg:w-6/12 h-96 relative group border-2 border-white">
                                <div className="group bg-transparent w-full h-full hover:bg-blue-500 opacity-0 hover:opacity-100 absolute transition hover:bg-opacity-80 group-hover:top-0 flex items-center justify-center">
                                    <h1 className="px-2 select-none text-center text-white font-bold drop-shadow-lg mt-96 transition-all duration-500 opacity-0 transition group-hover:opacity-100 group-hover:mt-0 text-3xl">
                                        React ⭐⭐⭐⭐🌟
                                    </h1>
                                </div>
                                <img src="/assets/react.webp" className="h-full w-full object-cover" alt="React.js"/>
                            </div>
                            <div className="w-full lg:w-6/12 h-96 relative group border-2 border-white">
                                <div className="group bg-transparent w-full h-full hover:bg-blue-700 opacity-0 hover:opacity-100 absolute transition hover:bg-opacity-80 group-hover:top-0 flex items-center justify-center">
                                    <h1 className="px-2 select-none text-center text-white font-bold drop-shadow-lg mt-96 transition-all duration-500 opacity-0 transition group-hover:opacity-100 group-hover:mt-0 text-3xl">
                                        TypeScript ⭐⭐⭐⭐
                                    </h1>
                                </div>
                                <img src="/assets/typescript.jpg" className="h-full w-full object-cover" alt="React.js"/>
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-center justify-center my-20">
                            <h3 className="text-4xl lg:text-6xl font-semibold text-center w-full lg:w-10/12" style={{ lineHeight: 1.6 }}>
                                This is projects and experiences about me.
                            </h3>
                        </div>
                        <h1 className="mt-5 md:mt-0 text-black font-bold w-full text-center border-b-2 border-b-gray-200 text-2xl" style={{ lineHeight: 0 }}>
                            <span className="px-5 bg-white select-none">Projects and Experiences</span>
                        </h1>
                        <div className="mt-14 w-full grid grid-cols-1 md:grid-cols-2 auto-cols-max justify-between gap-14">
                            <div className="rounded-xl shadow-lg hover:scale-105 transition cursor-not-allowed relative" title="Coming soon">
                                <div className="group bg-transparent w-full h-full hover:bg-red-600 opacity-0 hover:opacity-100 rounded-xl absolute transition hover:bg-opacity-80 group-hover:top-0 flex items-center justify-center">
                                    <h1 className="px-2 select-none text-center text-white font-bold drop-shadow-lg mt-96 transition-all duration-500 opacity-0 transition group-hover:opacity-100 group-hover:mt-0 text-3xl">
                                        FullCam Landing Page<br/><small className="mx-2 animate-pulse">Comming soon</small>
                                    </h1>
                                </div>
                                <img src="assets/lp_fullcam.png" width="100%" alt="LP FullCam" className="rounded-xl"/>
                            </div>
                            <div className="rounded-xl shadow-lg hover:scale-105 transition cursor-not-allowed relative" title="Coming soon">
                                <div className="group bg-transparent w-full h-full hover:bg-red-600 opacity-0 hover:opacity-100 rounded-xl absolute transition hover:bg-opacity-80 group-hover:top-0 flex items-center justify-center">
                                    <h1 className="px-2 select-none text-center text-white font-bold drop-shadow-lg mt-96 transition-all duration-500 opacity-0 transition group-hover:opacity-100 group-hover:mt-0 text-3xl">
                                        FullCam Web App<br/><small className="mx-2 animate-pulse">Comming soon</small>
                                    </h1>
                                </div>
                                <img src="assets/fullcam.jpg" width="100%" alt="App FullCam" className="rounded-xl"/>
                            </div>
                            <div className="rounded-xl shadow-lg hover:scale-105 transition cursor-not-allowed relative" title="Coming soon">
                                <div className="group bg-transparent w-full h-full hover:bg-indigo-600 opacity-0 hover:opacity-100 rounded-xl absolute transition hover:bg-opacity-80 group-hover:top-0 flex items-center justify-center">
                                    <h1 className="px-2 select-none text-center text-white font-bold drop-shadow-lg mt-96 transition-all duration-500 opacity-0 transition group-hover:opacity-100 group-hover:mt-0 text-3xl">
                                        Mexpenses Landing Page<br/><small className="mx-2 animate-pulse">Comming soon</small>
                                    </h1>
                                </div>
                                <img src="assets/lp_mexpenses.png" width="100%" alt="LP Mexpenses" className="rounded-xl"/>
                            </div>
                            <div className="rounded-xl shadow-lg hover:scale-105 transition cursor-not-allowed relative" title="Coming soon">
                                <div className="group bg-transparent w-full h-full hover:bg-indigo-600 opacity-0 hover:opacity-100 rounded-xl absolute transition hover:bg-opacity-80 group-hover:top-0 flex items-center justify-center">
                                    <h1 className="px-2 select-none text-center text-white font-bold drop-shadow-lg mt-96 transition-all duration-500 opacity-0 transition group-hover:opacity-100 group-hover:mt-0 text-3xl">
                                        Mexpenses Web App<br/><small className="mx-2 animate-pulse">Comming soon</small>
                                    </h1>
                                </div>
                                <img src="assets/mexpenses.png" width="100%" alt="App Mexpenses" className="rounded-xl"/>
                            </div>
                            <div className="rounded-xl shadow-lg hover:scale-105 transition cursor-not-allowed relative" title="Coming soon">
                                <div className="group bg-transparent w-full h-full hover:bg-pink-600 opacity-0 hover:opacity-100 rounded-xl absolute transition hover:bg-opacity-80 group-hover:top-0 flex items-center justify-center">
                                    <h1 className="px-2 select-none text-center text-white font-bold drop-shadow-lg mt-96 transition-all duration-500 opacity-0 transition group-hover:opacity-100 group-hover:mt-0 text-3xl">
                                        1nd Ranking | Conexa Saúde Challenge<br/><small className="mx-2 animate-pulse">Comming soon</small>
                                    </h1>
                                </div>
                                <img src="assets/conexa_saude.png" width="100%" alt="App Etec MAM" className="rounded-xl"/>
                            </div>
                            <div className="rounded-xl shadow-lg hover:scale-105 transition cursor-not-allowed relative" title="Coming soon">
                                <div className="group bg-transparent w-full h-full hover:bg-purple-600 opacity-0 hover:opacity-100 rounded-xl absolute transition hover:bg-opacity-80 group-hover:top-0 flex items-center justify-center">
                                    <h1 className="px-2 select-none text-center text-white font-bold drop-shadow-lg mt-96 transition-all duration-500 opacity-0 transition group-hover:opacity-100 group-hover:mt-0 text-3xl">
                                        Yako | Template Delivery<br/><small className="mx-2 animate-pulse">Comming soon</small>
                                    </h1>
                                </div>
                                <img src="assets/yako.png" width="100%" alt="Discord Bot | Covid-19" className="rounded-xl"/>
                            </div>
                            <div className="rounded-xl shadow-lg hover:scale-105 transition cursor-not-allowed relative" title="Coming soon">
                                <div className="group bg-transparent w-full h-full hover:bg-cyan-600 opacity-0 hover:opacity-100 rounded-xl absolute transition hover:bg-opacity-80 group-hover:top-0 flex items-center justify-center">
                                    <h1 className="px-2 select-none text-center text-white font-bold drop-shadow-lg mt-96 transition-all duration-500 opacity-0 transition group-hover:opacity-100 group-hover:mt-0 text-3xl">
                                        2nd Ranking | Hackathon for life<br/><small className="mx-2 animate-pulse">Comming soon</small>
                                    </h1>
                                </div>
                                <img src="assets/covid_hackhaton.png" width="100%" alt="COVID Hackathon" className="rounded-xl"/>
                            </div>
                            <Link href="/covid-panel">
                                <div className="rounded-xl shadow-lg hover:scale-105 transition cursor-pointer relative">
                                    <div className="group bg-transparent w-full h-full hover:bg-cyan-600 opacity-0 hover:opacity-100 rounded-xl absolute transition hover:bg-opacity-80 group-hover:top-0 flex items-center justify-center">
                                        <h1 className="px-2 select-none text-center text-white font-bold drop-shadow-lg mt-96 transition-all duration-500 opacity-0 transition group-hover:opacity-100 group-hover:mt-0 text-3xl">
                                            Coronavirus SP | Panel
                                        </h1>
                                    </div>
                                    <img src="assets/covid_panel.png" width="100%" alt="COVID Painel" className="rounded-xl"/>
                                </div>
                            </Link>
                            <Link href="/whatsapp">
                                <div className="rounded-xl shadow-lg hover:scale-105 transition cursor-pointer relative">
                                    <div className="group bg-transparent w-full h-full hover:bg-green-600 opacity-0 hover:opacity-100 rounded-xl absolute transition hover:bg-opacity-80 group-hover:top-0 flex items-center justify-center">
                                        <h1 className="px-2 select-none text-center text-white font-bold drop-shadow-lg mt-96 transition-all duration-500 opacity-0 transition group-hover:opacity-100 group-hover:mt-0 text-3xl">
                                            WhatsApp | Local
                                        </h1>
                                    </div>
                                    <img src="assets/whatsapp.png" width="100%" alt="App WhatsApp" className="rounded-xl"/>
                                </div>
                            </Link>
                            <Link href="/etecmam">
                                <div className="rounded-xl shadow-lg hover:scale-105 transition cursor-pointer relative">
                                    <div className="group bg-transparent w-full h-full hover:bg-yellow-600 opacity-0 hover:opacity-100 rounded-xl absolute transition hover:bg-opacity-80 group-hover:top-0 flex items-center justify-center">
                                        <h1 className="px-2 select-none text-center text-white font-bold drop-shadow-lg mt-96 transition-all duration-500 opacity-0 transition group-hover:opacity-100 group-hover:mt-0 text-3xl">
                                            Etec MAM | Final Paper
                                        </h1>
                                    </div>
                                    <img src="assets/etec_mam.jpg" width="100%" alt="App Etec MAM" className="rounded-xl"/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
});

export default Home;
