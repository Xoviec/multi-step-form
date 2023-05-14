import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'
import { MyRadioGroup } from './shared/MyRadioGroup'
import  Checkmark from '../assets/images/icon-checkmark.svg'
import { MyCheckBox } from './shared/MyCheckBox'
  
export const AddOnsForm = () =>{

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
            <div className='addons'>
                {
                    addOns.map((addOn)=>
                        <MyCheckBox {...addOn} key={addOn.name}/>
                    )
                }
            </div>

           


            
           

            
            
        </div>
        <div className="step-component-footer">
            <button>Go back</button>
            <button>Next Step</button>

        </div>
      
    </div>
    )
}