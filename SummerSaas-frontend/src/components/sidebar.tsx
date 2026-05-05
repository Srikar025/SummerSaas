import { BulbIcon } from "../icons/BulbIcon";
import { ProfileIcon } from "../icons/ProfileIcon";
import { SettingsIcon } from "../icons/SettingIcon";
import { TeamIcon } from "../icons/TeamIcon";
import { SidebarItem } from "./sidebarItem";

import club from "../assets/club.png"
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./Card";


export function Sidebar() {
    const [isOpen, setisOpen] = useState(false);
    const [content, setContent] = useState<any>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    BACKEND_URL + "/api/v2/content",
                    {
                        headers: {
                            Authorization: localStorage.getItem("token")
                        }
                    }
                );

                console.log("API Response:", res.data);

                setContent(res.data.content);
            }
            catch (e) {
                console.log(e);
            }
        };

        fetchData();
    }, []);

    return <div className="flex items-start">
        <div className="h-screen border-r border-white w-60 shadow-md ">
            <div className="container">

                <br />
                <div>
                    <div onClick={() => setisOpen(!isOpen)}>
                        <SidebarItem title="Profile"
                            icon={<ProfileIcon />}
                        />
                    </div>
                    <br />

                    <SidebarItem title="Team details"
                        icon={<TeamIcon />}
                    />
                    <br />
                    <SidebarItem title="Problem Statement"
                        icon={<BulbIcon />}
                    />
                    <br />

                    <SidebarItem title="Submissions"
                        icon={<SettingsIcon />}
                    />
                    <br />
                </div>
                <div className=" mt-45 flex items-center pl-5 justify-center">
                    <img src={club} alt="image" className="w-20 h-20" />
                    <p className="text-orange-600">From Team <span className="text-red-950 font-bold">DevCatalyst</span></p>

                </div>





            </div>
        </div>
        <div >
            {content ? (
                <Card data={content} isOpen={isOpen} />
            ) : (
                <p>Loading...</p>
            )}


        </div>


    </div>
}