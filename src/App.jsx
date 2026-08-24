import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const [sideBar, setSideBar] = useState(false);

  return (
    <div className={`${theme === "dark" ? "dark" : ""} bg-white dark:bg-black min-h-screen`}>
      
      <NavBar
        theme={theme}
        setTheme={setTheme}
        sideBar={sideBar}
        setSideBar={setSideBar}
      />

      <Outlet />

      <ToastContainer />
    </div>
  );
}

export default App;