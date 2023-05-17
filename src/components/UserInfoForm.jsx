import { useState } from "react";

export const UserInfoForm = ({changeStep, handleInputChange, formData}) =>{






    const checkForms = (e) =>{

        // console.log(e.target.name)

        // if(e.target.name)
        console.log(e)

    }

    return(

        <div className="step-component">
            <div>
                <h1>Personal Info</h1>
                    <span>Please provide your name, email adress and phone number.</span>
                    <form className="form" onChange={handleInputChange}>
                        <div className="input-title">
                            <p>Name</p>
                            <p className={`${formData.name ? `hidden`: ``}`}>This field is required</p>
                        </div>
                        <input type="text" placeholder="e.g. Stephen King" name='name' value={formData.name}/>
                        <div className="input-title">
                            <p>Email Address</p>
                            <p className={`${formData.email ? `hidden`: ``}`}>This field is required</p>
                        </div>                
                        <input type="text" placeholder="e.g. stephenking@lorem.com" name='email' value={formData.email}/>
                        <div className="input-title">
                            <p>Phone Number</p>
                            <p className={`${formData.phoneNumber ? `hidden`: ``}`}>This field is required</p>
                        </div>                
                        <input type="text" placeholder="e.g. 732 219 213" name='phoneNumber' value={formData.phoneNumber}/>
                    </form>
            </div>
            <div className="step-component-footer">
                <div></div>
                <button onClick={(()=>changeStep(1))}>Next Step</button>
            </div>

        </div>
    )
}