import { BulbIcon } from "../icons/BulbIcon";
import { ProfileIcon } from "../icons/ProfileIcon";
import { SettingsIcon } from "../icons/SettingIcon";
import { TeamIcon } from "../icons/TeamIcon";
import { SidebarItem } from "./sidebarItem";
import logo from "../assets/logo2.png"
import { LogoutIcon } from "../icons/LogoutIcon";

export function Sidebar() {
    return <div className="h-screen border-r border-white w-60 shadow-md ">
        <div className="pt-6">
            <div className="flex  items-center   shadow-sm p-1 h-15 max-w-100">
                <img src={logo} alt="my image" className="w-47 pl-5" />
            </div>
            <br />
            <div>
                <SidebarItem title="Profile"
                    icon={<ProfileIcon />}
                />
                <br />

                <SidebarItem title="Team details"
                    icon={<TeamIcon />}
                />
                <br />
                <SidebarItem title="Problem Statement"
                    icon={<BulbIcon />}
                />
                <br />

                <SidebarItem title="Settings"
                    icon={<SettingsIcon />}
                />
                <br />
            </div>
            <div className="mt-45">
                <SidebarItem title="Logout"
                    icon={<LogoutIcon />}
                />
            </div>





        </div>


    </div>
}