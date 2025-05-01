import { useState } from "react";

function Footer() {
    const [handle, setHandle] = useState("")
    function submithandle() {
        setHandle(" ");

    }
    return (
        <>
            <div className="my-6">
                <div className=" flex flex-col md:flex-row justify-center gap-5 items-center  bg-white">
                    <div className=" md:w-1/4 order-1 md:order-1  text-4xl text-center font-bold text-blue-700"> <a href="/"> HealthHub </a></div>

                    <div className="flex justify-around md:justify-center md:order-2 order-3  gap-5 md:w-1/4">
                        <div className="text-center  flex flex-col gap-4">
                            <p className="text-2xl">Quick Link</p>
                            <p className="hover:text-blue-600 cursor-pointer">About Us</p>
                            <p className="hover:text-blue-600 cursor-pointer">Services</p>
                            <p className="hover:text-blue-600 cursor-pointer">Contact</p>
                            <p className="hover:text-blue-600 cursor-pointer">FAQs</p>
                        </div>

                        <div className="text-center  flex flex-col gap-4">
                            <p className="text-2xl">Support</p>
                            <p className="hover:text-blue-600 cursor-pointer">Privacy Policy</p>

                            <p className="hover:text-blue-600 cursor-pointer"> Terms & Conditions</p>

                            <p className="hover:text-blue-600 cursor-pointer">Report an Issue</p>

                            <p className="hover:text-blue-600 cursor-pointer"> Feedback </p>

                        </div>
                    </div>
                    <div className="w-full max-w-xl order-2 md:order-3 mx-auto p-6  rounded-2xl  bg-white text-center">
                        <h2 className="text-xl font-semibold mb-4">Subscribe to our Newsletter</h2>
                        <p className="text-gray-600 mb-6">Stay updated with health tips and community resources.</p>
                        <div className="flex items-center gap-2 justify-center">
                            <input
                                value={handle}
                                onChange={(e) => setHandle(e.target.value)}
                                type="email"
                                placeholder="Enter your email"
                                className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <button onClick={submithandle} className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-full transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>

                </div>
                <p className="text-center text-sm text-gray-500 mt-6">
                    © 2025 Healthub. All rights reserved. Designed for better community healthcare access.
                </p>

            </div>

        </>
    )
}

export default Footer;