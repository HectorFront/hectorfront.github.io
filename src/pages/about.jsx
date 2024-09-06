import { memo } from "react";
import { useScrollY } from "@/hooks/useScrollY";
import Head from "next/head";

const About = memo(() => {
    const { scrollY } = useScrollY();
    return (
        <>
            <Head>
                <title>About me | Hector Silva</title>
            </Head>
            <div className="w-full animate-fade">
                <div
                    style={{ height: 500 }}
                    className="bg-transparent relative"
                >
                    <div
                        className="absolute w-full bg-cover bg-no-repeat h-full bg-[url('/assets/wallpaper_about.png')]"
                        style={{ backgroundPosition: "center 70%", transform: `translate3d(0, ${scrollY * .3}px, 0)`, zIndex: -1 }}
                    />
                </div>
                <main className="flex bg-gray-50 items-center flex-col justify-center p-5 lg:px-52 z-20">
                    <h6 className="font-bold text-xl flex flex-row flex-wrap gap-5">
                        <div className="text-red-600 relative group">
                            <a href="https://fulltime.com.br/" target="_blank">
                                @Fulltime
                                <div className="h-3 bg-red-600 opacity-20 w-full absolute top-4 transition-all duration-300 group-hover:top-6"/>
                            </a>
                        </div>
                        <span className="text-3xl">•</span>
                        <div className="text-indigo-600 relative group">
                            <a href="https://mexpenses.com.br" target="_blank">
                                @Mexpenses
                                <div className="h-3 bg-indigo-600 opacity-20 w-full absolute top-4 transition-all duration-300 group-hover:top-6"/>
                            </a>
                        </div>
                    </h6>
                    <div className="flex flex-row w-full justify-center flex-wrap xl:flex-nowrap pt-10 gap-5 xl:gap-10">
                        <div className="xl:pr-20">
                            <h5 className="text-gray-400 font-bold text-xl">About me</h5>
                            <h1 className="text-black font-bold text-4xl mt-2">Hello!</h1>
                            <div className="w-full mt-4 flex flex-col gap-5">
                                <p>
                                    I'm Hector — a Front-end Engineer at <a target="_blank" href="https://fulltime.com.br/solucoes/fullcam/" className="transition duration-300 cursor-pointer border-b-2 border-transparent hover:border-red-500 text-red-600">@FullCam</a> team.
                                    In 2021, I founded <a target="_blank" href="https://mexpenses.com.br" className="transition duration-300 cursor-pointer border-b-2 border-transparent hover:border-indigo-500 text-indigo-600">@Mexpenses</a> with
                                    just an idea to simplify my personal finances. What began as a small project has grown into something deeply valuable — both to me and to my users.
                                </p>
                                <p>
                                    Since 2019, I’ve accumulated 5 years of experience in web development, consistently driven by a passion for innovation, clean user experiences, and solving real-world problems — from simple UI tweaks to complex architectural challenges.
                                </p>
                                <p>
                                    My journey in tech started at 16, during a technical high school program in System Development in Garça, SP - Brazil. There, I fell in love with web technologies and UX/UI design. Thanks to a recommendation from one of my teachers, I began an
                                    internship at <a target="_blank" href="https://fulltime.com.br/" className="transition duration-300 cursor-pointer border-b-2 border-transparent hover:border-red-500 text-red-600">@Fulltime</a>, which later led to a full-time position
                                    and helped launch my professional career.
                                </p>
                            </div>
                        </div>
                        <img src="/assets/me.png" className="h-52 rounded-xl shadow-lg" alt="Hector Silva"/>
                    </div>
                    <div className="w-full mt-10 flex flex-col gap-5">
                        <p>
                            Today, I specialize in building modern, intuitive interfaces using technologies like&nbsp;
                            <a target="_blank" href="https://nextjs.org/" className="transition duration-300 text-gray-700 border-b-2 border-transparent hover:border-gray-700">Next.js</a>,&nbsp;
                            <a target="_blank" href="https://react.dev/" className="transition duration-300 text-blue-500 border-b-2 border-transparent hover:border-y-blue-500">React.js</a>,&nbsp;
                            <a target="_blank" href="https://www.typescriptlang.org/" className="transition duration-300 text-blue-700 border-b-2 border-transparent hover:border-blue-700">TypeScript</a>,&nbsp;
                            <a target="_blank" href="https://vitest.dev/" className="transition duration-300 text-transparent bg-gradient-to-l from-green-600 to-yellow-600 bg-clip-text border-b-2 border-transparent hover:border-green-600">Vitest</a>.
                            I also work with <a target="_blank" href="https://nodejs.org/" className="transition duration-300 text-green-700 border-b-2 border-transparent hover:border-green-700">Node.js</a> and&nbsp;
                            <a target="_blank" href="https://www.python.org/" className="transition duration-300 text-blue-600 border-b-2 border-transparent hover:border-blue-600">Python</a> for backend services, and I have intermediate experience with&nbsp;
                            <a target="_blank" href="https://aws.amazon.com/" className="transition duration-300 text-orange-600 border-b-2 border-transparent hover:border-orange-600">AWS (Amazon Web Services)</a>,&nbsp;
                            <a target="_blank" href="https://aws.amazon.com/what-is/restful-api/" className="transition duration-300 text-gray-700 underline hover:no-underline">RESTful APIs</a>,&nbsp;
                            <a target="_blank" href="https://www.mysql.com/" className="transition duration-300 text-blue-800 border-b-2 border-transparent hover:border-blue-800">MySQL database</a> and&nbsp;
                            <a target="_blank" href="https://aws.amazon.com/microservices/" className="transition duration-300 text-gray-700 underline hover:no-underline">Microservices architecture</a>.
                        </p>
                        <p>
                            Outside of coding, I enjoy online gaming, watching suspense movies, and exploring new culinary experiences.
                            I'm always open to meaningful conversations, challenges, and opportunities to grow and make an impact.
                            📫 Reach me at <a target="_blank" href="mailto:hectddos103@gmail.com" className="transition duration-300 text-indigo-600 border-b-2 border-transparent hover:border-indigo-400">hectddos103@gmail.com</a> or
                            connect with me on <a target="_blank" href="https://www.linkedin.com/in/hector-rodrigues-da-silva-4073b3191/" className="transition duration-300 text-blue-700 border-b-2 border-transparent hover:border-blue-700">LinkedIn.</a>
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
});

export default About;