


import { Sidebar } from "../components/sidebar"
import { Topbar } from "../components/topbar";


export function Dashboard() {

    return (
        <div className="relative">
            <div>
                <Topbar />
            </div>
            <div className="flex items-start  ">
                <div>
                    <Sidebar />
                </div>


            </div>



        </div>
    );
}