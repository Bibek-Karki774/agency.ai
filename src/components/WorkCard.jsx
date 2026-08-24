function WorkCard({work}) {
  return (
    <div className="hover:scale-102 transition-all duration-500 cursor-pointer">
        <img src={work.image} className="w-full rounded-xl"/>
        <h2 className="text-[15px] text-gray-900 dark:text-white font-medium mt-2">{work.title}</h2>
       <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">{work.description}</p>
    </div>
  );
}

export default WorkCard;