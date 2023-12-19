

const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className="flex-1 w-full shadow-3xl px-10 py-16 rounded-[20px]">
      <div className="flex w-11 h-11 justify-center items-center bg-coral-red rounded-full">
        <img
        src ={imgURL}
        alt={label}
        width={24}
        height={24}
        />
      </div>
      <h3 className="text-3xl">{label}</h3>
      <p className="mt-3">{subtext}</p>
    </div>
  )
}

export default ServiceCard
