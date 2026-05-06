

import { GameCard } from "../components/GameCard";
import { Sidebar } from "../components/sidebar"
import { Topbar } from "../components/topbar";

export function Dashboard() {



    return (
        <div>

            <div>
                <Topbar />
            </div>
            <div className="flex items-start  ">
                <div>
                    <Sidebar />
                </div>

                <div className="m-5">
                    <GameCard />

                </div>
            </div>



        </div>
    );
}