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
                            <a href="https://www.mexpenses.net" target="_blank">
                                @Mexpenses
                                <div className="h-3 bg-indigo-600 opacity-20 w-full absolute top-4 transition-all duration-300 group-hover:top-6"/>
                            </a>
                        </div>
                    </h6>
                    <div className="flex flex-row w-full justify-center flex-wrap xl:flex-nowrap pt-10 gap-5 xl:gap-10">
                        <div className="xl:pr-20">
                            <h5 className="text-gray-400 font-bold text-xl">About me</h5>
                            <h1 className="text-black font-bold text-4xl mt-2">Hello!</h1>
                            <p className="mt-4">
                                I'm Hector, Front-end Engineer on the <a target="_blank" href="https://fulltime.com.br/solucoes/fullcam/" className="transition duration-300 cursor-pointer border-b-2 border-transparent hover:border-red-500 text-red-600">@FullCam</a> team.
                                In 2021, I founded <a target="_blank" href="https://www.mexpenses.net" className="transition duration-300 cursor-pointer border-b-2 border-transparent hover:border-indigo-500 text-indigo-600">@Mexpenses</a> with
                                just an idea to make my daily finances easier. Since then, it has become something of extreme importance to my users and to me today.
                                Since 2019, I have 5 years of professional experience, always seeking to learn, improve, and learn about new technologies in the market.
                                My role as a developer in these companies is to create innovations, intuitive experiences that have a great impact on users, and solve problems from the easiest to the most difficult.
                                I started programming at the age of 16 in a school with a technical course in System Development in the city of Garça SP. I fell in love with learning web-oriented languages and UX/UI development tools.
                                During my studies, I started my internship at <a target="_blank" href="https://fulltime.com.br/" className="transition duration-300 cursor-pointer border-b-2 border-transparent hover:border-red-500 text-red-600">@Fulltime</a> through
                                the recommendation of a teacher. There, I had the opportunity to start my career and become a full-time qualified professional.
                            </p>
                        </div>
                        <img src="/assets/me.png" className="h-96 rounded-xl shadow-lg" alt="Hector Silva"/>
                    </div>
                    <div className="w-full mt-10 flex flex-col gap-5">
                        <p>
                            Lately, I've been very involved with frameworks and libraries like&nbsp;
                            <a target="_blank" href="https://nextjs.org/" className="transition duration-300 text-gray-700 border-b-2 border-transparent hover:border-gray-700">Next.js</a>,&nbsp;
                            <a target="_blank" href="https://react.dev/" className="transition duration-300 text-blue-500 border-b-2 border-transparent hover:border-y-blue-500">React.js</a>,&nbsp;
                            <a target="_blank" href="https://www.typescriptlang.org/" className="transition duration-300 text-blue-700 border-b-2 border-transparent hover:border-blue-700">TypeScript</a>,&nbsp;
                            <a target="_blank" href="https://vitest.dev/" className="transition duration-300 text-transparent bg-gradient-to-l from-green-600 to-yellow-600 bg-clip-text border-b-2 border-transparent hover:border-green-600">Vitest</a> and&nbsp;
                            <a target="_blank" href="https://github.com/HectorFront/#tools" className="transition duration-300 text-gray-700 underline hover:no-underline">other tools</a> that help with the productivity of web development.
                            I have intermediate experience with cloud service providers like&nbsp;
                            <a target="_blank" href="https://aws.amazon.com/" className="transition duration-300 text-orange-600 border-b-2 border-transparent hover:border-orange-600">AWS (Amazon Web Services)</a>, building&nbsp;
                            <a target="_blank" href="https://aws.amazon.com/what-is/restful-api/" className="transition duration-300 text-gray-700 underline hover:no-underline">API's RESTful</a> with&nbsp;
                            <a target="_blank" href="https://www.mysql.com/" className="transition duration-300 text-blue-800 border-b-2 border-transparent hover:border-blue-800">MySQL database</a>, and&nbsp;
                            <a target="_blank" href="https://aws.amazon.com/microservices/" className="transition duration-300 text-gray-700 underline hover:no-underline">Microservices</a> using&nbsp;
                            <a target="_blank" href="https://nodejs.org/" className="transition duration-300 text-green-700 border-b-2 border-transparent hover:border-green-700">Node.js</a> and&nbsp;
                            <a target="_blank" href="https://www.python.org/" className="transition duration-300 text-blue-600 border-b-2 border-transparent hover:border-blue-600">Python</a>.
                        </p>
                        <p>
                            I like to spend my time playing online games, watching suspense movies on streaming services, and always looking for new places to enjoy different flavors.
                            If you want to talk to me, I'm open to new challenges and opportunities so that I can evolve and contribute more and more.
                            Feel free to send me an email at <a target="_blank" href="mailto:hectddos103@gmail.com" className="transition duration-300 text-indigo-600 border-b-2 border-transparent hover:border-indigo-400">hectddos103@gmail.com</a> or
                            connect with me on <a target="_blank" href="https://www.linkedin.com/in/hector-rodrigues-da-silva-4073b3191/" className="transition duration-300 text-blue-700 border-b-2 border-transparent hover:border-blue-700">LinkedIn.</a>
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
});

export default About;