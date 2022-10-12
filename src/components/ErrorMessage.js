import React from 'react'

const ErrorMessage = ({message}) => {
  return (
    <div className={`message`}>
      {message}
    </div>
  )
}

export default ErrorMessage