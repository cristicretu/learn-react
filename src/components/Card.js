import React from "react";

function Card({ id, contents: { score, title, synopsis, image_url } }) {
    return (
        <div
            key={id}
            className="bg-gray-300 border border-gray-400 rounded-r-lg"
        >
            <img src={image_url} alt="anim" className="w-36 rounded-l-lg" />
            <div className="p-4 w-full rounded-lg flex place-items-center my-2">
                <div className="flex flex-col space-y-2 ">
                    <div className=" font-bold h-full flex place-items-center text-left justify-between">
                        <div className="text-2xl w-64">{title}</div>
                        <div className="border-2 border-black w-12 h-10 rounded-lg flex place-items-center ">
                            <div className="text-xl text-center w-full">
                                {Math.round(score * 10) / 10}
                            </div>
                        </div>
                    </div>
                    <div className="text-sm font-medium text-left">
                        {synopsis}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
