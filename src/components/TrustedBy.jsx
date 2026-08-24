
import { company_logos } from "../assets/assets";
function TrustedBy() {
  return (
    <div className=" flex flex-col items-center gap-y-10 pt-20 ">
        <p className="text-center dark:text-gray-300 text-gray-600">Trusted by Leading Companies</p>
        <div className="flex items-center justify-center flex-wrap gap-x-5">
          {
            company_logos.map((logo, index)=>(
              <img key={index} src={logo} className=" sm:max-h-6"/>
            ))
          }
   
         
        </div>

    </div>
  );
}

export default TrustedBy;