import { Input, Button ,Image} from "@nextui-org/react";
import { useState } from "react";

import googleIcon from '../assets/google.jpg'

const Register = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmedPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    console.log(userData); // Logs the userData state to the console
    setUserData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmedPassword: ''
    });
  };

  return (
    <div className='relative w-full h-full p-10'>
      <div className='text-primary font-bold py-3 px-10 absolute top-0 left-0 '>Carpet Care</div>
      <div className='flex h-[90vh] bg-gray-200 md:flex-row flex-col my-5 md:my-3 '>
        <div className='basis-1/3 bg-primary text-white text-center flex justify-center items-center flex-col'>
          <p className='text-3xl'>Hello There!</p>
          <p>Lets get your carpet clean</p>
        </div>

        <div className='basis-2/3 flex justify-center items-center flex-col gap-5'> 
          <p className='text-bg-primary text-3xl  py-3'>Create Account</p>

          <form className="flex flex-col gap-5 p-2" onSubmit={handleSubmit}>
            <div className="flex gap-3 md:flex-row flex-col">
              <Input 
                type="text" 
                variant='flat' 
                label="First Name"  
                name="firstName"
                value={userData.firstName}
                onChange={handleChange} 
                isRequired
              />  

              <Input 
                type="text" 
                variant='flat' 
                label="Last Name"  
                name="lastName"
                value={userData.lastName}
                onChange={handleChange}
                isRequired
              />  

              <Input 
                type="email" 
                variant='flat' 
                label="Email"  
                name="email"
                value={userData.email}
                onChange={handleChange}
                isRequired
              />
            </div>
                
            <div className="flex gap-3 md:flex-row flex-col">
              <Input 
                type="password" 
                variant='flat' 
                label="Password" 
                name="password"
                value={userData.password}
                onChange={handleChange} 
                isRequired
              />

              <Input 
                type="password" 
                variant='flat' 
                label="Confirm Password"
                name="confirmedPassword"
                value={userData.confirmedPassword}
                onChange={handleChange} 
                isRequired 
              />
            </div>

            <div className="w-full flex justify-center py-3">
              <Button 
                type="submit"
                radius="full" 
                className="bg-primary text-white md:w-1/4 w-3/4"
              >
                Sign Up
              </Button>
            </div>

            <div className="flex  justify-center flex-col items-center">
                <p>Or Sign Up With:</p>
                <div className="p-2 bg-primary m-1 rounded-full">
                <Image
                    
                    src={googleIcon}
                    alt="NextUI Album Cover"
                    className="w-8"
                    />

                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
