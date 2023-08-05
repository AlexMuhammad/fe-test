import { FiArrowLeft, FiArrowRight, FiMinus } from 'react-icons/fi'
import { useState } from "react"
import { COREVALUES, DeskHuman, SLIDERDATA, SPECIALITY, Scroll } from "../../constants"

export const HeroSection = () => {
    return (
        <section>
            <div className="mt-[calc(10%+20px)] md:mt-10 w-full py-10 bg-primary-1 h-96 md:h-screen">
                <div className="flex flex-col md:flex-row items-center justify-center h-full md:pt-0 pt-9 px-5 md:px-20 gap-20">
                    <div className="space-y-5 text-center md:text-start w-full">
                        <h1 className="text-4xl md:text-6xl text-white font-normal mb-5">Discover Your Wonder</h1>
                        <span className="leading-relaxed text-white text-base font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</span>
                        <div className="w-full flex justify-center pt-20 animate-bounce">
                            <img src={Scroll} alt="scroll" />
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <img src={DeskHuman} alt="dekshuman" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export const SliderSection = () => {
    const [slider, setSlider] = useState(0)
    const { id, label, title, desc } = SLIDERDATA[slider]

    const onNextHandler = () => {
        setSlider((slider + 1) % SLIDERDATA.length)
    }

    const onPrevHandler = () => {
        const newSlider = slider - 1
        if (newSlider < 0) {
            setSlider(SLIDERDATA.length - 1);
        } else {
            setSlider(slider - 1)
        }
    }
    return (
        <section id='SliderSection'>
            <div className="w-full py-10 bg-white h-96 md:h-full">
                <div className="flex flex-col md:flex-row justify-center h-full md:pt-0 px-5 md:px-20 gap-20">
                    <div className="space-y-5 md:text-center text-start md:w-1/2" key={id}>
                        <h1 className="text-4xl md:text-6xl text-primary-1 font-semibold mb-5">{label}</h1>
                        <h3 className="text-lg text-black">{title}</h3>
                        <span className="leading-relaxed text-[#777] text-sm font-light w-5">{desc}</span>
                        <div className="w-full flex justify-between items-center pt-10">
                            <div>
                                <h4 className="text-2xl transition-all duration-500 ease-in">0{id}<span className="text-[#777] text-sm">/0{SLIDERDATA.length}</span></h4>
                            </div>
                            <div className="inline-flex">
                                <FiArrowLeft className="text-[#777] text-4xl bg-gray-200 p-2 cursor-pointer" onClick={onPrevHandler} />
                                <FiArrowRight className="text-white text-4xl bg-primary-1 p-2 cursor-pointer" onClick={onNextHandler} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const CoreSection = () => {
    return (
        <section>
            <div className="w-full py-10 bg-white h-screen md:h-full">
                <div className="flex-col justify-center h-full md:pt-0 px-5 md:px-20 gap-20">
                    <div className="space-y-5 md:w-full">
                        <h1 className="text-4xl md:text-6xl text-center text-primary-1 font-semibold mb-5">Our Core Values</h1>
                        <span className="leading-relaxed text-[#777] text-sm font-light">Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit. In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim.</span>
                    </div>
                    <ul className="w-full space-y-6 list-inside pt-[34px]">
                        {COREVALUES.map(core => (
                            <li className="flex" key={core.id}>
                                <FiMinus className="text-[36px]" />
                                <div className="ml-5 space-y-[6px]">
                                    <h3 className="text-2xl text-black">{core.title}</h3>
                                    <p className="text-base text-[#777]">{core.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="w-full block md:hidden">
                        <img src={DeskHuman} alt="dekshuman" className="absolute w-[80%] right-0 opacity-25" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export const SpecialitySection = () => {
    const [slider, setSlider] = useState(0)
    const { id, label, image, desc } = SPECIALITY[slider]

    const onNextHandler = () => {
        setSlider((slider + 1) % SLIDERDATA.length)
    }

    const onPrevHandler = () => {
        const newSlider = slider - 1
        if (newSlider < 0) {
            setSlider(SLIDERDATA.length - 1);
        } else {
            setSlider(slider - 1)
        }
    }
    return (
        <section>
            <div className="w-full pt-96 md:pt-10 md:h-full">
                <div className="bg-primary-1 p-5">
                    <div className="flex flex-col md:flex-row justify-center bg-white h-full p-5 md:p-20 gap-20">
                        <div className="space-y-5 md:text-center text-start md:w-1/2">
                            <h1 className="text-2xl md:text-6xl text-primary-1 font-semibold mb-[3px]">OUR SPECIALITY</h1>
                            <span className="leading-relaxed text-[#777] text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</span>
                            <div key={id} className="flex justify-center items-center flex-col">
                                <img src={image} alt={label} className="w-1/3 pt-[28px]" />
                                <span className="text-[#A7A7A7] text-sm py-[38px] text-center leading-relaxed">{desc}</span>
                            </div>
                            <div className="w-full flex justify-between items-center pt-10">
                                <FiArrowLeft className="text-[#777] text-2xl cursor-pointer" onClick={onPrevHandler} />
                                <div className="flex gap-2">
                                    <div className={`w-3 h-3 bg ${id === 1 ? "border-2 border-[#3D46A2]" : ""} rounded-full bg-[#DAF3FC]`}></div>
                                    <div className={`w-3 h-3 bg ${id === 2 ? "border-2 border-[#3D46A2]" : ""} rounded-full bg-[#DAF3FC]`}></div>
                                    <div className={`w-3 h-3 bg ${id === 3 ? "border-2 border-[#3D46A2]" : ""} rounded-full bg-[#DAF3FC]`}></div>
                                </div>
                                <FiArrowRight className="text-[#3D46A2] text-2xl cursor-pointer" onClick={onNextHandler} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}