import { useState } from 'react'
import { Switch } from '@headlessui/react'

export const MyToggle =({formData, changePricing})=> {


  return (

    <div className='myToggle'>
        <p className={`${formData.pricing ? `` : `plan-active`}`}>Monthly</p>
    <Switch
        checked={formData.pricing}
        onChange={changePricing}
        className="myToggle1"
        >
        <span className="sr-only"></span>
        <span
            className={`${
              formData.pricing ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition myToggle2`}
        />
        </Switch>

        <p className={`${formData.pricing ? `plan-active` : ``}`}>Yearly</p>
    </div>

 
  )
}