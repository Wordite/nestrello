

function Input() {
  return (
    <div className="relative">
      <label htmlFor='email' className='absolute text-[20px]'>
        Почта
      </label>
      <input type='text' id='email' className='bg-secondary w-full' />
    </div>
  )
}

export { Input }
