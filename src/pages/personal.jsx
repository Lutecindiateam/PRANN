import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useCountries } from "use-react-countries";

import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Radio
} from "@material-tailwind/react";

export function Personal() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCounty, setSelectedCounty] = useState('');
  const { countries } = useCountries();
  const [country, setCountry] = React.useState(0);
  const { name, flags, countryCallingCode } = countries[country];
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    address: '',
    city: '',
  });
  console.log(formData);
  const handleCountrySelect = (countryName) => {
    setSelectedCountry(countryName);
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted with data:', formData);
  //   navigate(`/information`);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if all required fields are filled
    const requiredFields = ["firstName", "lastName", "email", "address", "city"];
    const isFormValid = requiredFields.every(field => formData[field].trim() !== '');
  console.log(isFormValid);
    if (!isFormValid) {
      // Display an error message or handle the validation in your preferred way
      console.error('Please fill in all required fields');
      return;
    }
  
    // If the form is valid, navigate to the next page
    console.log('Form submitted with data:', formData);
    navigate(`/information`);
  };
  
  return (

    <div className="flex flex-col items-center justify-center min-h-screen" >

      <br />
      <br />
      <br />
      <br />
      <br />
      <p class="mx-40" ><b>Note: All Fields are Required</b></p>

      <br />
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-6">

        <div className="flex flex-col w-[21rem] ">

          <label><b>First Name</b></label>
          <Input
            name="firstName"
            variant="static"
            placeholder="Enter First Name"
            onChange={handleChange}
          />
          <br />

          <label><b>Last Name</b></label>
          <Input
            name="lastName"
            variant="static"
            placeholder="Enter Last Name"
            onChange={handleChange}



          />
          <br />
          <label className='citizen'><b>Are you an Indian Citizen?</b></label>


          <div className="indian-citizen">
            <Radio name="indianCitizen" label="Yes" />
            <Radio name="indianCitizen" label="No" defaultChecked />
          </div>

          <br />
          <br />
          <br />
          <br />
          <div>
            <label><b>Country</b></label>
            <Menu placement="bottom-start">
              <MenuHandler>
                <Input
                  ripple={false}
                  variant="static"
                  color="blue-gray"
                  value={selectedCountry}
                />
              </MenuHandler>
              <MenuList className="max-h-[20rem] max-w-[18rem]">
                {countries.map(({ name }) => (
                  <MenuItem
                    key={name}
                    value={name}
                    className="flex items-center gap-2"
                    onClick={() => handleCountrySelect(name)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>

          </div>
          <br />
          <div>
            <label><b>State / Province / County</b></label>
            <Input
              name="state"
              variant="static"
              placeholder="State"
              onChange={handleChange}
            />
          </div>
          <br />

          <label><b>Address</b></label>
          <Input
            name="address"
            variant="static"
            placeholder="Street, Locality"
            onChange={handleChange}
          />
          <br />
          <label><b>PAN Number</b></label>
          <Input
            name="PAN Number"
            variant="static"
            placeholder="PAN Number"
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="flex flex-col w-[21rem]">
          <label><b> Email</b></label>
          <Input
            name="email"
            variant="static"
            placeholder="Email"
            onChange={handleChange}
          />
          <br />

          <label className="px-20"><b>Mobile Number</b></label>
          <div className="relative flex w-full max-w-[24rem]">
            <Menu placement="bottom-start">
              <MenuHandler>
                <Button
                  ripple={false}
                  variant="text"
                  color="blue-gray"
                  className="flex h-10 items-center gap-2  border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                >
                  <img
                    src={flags.svg}
                    alt={name}
                    className="h-4 w-4 rounded-full object-cover"
                  />
                  {countryCallingCode}
                </Button>
              </MenuHandler>
              <MenuList className="max-h-[20rem] max-w-[18rem]">
                {countries.map(({ name, flags, countryCallingCode }, index) => {
                  return (
                    <MenuItem
                      key={name}
                      value={name}
                      className="flex items-center gap-2"
                      onClick={() => setCountry(index)}
                    >
                      <img
                        src={flags.svg}
                        alt={name}
                        className="h-5 w-5 rounded-full object-cover"
                      />
                      {name} <span className="ml-auto">{countryCallingCode}</span>
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>

            <Input
              type="tel"
              variant="static"
              placeholder="Mobile Number"
              className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              containerProps={{
                className: "min-w-0",
              }}
            />

          </div>
          <br />
          <label className='tax'><b>Do you want 80G tax benefit?</b></label>

          <div className="flex gap-10">
            <Radio name="taxBenefit" label="Yes" />
            <Radio name="taxBenefit" label="No" defaultChecked />
          </div>

          <p>Please tick this box if you are a taxpayer in India and would like to avail tax benefits under 80G. To avail this, you need to provide your PAN/Aadhaar number</p>

          <br />
          <br />
          <br />
          <br />
          <label><b>City</b></label>

          <div className="flex gap-10">
            <Input
              name="city"
              variant="static"
              placeholder="Enter City"
              onChange={handleChange}
            />
          </div>
          <br />
          <label><b>Pin / Zip Code</b></label>

          <div className="flex gap-10">
            <Input
              name="Pin / Zip Code"
              variant="static"
              placeholder="Enter Pin / Zip Code"
              onChange={handleChange}
            />
          </div>
        </div>



      </form>
      <br />





      <div>
        <a href="/donate" class="text-blue-500 hover:text-blue-700">Back</a>
        <button
          
          type="submit"
          onClick={handleSubmit}
          class="bg-green-500 text-white px-2 py-2 mt-4 ml-20 inline-block"
        >
          Payable Securely
        </button>
      </div>

      <div>

      </div>



    </div>
  );
};

export default Personal;
