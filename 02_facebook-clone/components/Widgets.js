import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Contact from "./Contact";

const widgetsData = [
    {
        name: "Lionel Messi",
        profile: "https://links.papareact.com/kxk",
    },
    {
        name: "Elon Musk",
        profile: "https://links.papareact.com/kxk",
    },
    {
        name: "Jeff Bezos",
        profile: "https://links.papareact.com/f0p",
    },
    {
        name: "Mark Zuckerberg",
        profile: "https://links.papareact.com/snf",
    },
    {
        name: "Bill Gates",
        profile: "https://links.papareact.com/zvy",
    },
];

function Widgets() {
    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6" />
                    <SearchIcon className="h-6" />
                    <DotsHorizontalIcon className="h-6" />
                </div>
            </div>

            {widgetsData.map((contact) => (
                <Contact key={contact.name} contents={contact} />
            ))}
        </div>
    );
}

export default Widgets;
