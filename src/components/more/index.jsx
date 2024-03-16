import Link from "next/link";

export const MoreExperiences = () => {
    return (
        <div className="w-full bg-gray-100 border-b-8 border-gray-200 p-10 flex flex-col gap-5 items-center justify-center">
            <h3 className="uppercase text-indigo-500 font-extrabold text-xl">check out others pages</h3>
            <div className="flex flex-row flex-wrap gap-5 text-gray-700 font-extrabold">
                <Link href="/">
                    <div className="hover:text-yellow-500 cursor-pointer flex flex-row items-center">
                        <div className="text-xl mr-2 text-yellow-500">➛</div> Projects
                    </div>
                </Link>
                <Link href="/about">
                    <div className="hover:text-yellow-500 cursor-pointer flex flex-row items-center">
                        <div className="text-xl mr-2 text-yellow-500">➛</div> About me
                    </div>
                </Link>
                <Link href="/assets/me.pdf">
                    <div className="hover:text-yellow-500 cursor-pointer flex flex-row items-center">
                        <div className="text-xl mr-2 text-yellow-500">➛</div> Resume
                    </div>
                </Link>
            </div>
        </div>
    );
}