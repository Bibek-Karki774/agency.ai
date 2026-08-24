import { useEffect } from "react";
import assets from "../assets/assets";
function Theme({theme, setTheme}) {

  // On mount: initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
     if (!savedTheme) {
    // only set theme if no saved theme
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }
  }, []);

  // 2️⃣ Sync localStorage and HTML class whenever theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);



  return (
    <>
    {theme === "dark" ? (
       <img
         src={assets.sun_icon}
         alt="Light Mode"
         className="w-8 h-8 border border-gray-700 rounded-full p-1 cursor-pointer max-sm:w-8 max-sm:h-8"
         onClick={()=>{setTheme("light")}}
       />
     ) : (
       <img
         src={assets.moon_icon}
         alt="Dark Mode"
         className="w-8 h-8 border border-gray-700 rounded-full p-1 cursor-pointer max-sm:w-8 max-sm:h-8"
         onClick={()=>{setTheme("dark")}}
       />
     )}
    </>
  );
}

export default Theme;