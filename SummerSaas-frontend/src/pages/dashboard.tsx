import logo from "../assets/logo2.png"
import { Sidebar } from "../components/sidebar"

export function Dashboard() {
    return <div className="flex">
        <Sidebar />


        <div className="flex top-0 left-[30%] ">
            <div className="flex justify-between shadow-md h-15 rounded-2xl top-0 left-[30%] absolute px-10">

                <div className="   text-neutral-600  p-3 w-125  rounded m-1 flex justify-between">
                    <div className="cursor-pointer"> Games </div>
                    <div className="cursor-pointer">Communtiy </div>
                    <div className="cursor-pointer"> Posts </div>
                    <div className="cursor-pointer"> Projects</div>
                </div>
            </div>

        </div>





    </div>
}


