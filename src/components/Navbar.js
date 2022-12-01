import React from "react"
import Toggle from "./ThemeToggle"

const Navbar = (props) => {
  return (
    <nav className="bg-white px-2 py-3 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex justify-between items-center mx-auto">
        <div className="flex items-center mx-auto">
          <span className="text-xl font-medium whitespace-nowrap dark:text-white">
            {props.name}
          </span>
        </div>

        <div className="flex justify-end pr-4">
          <Toggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
