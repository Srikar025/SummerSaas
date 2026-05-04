import type { ReactElement } from "react";

export function SidebarItem({ title, icon }: { title: string, icon: ReactElement }) {
    return <div className="flex items-center text-gray-700 py-1 cursor-pointer hover:bg-gray-200 rounded max-w pl-4 transition-all duration-400 pl-6 pt-10 m">
        <div className="pr-2  ">
            {icon}
        </div>
        <div >
            {title}
        </div>

    </div>
}
