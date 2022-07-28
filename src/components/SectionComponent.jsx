import React from "react"

const SectionComponent = ({item}) => {
    if (item.id === 2) {
        return (
            <div className="flex flex-col items-center bg-[#f6f6f6]">
                <div className="px-6 py-14 grid grid-cols-4 gap-5 md:grid-cols-8 md:py-20 md:px-10 lg:grid-cols-12 lg:py-[120px] max-w-7xl" key={item.id}>
                    <img className="mt-6 col-span-4 lg:col-start-6 lg:col-span-7 order-2" src={item.img} alt={item.alt}/>
                    <div className="mt-6 col-span-4 lg:col-start-1">
                        <h2 className="font-bold [font-size:clamp(20px,4vw,40px)]">
                            {item.title}
                        </h2>
                        <div className="mt-6 [font-size:clamp(16px,2vw,20px)] text-[#23272a]">
                            {item.description}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="flex flex-col items-center">
            <div className="px-6 py-14 grid grid-cols-4 gap-5 md:grid-cols-8 md:py-20 md:px-10 lg:grid-cols-12 lg:py-[120px] max-w-7xl" key={item.id}>
                <img className="mt-6 col-span-4 lg:col-span-7" src={item.img} alt={item.alt}/>
                <div className="mt-6 col-span-4 lg:col-start-9">
                    <h2 className="font-bold [font-size:clamp(20px,4vw,40px)]">
                        {item.title}
                    </h2>
                    <div className="mt-6 [font-size:clamp(16px,2vw,20px)] text-[#23272a]">
                        {item.description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionComponent;