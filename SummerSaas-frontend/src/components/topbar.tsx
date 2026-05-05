import logo from "../assets/logo2.png"
export function Topbar() {

    return (
        <nav>
            <div className="flex justify-center shadow-md py-6">
                <div className="flex items-center gap-25">
                    <div className="justify-center">

                        <img src={logo} alt="logo" className="w-50 justify-center" />
                    </div>

                    <ul className="flex gap-10 text-red-950 font-semibold">
                        <li className="hover:text-red-600 cursor-pointer">Games</li>
                        <li className="hover:text-red-600 cursor-pointer">Community</li>
                        <li className="hover:text-red-600 cursor-pointer">Posts</li>
                        <li className="hover:text-red-600 cursor-pointer">Projects</li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}