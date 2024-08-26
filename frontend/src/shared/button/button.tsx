import clsx from 'clsx'
import styles from './button.module.scss'
import { ReactNode } from 'react'

function Button({ className, children, type = 'button' }: {children: ReactNode, className: string, type: string}) {
  return (
      <button type='submit' className={clsx('bg-primary px-[25px] py-[12px] rounded-[6px] text-[18px] hover:bg-primaryHover duration-300', className, styles.button)}>{children}</button>
  )
}

export { Button }
