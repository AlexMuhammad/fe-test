import { FiMenu } from "react-icons/fi"
import { Logo, MENUS } from "../../constants"
import { useState } from "react"

const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
        <header>
            <nav className="md:px-24 px-5 w-full fixed z-50 top-0 bg-white py-5 shadow-md">
                <div className="w-full md:flex md:justify-between items-center">
                    <div className="absolute right-5 top-8 text-xl cursor-pointer block md:hidden" onClick={() => setShow(!show)}>
                        <FiMenu />
                    </div>
                    <img src={Logo} alt="logo" className="z-50" />
                    <ul className={`-z-50 bg-white shadow-md md:shadow-none md:py-0 py-10 absolute md:static md:w-auto left-0 w-full md:mt-0 mt-10 md:flex md:space-x-5 md:space-y-0 space-y-5 ease-in transition-all duration-500 ${show ? "top-8" : "top-[-500px]"}`}>
                        {MENUS.map((menu) => (
                            <li className="px-5" key={menu.id}>{menu.label}</li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar