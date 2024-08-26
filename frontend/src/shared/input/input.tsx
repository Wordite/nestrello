import clsx from 'clsx'
import styles from './input.module.scss'

function Input(props: any) {
  return (
    <div className={clsx('relative text-[20px]', styles.input)}>
      <input {...props} placeholder='' className={clsx('bg-secondary w-full h-[55px] rounded-[6px]')} autoComplete='one-time-code' />
      <label htmlFor={props.id} className='absolute left-0'>
        {props['data-label-text']}
      </label>
    </div>
  )
}

export { Input }
