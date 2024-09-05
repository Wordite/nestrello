import { MenuItem } from "@components/sidebar/menuItem";


export function Sidebar() {
  return (
    <aside className='w-[300px] h-screen bg-default pt-[75px] z-30' style={{ borderRight: '1px solid var(--color-sub-secondary)' }}>
      <div className=''>
        <p className='text-center mt-[40px] mb-[30px] text-[25px] opacity-75'>Меню</p>
        <ul>
          <MenuItem text='Добавить колонку' />
          <MenuItem text='Удалить колонку' />
        </ul>
      </div>
    </aside>
  )
}
