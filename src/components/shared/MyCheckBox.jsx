import { useState } from "react"
import Checkmark from "../../assets/images/icon-checkmark.svg"

export const MyCheckBox = (props) =>{

    const [checked, setChecked] = useState(props.formData.addOns.includes(props.name))

    return(
        <div>
            <input name={props.name} className="hidden" type="checkbox" id={props.name} onChange={(()=>setChecked(!checked))}/>
            <label className={`checkbox ${checked ? `checkbox-checked` : ``}`} htmlFor={props.name}>
                <div className={`box ${checked ? `` : `box-unchecked`}`}>
                    <img width='15px' height='15px' src={Checkmark} alt="checkmark" className={`${checked ? `` : `hidden`} `} />
                </div>
                <div className='checkbox-desc'>
                <span>
                    {props.name}
                </span>
                <span>
                    {props.subtitle}
                </span>
                </div>
                <p>
                ${`${props.formData.pricing ? `${props.yearly}/yr` : `${props.monthly}/mo`}`}
                </p>
            </label>
        </div>
    )
}