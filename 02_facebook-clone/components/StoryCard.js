import Image from "next/dist/client/image";

function StoryCard({ name, src, profile, key }) {
    return (
        <div
            key={key}
            className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-300 transform ease-in hover:scale-105 hover:animate-pulse"
        >
            <Image
                className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
                src={profile}
                width={40}
                height={40}
                layout="fixed"
                objectFit="cover"
            />
            <Image
                className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
                src={src}
                layout="fill"
            />
            <h1 className="absolute bottom-0 hidden lg:inline-flex text-white py-4 px-2 font-semibold left-0">
                {name}
            </h1>
        </div>
    );
}

export default StoryCard;
