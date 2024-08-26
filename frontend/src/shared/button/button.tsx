import clsx from 'clsx'
import styles from './button.module.scss'
import { ReactNode } from 'react'

function Button({
  className,
  children,
  type,
  onClick = () => {},
}: {
  children: ReactNode
  className: string
  type: string,
  onClick?: () => void
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        'bg-primary px-[25px] py-[12px] rounded-[6px] text-[18px] hover:bg-primaryHover duration-300',
        className,
        styles.button
      )}
    >
      {children}
    </button>
  )
}

export { Button }
