function setTheme(themeName) {
    localStorage.setItem("theme", themeName)
    document.documentElement.className = themeName
  }
  
  function keepTheme() {
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "dark") {
        setTheme("dark")
      } else if (localStorage.getItem("theme") === "light") {
        setTheme("light")
      }
    } else {
      setTheme("dark")
    }
  }
  
  module.exports = {
    setTheme,
    keepTheme,
  }
  