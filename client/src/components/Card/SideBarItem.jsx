import React from 'react'

function SideBarItem({ text, icon, active }) {
    return (
        <div
            className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${active ? "bg-green-500 text-black" : "hover:bg-[#0a2a18]"
                }`}
        >
            {icon}
            {text}
        </div>
    )
}

export default SideBarItem