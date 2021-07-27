import { useSession } from "next-auth/client";
import Image from "next/image";

import { EmojiHappyIcon } from "@heroicons/react/solid";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";

import { useRef } from "react";
import { db } from "../firebase";
import firebase from "firebase";

function InputBox() {
    const [session] = useSession();
    const inputRef = useRef(null);
    const sendPost = (e) => {
        e.preventDefault();

        if (!inputRef.current.value) return;

        db.collection("posts").add({
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        inputRef.current.value = "";
    };

    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-center">
                <Image
                    className="rounded-full"
                    src={session.user.image}
                    width={40}
                    height={40}
                    layout="fixed"
                />
                <form className="flex flex-1">
                    <input
                        type="text"
                        ref={inputRef}
                        className="outline-none rounded-full h-12 bg-gray-100 flex-grow px-5"
                        placeholder={`What's on your mind, ${
                            session.user.name.split(" ")[0]
                        }?`}
                    />
                    <button className="hidden" type="submit" onClick={sendPost}>
                        Submit
                    </button>
                </form>
            </div>

            <div className="flex justify-evenly p-3 border-t">
                <div className="flex inputIcon">
                    <VideoCameraIcon className="h-7 text-red-500"></VideoCameraIcon>
                    <p className="text-xs sm:text-sm xl:text-base">
                        Live video
                    </p>
                </div>
                <div className="flex inputIcon">
                    <CameraIcon className="h-7 text-green-500"></CameraIcon>
                    <p className="text-xs sm:text-sm xl:text-base">
                        Photo/Video
                    </p>
                </div>
                <div className="flex inputIcon">
                    <EmojiHappyIcon className="h-7 text-yellow-700"></EmojiHappyIcon>
                    <p className="text-xs sm:text-sm xl:text-base">
                        Feeling/Activity
                    </p>
                </div>
            </div>
        </div>
    );
}

export default InputBox;
