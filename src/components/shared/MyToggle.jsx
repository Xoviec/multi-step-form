import { useState } from 'react'
import { Switch } from '@headlessui/react'

export const MyToggle =()=> {
  const [enabled, setEnabled] = useState(false)

  return (

    <div className='myToggle'>
        <p className={`${enabled ? `` : `plan-active`}`}>Monthly</p>
    <Switch
        checked={enabled}
        onChange={setEnabled}
        className="myToggle1"
        >
        <span className="sr-only"></span>
        <span
            className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition myToggle2`}
        />
        </Switch>

        <p className={`${enabled ? `plan-active` : ``}`}>Yearly</p>
    </div>

 
  )
}