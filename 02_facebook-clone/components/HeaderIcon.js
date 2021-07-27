function HeaderIcon({ Icon, active }) {
    return (
        <div className="flex group items-center rounded-xl cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 border-b-2 active:bg-gray-100 border-transparent border-rounded-lg active:border-blue-500 active:border-opacity-20">
            <Icon
                className={`h-5 text-gray-500 text-center ${
                    active && "text-blue-500"
                } sm:h-7 mx-auto group-hover:text-blue-500`}
            />
        </div>
    );
}

export default HeaderIcon;
