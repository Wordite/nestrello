import { useCardPopupStore } from '@app/store/useCardPopupStore'
import clsx from 'clsx'
import CrosshairIcon from '@assets/icons/crosshair.svg'
import Plus from '@assets/icons/plus.svg'
import { useCreateCommentMutation } from '@hooks/useCreateCommentMutation'

function CardPopup() {
  const card = useCardPopupStore((state) => state.card)
  const isActive = useCardPopupStore((state) => state.isActive)
  const setIsActive = useCardPopupStore((state) => state.setIsActive)
  const { create } = useCreateCommentMutation(card!.columnId, card.id as number)

  const handleCrosshairClick = () => setIsActive(false)
  console.log('comments: ', card?.comments)
  const handleAddCommentClick = () => {
    create()
  }

  return (
    <div
      className={clsx(
        'w-screen h-screen bg-[rgba(0,0,0,.3)] fixed flex justify-center items-center',
        isActive ? '' : 'hidden'
      )}
    >
      <div className='w-[800px] max-h-[600px] bg-secondary rounded-[8px] px-[20px] text-wrap pb-[25px]'>
        <div
          className='h-[60px] flex items-center mb-[25px]'
          style={{ borderBottom: '1px solid gray' }}
        >
          <p className='text-[30px] font-semibold'>Комментарии</p>
          <CrosshairIcon
            className='w-[30px] h-[30px] fill-white ml-auto cursor-pointer'
            onClick={handleCrosshairClick}
          />
        </div>
        {card?.text}

        <ul>
          {card?.comments?.map(comment => <li>{comment.text}</li>)}
        </ul>

        <div
          onClick={handleAddCommentClick}
          className='mt-[30px] flex items-center h-[50px] duration-300 hover:bg-secondary rounded-[8px] px-[15px] cursor-pointer'
        >
          <Plus className='block w-[25px] h-[25px] fill-white opacity-75' />
          <div className='text-[18px] ml-[10px] font-medium opacity-75'>Добавить комментарий</div>
        </div>
      </div>
    </div>
  )
}

export { CardPopup }
