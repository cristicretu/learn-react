import Image from "next/image";
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/client";

function Header() {
    const [session] = useSession();

    return (
        <div className=" sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            {/* left */}
            <div className="flex items-center">
                <Image
                    src="https://links.papareact.com/5me"
                    width={40}
                    height={40}
                    layout="fixed"
                />
                <div className="flex ml-2 items-center rounded-full space-x-2 bg-gray-100 p-2 boorder-gray-300">
                    <SearchIcon className="h-6 text-gray-600" />
                    <input
                        type="text"
                        placeholder="Search Facebook"
                        className="hidden md:inline-flex outline-none bg-transparent flex-shrink"
                    />
                </div>
            </div>
            {/* center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-2 md:space-x-6">
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>
            {/* right */}
            <div className="flex items-center sm:space-x-2 justify-end">
                {/* <Image /> */}
                <Image
                    src={session.user.image}
                    className="rounded-full cursor-pointer"
                    onClick={() => signOut()}
                    width={40}
                    height={40}
                />

                <p className="hidden lg:inline-flex text-sm font-semibold pr-3 whitespace-nowrap">
                    {session.user.name}
                </p>
                <ViewGridIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
            </div>
        </div>
    );
}

export default Header;
