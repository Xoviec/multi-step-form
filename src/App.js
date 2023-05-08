import { useState } from 'react';
import './App.css';
import { UserInfoForm } from './components/UserInfoForm';
import { SelectPlanForm } from './components/SelectPlanForm';
import { AddOnsForm } from './components/AddOnsForm';
import { SummaryForm } from './components/SummaryForm';

function App() {

  const [activeStep, setActiveStep] = useState(1)

console.log(activeStep)
  return (
    <div className="App">
      <nav>
        <div className='step-list'>
          <div className='nav-step' onClick={()=>(setActiveStep(1))}>
            <button>1</button>
            <div>
              <span>STEP 1</span>
              <p>YOUR INFO</p>
            </div>
          </div>
          <div className='nav-step'  onClick={()=>(setActiveStep(2))}>
            <button>2</button>
            <div>
              <span>STEP 2</span>
              <p>SELECT PLAN</p>
            </div>
          </div>
          <div className='nav-step'  onClick={()=>(setActiveStep(3))}>
            <button>3</button>
            <div>
              <span>STEP 3</span>
              <p>ADD-ONS</p>
            </div>
          </div>
          <div className='nav-step'  onClick={()=>(setActiveStep(4))}>
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
            <UserInfoForm></UserInfoForm>
          : activeStep === 2 ? 
            <SelectPlanForm></SelectPlanForm>
          : activeStep === 3 ? 
            <AddOnsForm></AddOnsForm>
          :  
            <SummaryForm></SummaryForm>



        }
      </container>
    </div>
  );
}

export default App;
