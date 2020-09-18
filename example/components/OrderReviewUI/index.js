import React from 'react'
import { useForm } from 'react-hook-form'

export const OrderReviewUI = (props) => {
  const {
    handleSendReview,
    order,
    handleChangeInput,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  const { handleSubmit, register, errors } = useForm()
  const onSubmit = values => {
    handleSendReview()
  }
  return (
    <>
      {
        beforeElements.map((BeforeElement, i) => (
          <React.Fragment key={i}>
            {BeforeElement}
          </React.Fragment>
        ))
      }
      {
        beforeComponents.map((BeforeComponent, i) => <BeforeComponent key={i} {...props} />)
      }
      {
        order && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Write a Review of Order #{order.id}</h3>
            {
              <div
                style={{
                  margin: '20px',
                  padding: '30px',
                  border: '1px solid red',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <p style={{ padding: '5px' }}>Reviews:</p>
                <label htmlFor='Quality'>Quality of Product:</label>
                <select id='Quality' name='quality' onChange={(e) => handleChangeInput(e)}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <label>Punctiality:</label>
                <select name='punctiality' onChange={(e) => handleChangeInput(e)}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <label>Service:</label>
                <select name='service' onChange={(e) => handleChangeInput(e)}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <label>Product Packaging:</label>
                <select name='packaging' onChange={(e) => handleChangeInput(e)}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            }
            {
              <div
                style={{ margin: '20px', padding: '30px', border: '1px solid red' }}
              >
                <label htmlFor='Comments'>Comments:</label>
                <input
                  name='comments'
                  placeholder='Comments'
                  id='Comments'
                  onChange={(e) => handleChangeInput(e)}
                  style={{ borderColor: errors.comments ? '#c10000' : null }}
                  ref={register({
                    required: 'The field comments is required'
                  })}
                />
                {errors?.comments && <i style={{ color: '#c10000' }}>{errors?.comments?.message || 'error'}</i>}
                <div style={{ padding: '10px' }}>
                  <button type='submit'>SEND REVIEW</button>
                </div>
              </div>
            }

          </form>
        )
      }
      {
        afterComponents.map((AfterComponent, i) => <AfterComponent key={i} {...props} />)
      }
      {
        afterElements.map((AfterElement, i) => (
          <React.Fragment key={i}>
            {AfterElement}
          </React.Fragment>
        ))
      }
    </>
  )
}
