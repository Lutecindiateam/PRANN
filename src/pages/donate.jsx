
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import {
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";


export function Donate() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [firstcost, setFirstcost] = useState('1000')
  const [secondcost, setSecondcost] = useState('2000')
  const [thirdcost, setThirdcost] = useState('3000')
  const [fourthcost, setFourthcost] = useState('4000')
  const [fifthcost, setFifthcost] = useState('5000')
  const [sixthcost, setSixthcost] = useState('6000')
  const [seventhcost, setSeventhcost] = useState('7000')
  const [selectedCost, setSelectedCost] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setSelectedCost('');
  };
  const handleButtonClick = () => {
    if (selectedCost || inputValue) {
      navigate(`/personal`);
    } else {
      // Display an error message or handle the case where no input box is clicked.
      console.log('Please select a donation amount before continuing.');
    }
  }

  // const handleButtonClick = () => {

  //   navigate(`/personal`);
  // };
  const handleInputBoxClick = (value) => {
    setInputValue(value);
  };
  const handleInputBoxClick_1 = (value) => {
    setFirstcost(value);
    setSelectedCost(value);
  };
  const handleInputBoxClick_2 = (value) => {
    setSecondcost(value);
    setSelectedCost(value);
  };
  const handleInputBoxClick_3 = (value) => {
    setThirdcost(value);
    setSelectedCost(value);
  };
  const handleInputBoxClick_4 = (value) => {
    setFourthcost(value);
    setSelectedCost(value);
  };
  const handleInputBoxClick_5 = (value) => {
    setFifthcost(value);
    setSelectedCost(value);
  };
  const handleInputBoxClick_6 = (value) => {
    setSixthcost(value);
    setSelectedCost(value);
  };
  const handleInputBoxClick_7 = (value) => {
    setSeventhcost(value);
    setSelectedCost(value);
  };

  return (

    <div >
      <div className="mt-8 mb-2 mx-auto w-100 max-w-screen-lg lg:w-3/4" >
        <Typography variant="h2" className="font-bold mb-4">"Online Giving, Offline Impact: Touching Lives, Enriching Souls"</Typography>
      </div>
      <form className="mt-8 mb-2 mx-auto w-100 max-w-screen-lg lg:w-1/2 ">
         <div className="mb-1 flex  gap-6">
          <Input
            placeholder=" ₹ Type your own amount"
             color="orange"
          
            value={inputValue}

            onChange={handleInputChange}
            style={{
              height: '60px',
              width: '330px',
            }}
            // onClick={() => handleInputBoxClick(inputValue)}
            />
         

          <Input
            color="orange"
            size="lg"
            placeholder="I wish to offer 11 Sadhakas a meal | {firstcost}"

            value={firstcost}
            label={
              <div>
                I wish to offer 11 Sadhakas a meal |{' '}
                <strong style={{ fontWeight: 'bold' }}>{firstcost}</strong>
              </div>
            }
            style={{
              height: '60px', // Adjust the height as needed
              width: '330px',

            }}

            onClick={() => handleInputBoxClick_1(firstcost)}
          />


        </div>
        <br />
        <br />
        <div className="mb-1 flex  gap-6">
          <Input
            color="orange"
            size="lg"
            placeholder="I wish to offer 11 Sadhakas a meal | {secondcost}"

            value={secondcost}
            label={
              <div>
                I wish to offer 11 Sadhakas a meal |{' '}
                <strong style={{ fontWeight: 'bold' }}>{secondcost}</strong>
              </div>
            }
            style={{
              height: '60px', // Adjust the height as needed
              width: '330px',

            }}
            // onChange={handleThirdChange}
            onClick={() => handleInputBoxClick_2(secondcost)}
          />
          <Input
            color="orange"
            size="lg"
            placeholder="I wish to offer 11 Sadhakas a meal | {thirdcost}"

            value={thirdcost}
            label={
              <div>
                I wish to offer 11 Sadhakas a meal |{' '}
                <strong style={{ fontWeight: 'bold' }}>{thirdcost}</strong>
              </div>
            }
            style={{
              height: '60px', // Adjust the height as needed
              width: '330px',

            }}
            // onChange={handleThirdChange}
            onClick={() => handleInputBoxClick_3(thirdcost)}
          />
        </div>
        <br />
        <br />
        <div className="mb-1 flex  gap-6">

          <Input
            color="orange"
            size="lg"
            placeholder="I wish to offer 11 Sadhakas a meal | ₹ (fourthcost)"

            value={fourthcost}
            label={
              <div>
                I wish to offer 11 Sadhakas a meal |{' '}
                <strong style={{ fontWeight: 'bold' }}>{(fourthcost)}</strong>
              </div>
            }
            style={{
              height: '60px', // Adjust the height as needed
              width: '330px', // Adjust the width as needed
            }}
            // onChange={handleFourthChange}
            onClick={() => handleInputBoxClick_4(fourthcost)}

          />
          <Input
            color="orange"
            size="lg"
            value={fifthcost}

            placeholder="I wish to offer 11 Sadhakas a meal | (fifthcost)"

            label={
              <div>
                I wish to offer 11 Sadhakas a meal |{' '}
                <strong style={{ fontWeight: 'bold' }}>{fifthcost}</strong>
              </div>
            }
            style={{
              height: '60px', // Adjust the height as needed
              width: '330px', // Adjust the width as needed
              // Adjust the margin-top as needed
              textAlign: 'center', // Center-align the text
              fontWeight: 'bold', // Make the text bold
            }}
            // onChange={handleFifthChange}
            onClick={() => handleInputBoxClick_5(fifthcost)}

          />

        </div>
        <br />
        <br />
        <div className="mb-1 flex  gap-6">

          <Input
            color="orange"
            size="lg"
            placeholder="I wish to offer 11 Sadhakas a meal | {sixthcost}"
            value={sixthcost}
            label={
              <div>
                I wish to offer 11 Sadhakas a meal |{' '}
                <strong style={{ fontWeight: 'bold' }}>{sixthcost}</strong>
              </div>
            }
            // value="I wish to offer 11 Sadhakas a meal | ₹ 1,100 "
            style={{
              height: '60px', // Adjust the height as needed
              width: '330px', // Adjust the width as needed
            }}
            // onChange={handleSixthChange}
            onClick={() => handleInputBoxClick_6(sixthcost)}

          />
          <Input
            color="orange"
            size="lg"
            placeholder="I wish to offer 11 Sadhakas a meal | ₹ {seventhcost}"
            // value="I wish to offer 11 Sadhakas a meal | ₹ 1,100 "

            value={seventhcost}
            label={
              <div>
                I wish to offer 11 Sadhakas a meal |{' '}
                <strong style={{ fontWeight: 'bold' }}>{seventhcost}</strong>
              </div>
            }

            style={{
              height: '60px', // Adjust the height as needed
              width: '330px', // Adjust the width as needed

              textAlign: 'center', // Center-align the text
              fontWeight: 'bold', // Make the text bold
            }}
            // onChange={handleSeventhChange}
            onClick={() => handleInputBoxClick_7(seventhcost)}

          />

        </div>
        <br />
        <br />
        <p>Your Contribution amount :  <b> {selectedCost || inputValue}   </b> </p>

        <Button
          variant="contained"
          color="primary"
          onClick={handleButtonClick}
          style={{ marginTop: '16px' }}
        >
          Continue
        </Button>
      </form>
    </div>


  );
}

export default Donate;


