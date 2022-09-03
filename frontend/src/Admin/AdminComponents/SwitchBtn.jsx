import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function SwitchBtn({flag}) {
  const [enabled, setEnabled] = useState(flag)
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex  h-6 w-12 items-center rounded-full`}
    >
      <span
        className={`${
          enabled ? 'translate-x-7' : 'translate-x-1'
        } inline-block h-4 w-4  transform rounded-full bg-white`}
      />
    </Switch>
  )
}