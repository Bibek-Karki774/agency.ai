function ServiceCard({ service }) {
  return (
    <div className="flex gap-x-8 justify-center items-center 
  hover:scale-105 transition-all duration-300 cursor-pointer">
      <div>
        <img
          src={service.icon}
          alt={service.title}
          className="w-16 h-16 object-contain"
        />
      </div>
      <div>
        <h3 className="font-bold text-gray-800 dark:text-white">{service.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 max-w-70">{service.description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
