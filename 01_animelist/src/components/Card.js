import React from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function Card({
    id,
    contents: { score, title, synopsis, image_url },
    favorites,
    setFavorites,
}) {
    let cardStyle =
        score >= 7.5
            ? "bg-green-400"
            : score >= 5.5
            ? "bg-yellow-400"
            : "bg-red-400";

    // https://stackoverflow.com/questions/54676966/push-method-in-react-hooks-usestate
    const favoriteShow = () => {
        setFavorites((favorties) => [
            ...favorites,
            {
                score: score,
                title: title,
                synopsis: synopsis,
                image_url: image_url,
            },
        ]);
    };

    return (
        <div
            key={id}
            className={classNames(
                " borderborder-gray-400 rounded-lg overflow-hidden flex",
                cardStyle
            )}
        >
            <img src={image_url} alt="" className="w-36 rounded-l-lg" />
            <div className="p-4 w-full rounded-lg flex place-items-center my-2">
                <div className="flex flex-col space-y-2 ">
                    <div className=" h-full w-full flex place-items-center justify-center ">
                        <div className="text-2xl font-semibold w-full">
                            {title}
                        </div>

                        <div className="border-2 border-black w-12 h-10 rounded-lg flex place-items-center ">
                            <h3 className="text-xl text-center w-full">
                                {Math.round(score * 10) / 10}
                            </h3>
                        </div>
                    </div>

                    <div className="text-sm font-medium w-full text-opacity-70 ">
                        {synopsis}
                    </div>
                </div>
            </div>

            <div className="flex-1 text-center py-2 m-2">
                <button
                    onClick={favoriteShow}
                    className="w-12 mt-1 group flex items-center text-gray-800 px-3 py-2 text-base leading-6 font-medium rounded-full transition-all hover:bg-red-800 hover:bg-opacity-70 hover:text-red-500"
                >
                    <svg
                        className="text-center h-7 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Card;
