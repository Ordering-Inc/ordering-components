import React from 'react'

export const MessagesUI = (props) => {
  const {
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements,
    canRead,
    setMessage,
    setCanRead,
    handleSend,
    sendMessage,
    messages,
    setImage,
    image
  } = props
  const onChangeMessage = e => {
    setMessage(e.target.value)
  }
  const removeImage = e => {
    const input = document.getElementById('chat_image')
    input.value = ''
    setImage(null)
  }
  const handleCanRead = e => {
    setCanRead({
      ...canRead,
      [e.target.name]: e.target.checked
    })
  }
  const onChangeImage = e => {
    const files = Array.from(e.target.files)
    if (files.length > 0) {
      const reader = new FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = () => {
        const img = new Image()
        img.onload = () => {
          setImage(reader.result)
        }
        img.src = reader.result
      }
      reader.onerror = error => {
        console.log(error)
      }
      setImage(files[0])
    }
  }
  const getRole = level => {
    switch (level) {
      case 0:
        return 'admin'
      case 2:
        return 'business'
      case 4:
        return 'driver'
      default:
        return 'Customer'
    }
  }
  return (
    <>
      {beforeElements.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}

      {beforeComponents.map(
        (BeforeComponent, i) => <BeforeComponent key={i} {...props} />
      )}
      <h1>CHAT</h1>
      {
        messages.loading &&
          <>
            <span>Loading Messages...</span>
            <br />
            <br />
          </>
      }
      {
        messages.error &&
          <>
            <h1 style={{ color: 'red' }}>{messages.error}</h1>
            <br />
          </>
      }
      {
        messages?.messages?.map(message => (
          <div key={message.id}>
            {
              message.type === 1 && (
                <p>Change: {message.change.attribute} {
                  message.change.old &&
                    <span>
                    from <strong>{message.change.old}</strong>
                    </span>
                } <span>to {message.change.new}</span>
                </p>)
            }
            {
              message.type === 2 && (
                <>
                  <strong>{message.author.name} ({getRole(message.author.level)})</strong><br />
                  {message.comment}
                </>
              )
            }
            {
              message.type === 3 && (
                <>
                  <strong>{message.author.name} ({getRole(message.author.level)})</strong><br />
                  <img src={message.source} />
                  {message.comment}
                </>
              )
            }
            <hr />
          </div>
        ))
      }
      {/* Chat Controller (can see, message, send) */
        <>
          <input name='business' type='checkbox' onChange={handleCanRead} defaultChecked={canRead.business} />
          <label>Business</label>
          <input name='administrator' type='checkbox' onChange={handleCanRead} defaultChecked={canRead.administrator} />
          <label>Administrator</label>
          <input name='driver' type='checkbox' onChange={handleCanRead} defaultChecked={canRead.driver} />
          <label>Driver</label>
          <br />
          <textarea name='message' cols='120' rows='10' onChange={onChangeMessage} />
          <br />
          {
            image && <button onClick={removeImage}>X</button>
          }
          <input type='file' name='image' id='chat_image' accept='image/png,image/jpg,image/jpeg' onChange={onChangeImage} />
          <button onClick={handleSend}>Send</button>
        </>
      }
      {
        sendMessage.loading && <span>Sending Message...</span>
      }
      {
        sendMessage.error &&
          <>
            <br />
            <span style={{ color: 'red' }}>{sendMessage.error}</span>
          </>
      }
      {afterComponents.map(
        (AfterComponent, i) => <AfterComponent key={i} {...props} />
      )}

      {afterElements.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}
    </>
  )
}
