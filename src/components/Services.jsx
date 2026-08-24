import assets from "../assets/assets";
import ServiceCard from "./ServiceCard";
function Services() {
    const serviceData= [
        {
            title: 'Adversting',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            icon: assets.ads_icon
        },
         {
            title: 'Content marketing',
            description: 'We help you execute your plan and deliver results.',
            icon: assets.marketing_icon
        },
         {
            title: 'Content writing',
            description: 'We help you create a marketing strategy that drives results.',
            icon: assets.content_icon
        },
         {
            title: 'Soical media',
            description: 'We help you build a strong social media presence and engage with your audience.',
            icon: assets.social_icon
        }
    ]
  return (
    <div id="services">
        <div className="flex flex-col justify-between items-center mt-30 max-sm:mt-20 px-6">
    <div className=" flex flex-col justify-between items-center gap-y-4 ">
            <h1 className="text-[48px] max-sm:text-3xl text-[rgb(54,65,83)] dark:text-white text-center">How can we help?</h1>
        <p className="text-gray-500 text-center w-[80%] dark:text-gray-300">From strategy to execution, we carft digital solution that move your
            business forward.
        </p>
        </div>
     
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 lg:gap-x-30 gap-y-10 lg:gap-y-25 w-[90%] sm:w-[70vw] mt-16 lg:mt-25 mx-auto">
        {serviceData.map((service, index)=>(
            <ServiceCard service={service} key={index} />
        ))}
    </div>

    </div>
  );
}

export default Services;