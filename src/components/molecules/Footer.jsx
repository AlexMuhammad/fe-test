import { LogoWhite, POSITION } from "../../constants";
import Select from "../atoms/Select";
import { useState } from "react";

const Footer = () => {
    const temp = POSITION.find((ext) => ext.value);
    const [currentPosition, setcurrentPosition] = useState(temp);

    return (
        <footer>
            <div className="bg-[#07477A] w-full px-5 md:px-24 py-[34px]">
                <div className="flex md:flex-row flex-col items-start gap-10 md:space-y-0 space-y-[30px]">
                    <img src={LogoWhite} alt="logo-white" className="w-[228.017px] h-[45px]" />
                    <div className="flex flex-col bg-white w-full md:w-[30%] p-8">
                        <Select
                            options={POSITION}
                            selectedOption={currentPosition}
                            handelChange={(event) => {
                                setcurrentPosition(event)
                            }}
                        />
                        <ul className="text-primary-1 text-lg pt-[40px]">
                            <li>Jl. Lembong No 8</li>
                            <li>Kel. Braga Kec.Sumur</li>
                            <li>Bandung, Kota</li>
                            <li>Bandung, Jawa Barat</li>
                        </ul>
                    </div>
                    <ul className="text-white space-y-3 text-lg">
                        <li>Who We Are</li>
                        <li>Our Values</li>
                        <li>The Perks</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer