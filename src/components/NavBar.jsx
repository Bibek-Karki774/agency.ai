import assets from "/src/assets/assets";
import Theme from "./Theme";
function NavBar({ theme, sideBar, setTheme, setSideBar }) {
  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    console.log("Current Theme:", theme);
  };

  return (
    <nav
      className={`sticky top-0 z-20 backdrop-blur-xl flex justify-around items-center pt-2 pb-5
      max-sm:justify-between
      bg-white/50 dark:bg-gray-900/70
      text-gray-700 dark:text-white
      `}
    >
      <div className="ml-3">
        <img
          src={theme == "dark" ? assets.logo_dark : assets.logo}
          alt="Logo"
          className="hover:cursor-pointer max-w-30 sm:max-w-none"
        />
      </div>

      <div
        className={`flex gap-x-3 sm:text-sm
        *:hover:underline *:hover:underline-offset-5
        *:cursor-pointer *:max-sm:cursor-pointer
        max-sm:flex-col max-sm:h-screen max-sm:w-[60vw]
        max-sm:m-0 max-sm:justify-start max-sm:gap-y-4 max-sm:pt-15 max-sm:pl-10
        max-sm:text-white dark:max-sm:text-gray-200
        max-sm:bg-primary dark:max-sm:bg-[rgb(12,17,28)]
        max-sm:text-[16px] max-sm:font-medium
        max-sm:absolute max-sm:right-0 max-sm:top-0
        max-sm:rounded ${!sideBar ? "max-sm:hidden" : ""}`}
      >
        <img
          src={assets.close_icon}
          className="hidden max-sm:inline max-sm:absolute max-sm:top-4 max-sm:right-3 max-sm:z-60 size-5"
          onClick={() => setSideBar(false)}
        />

        <a href="#home" onClick={() => setSideBar(false)} className="dark:text-gray-200">
          Home
        </a>
        <a href="#services" onClick={() => setSideBar(false)} className="dark:text-gray-200">
          Services
        </a>
        <a href="#work" onClick={() => setSideBar(false)} className="dark:text-gray-200">
          Our Work
        </a>
        <a href="#contact" onClick={() => setSideBar(false)} className="dark:text-gray-200">
          Contact us
        </a>
      </div>
      <div className="flex items-center gap-x-3 shrink-0">
        <div className="flex justify-center items-center gap-x-2">
          <Theme theme={theme} setTheme={setTheme} />

          {/* Open side bar menu for < 640 px */}
          {!sideBar && (
            <img
              src={theme === "light" ? assets.menu_icon : assets.menu_icon_dark}
              className="sm:hidden size-8"
              onClick={() => setSideBar(true)}
            />
          )}
        </div>
        <div
          className="max-sm:hidden w-30
          bg-primary
          text-white
          rounded-full p-2 text-sm px-6 py-2 cursor-pointer
          transition transform duration-200 ease-in-out hover:scale-105"
        >
          <a className="flex items-center gap-2">
            Connect{" "}
            <img src={assets.arrow_icon} alt="Contact" className="w-3.5" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;