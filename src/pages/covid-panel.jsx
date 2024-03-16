import { memo } from "react";
import Head from "next/head";
import { useScrollY } from "@/hooks/useScrollY";

const CovidPanel = memo(() => {
    const { scrollY } = useScrollY();
    return (
        <>
            <Head>
                <title>Covid Panel | Hector Silva</title>
            </Head>
            <div className="w-full animate-fade">
                <div
                    style={{ height: 500 }}
                    className="bg-transparent relative"
                >
                    <div
                        className="absolute w-full bg-cover bg-no-repeat h-full bg-[url('/assets/article_covidpanel_banner.jpeg')]"
                        style={{ backgroundPosition: "center 50%", transform: `translate3d(0, ${scrollY * .3}px, 0)`, zIndex: -1 }}
                    />
                    <div className="px-5 w-full h-full bg-black bg-opacity-50 flex items-center justify-center flex-col">
                        <h1 className="text-7xl text-white leading-none mb-5">
                            Coronavirus <strong className="font-semibold">Panel</strong>
                        </h1>
                        <p className="text-3xl text-white drop-shadow-xl leading-10">
                            Focus in Brazil/SP and all cities in the interior of state.
                        </p>
                    </div>
                </div>
                <main className="flex bg-gray-50 items-center flex-col justify-center p-5 lg:px-32 z-20 pb-0">
                    <div className="flex items-center flex-row flex-wrap gap-20 py-24">
                        <div className="w-full xl:w-5/12">
                            <div className="flex flex-col justify-start gap-4">
                                <h1 className="text-3xl font-semibold text-orange-500">About panel</h1>
                                <p>
                                    This dashboard was developed to serve as the communication vehicle regarding the epidemiological situation of COVID-19 in healthcare units.
                                </p>
                            </div>
                        </div>
                        <div className="w-full xl:w-6/12">
                            <img src="assets/article_covidpanel_image1.png" width="100%" className="rounded-lg shadow-2xl" alt="Cities"/>
                        </div>
                        <div className="w-full xl:w-5/12">
                            <div className="flex flex-col justify-start gap-4">
                                <h1 className="text-3xl font-semibold text-orange-500">Objective</h1>
                                <p>
                                    The main goal of the project was to inform people from the interior and state of São Paulo, aiming to save large amounts of data from the government's public API,
                                    so that the layout does not become too confusing and is straightforward in providing information to the user.
                                </p>
                            </div>
                        </div>
                        <div className="w-full xl:w-6/12">
                            <img src="assets/article_covidpanel_image2.png" width="100%" className="rounded-lg shadow-2xl" alt="Graph"/>
                        </div>
                        <div className="flex flex-row flex-wrap justify-between gap-10 xl:flex-nowrap">
                            <div className="w-full">
                                <img src="assets/article_covidpanel_image3.png" width="100%" className="rounded-lg shadow-2xl" alt="Map"/>
                            </div>
                            <div className="w-full">
                                <img src="assets/article_covidpanel_image4.png" width="100%" className="rounded-lg shadow-2xl" alt="About"/>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
});

export default CovidPanel;