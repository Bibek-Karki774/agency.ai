function TeamCard({team}) {
  return (
    <div className="flex gap-x-4 border border-gray-200 rounded-2xl p-3 hover:cursor-pointer
    hover:scale-103 transition-all duration-400">
        <img src={team.image} className="w-8 h-8  rounded-full"/>
        <div>
           <h3 className="font-bold text-xs text-gray-800 dark:text-white">{team.name}</h3>
            <p className="text-[10px] text-gray-500 dark:text-gray-400">{team.title}</p>
        </div>
    </div>
  );
}

export default TeamCard;