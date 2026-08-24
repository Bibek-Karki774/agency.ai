import assets from "/src/assets/assets";
function Hero() {
  return (
    <div className="overflow-hidden flex flex-col items-center gap-6  sm:px-12 lg:px-24 xl:px-40">
      <div
        className=" flex items-center justify-center gap-x-2
        w-60 overflow-hidden max-sm:w-full border border-gray-300
        rounded-full p-2 mt-20 max-sm:mt-10"
      >
        <img src={assets.group_profile} className="w-20 max-sm:w-14" />

        <span className=" text-xs max-sm:text-[11px] text-gray-500 font-medium dark:text-gray-100">
          Trusted by 10k+ people
        </span>
      </div>

      <h1 className=" text-[rgb(54,65,83)] dark:text-white text-center text-5xl sm:text-5xl md:text-[70px] xl:text-[84px] font-medium max-w-5xl">
        Turning imagination into <br/>
        <span
          className="bg-linear-to-r from-[rgb(80,75,229)] to-[rgb(78,127,233)]
            bg-clip-text text-transparent "
        >digital {''}
        </span>
        imapct.
      </h1>

      <p className=" dark:text-[rgb(184,184,184)] text-sm font-medium text-gray-500 text-center max-w-4/5 pb-3 sm:max-w-lg sm:text-lg">Creating meaningful connections and turning big ideas into interactive
        digital experiences.</p>
        <div className="relative">
        <img src={assets.hero_img} className="w-full" />
        <img src={assets.bgImage1} className="absolute -top-40 -right-40 sm:-top-100 sm:-right-70  -z-1 dark:hidden" />
        </div>
    </div>
  );
}

export default Hero;
