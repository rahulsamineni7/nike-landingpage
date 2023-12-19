
import { useState } from "react";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { shoes } from "../constants";
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    
    <section id='home' className="w-full flex xl:flex-row flex-col justify-center min-h-screen p-2 mt-10">

      
      <div className='relative flex flex-col  items-start w-full  '>
      <p className='text-xl font-montserrat text-coral-red'>
          Our Summer collections
        </p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <button
      className='flex justify-center items-center rounded-full  bg-red-600  px-7 py-4 border font-montserrat text-lg leading-none'
    >
      
    Shop Now
  
    </button>
  
       
      </div>

      <div className=" justify-center items-center ">
        <img
        src={bigShoeImg}/>

        <div className="flex justify-center space-x-6 mt-16">
        {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
               
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
           />  
           
            </div>
          )
          )}
        </div>
      </div>

    </section>
  );
}

export default Hero;
