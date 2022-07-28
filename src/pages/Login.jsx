import React from "react";
import Logo from "../../assets/discord_main_logo.svg";
import LoginBg from "../../assets/login_bg.svg";
import QRCode from "../../assets/qr_code.png";
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div>
            <div className="relative h-screen w-screen overflow-auto">
                <img className="fixed top-0 left-0 h-full w-full -z-10" src={LoginBg} alt="bg"/>
                <div className=" h-full w-full bg-[#2F3136] sm:bg-inherit">
                    <div className="absolute w-full flex justify-center pt-20 sm:hidden">
                        <img className="" src={Logo} alt="Logo"/>
                    </div>
                    <div className="flex justify-center items-center h-full w-full">
                        <form className="flex justify-center bg-[#2F3136] p-8 max-w-[780px] w-full rounded-md">
                            <div className="flex flex-col text-center max-w-[480px] lg:w-[416px] lg:h-[380px] w-full">
                                <div>
                                    <h3 className="mb-2 text-white font-semibold text-2xl">Welcome back!</h3>
                                    <p className="font-normal text-base text-[#b9bbbe]">We're so excited to see you again!</p>
                                </div>
                                <div className="w-full mt-5 text-left">
                                    <div className="mb-5">
                                        <h5 className="text-[#b9bbbe] mb-2 font-medium text-base w-full uppercase">Email or Phone Number</h5>
                                        <input className="w-full p-[10px] h-10 border-none rounded-md bg-[#202225] text-[#dcddde]" type="email" />
                                    </div>
                                    <div>
                                        <h5 className="text-[#b9bbbe] mb-2 font-medium text-base uppercase">Password</h5>
                                        <input className="w-full p-[10px] h-10 border-none rounded-md bg-[#202225] text-[#dcddde] focus:border-none" type="password"/>
                                    </div>
                                </div>
                                <div className="text-left mt-1 text-[#00AFF4] text-sm cursor-pointer w-fit mb-5">
                                    Forgot your password?
                                </div>
                                <Link to="/dashboard">
                                    <button className="text-white bg-[#5865F2] p-3 rounded-md mb-2 w-full">
                                        Login
                                    </button>
                                </Link>
                                <div className="mt-1 flex items-center">
                                    <span className="text-sm text-[#72767D]">Need an account?</span>
                                    <Link to="/register">
                                        <div className="text-[#00AFF4] ml-1">Register?</div>
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden md:flex ml-8">

                            </div>
                            <div className="hidden md:flex w-full flex-col justify-center items-center text-center lg:h-[344px] lg:w-[240px]">
                                <img className="h-[176px] w-[176px] mb-8" src={QRCode} alt="Qr code"/>
                                <h5 className="text-white font-semibold mb-2 text-2xl">Log in with QR Code</h5>
                                <div className="text-[#b9bbbe]">Scan this with the <strong>Discord mobile app</strong> to log in instantly.</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;