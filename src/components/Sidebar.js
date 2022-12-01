import React from "react"
import { Link, useLocation } from "react-router-dom"

// import { BsArrowLeftCircle } from "react-icons/bs"
import { AiFillPieChart } from "react-icons/ai"
import { TfiAnnouncement } from "react-icons/tfi"
import { AiOutlineContacts } from "react-icons/ai"
import { CiSettings } from "react-icons/ci"
// import { SiOpenaccess } from "react-icons/si"
import { CgProfile } from "react-icons/cg"
import { FcAddressBook } from "react-icons/fc"
import { FcCallback } from "react-icons/fc"
import Logo from "../assets/images/logo.svg"

const Sidebar = () => {
  // const [open, setOpen] = useState(true)
  const open = true
  const location = useLocation()

  const Menus = [
    { title: "Dashboard", path: "/dashboard", src: <AiFillPieChart /> },
    { title: "Activity", path: "/activity", src: <TfiAnnouncement /> },
    { title: "Contact", path: "/contact", src: <AiOutlineContacts /> },
    { title: "Setting", path: "/setting", src: <CiSettings /> },
    { title: "Profile", path: "/profile", src: <CgProfile /> },
  ]

  return (
    <>
      <div
        className={`${open ? "w-80" : "w-fit"
          } hidden sm:block relative h-screen duration-300 bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800`}
      >
        {/* <BsArrowLeftCircle
          className={`${
            !open && "rotate-180"
          } absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-9 -right-0 dark:fill-gray-400 dark:bg-gray-800`}
          onClick={() => setOpen(!open)}
        /> */}
        <Link to="/">
          <div className={`flex ${open && "gap-x-4"} items-center`}>
            <img src={Logo} alt="" className="pl-2" />
            {open && (
              <span className="text-xl font-medium whitespace-nowrap dark:text-white">
                IncPhone
              </span>
            )}
          </div>
        </Link>

        <ul className="pt-4">
          {Menus.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <li
                className={`flex items-center gap-x-6 p-1 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? "mt-3" : "mt-1"} ${location.pathname === menu.path &&
                  "bg-gray-200 dark:bg-gray-700"
                  }`}
              >
                <span className="text-2xl">{menu.src}</span>
                <span
                  className={`${!open && "hidden"
                    } origin-left duration-300 hover:block`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>

        <p className="text-black dark:text-white pt-4">Inboxes</p>
        <Link to="/primary">
          <li
            className={`flex items-center gap-x-6 p-1 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${location.pathname === "/primary" &&
              "bg-gray-200 dark:bg-gray-700"
              }`}
          >
            <span className="text-2xl">{<FcCallback />}</span>
            <span
              className={`${!open && "hidden"
                } origin-left duration-300 hover:block`}
            >
              Primary
            </span>
          </li>
        </Link>
        <p className="text-black dark:text-white pt-4">Your Team</p>
        <div className="flex items-center font-normal rounded-lg p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
          <span className="text-2xl">
            <FcAddressBook />
          </span>
          <span className="text-purple-800">Invite Your Team</span>
        </div>
      </div>
    </>
  )
}

export default Sidebar
