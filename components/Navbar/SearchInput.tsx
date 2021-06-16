// TODO: Implement proper colors from design
// TODO: Implement sizing from global classes
import React from 'react'
import classNames from 'classnames'

interface IProps {
  placeholder?: string
  size?: 'small' | 'large'
  onChange?: () => void
}

const SearchInput: React.FC<IProps> = ({
  placeholder,
  size = 'small',
  onChange,
}) => {
  return (
    <input
      placeholder={placeholder}
      className={classNames(
        'input',
        'rounded-3xl border border-gray-800 text-gray-400 font-bold text-base w-full',
        size === 'small' ? 'h-8 px-4' : 'h-12 px-6',
      )}
      onChange={onChange}
    />
  )
}

export default SearchInput
