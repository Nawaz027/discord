import React from "react"
import LeftBgImage from "../../assets/left_bg_landing_header.svg"
import RightBgImage from "../../assets/right_bg_landing_header.svg"
import CenterBgImage from "../../assets/center_bg_landing_header.svg"
import { Link } from "react-router-dom"

const SectioOne = () => {
    return (
        <div className="overflow-hidden relative">
            <div className="bg-[#404EED] h-[90vh] lg:h-full overflow-hidden -z-10">
                <div className="grid grid-cols-4 gap-5 md:grid-cols-8 px-6 py-14 md:py-20 md:px-10 lg:py-[120px] lg:grid-cols-12">
                    <div className="z-10 col-span-4 lg:col-start-3 lg:col-span-8 lg:text-center">
                        <h1 className="font-[Ginto Nord] font-extrabold uppercase [font-size:clamp(24px,5vw,44px)] text-white z-10">IMAGINE A PLACE...</h1>
                        <p className="mt-6 text-white text-base z-10 lg:mt-10 lg:px-36">
                            ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
                        </p>
                        <div className="flex flex-col items-start z-10 flex-wrap lg:items-center lg:flex-row lg:justify-around">
                            <div className="bg-white text-xl py-3 px-8 rounded-[28px] flex justify-center items-center hover:text-[#7289da] hover:shadow-md hover:shadow-black/25 mt-6 z-10">
                                <svg width="24" height="24" viewBox="0 0 24 24" className="icon-2tQ9Jt mr-2"><g fill="currentColor"><path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path><path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path></g></svg>
                                <button className="z-10">
                                    Download for Windows
                                </button>
                            </div>
                            <Link to="/login">
                                <button className="bg-[#23272a] hover:bg-[#414547] text-white text-xl py-3 px-8 rounded-[28px] hover:shadow-xl hover:shadow-black/10 mt-6 z-10">Open Discord in your browser</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden">
                    <img className="object-[-90px] absolute bottom-0 md:hidden lg:block lg:h-[352px] lg:left-1/2 lg:-ml-[1030px] z-[2]" src={LeftBgImage} alt="left background"/>
                    <img className="hidden absolute md:block bottom-0 left-1/2 z-[2] lg:ml-[370px]" src={RightBgImage} alt="Right background"/>
                    <img className="hidden absolute md:block bottom-0 z-0" src={CenterBgImage} alt="center background"/>
                </div>
            </div>
        </div>
    )
}

export default SectioOne