import React from "react";
import Logo from "../../assets/discord_main_logo.svg";
import LoginBg from "../../assets/login_bg.svg";
import { Link } from "react-router-dom"

const Register = () => {
    return  (
        <div>
            <div className="relative h-screen w-screen overflow-auto">
                <img className="fixed top-0 left-0 h-full w-full -z-10" src={LoginBg} alt="bg"/>
                <div className=" h-full w-full bg-[#2F3136] sm:bg-inherit">
                    <div className="absolute w-full flex justify-center pt-5 sm:hidden">
                        <img className="" src={Logo} alt="Logo"/>
                    </div>
                    <div className="flex justify-center items-center h-full w-full">
                        <form className="flex justify-center bg-[#2F3136] p-8 max-w-[480px] w-full rounded-md">
                            <div className="flex flex-col text-center w-full">
                                <div>
                                    <h3 className="mb-2 text-white font-semibold text-2xl">Create an account</h3>
                                </div>
                                <div className="w-full mt-5 text-left">
                                    <div className="mb-5">
                                        <h5 className="text-[#b9bbbe] mb-2 font-medium text-base w-full uppercase">Email</h5>
                                        <input className="w-full p-[10px] h-10 border-none rounded-md bg-[#202225] text-[#dcddde]" type="email" />
                                    </div>
                                    <div className="mb-5">
                                        <h5 className="text-[#b9bbbe] mb-2 font-medium text-base w-full uppercase">Username</h5>
                                        <input className="w-full p-[10px] h-10 border-none rounded-md bg-[#202225] text-[#dcddde]" type="text" />
                                    </div>
                                    <div className="mb-5">
                                        <h5 className="text-[#b9bbbe] mb-2 font-medium text-base uppercase">Password</h5>
                                        <input className="w-full p-[10px] h-10 border-none rounded-md bg-[#202225] text-[#dcddde] focus:border-none" type="password"/>
                                    </div>
                                    <div className="mb-5">
                                        <h5 className="text-[#b9bbbe] mb-2 font-medium text-base uppercase">Confirm Password</h5>
                                        <input className="w-full p-[10px] h-10 border-none rounded-md bg-[#202225] text-[#dcddde] focus:border-none" type="password"/>
                                    </div>
                                </div>
                                <Link to="/login">
                                    <button className="text-white bg-[#5865F2] p-3 rounded-md mb-2 w-full mt-3">
                                        Continue
                                    </button>
                                </Link>
                                <Link to="/login">
                                    <div className="text-left mt-1 text-[#00AFF4] text-sm cursor-pointer w-fit mb-5">
                                        Already have an account?
                                    </div>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;