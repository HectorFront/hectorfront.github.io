import { memo } from "react";
import Head from "next/head";
import { useScrollY } from "@/hooks/useScrollY";

const WhatsAppLocal = memo(() => {
    const { scrollY } = useScrollY();
    return (
        <>
            <Head>
                <title>WhatsApp Local | Hector Silva</title>
            </Head>
            <div className="w-full animate-fade">
                <div
                    style={{ height: 500 }}
                    className="bg-transparent relative"
                >
                    <div
                        className="absolute w-full bg-cover bg-no-repeat h-full bg-[url('/assets/article_whatsapp_banner.webp')]"
                        style={{ backgroundPosition: "center 50%", transform: `translate3d(0, ${scrollY * .3}px, 0)`, zIndex: -1 }}
                    />
                    <div className="px-5 w-full h-full bg-black bg-opacity-50 flex items-center justify-center flex-col">
                        <h1 className="text-7xl text-white leading-none mb-5">
                            WhatsApp <strong className="font-semibold">Local</strong>
                        </h1>
                        <p className="text-3xl text-white drop-shadow-xl leading-10">
                            Copy of WhatsApp SPA with Pure JavaScript
                        </p>
                    </div>
                </div>
                <main className="flex bg-gray-50 items-center flex-col justify-center p-5 lg:px-32 z-20 pb-0">
                    <div className="flex items-center flex-row flex-wrap gap-20 py-24">
                        <div className="w-full xl:w-6/12">
                            <img src="assets/article_whatsapp_image1.png" width="100%" className="rounded-lg shadow-2xl" alt="Demo"/>
                        </div>
                        <div className="w-full xl:w-5/12">
                            <div className="flex flex-col justify-start gap-4">
                                <h1 className="text-3xl font-semibold text-green-500">Testing my knowledge</h1>
                                <p>
                                    Here I wanted to test a bit of my deep JavaScript knowledge with WebSocket, looking to learn more about the concept of rendering in SPA web applications.
                                    That's when I had the idea to make a copy of WhatsApp Web with pure JavaScript and CSS.
                                    I guarantee that the code is not pleasant to look at today, but it was a project that helped me a lot to understand the concept of libraries like React and other tools.
                                    I also learned a lot about the challenges of building real-time applications, such as dealing with latency and keeping the UI responsive.
                                    Overall, this was a valuable learning experience that helped me to become a better JavaScript developer.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full items-center justify-center gap-3">
                            <img src="assets/article_whatsapp_image3.png" className="w-full rounded-xl shadow-2xl" alt="GitHub"/>
                            <span className="text-gray-700 font-bold">4 years ago, 2021</span>
                        </div>
                        <div className="w-full xl:w-5/12">
                            <div className="flex flex-col justify-start gap-4">
                                <h1 className="text-3xl font-semibold text-green-500">Conclusion</h1>
                                <p>
                                    I am grateful for the opportunity to have worked on this project and I am confident that the skills I learned will be valuable in my future career.
                                </p>
                            </div>
                        </div>
                        <div className="w-full xl:w-6/12">
                            <img src="assets/article_whatsapp_image2.png" width="100%" className="rounded-lg shadow-2xl" alt="Demo"/>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
});

export default WhatsAppLocal;