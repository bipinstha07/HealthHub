import { useState } from "react";

function Footer() {
const [handle,setHandle] = useState("")
    function submithandle(){
        setHandle(" ");
        
    }

    return (
        <>
            <div className="my-5">
                <div className=" flex flex-col md:flex-row justify-center gap-5 items-center  bg-white">
                    <div className=" w-1/4  text-4xl text-center font-bold text-blue-700"> <a href="/"> HealthHub </a></div>

                    <div className="flex justify-center  gap-5 w-1/4">
                        <div className="text-center flex flex-col gap-4">
                            <p className="text-2xl">Quick Link</p>
                            <p>About Us</p>
                            <p>Services</p>
                            <p>Contact</p>
                            <p>FAQs</p>
                        </div>

                        <div className="text-center flex flex-col gap-4">
                            <p className="text-2xl">Support</p>
                            <p>Privacy Policy</p>

                            <p> Terms & Conditions</p>

                            <p>Report an Issue</p>

                            <p> Feedback </p>

                        </div>
                    </div>
                    <div className="w-full max-w-xl mx-auto p-6  rounded-2xl  bg-white text-center">
                        <h2 className="text-xl font-semibold mb-4">Subscribe to our Newsletter</h2>
                        <p className="text-gray-600 mb-6">Stay updated with health tips and community resources.</p>
                        <div className="flex items-center gap-2 justify-center">
                            <input
                                value={handle}
                                onChange={(e)=> setHandle(e.target.value)}
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

            </div>

        </>
    )
}

export default Footer;