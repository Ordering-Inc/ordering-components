import React, { useRef } from 'react'

export const ExamineClick = ({ onFiles, children, className, style, accept }) => {
  const inputRef = useRef(null)

  const handleClick = (e) => {
    inputRef.current.click()
  }

  const handleChange = (e) => {
    e.preventDefault()
    e.stopPropagation()
    onFiles(e.target.files)
  }

  return (
    <div
      draggable
      onClick={handleClick}
      style={style}
      className={className}
    >
      <input type='file' style={{ display: 'none' }} onChange={handleChange} onClick={e => e.stopPropagation()} ref={inputRef} accept={accept} />
      {children}
    </div>
  )
}
