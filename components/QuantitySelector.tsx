// TODO: setQuantity
import React, { useState, useEffect } from 'react'

interface IProps {
  initialQuantity?: number
  min?: number
  max?: number
  onUpdate?: (quantity: number) => void
}
const QuantitySelector: React.VFC<IProps> = ({
  onUpdate,
  min,
  max,
  initialQuantity = 10,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity)

  useEffect(() => {
    if (!onUpdate) {
      return
    }
    onUpdate(quantity)
  }, [quantity, onUpdate])

  return (
    <div className={'flex flex-col space-y-3'}>
      <div className={'text-sm font-light'}>qty {quantity}</div>
      <div className={'flex space-x-0.5 justify-between'}>
        <button
          className={'rounded-l bg-gray-800 w-full p-4 text-lg text-center'}
        >
          -
        </button>
        <input
          className={'input rounded-none w-full text-lg text-center'}
          value={quantity}
        />
        <button
          className={'rounded-r bg-gray-800 w-full p-4 text-lg text-center'}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default QuantitySelector
