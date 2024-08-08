import React from 'react';
import Navbar from './home/Navbar';
import Hero from './home/Hero';
import Info from './home/Info';
import Footer from './home/Footer';
import WhyUs from './home/Whyus';
import Pricing from './home/Pricing';

const Home = () => {
  return (
    <div className='w-full'>
        {/* Navbar */}
        <div className='px-4'> 
          <Navbar/>
          

        </div>

        {/* Hero section */}
        <div>
          <Hero/>


        </div>
        <div>
            <WhyUs/>
        </div>

        <div>
          <Info/>


        </div>

        <div>
          <Pricing/>
        </div>

        {/* Footer Section */}
        <div>
          <Footer/>
        </div>
    </div>
  );
}

export default Home