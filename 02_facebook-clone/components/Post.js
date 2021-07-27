import React from "react";
import Image from "next/image";

function Post({ name, message, image, postImage, timestamp }) {
    return (
        <div className="flex flex-col">
            <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-md">
                <div className="flex items-center space-x-2">
                    <img
                        className="rounded-full"
                        src={image}
                        alt=""
                        width={40}
                        height={40}
                    />
                    <div>
                        <p className="font-medium">{name}</p>
                        <p className="text-xs text-gray-400">
                            {new Date(timestamp?.toDate()).toLocaleString()}
                        </p>
                    </div>
                </div>

                <p className="pt-4">{message}</p>
            </div>

            {postImage && (
                <div className="relative h-56 md:h-96 bg-white">
                    <Image
                        src={postImage}
                        alt=""
                        objectFit="cover"
                        layout="fill"
                    />
                </div>
            )}
        </div>
    );
}

export default Post;
