import Plus from '@assets/icons/plus.svg'
import { Card } from '@components/card/card'
import { useCreateCardMutation } from '@hooks/useCreateCardMutation'
import { TColumn } from '@types/column'
import TextareaAutosize from 'react-textarea-autosize'

interface IColumnProps {
  data: TColumn
}

export function Column({ data }: IColumnProps) {
  const { create } = useCreateCardMutation(data.id)
  const handleAddCardClick = () => create()

  return (
    <div className='w-[400px] bg-default rounded-[12px]'>
      <p
        className='text-[20px] text-center min-h-[50px] flex justify-center items-center'
        style={{ borderBottom: '1px solid var(--color-sub-secondary)' }}
      >
        <TextareaAutosize
          defaultValue={data.title}
          className='bg-transparent px-[15px] py-[7px] text-center mb-[10px]'
        />
      </p>

      <div className='w-[90%] m-auto py-[20px] flex flex-col gap-[15px]'>
        {Array.from(data.cards)
          .sort((a, b) => a.order - b.order)
          .map((card) => (
            <Card key={card.order} data={card} />
          ))}

        <div
          onClick={handleAddCardClick}
          className='mt-[30px] flex items-center h-[50px] duration-300 hover:bg-secondary rounded-[8px] px-[15px] cursor-pointer'
        >
          <Plus className='block w-[25px] h-[25px] fill-white opacity-75' />
          <div className='text-[18px] ml-[10px] font-medium opacity-75'>Добавить карточку</div>
        </div>
      </div>
    </div>
  )
}
