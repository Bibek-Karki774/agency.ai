import WorkCard from "./WorkCard";
import assets from "../assets/assets";

function Work() {
    const works=[
        { title: 'Mobile app marketing',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage..',
            image: assets.work_mobile_app},
         { title: 'Dashboard management',
            description: 'We help you execute your plan and deliver results.',
            image: assets.work_dashboard_management},
        { title: 'Fitness app promotion',
            description: 'We help you create a marketing strategy that drives results.',
            image: assets.work_fitness_app},
            
    ]

  return (
    <div className="flex flex-col justify-center items-center gap-7 mt-30 ">
      <h2 className="text-5xl text-gray-800 dark:text-white">Our latest work</h2>
        <p className="max-w-95 text-center text-gray-500 dark:text-gray-300 text-md">From strategy to execution, we craft digital solutions that move your business forward.</p>
       <div className="flex justify-between gap-7  w-[75%] ">
        {
            works.map((work, index)=>(
                <WorkCard work={work} key={index}/>
            ))

        }
        
       </div>
    </div>
  );
}

export default Work;