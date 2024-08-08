import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";

const WhyUs = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6 text-danger">Why Choose Us?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
        
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <p>Easy Online Booking</p>
          </CardHeader>
          <CardBody>
            <p>
              Our team consists of highly trained professionals who use advanced cleaning techniques to ensure your carpets look brand new.
            </p>
          </CardBody>
          
        </Card>
        
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <p>Affordable Rates</p>
          </CardHeader>
          <CardBody>
            <p>
              We care about the environment and use only eco-friendly products that are safe for your family and pets.
            </p>
          </CardBody>
          
        </Card>
        
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <p>Customer Satisfaction</p>
          </CardHeader>
          <CardBody>
            <p>
              Our top priority is your satisfaction. We guarantee high-quality service and strive to exceed your expectations every time.
            </p>
          </CardBody>
          
        </Card>
      </div>
      <div className='py-4'>
      <Button color="primary">Learn More</Button>
      </div>
    </div>
  );
};

export default WhyUs;
