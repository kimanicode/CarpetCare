import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Image,Button} from "@nextui-org/react";
import heroVector from '../../assets/hero.jpg'

const Hero = () => {
    const navigate = useNavigate()

    const handleGetStarted = () =>{
        navigate('/register')
    }
  return (
    <div className='flex md:flex-row flex-col-reverse gap-5 md:px-20 px-5 justify-between w-full md:my-5'>
        <div className=' flex flex-col justify-center items-  font-semibold basis-1/2 '>
            <p className='md:text-5xl  text-3xl py-3 text-danger hidden md:flex'>
                Carpet cleaning services on the fly
            </p>
            <p className='text-2xl py-3  font-thin'>Professional carpet cleaning service that <br/> picks up your carpet and returns it as clean <br /> as a whistle.</p>

            <p className='text-2xl  font-thin'>Easy.Fast.Reliable</p>
            <div className='py-10 w-full'>
                <Button className='bg-gradient-to-tr from-pink-500 to-yellow-500 md:w-1/2 text-white font-semibold w-full'  onClick={() => window.open('https://forms.gle/bmhGnGNKBRSv7aBVA', '_blank', 'noopener noreferrer')}>Order Service</Button>
            </div>


        </div>

        <div className=' basis-1/2 '>
        <Image
            isBlurred
            src={heroVector}
            
            alt="NextUI Album Cover"
            className="md:m-5 w-screen max-h-full m-1"
    />


        </div>
        <div className='md:hidden'>
            <p className='text-3xl text-danger font-bold '>Carpet Cleaning on the fly</p>
        </div>
    </div>
  );
}

export default Hero