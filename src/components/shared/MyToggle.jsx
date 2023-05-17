import { useState } from 'react'
import { Switch } from '@headlessui/react'

export const MyToggle =({pricingMonthly, changePricing})=> {


  return (

    <div className='myToggle'>
        <p className={`${pricingMonthly ? `` : `plan-active`}`}>Monthly</p>
    <Switch
        checked={pricingMonthly}
        onChange={changePricing}
        className="myToggle1"
        >
        <span className="sr-only"></span>
        <span
            className={`${
            pricingMonthly ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition myToggle2`}
        />
        </Switch>

        <p className={`${pricingMonthly ? `plan-active` : ``}`}>Yearly</p>
    </div>

 
  )
}