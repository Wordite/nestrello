interface IMenuItemProps {
  onClick?: () => void
  text: string
}


export function MenuItem({ onClick = () => {}, text }: IMenuItemProps) {
  return (
    <li
      onClick={onClick}
      className='cursor-pointer h-[40px] flex items-center justify-center duration-300 hover:bg-secondary'
      style={{
        borderTop: '1px solid var(--color-sub-secondary)',
        borderBottom: '1px solid var(--color-sub-secondary)',
      }}
    >
      <span className='text-[18px]'>{text}</span>
    </li>
  )
}
