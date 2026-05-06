import { useState } from "react";
import logo from "../assets/logo2.png"
import { Game } from "./Game";
export function Topbar() {
    const [Open, setOpen] = useState(false);

    return (

        <div className="relative">
            <div className="flex justify-center shadow-md py-6">
                <div className="flex items-center gap-25">
                    <div className="justify-center">

                        <img src={logo} alt="logo" className="w-50 justify-center" />
                    </div>

                    <ul className="flex gap-10 text-red-950 font-semibold">
                        <li className="hover:text-red-600 cursor-pointer" onClick={() => setOpen(!Open)}>Games</li>
                        <li className="hover:text-red-600 cursor-pointer">Community</li>
                        <li className="hover:text-red-600 cursor-pointer">Posts</li>
                        <li className="hover:text-red-600 cursor-pointer">Projects</li>
                    </ul>

                </div>


            </div>
            <div className="absolute my-2 left-80" >
                <Game ISopen={Open} />
            </div>
        </div>
    )
}