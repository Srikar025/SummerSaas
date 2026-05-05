import type { ReactElement } from "react";

export function SidebarItem({ title, icon }: { title: string, icon: ReactElement }) {
    return <div className="flex items-center text-neutral-700 py-3 px-6 cursor-pointer hover:bg-gray-200 rounded-md transition-all duration-400 mt-2 pt-5 mt-5 ">
        <div className="flex items-center ">
            <div className="pr-2  ">
                {icon}
            </div>
            <div >
                {title}
            </div>
        </div>

    </div>
}
