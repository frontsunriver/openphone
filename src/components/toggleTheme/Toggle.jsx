import React, { useEffect, useState } from "react"
import { setTheme } from "../themes/Themes"
import "./index.css"

function Toggle() {
  // false = dark mode because of the way I wrote the CSS
  const [active, setActive] = useState(false)
  // the opposite, for screenreaders
  const [ariaActive, setAriaActive] = useState(true)
  let themeMode = localStorage.getItem("theme")

  const handleOnClick = () => {
    changeThemeAndToggle()
  }

  const changeThemeAndToggle = () => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("light")
      setActive(true)
      setAriaActive(false)
    } else {
      setTheme("dark")
      setActive(false)
      setAriaActive(true)
    }
  }

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setActive(false)
      setAriaActive(true)
    } else if (localStorage.getItem("theme") === "light") {
      setActive(true)
      setAriaActive(false)
    }
  }, [themeMode])

  return (
    // <div className="toggle_container">
    <button
      type="button"
      role="switch"
      aria-checked={ariaActive}
      data-state="checked"
      value="on"
      id="switch_scheme"
      className={
        active
          ? "toggle_button c-fBOjjt"
          : "toggle_button c-fBOjjt-jqGijD-theme-dark"
      }
      onClick={() => {
        handleOnClick()
      }}
    >
      <span className={active ? "c-jrMzNf" : "c-jrMzNf-checked"}>
        <div style={{ padding: "0.2rem 0.25rem" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="1em"
            height="1em"
            fill="currentColor"
            className="svgIcon"
          >
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
          </svg>
        </div>
      </span>
    </button>
    // </div>
  )
}

export default Toggle
