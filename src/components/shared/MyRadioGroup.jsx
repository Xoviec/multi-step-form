import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

export const MyRadioGroup = (props) => {
  let [plan, setPlan] = useState('startup')

  return (
    
    <RadioGroup value={plan} onChange={setPlan}>
      <RadioGroup.Label>Plan</RadioGroup.Label>
      <RadioGroup.Option value="startup">
        {({ checked }) => (
          <span className={checked ? 'active' : ''}>Startup</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="business">
        {({ checked }) => (
          <span className={checked ? 'active' : ''}>Business</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="enterprise">
        {({ checked }) => (
          <span className={checked ? 'active' : ''}>Enterprise</span>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  )
}