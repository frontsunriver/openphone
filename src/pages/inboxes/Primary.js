import React from "react"
import { Link } from "react-router-dom"
import { MdPhoneInTalk } from "react-icons/md"
import { RiMessage2Line } from "react-icons/ri"
import { AiOutlineCheck } from "react-icons/ai"
import { BiDetail } from "react-icons/bi"
import { BiDotsHorizontalRounded } from "react-icons/bi"
import ReactPlayer from "react-player"

export const Primary = () => {
  const Call = () => {
    return (
      <li className="flex py-6">
        <div className="flex items-center">
          <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 flex-shrink-0 rounded-full" />
        </div>
        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between font-medium">
              <h3>
                <Link to="#">(509) 230-2907</Link>
              </h3>
              <p className="ml-4 text-gray-500">Oct 29</p>
            </div>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-white">Voicecall</p>

            <div className="flex">
              <span className="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded-full">1</span>
            </div>
          </div>
        </div>
      </li>
    )
  }

  return (
    <div className="flex flex-row min-h-full">
      <div className="basis-4/12 border-r border-gray-200 dark:border-gray-600">
        <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-600">
          <div className="mx-auto max-w-7xl">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link to="#" className="bg-gray-900 text-white px-3 py-1 rounded-md text-sm font-medium" aria-current="page">Open</Link>
                    <Link to="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-sm font-medium">Done</Link>
                    <Link to="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-sm font-medium border-dashed border-2 border-gray-700">Unread</Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6">
                <button type="button" className="rounded-full bg-gray-800 p-1 px-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <MdPhoneInTalk color="#22c55e" size={20} />
                </button>
                <button type="button" className="rounded-full bg-gray-800 p-1 px-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <RiMessage2Line color="#22c55e" size={20} />
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div className="mx-3">
          <ul className="divide-gray-200 text-white">
            <Call />
          </ul>
        </div>
      </div>
      <div className="basis-5/12 border-r border-gray-200 dark:border-gray-600">
        <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-600">
          <div className="mx-auto max-w-7xl">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <button type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                      <span className="sr-only">Open user menu</span>
                      <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </button>
                    <Link to="#" className="text-white px-3 py-1 rounded-md text-sm font-medium" aria-current="page">(509) 230-2907</Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6">
                <button type="button" className="rounded-full bg-gray-800 p-1 px-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <MdPhoneInTalk size={20} />
                </button>
                <button type="button" className="rounded-full bg-gray-800 p-1 px-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <AiOutlineCheck size={20} />
                </button>
                <button type="button" className="rounded-full bg-gray-800 p-1 px-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <BiDetail size={20} />
                </button>
                <button type="button" className="rounded-full bg-gray-800 p-1 px-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <BiDotsHorizontalRounded size={20} />
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div className="p-10">
          <h5 className="text-center text-gray-500">Oct 29, 12:02 pm</h5>
          <div className="mt-10 mx-5 bg-gray-700">
          
            <ReactPlayer
              url="https://file-examples.com/storage/fedfbdc1286387a0396414f/2017/11/file_example_MP3_1MG.mp3"
              width="100%"
              height="50px"
              playing={false}
              controls={true}
              className="mx-10"
              style={{
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            />
          </div>
        </div>
      </div>
      <div className="basis-3/12 border-r border-gray-200 dark:border-gray-600 text-white mx-3">
        <div className="mb-0">
          <div className="p-10 border-b border-gray-200 dark:border-gray-600 text-center">
            <div className="flex justify-center mb-6">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" className="rounded-full shadow-lg w-32" alt="" />
            </div>
            <h5 className="text-lg font-bold mb-4">John Smith</h5>
            <div className="m-auto">
              <button type="button" className="rounded-full bg-gray-700 p-2 mx-5 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <MdPhoneInTalk size={30} />
              </button>
              <button type="button" className="rounded-full bg-gray-700 p-2 mx-5 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <RiMessage2Line size={30} />
              </button>
            </div>
          </div>
          <table className="text-xs my-3 text-left">
            <tbody>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                <td className="px-2 py-2 text-gray-500 font-semibold">Chatakpur-3, Dhangadhi Kailali</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Role</td>
                <td className="px-2 py-2 text-gray-500 font-semibold">Set a role...</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                <td className="px-2 py-2">(509) 230-2907</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                <td className="px-2 py-2 text-gray-500 font-semibold">john@exmaple.com</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Website</td>
                <td className="px-2 py-2 text-gray-500 font-semibold">Set a URL ...</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Date</td>
                <td className="px-2 py-2 text-gray-500 font-semibold">Set a date...</td>
              </tr>
            </tbody>
          </table>
          <button type="button" className="p-2 mb-5 text-violet-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            + add a property
          </button>
          <div className="mb-2 sm:mb-0">
            <div className="relative flex ">
              <textarea id="about" name="about" rows="3" className="p-5 bg-gray-800 mt-1 block w-full rounded-md border border-gray-700 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Write a note..."></textarea>
              <div className="absolute left-0 bottom-0 items-center hidden sm:flex">
                <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 text-gray-600">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                  </svg>
                </button>
                <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 text-gray-600">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </button>
                <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 ml-2 transform rotate-90">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
