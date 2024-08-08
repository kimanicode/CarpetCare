import { Card, Button, } from '@nextui-org/react';
import { CheckSquare, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    title: 'One Time Service',
    price: 'KES 1,500', // Around $200 USD
    features: [
      { name: 'One-time professional carpet cleaning', icon: <CheckSquare color="green" /> },
      { name: 'Thorough removal of dirt, stains, and odors', icon: <CheckSquare  color="green"/> },
      { name: 'Flexible scheduling to suit your availability', icon: <CheckSquare color="green" /> },
     
    ],
    buttonText: 'Get Started',
    buttonColor: 'success',
  },
  {
    title: 'Standard ',
    price: 'KES 8,000', // Around $400 USD
    features: [
      { name: 'Upto 6 cleanings', icon: <CheckSquare  color="green"/> },
      { name: 'Discounted rates compared to the one-time service', icon: <CheckSquare color="green" /> },
      { name: 'Comprehensive stain and odor removal with each session', icon: <CheckSquare color="green" /> },
      { name: 'Spot treatments included at no extra cost', icon: <CheckSquare color="green" /> },
   
    ],
    buttonText: 'Choose Standard',
    buttonColor: 'primary',
  },
  {
    title: 'Premium',
    price: 'KES 12,000', 
    features: [
      { name: 'Upto 8 cleanings', icon: <CheckSquare color="green" /> },
      { name: 'Advanced stain protection treatments after each cleaning', icon: <CheckSquare  color="green"/> },
      { name: 'Exclusive access to special offers and discounts', icon: <CheckSquare color="green" /> },
      { name: 'Complimentary rug and upholstery cleaning (once per year)', icon: <CheckSquare color="green" /> },
      { name: 'Deep cleaning with enhanced techniques)', icon: <CheckSquare color="green" /> },
    ],
    buttonText: 'Subscribe',
    buttonColor: 'secondary',
  },
];

const Pricing = () => {
    const navigate = useNavigate(); // Initialize useHistory hook

    const handleGetStartedClick = () => {
      // Navigate to the page where users can request a consultation or fill out a contact form
      navigate('/consultation');
    }
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl text-primary font-semibold text-center mb-8">Our Pricing Plans</h2>
        
          <div className='flex gap-4 justify-center md:flex-row flex-col md:w-full' >
          {plans.map((plan, index) => (
            <div key={index} className='basis-1/4 m-3 '>
              <Card className="shadow-lg p-6 rounded-lg bg-slate-300 flex justify-center items-center hover:bg-slate-200">
                <p className="text-center mb-4 font-extralight ">{plan.title}</p>
                <p className="text-primary text-center mb-4 font-bold">
                  {plan.price}
                </p>
                <ul className="list-none space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      {feature.icon}
                      <p>{feature.name}</p>
                    </li>
                  ))}
                </ul>
                <Button
                  color={plan.buttonColor}
                  css={{ width: '100%' }}
                  className="mt-4 w-2/3"
                  onClick ={handleGetStartedClick}
                >
                  {plan.buttonText}
                </Button>
              </Card>
            </div>
          ))}
          </div>
    
      </div>
    </div>
  );
};

export default Pricing;