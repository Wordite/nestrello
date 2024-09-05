import { Column } from '@components/columns/column'
import { useColumns } from '@hooks/useColumns'

export function Columns() {
  const { columns, isSuccess } = useColumns()

  return (
    <section className='w-full h-[100vh] p-[30px] pt-[105px]'>
      {isSuccess
        ? columns
            .sort((a, b) => a.order - b.order)
            .map((column) => <Column key={column.id} data={column} />)
        : 'Loading...'}
    </section>
  )
}
