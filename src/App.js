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
    phoneNumber: ''
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));


    // if (formData.name && formData.email && formData.phoneNumber) {
    //     // Wszystkie pola formularza są wypełnione
    //     setChangable(true)
    //   } else {
    //     setChangable(false)
    //   }
  };



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
            <SelectPlanForm changeStep={changeStep}></SelectPlanForm>
          : activeStep === 3 ? 
            <AddOnsForm changeStep={changeStep}></AddOnsForm>
          :  
            <SummaryForm changeStep={changeStep}></SummaryForm>



        }
      </container>
    </div>
  );
}

export default App;
