import { signIn } from "next-auth/client";

function Login() {
    return (
        <div className="flex flex-col justify-center items-center m-24">
            <h1
                onClick={() => signIn()}
                className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer"
            >
                LOG IN BRO
            </h1>
        </div>
    );
}

export default Login;
