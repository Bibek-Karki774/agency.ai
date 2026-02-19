import assets from "/src/assets/assets";
function NavBar({theme, setTheme}) {
  return (
    <nav className="flex justify-around items-center mt-3 
    max-sm:flex max-sm:justify-start ">
      <div className="mt-3 ml-3">
        <img src={theme=="dark" ? assets.logo_dark : assets.logo } alt="Logo" />
      </div>
      <div className="flex gap-x-3 sm:text-sm text-gray-700  [&>*]:hover:underline [&>*]:hover:underline-offset-5
      [&>*]:cursor-pointer [&>*]:max-sm:cursor-pointer
      max-sm:flex-col max-sm:h-screen max-sm:w-[35vw] 
      max-sm:m-0  max-sm:justify-start max-sm:gap-y-4 max-sm:pt-15 max-sm:pl-10 max-sm:text-white
      max-sm:bg-[var(--color-primary)] max-sm:text-[16px] max-sm:font-medium max-sm:absolute max-sm:right-0 max-sm:top-0 
      max-sm:rounded">
        <img src={assets.close_icon} className="hidden max-sm:inline  max-sm:absolute max-sm:top-3 max-sm:right-3 max-sm:size-6
        max-sm:hover:pointer  "/>
        <a className="">Home</a>
        <a>Services</a>
        <a>Our Work</a>
        <a>Contact us</a>
      </div>
      <div className="flex justify-between border w-30 max-sm:hidden  ">
        <img src={assets.moon_icon} alt="dark mode" className="size-10" />
        <div>
          <a>
            Connect <img src={assets.arrow_icon} alt="Contact" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
