import React from "react"
import InviteOnlyLanding from "../../assets/invite_only_landing.svg"
import HangingOutLanding from "../../assets/hanging_out_easy_landing.svg"
import FandomLanding from "../../assets/fandom_landing.svg"
import JustChilingLanding from "../../assets/just_chiling_landing.svg"
import TinyStars from "../../assets/tiny_stars_landing.svg"
import SectionComponent from "../components/SectionComponent"

const sectionTwoData = [
    {
        id: 1,
        img: InviteOnlyLanding,
        alt:"Invite only landing",
        title: "Create an invite-only place where you belong",
        description: "Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat."
    },
    {
        id: 2,
        img: HangingOutLanding,
        alt:"Where hanging out is easy",
        title: "Where hanging out is easy",
        description: "Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.",
        background: "#f6f6f6"
    },
    {
        id: 3,
        img: FandomLanding,
        alt:"From few to a fandom",
        title: "From few to a fandom",
        description: "Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.."
    },
]

const SectionTwo = () => {
    return (
        <div className="flex flex-col relative">
            {sectionTwoData.map((item) => (
                 <SectionComponent item={item} key={item.id}/>
            ))}
            <div className="px-6 py-14 bg-[#f6f6f6] md:py-20 md:px-10 lg:py-[120px]">
                <div className="">
                    <h2 className="[font-size:clamp(20px,4vw,40px)] md:text-center font-extrabold uppercase">
                        Reliable tech for staying close
                    </h2>
                    <div className="mt-6 [font-size:clamp(16px,2vw,20px)] text-[#23272a] md:text-center md:px-16 xl:px-20 2xl:px-52">
                        Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
                    </div>
                </div>
                <img className="w-full mt-6 xl:h-[735px]" src={JustChilingLanding} alt="just chiling"/>
            </div>
            <div className="px-6 pb-14 flex flex-col md:px-10 md:pb-20 item-center bg-[#f6f6f6]">
                <div className="flex justify-center">
                    <div className="absolute overflow-hidden">
                        <img className="relative w-full h-20 top-0 overflow-hidden" src={TinyStars} alt="tiny stars"/>
                    </div>
                </div>
                <h4 className="mt-8 font-bold text-4xl text-center">Ready to start your journey?</h4>
                <div className="flex justify-center">
                    <div className="bg-[#404EED] w-full md:w-auto text-white text-xl py-3 px-8 rounded-[28px] flex justify-center items-center hover:shadow-lg hover:shadow-black/25 hover:bg-[#7289da] mt-10 ">
                        <svg width="24" height="24" viewBox="0 0 24 24" className="icon-2tQ9Jt mr-2"><g fill="currentColor"><path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path><path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path></g></svg>
                        <button>
                            Download for Windows
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo;