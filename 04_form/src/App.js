import { useEffect, useRef, useState } from "react";

function App() {
    // FIRST NAME
    const [FirstName, setFirstName] = useState("");
    const [WarningEmail, setWarningEmail] = useState("");
    // LAST NAME
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");

    return (
        <div class="flex items-center justify-center h-screen">
            <div class="bg-blue-500 text-white flex flex-col rounded-md border shadow-md px-40 p-10">
                <h1 className="text-2xl font-semibold">Sign up</h1>
                <div className="">
                    <div className="mt-4">
                        <h3 className="font-semibold text-lg">First Name</h3>
                        <input
                            className="rounded-sm outline-none text-black py-2 px-2"
                            type="text"
                            onChange={(e) => setFirstName(e.target.value)}
                            value={FirstName}
                            placeholder="John"
                        />
                    </div>

                    <div className="mt-3">
                        <h3 className="font-semibold text-lg">Last Name</h3>
                        <input
                            className="rounded-sm outline-none text-black py-2 px-2"
                            type="text"
                            onChange={(e) => setLastName(e.target.value)}
                            value={LastName}
                            placeholder="Doe"
                        />
                    </div>

                    <div className="mt-4">
                        <h3 className="font-semibold text-lg">Email</h3>
                        <input
                            className="rounded-sm outline-none text-black py-2 px-2"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={Email}
                            placeholder="tim@apple.com"
                        />
                        {Warning && <p className="text-red-500">{Warning}</p>}
                        {!Warning && (
                            <p className="text-transparent cursor-default">
                                placeholder
                            </p>
                        )}
                    </div>

                    <div className="mt-1">
                        <h3 className="font-semibold text-lg">Password</h3>
                        <input
                            className="rounded-sm outline-none text-black py-2 px-2"
                            type="password"
                            placeholder="********"
                        />
                    </div>

                    <div className="mt-1">
                        <h3 className="font-semibold text-lg">Phone Number</h3>
                        <input
                            className="rounded-sm outline-none text-black py-2 px-2"
                            type="tel"
                            placeholder="123-45-678"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        />
                    </div>

                    <div class="mt-2">
                        <label class="inline-flex items-center">
                            <input type="radio" />
                            <span class="ml-2">Personal</span>
                        </label>
                        <label class="inline-flex items-center ml-6">
                            <input type="radio" />
                            <span class="ml-2">Business</span>
                        </label>
                    </div>

                    <div class="flex mt-6">
                        <label class="flex items-center">
                            <input
                                type="checkbox"
                                class="form-checkbox"
                                className="text-red-200"
                            />
                            <span class="ml-2">
                                I agree to the{" "}
                                <span class="underline cursor-pointer">
                                    privacy policy
                                </span>
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
