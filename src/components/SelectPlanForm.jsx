import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'
import { MyToggle } from './shared/MyToggle'

export const SelectPlanForm = () =>{


    return(

        <div className="step-component">
            <div>
            <h1>Select your plan</h1>
                <span>You have the option of monthly or yearly billing.</span>
                <div className="plans">
                <div className="plan-card">
                    <img width="40px" height="40px" src={arcade} alt="" />
                    <p>Arcade</p>
                    <span>$9/mo</span>
                </div>
                <div className="plan-card">
                    <img width="40px" height="40px" src={advanced} alt="" />
                    <p>Advanced</p>
                    <span>$12/mo</span>
                </div>
                <div className="plan-card">
                    <img width="40px" height="40px" src={pro} alt="" />
                    <p>Pro</p>
                    <span>$15/mo</span>
                </div>
                </div>
                <div className='plan-change'>
                    <MyToggle></MyToggle>

                </div>
            </div>
            <div className="step-component-footer">
                <button>Go back</button>
                <button>Next Step</button>
            </div>
          
        </div>
    )
}