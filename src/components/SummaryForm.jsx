export const SummaryForm = ({changeStep, formData, addOns}) =>{


    console.log(formData)

    formData.addOns.map((addOn) =>{

        const dupa = addOn

        const ebe = addOns.find(el => el.name === addOn)
        console.log(ebe.monthly)
    })

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
                                $90/{`${formData.pricing ? `yr` : `mo`}`}
                            </p>
                        </div>
                    </div>
                    <div className="break-line"></div>
                    {
                        formData.addOns.map((addOn)=>(
                            <div className="choosed-addons">
                                <p>{addOn}</p>
                                <span>$/{`${formData.pricing ? `yr` : `mo`}`}</span>
                            </div>
                        ))
                    }
                </div>
                <div className="total">
                    <p>Total ({`${formData.pricing ? `per year` : `per month`}`})</p>
                    <span>$120/{`${formData.pricing ? `yr` : `mo`}`}</span>
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