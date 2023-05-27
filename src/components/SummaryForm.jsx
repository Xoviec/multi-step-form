import { useState, useEffect } from "react";

export const SummaryForm = ({changeStep, formData, addOns, plans}) =>{

    const [sum, setSum] = useState()
    const currentPlan = plans.find((el) => el.name === formData.plan)

    useEffect(() => {


        if(formData.pricing){
            setSum(currentPlan.yearly)
        }
        else{
            setSum(currentPlan.monthly)
        }

        console.log()
      });

      let addOnsPrice = sum;

    console.log(formData)

    // formData.addOns.map((addOn) =>{

    //     const dupa = addOn

    // const currentPlan = plans.find((el) => console.log(formData.name.toLowerCase() ))

        console.log(plans)
        console.log(currentPlan)
    //     console.log(currentPlan.monthly)
    // })

    
    console.log(addOns.map)

    return(
        <div className="step-component">
        <div>
        <h1>Finishing up</h1>
            <span>Double-check everything looks OK before confirming.</span>
            <div className="summary">
                <div className="sum">
                    <div className="choosed-plan">
                        <div>
                            <p>{formData.plan} ({`${formData.pricing ? `Yearly` : `Monthly`}`})</p>
                            <span>Change</span>
                        </div>
                        <div>
                            <p>
                                ${`${formData.pricing ? `${currentPlan.yearly}/yr` : `${currentPlan.monthly}/mo`}`}
                            </p>
                        </div>
                    </div>
                    <div className="break-line"></div>
                    {
                        
                        formData.addOns.map((addOn) => {
                            const currentPlan = addOns.find((el) => el.name === addOn);
                            const price = formData.pricing ? currentPlan.yearly : currentPlan.monthly;
                            addOnsPrice += price 

                            console.log(addOnsPrice)


                            return (
                            <div className="choosed-addons" key={addOn}>
                                <p>{addOn}</p>
                                <span>${price}/{`${formData.pricing ? `yr` : `mo`}`}</span>
                            </div>
                            )
                        })
                    }

                </div>
                <div className="total">
                    <p>Total ({`${formData.pricing ? `per year` : `per month`}`})</p>
                    <span>${addOnsPrice}/{`${formData.pricing ? `yr` : `mo`}`}</span>
                </div>
               
            </div>
        </div>
        <div className="step-component-footer">
        <button onClick={(()=>changeStep(-1))}>Go back</button>
            <button>Comfirm</button>
        </div>
      
    </div>
    )
}