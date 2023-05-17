import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'
import { MyToggle } from './shared/MyToggle'
import { useState } from 'react'

export const SelectPlanForm = ({changeStep}) =>{


    const [pricingMonthly, setPricingMontly] = useState(false)
    const [choosedPlan, setChoosedPlan] = useState('')



    const changePricing = () =>{
        setPricingMontly(!pricingMonthly)
    }

    return(

        <div className="step-component">
            <div>
            <h1>Select your plan</h1>
                <span>You have the option of monthly or yearly billing.</span>
                <form className="plans" onChange={((e)=>setChoosedPlan(e.target.id))}>
                    <input type='radio' name='plan' id='arcade' className='hidden'/>
                    <label for='arcade' className={`plan-card ${choosedPlan === `arcade` ? `active-plan` : ``}`}>
                        <img width="40px" height="40px" src={arcade} alt="" />
                        <p>Arcade</p>
                        <span>$9/mo</span>
                    </label>
                    <input type='radio' name='plan' id='advanced' className='hidden'/>
                    <label for='advanced' className={`plan-card ${choosedPlan === `advanced` ? `active-plan` : ``}`}>
                        <img width="40px" height="40px" src={advanced} alt="" />
                        <p>Advanced</p>
                        <span>$12/mo</span>
                    </label>
                    <input type='radio' name='plan' id='pro' className='hidden'/>
                    <label for='pro' className={`plan-card ${choosedPlan === `pro` ? `active-plan` : ``}`}>
                        <img width="40px" height="40px" src={pro} alt="" />
                        <p>Pro</p>
                        <span>$15/mo</span>
                    </label>
                </form>
                <div className='plan-change'>
                    <MyToggle pricingMonthly={pricingMonthly} changePricing={changePricing}></MyToggle>

                </div>
            </div>
            <div className="step-component-footer">
            <button onClick={(()=>changeStep(-1))}>Go Back </button>
                <button onClick={(()=>changeStep(1))}>Next Step</button>
            </div>
          
        </div>
    )
}