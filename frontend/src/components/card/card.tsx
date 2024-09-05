import { useUpdateCardMutation } from '@hooks/useUpdateCard'
import { TextArea } from '@shared/textarea/textarea'
import { TCard } from '@types/card'
import { useState } from 'react'
import CommentIcon from '@assets/icons/comment.svg'
import { useCardPopupStore } from '@app/store/useCardPopupStore'

interface ICardProps {
  data: TCard
}

function Card({ data }: ICardProps) {
  const [value, setValue] = useState(data.text)
  const { update } = useUpdateCardMutation(data.columnId, { ...data, text: value })
  const setIsActivePopup = useCardPopupStore(state => state.setIsActive)
  const setPopupCard = useCardPopupStore(state => state.setCard)

  const handleLoseFocus = () => {
    update()
  }

  const onChange = (e) => {
    setValue(e.currentTarget.value)
  }

  const handleCommentClick = () => {
    setPopupCard(data)
    setIsActivePopup(true)
  }

  return (
    <div className='w-full bg-secondary rounded-[8px] flex items-center'>
      <TextArea
        value={value}
        onChange={onChange}
        onBlur={handleLoseFocus}
        className='text-[18px] w-[90%] py-[12px] overflow-y-hidden cursor-pointer flex items-center bg-secondary rounded-[8px] px-[15px] duration-300 border-[2px] border-solid border-transparent hover:border-primary'
      />

      <CommentIcon className='fill-light w-[20px] h-[20px] mx-auto cursor-pointer duration-300 hover:fill-white' onClick={handleCommentClick} />
    </div>
  )
}

export { Card }
