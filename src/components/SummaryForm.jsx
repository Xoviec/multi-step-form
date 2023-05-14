export const SummaryForm = () =>{

    return(
        <div className="step-component">
        <div>
        <h1>Finishing up</h1>
            <span>Double-check everything looks OK before confirming.</span>
            <div className="summary">
                <div className="sum">
                    <div className="choosed-plan">
                        <div>
                            <p>Arcade (yearly)</p>
                            <span>Change</span>
                        </div>
                        <div>
                            <p>
                                $90/yr
                            </p>
                        </div>
                    </div>
                    <div className="break-line"></div>
                    <div className="choosed-addons">
                        <p>Online service</p>
                        <span>$20/yr</span>
                    </div>
                    {/* <div className="choosed-addons">
                        <p>Online service</p>
                        <span>$20/yr</span>
                    </div> */}
                    <div className="choosed-addons">
                        <p>Online service</p>
                        <span>$20/yr</span>
                    </div>
                </div>
                <div className="total">
                    <p>Total (per year)</p>
                    <span>$120/yr</span>
                </div>
               
            </div>
        </div>
        <div className="step-component-footer">
            <button>Go back</button>
            <button>Next Step</button>
        </div>
      
    </div>
    )
}