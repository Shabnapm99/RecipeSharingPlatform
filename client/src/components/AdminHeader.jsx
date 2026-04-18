import React, { useState } from 'react'
import { FaBell } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';
import { FaBars } from 'react-icons/fa';

function AdminHeader({ searchContent, setSearchContent, setIsSidebarOpen }) {

  const showClear = searchContent.length > 0;

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 w-full bg-black/40 p-4 rounded-2xl">

      {/* Search Bar */}
      <div className="relative w-full md:w-1/3">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

        <input
          type="text"
          placeholder="Search recipes, users..."
          value={searchContent}
          onChange={(e) => setSearchContent(e.target.value)}
          className="w-full bg-[#0a2a18] text-gray-100 placeholder-gray-400 pl-10 pr-10 py-2 rounded-xl outline-none focus:ring-2 focus:ring-green-500 transition"
        />

        {showClear && (
          <ImCross
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-400 cursor-pointer text-xs"
            onClick={() => setSearchContent('')}
          />
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-end gap-5">

        {/* Notification */}
        <div className="relative cursor-pointer text-gray-300 hover:text-green-400 transition">
          <FaBell className="text-lg" />

          {/* Notification dot */}
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Optional Button */}
        {/* 
                <button className="bg-green-500 hover:bg-green-600 transition px-4 py-2 rounded-xl text-black font-semibold">
                    Invite User
                </button> 
                */}

      </div>

    </div>
  )
}

export default AdminHeader