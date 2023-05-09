export const UserInfoForm = () =>{


    return(

        <div className="step-component">
            <div>
                <h1>Personal Info</h1>
                    <span>Please provide your name, email adress and phone number.</span>
                    <div className="form">
                        <div className="input-title">
                            <p>Name</p>
                            <p className="hidden">This field is required</p>
                        </div>
                        <input type="text" placeholder="e.g. Stephen King"/>
                        <div className="input-title">
                            <p>Email Address</p>
                            <p className="hidden">This field is required</p>
                        </div>                
                        <input type="text" placeholder="e.g. stephenking@lorem.com"/>
                        <div className="input-title">
                            <p>Phone Number</p>
                            <p>This field is required</p>
                        </div>                
                        <input type="text" placeholder="e.g. 732 219 213"/>
                    </div>
            </div>
            <div className="step-component-footer">
                <div></div>
                <button>Next Step</button>
            </div>

        </div>
    )
}