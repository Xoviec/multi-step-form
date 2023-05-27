import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'
import { MyToggle } from './shared/MyToggle'
import { useEffect, useState } from 'react'

export const SelectPlanForm = ({changeStep, plans, changePricing, formData, handleInputChange}) =>{


    // const [pricingMonthly, setPricingMonthly] = useState(false)

    const [choosedPlan, setChoosedPlan] = useState('')



    const handleChangeStep = () =>{
        if(formData.plan){
            changeStep(1)
          }
    }

    let plan;

    useEffect(() => {
        // Update the document title using the browser API
        if(formData.pricing){
            setChoosedPlan('yearly')
        }
        else{
            setChoosedPlan('monthly')
        }

        console.log(choosedPlan)
      });
    // const changePricing = () =>{
    //     setPricingMonthly(!pricingMonthly)
    // }

    return(

        <div className="step-component">
            <div>
            <h1>Select your plan</h1>
                <span>You have the option of monthly or yearly billing.</span>
                <form className="plans" onChange={handleInputChange}>
                    {
                        plans.map((plan)=>
                        <div>
                            <input type='radio' name='plan' id={plan.name} className='hidden' value={plan.name}/>
                            <label for={plan.name} className={`plan-card ${formData.plan === `${plan.name}` ? `active-plan` : ``}`}>
                                <img width="40px" height="40px" src={pro} alt="" />
                                <p>{plan.name}</p>
                                <span>${`${choosedPlan === 'monthly' ? `${plan.monthly}/mo` : `${plan.yearly}/yr`}`}</span>
                            </label>
                        </div>
                            
                        )
                    }
                    {/* <input type='radio' name='plan' id='arcade' className='hidden' value='arcade'/>
                    <label for='arcade' className={`plan-card ${formData.plan === `arcade` ? `active-plan` : ``}`}>
                        <img width="40px" height="40px" src={arcade} alt="" />
                        <p>Arcade</p>
                        <span>$9/mo</span>
                    </label>
                    <input type='radio' name='plan' id='advanced' className='hidden' value='advanced'/>
                    <label for='advanced' className={`plan-card ${formData.plan === `advanced` ? `active-plan` : ``}`}>
                        <img width="40px" height="40px" src={advanced} alt="" />
                        <p>Advanced</p>
                        <span>$12/mo</span>
                    </label> */}
                    {/* <input type='radio' name='plan' id='pro' className='hidden' value='pro'/>
                    <label for='pro' className={`plan-card ${formData.plan === `pro` ? `active-plan` : ``}`}>
                        <img width="40px" height="40px" src={pro} alt="" />
                        <p>Pro</p>
                        <span>$15/mo</span>
                    </label> */}
                </form>
                <div className='plan-change'>
                    <MyToggle formData={formData} changePricing={changePricing}></MyToggle>
                </div>
            </div>
            <div className="step-component-footer">
            <button onClick={(()=>changeStep(-1))}>Go Back </button>
                <button onClick={handleChangeStep}>Next Step</button>
            </div>
          
        </div>
    )
}