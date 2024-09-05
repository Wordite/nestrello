import React, { useEffect, useRef } from 'react'

function TextArea(props: React.ComponentProps<'textarea'>) {
  const ref = useRef(null)

  const resizeTextArea = (textArea) => {
    textArea.style.height = 'auto'
    textArea.style.height = textArea.scrollHeight + 'px'
  }

  const propsOnChange = props.onChange

  const onChange = (e: SyntheticEvent) => {
    const target = e.currentTarget as HTMLTextAreaElement
    resizeTextArea(target)

    props.onChange && propsOnChange(e)
  }

  useEffect(() => {
    resizeTextArea(ref.current)
  }, [])

  return <textarea {...props} onChange={onChange} ref={ref} />
}

export { TextArea }
