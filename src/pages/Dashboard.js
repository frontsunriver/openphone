import React from "react"
import Navbar from "../components/Navbar"

export const Dashboard = () => {
  return (
    <div>
      <Navbar name="Dashboard" />
      <div className="text-black dark:text-white">Dashboard</div>
    </div>
  )
}
