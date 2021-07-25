import React from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function Card({ id, contents: { score, title, synopsis, image_url } }) {
    let cardStyle =
        score >= 7.5
            ? "bg-green-400"
            : score >= 5.5
            ? "bg-yellow-400"
            : "bg-red-400";
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
        </div>
    );
}

export default Card;
