import { memo } from "react";
import Head from "next/head";
import { useScrollY } from "@/hooks/useScrollY";

const EtecMAM = memo(() => {
    const { scrollY } = useScrollY();
    return (
        <>
            <Head>
                <title>Final Paper | Hector Silva</title>
            </Head>
            <div className="w-full animate-fade">
                <div
                    style={{ height: 500 }}
                    className="bg-transparent relative"
                >
                    <div
                        className="absolute w-full bg-cover bg-no-repeat h-full bg-[url('/assets/article_etecmam_banner.jpg')]"
                        style={{ backgroundPosition: "center 50%", transform: `translate3d(0, ${scrollY * .3}px, 0)`, zIndex: -1 }}
                    />
                    <div className="px-5 w-full h-full bg-black bg-opacity-50 flex items-center justify-center flex-col">
                        <h1 className="text-5xl lg:text-7xl text-white leading-none mb-5">
                            Etec MAM <strong className="font-semibold">Website</strong>
                        </h1>
                        <p className="text-2xl lg:text-3xl text-white drop-shadow-xl leading-10">
                            Technical, Systems Development | Final Paper 2019
                        </p>
                    </div>
                </div>
                <main className="flex bg-gray-50 items-center flex-col justify-center p-5 lg:px-32 z-20 pb-0">
                    <div className="flex items-center flex-row flex-wrap gap-20 py-24">
                        <div className="w-full xl:w-6/12">
                            <img src="assets/article_etecmam_image1.jpg" width="100%" className="rounded-lg shadow-2xl" alt="Website"/>
                        </div>
                        <div className="w-full xl:w-5/12">
                            <div className="flex flex-col justify-start gap-4">
                                <h1 className="text-3xl font-semibold text-red-500">The beginning of everything</h1>
                                <p>
                                    Everything start in 2019 with Final Paper Web for Etec of Garça/SP Brazil, where the secretary
                                    it could is management content and inform the others courses and activities of institution for students registered.
                                </p>
                                <p>
                                    In the period of technical course before only of world pandemic,
                                    thank God my force of willing and teachers help me get first job as Trainee at <a target="_blank" href="https://fulltime.com.br" className="transition duration-300 cursor-pointer border-b-2 border-transparent hover:border-red-500 text-red-600">@Fulltime</a>.
                                </p>
                            </div>
                        </div>
                        <div className="w-full xl:w-5/12">
                            <div className="flex flex-col justify-start gap-4">
                                <h1 className="text-3xl font-semibold text-red-500">My presentation</h1>
                                <p>
                                    This is my presentation of Final Paper for the students and entrepreneurs about the Website Etec MAM.
                                    I'm was very nervous, but soon after improve my communication with the peoples in this moment. In the end day, i liked of everything.
                                </p>
                            </div>
                        </div>
                        <div className="w-full xl:w-6/12">
                            <img src="assets/article_etecmam_image3.png" width="100%" className="rounded-lg shadow-2xl" alt="Presentation"/>
                        </div>
                        <div className="w-full xl:w-6/12">
                            <img src="assets/article_etecmam_image2.jpg" width="100%" className="rounded-lg shadow-2xl" alt="Classroom"/>
                        </div>
                        <div className="w-full xl:w-5/12">
                            <div className="flex flex-col justify-start gap-4">
                                <h1 className="text-3xl font-semibold text-red-500">End the of beginning</h1>
                                <p>
                                    It is inevitable that we all miss some past time, but the recorded memories are always available to be remembered.
                                    I learned a lot during this course to have determination in my learning and always seek to evolve both as a person and professionally.
                                    I can only thank everyone who was able to be with me during this mini journey in high school and in the technical course of this school.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full items-center justify-center gap-3">
                            <img src="assets/article_etecmam_banner.jpg" className="w-full rounded-xl shadow-2xl" alt="Etec MAM"/>
                            <span className="text-gray-700 font-bold">Main entrance, 2019</span>
                        </div>
                        <div className="w-full flex justify-between flex-row flex-wrap gap-10 rounded-xl">
                            <div className="flex flex-col items-center justify-center gap-3">
                                <img src="assets/article_etecmam_image4.jpg" className="rounded-lg shadow-2xl h-full" alt="Classroom"/>
                                <span className="text-gray-700 font-bold">Classroom</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3">
                                <img src="assets/article_etecmam_image5.jpg" className="rounded-lg shadow-2xl h-full" alt="Hall"/>
                                <span className="text-gray-700 font-bold">Rooms</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3">
                                <img src="assets/article_etecmam_image6.jpg" className="rounded-lg shadow-2xl h-full" alt="Garden"/>
                                <span className="text-gray-700 font-bold">Garden</span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
});

export default EtecMAM;