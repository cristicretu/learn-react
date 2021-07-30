import requests from "../utils/requests";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    return (
        <nav className="relative">
            <div className="flex space-x-10 sm:space-x-20 px-10 sm:px-16 text-2xl whitespace-nowrap overflow-x-scroll no-scrollbar">
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <h2
                        className="cursor-pointer transition duration-200 transform hover:scale-110 hover:text-white active:text-blue-500"
                        key={key}
                        onClick={() => router.push(`/?genre=${key}`)}
                    >
                        {title}
                    </h2>
                ))}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
        </nav>
    );
}
