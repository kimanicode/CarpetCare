import React from 'react'
import {Image,Button} from "@nextui-org/react";
import one from '../../assets/carpet1.jpg';


const Info = () => {
  return (
    <div className='md:px-20 px-15 w-full flex py-3 gap-4   '>
        
        <div className="basis-1/2 ">
       
            <Image
            src={one}
            className="relative w-full"
            alt="First Image"
            />
        
       </div>


        <div className='basis-1/2 text-center  flex  flex-col items-center'>
            <h1 className='text-secondary text-2xl '>Best carpet cleaning service provider</h1>
            <p>Our team consists of skilled professionals trained to handle all types of carpet cleaning needs.</p>
            <ul >
                <li>Advanced Cleaning Methods</li>
                <li>Eco-Friendly Products</li>
                <li>Convenient Online Booking</li>
                <li>Affordable Rates</li>
                <li>Satisfaction Guaranteed</li>
            </ul>

        </div>
      
    </div>
  );
}

export default Info
