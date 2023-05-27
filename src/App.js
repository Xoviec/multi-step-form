import { useState } from 'react';
import './App.css';
import { UserInfoForm } from './components/UserInfoForm';
import { SelectPlanForm } from './components/SelectPlanForm';
import { AddOnsForm } from './components/AddOnsForm';
import { SummaryForm } from './components/SummaryForm';

function App() {

  const [activeStep, setActiveStep] = useState(1)
  const [changable, setChangable] = useState(false)
  const [isRequired, setIsRequired] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    plan: '',
    pricing: false, //false = monthly, true = yearly
    addOns: []
  });


  const plans = [
    {
      name: 'arcade',
      monthly: 9,
      yearly: 90
    },
    {
      name: 'advanced',
      monthly: 12,
      yearly: 120
    },
    {
      name: 'pro',
      monthly: 15,
      yearly: 150
    }


  ]
  

  const changePricing = () =>{
    setFormData((prevData) => ({
      ...prevData,
      'pricing': !prevData.pricing
    }))
  }


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    console.log(formData)


    // if (formData.name && formData.email && formData.phoneNumber) {
    //     // Wszystkie pola formularza są wypełnione
    //     setChangable(true)
    //   } else {
    //     setChangable(false)
    //   }
  };

  const addActiveAddons = (addOnList) =>{
    setFormData((prevData) => ({
      ...prevData,
      'addOns': addOnList
    }));
  }



  const changeStep = (num) =>{

          setActiveStep(activeStep+num)

  }

  return (
    <div className="App">
      <nav>
        <div className='step-list'>
          <div className={`nav-step ${activeStep === 1 ? `nav-step-active` : ``}`} 
          // onClick={()=>(changable ? setActiveStep(1) : null)}
          >
            <button>1</button>
            <div>
              <span>STEP 1</span>
              <p>YOUR INFO</p>
            </div>
          </div>
          <div className={`nav-step ${activeStep === 2 ? `nav-step-active` : ``}`}  
          // onClick={()=>(changable ? setActiveStep(2) : null)}
          >
            <button>2</button>
            <div>
              <span>STEP 2</span>
              <p>SELECT PLAN</p>
            </div>
          </div>
          <div className={`nav-step ${activeStep === 3 ? `nav-step-active` : ``}`}  
          // onClick={()=>(changable ? setActiveStep(3) : null)}
          >
            <button>3</button>
            <div>
              <span>STEP 3</span>
              <p>ADD-ONS</p>
            </div>
          </div>
          <div className={`nav-step ${activeStep === 4 ? `nav-step-active` : ``}`}  
          // onClick={()=>(changable ? setActiveStep(4) : null)}
          >
            <button>4</button>
            <div>
              <span>STEP 4</span>
              <p>SUMMARY</p>
            </div>
          </div>
        </div>
      </nav>
      <container>
        {
          activeStep === 1 ? 
            <UserInfoForm changeStep={changeStep} handleInputChange={handleInputChange} formData={formData} ></UserInfoForm>
          : activeStep === 2 ? 
            <SelectPlanForm changeStep={changeStep} plans={plans} changePricing={changePricing} handleInputChange={handleInputChange} formData={formData}></SelectPlanForm>
          : activeStep === 3 ? 
            <AddOnsForm changeStep={changeStep} addActiveAddons={addActiveAddons} formData={formData}></AddOnsForm>
          :  
            <SummaryForm changeStep={changeStep} formData={formData}></SummaryForm>



        }
      </container>
    </div>
  );
}

export default App;
