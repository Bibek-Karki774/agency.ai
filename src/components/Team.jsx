import assets, {teamData as teams} from "../assets/assets";
import TeamCard from "./TeamCard";
function Team() {

  return (
    <div className="flex flex-col justify-center items-center gap-7 mt-35">
      <h2 className="text-5xl text-gray-800 dark:text-white">Meet the team</h2>
      <p className="max-w-95 text-center text-gray-500 dark:text-gray-300 text-md">
        A passionate team of digital experts dedicated to your brands success.
      </p>
      <div className="grid grid-cols-4 gap-x-5 gap-y-7 mt-10">
        {teams.map((team, index) => (
          <TeamCard team={team} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Team;
