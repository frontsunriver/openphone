import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Toggle from "../Toggle"
import "./index.css"
import { Svgs } from "../../assets"

export const Header = () => {
  const navigate = useNavigate()
  const [navbar, setNavbar] = useState(false)

  return (
    <nav className="w-full bg-white dark:bg-black shadow fixed">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center lg:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 lg:block">
            <Link to="/">
              <h2 className="text-2xl font-bold text-black dark:text-white">
                incPhone
              </h2>
            </Link>
            <div className="lg:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black dark:text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
              <li className="text-black dark:text-white">
                <button
                  onClick={() => {
                    navigate("/")
                    setNavbar(false)
                  }}
                >
                  Home
                </button>
              </li>
              <li className="text-black dark:text-white">
                <button
                  onClick={() => {
                    navigate("/price")
                    setNavbar(false)
                  }}
                >
                  Price
                </button>
              </li>
              <li className="text-black dark:text-white">
                <button
                  onClick={() => {
                    navigate("/blog")
                    setNavbar(false)
                  }}
                >
                  Blog
                </button>
              </li>
              <li className="text-black dark:text-white">
                <div className="dropdown inline-block relative">
                  <button className="text-black dark:text-white rounded inline-flex items-center">
                    <span className="mr-1">Product</span>
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </button>
                  <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 z-10 w-max">
                    <li className="flex items-center rounded-t bg-white hover:bg-gray-200 py-2 px-4 whitespace-no-wrap">
                      <img alt="Icon" src={Svgs.PhoneNumber} className="pr-2" />
                      <button
                        onClick={() => {
                          navigate("/product/phonenumber")
                          setNavbar(false)
                        }}
                      >
                        Phone numbers
                      </button>
                    </li>
                    <li className="flex items-center bg-white hover:bg-gray-200 py-2 px-4 whitespace-no-wrap">
                      <img alt="Icon" src={Svgs.Contacts} className="pr-2" />
                      <button
                        onClick={() => {
                          navigate("/product/contact")
                          setNavbar(false)
                        }}
                      >
                        Contacts
                      </button>
                    </li>
                    <li className="flex items-center bg-white hover:bg-gray-200 py-2 px-4 whitespace-no-wrap">
                      <img alt="Icon" src={Svgs.Calling} className="pr-2" />
                      <button
                        onClick={() => {
                          navigate("/product/calling")
                          setNavbar(false)
                        }}
                      >
                        Calling
                      </button>
                    </li>
                    <li className="flex items-center bg-white hover:bg-gray-200 py-2 px-4 whitespace-no-wrap">
                      <img alt="Icon" src={Svgs.Teams} className="pr-2" />
                      <button
                        onClick={() => {
                          navigate("/product/team")
                          setNavbar(false)
                        }}
                      >
                        Teams
                      </button>
                    </li>
                    <li className="flex items-center bg-white hover:bg-gray-200 py-2 px-4 whitespace-no-wrap">
                      <img alt="Icon" src={Svgs.Messaging} className="pr-2" />
                      <button
                        onClick={() => {
                          navigate("/product/messaging")
                          setNavbar(false)
                        }}
                      >
                        Messaging
                      </button>
                    </li>
                    <li className="flex items-center rounded-b bg-white hover:bg-gray-200 py-2 px-4 whitespace-no-wrap">
                      <img
                        alt="Icon"
                        src={Svgs.Integrations}
                        className="pr-2"
                      />
                      <button
                        onClick={() => {
                          navigate("/product/integration")
                          setNavbar(false)
                        }}
                      >
                        Integrations
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="text-black dark:text-white">
                <div className="dropdown inline-block relative">
                  <button className="text-black dark:text-white rounded inline-flex items-center">
                    <span className="mr-1">Use cases</span>
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </button>
                  <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 z-10 w-max">
                    <li className="flex items-center rounded-t bg-white hover:bg-gray-200 py-2 px-4 whitespace-no-wrap">
                      <img alt="Icon" src={Svgs.Startup} className="pr-2" />
                      <button
                        onClick={() => {
                          navigate("/usecase/startup")
                          setNavbar(false)
                        }}
                      >
                        Startups
                      </button>
                    </li>
                    <li className="flex items-center bg-white hover:bg-gray-200 py-2 px-4 whitespace-no-wrap">
                      <img
                        alt="Icon"
                        src={Svgs.ProfessionalService}
                        className="pr-2"
                      />
                      <button
                        onClick={() => {
                          navigate("/usecase/professionalservice")
                          setNavbar(false)
                        }}
                      >
                        Professional Services
                      </button>
                    </li>
                    <li className="flex items-center bg-white hover:bg-gray-200 py-2 px-4 whitespace-no-wrap">
                      <img alt="Icon" src={Svgs.Education} className="pr-2" />
                      <button
                        onClick={() => {
                          navigate("/usecase/education")
                          setNavbar(false)
                        }}
                      >
                        Education
                      </button>
                    </li>
                    <li className="flex items-center bg-white hover:bg-gray-200 py-2 px-4 whitespace-no-wrap">
                      <img
                        alt="Icon"
                        src={Svgs.SmallBusiness}
                        className="pr-2"
                      />
                      <button
                        onClick={() => {
                          navigate("/usecase/smallbusiness")
                          setNavbar(false)
                        }}
                      >
                        Small Businesses
                      </button>
                    </li>
                    <li className="flex items-center bg-white hover:bg-gray-200 py-2 px-4 whitespace-no-wrap">
                      <img alt="Icon" src={Svgs.RealEstate} className="pr-2" />
                      <button
                        onClick={() => {
                          navigate("/usecase/realestate")
                          setNavbar(false)
                        }}
                      >
                        Real Estate
                      </button>
                    </li>
                    <li className="flex items-center rounded-b bg-white hover:bg-gray-200 py-2 px-4 whitespace-no-wrap">
                      <img alt="Icon" src={Svgs.Logistic} className="pr-2" />
                      <button
                        onClick={() => {
                          navigate("/usecase/logistic")
                          setNavbar(false)
                        }}
                      >
                        Logistics&Transportation
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="text-black dark:text-white">
                <div className="dropdown inline-block relative">
                  <button className="text-black dark:text-white rounded inline-flex items-center">
                    <span className="mr-1">Company</span>
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </button>
                  <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 z-10 w-max">
                    <li className="flex items-center rounded-t bg-white hover:bg-gray-200 py-2 px-4 whitespace-no-wrap">
                      <img alt="Icon" src={Svgs.About} className="pr-2" />
                      <button
                        onClick={() => {
                          navigate("/company/aboutus")
                          setNavbar(false)
                        }}
                      >
                        About Us
                      </button>
                    </li>
                    <li className="flex items-center bg-white hover:bg-gray-200 py-2 px-4 whitespace-no-wrap">
                      <img alt="Icon" src={Svgs.Career} className="pr-2" />
                      <button
                        onClick={() => {
                          navigate("/company/career")
                          setNavbar(false)
                        }}
                      >
                        Careers
                      </button>
                    </li>
                    <li className="flex items-center rounded-b bg-white hover:bg-gray-200 py-2 px-4 whitespace-no-wrap">
                      <img alt="Icon" src={Svgs.Press} className="pr-2" />
                      <button
                        onClick={() => {
                          navigate("/company/press")
                          setNavbar(false)
                        }}
                      >
                        Press
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="text-black dark:text-white">
                <button
                  onClick={() => {
                    navigate("/contact")
                    setNavbar(false)
                  }}
                >
                  Contact US
                </button>
              </li>
            </ul>

            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              <Toggle />
              <Link
                to="/"
                className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
              >
                Sign in
              </Link>
              <Link
                to="/"
                className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 lg:flex items-center">
          <Link
            to="/"
            className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
          >
            Sign in
          </Link>
          <Link
            to="/"
            className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
          >
            Sign up
          </Link>
          <Toggle />
        </div>
      </div>
    </nav>
  )
}
