function HeaderItem({ Icon, title }) {
    return (
        <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white text-gray-300 transition-all">
            <Icon className="h-8 mb-1 group-hover:animate-bounce" />
            <p className="opacity-0 transition group-hover:opacity-100 tracking-widest">
                {title}
            </p>
        </div>
    );
}

export default HeaderItem;
