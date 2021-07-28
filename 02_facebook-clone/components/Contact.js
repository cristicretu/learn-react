import Image from "next/image";

function Contact({ contents: { name, profile } }) {
    return (
        <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-300 cursor-pointer rounded-xl">
            <Image
                className="rounded-full"
                objectFit="cover"
                src={profile}
                width={50}
                height={50}
                layout="fixed"
            />
            <p>{name}</p>
            <div className="absolute bottom-1 left-7 bg-green-400 w-3 h-3 rounded-full"></div>
        </div>
    );
}

export default Contact;
