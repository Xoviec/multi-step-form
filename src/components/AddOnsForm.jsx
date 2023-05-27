import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'
import { MyRadioGroup } from './shared/MyRadioGroup'
import  Checkmark from '../assets/images/icon-checkmark.svg'
import { MyCheckBox } from './shared/MyCheckBox'
import { useEffect, useState } from 'react'
  
export const AddOnsForm = ({changeStep, addActiveAddons, formData}) =>{

    const [addOnList, setAddOnList] = useState(formData.addOns)


    useEffect(()=>{
        addActiveAddons(addOnList)

        
    }, [addOnList])

    const handleChangeAddOns = (e) => {

        // console.log(e.target.name)
        if(addOnList.includes(e.target.name)){
            const newAddOnList = (addOnList.filter((addOn)=>addOn !== e.target.name))
            setAddOnList(newAddOnList)
        }
        else{
            setAddOnList([...addOnList, e.target.name])
        }

    }

    const addOns = [
        {
            name: 'Online service',
            subtitle: 'Access to multiplayer games',
            price: 10
        },
        {
            name: 'Large storage',
            subtitle: 'Extra 1TB of cloud save',
            price: 20
        },
        {
            name: 'Customizable profile',
            subtitle: 'Custom theme on your profile',
            price: 20
        }
]


    return(

        <div className="step-component">
        <div>
        <h1>Pick add-ons</h1>
            <span>Add-ons help enhance your gaming experience.</span>
            <form className='addons' onChange={((e)=>handleChangeAddOns(e))}>
                {
                    addOns.map((addOn)=>
                        <MyCheckBox {...addOn} key={addOn.name} formData={formData}/>
                    )
                }
            </form>

           


            
           

            
            
        </div>
        <div className="step-component-footer">
        <button onClick={(()=>changeStep(-1))}>Go back</button>
            <button onClick={(()=>changeStep(1))}>Next Step</button>

        </div>
      
    </div>
    )
}