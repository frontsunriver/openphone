import React from "react"
import Navbar from "../components/Navbar"

export const Contact = () => {
  return (
    <div className="grid grid-cols-3 min-h-full">
      <div className="col-span-2 border-r border-gray-200 dark:border-gray-600">
        <Navbar name="Contacts" />
        <div className="flex flex-col">
          <div className="my-2 flex items-center">
            <input type="checkbox" />
            <div className="text-black dark:text-white">Activity</div>
          </div>
          <div className="mb-2 flex items-center">
            <input type="checkbox" />
            <div className="text-black dark:text-white">Activity</div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}
