import { useState } from "react";

export const UserInfoForm = ({changeStep, handleInputChange, formData}) =>{

    const [isRequired, setIsRequired] = useState(false)




    const handleChangeStep = () =>{

        if(formData.name && formData.email && formData.phoneNumber){
            changeStep(1)
            setIsRequired(false)
          }
          else{
            setIsRequired(true)
          }
    }


    return(

        <div className="step-component">
            <div>
                <h1>Personal Info</h1>
                    <span>Please provide your name, email adress and phone number.</span>
                    <form className="form" onChange={handleInputChange}>
                        <div className="input-title">
                            <p>Name</p>
                            <p className={`${isRequired ? `${formData.name ? `hidden`: ``}` : `hidden`}`}>This field is required</p>
                        </div>
                        <input type="text" placeholder="e.g. Stephen King" name='name' value={formData.name}/>
                        <div className="input-title">
                            <p>Email Address</p>
                            <p className={`${isRequired ? `${formData.email ? `hidden`: ``}` : `hidden`}`}>This field is required</p>
                        </div>                
                        <input type="text" placeholder="e.g. stephenking@lorem.com" name='email' value={formData.email}/>
                        <div className="input-title">
                            <p>Phone Number</p>
                            <p className={`${isRequired ? `${formData.phoneNumber ? `hidden`: ``}` : `hidden`}`}>This field is required</p>
                        </div>                
                        <input type="text" placeholder="e.g. 732 219 213" name='phoneNumber' value={formData.phoneNumber}/>
                    </form>
            </div>
            <div className="step-component-footer">
                <div></div>
                <button onClick={handleChangeStep}>Next Step</button>
            </div>

        </div>
    )
}