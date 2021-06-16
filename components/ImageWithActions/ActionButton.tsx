import React from 'react'
import classNames from 'classnames'

interface IProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  size: 'small' | 'large'
}

const ActionButton: React.FC<IProps> = (props) => {
  const { children, size = 'small', className, style } = props
  return (
    <div
      className={classNames(
        { 'lg:w-10 lg:h-10': size === 'large' },
        'w-7 h-7 rounded-full flex items-center justify-center overflow-hidden select-none shadow',
        className,
      )}
      style={style}
    >
      {children}
    </div>
  )
}

export default ActionButton
