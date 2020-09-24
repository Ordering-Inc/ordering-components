import React from 'react'
import { useForm } from 'react-hook-form'

export const OrderReviewUI = (props) => {
  const {
    handleSendReview,
    order,
    handleRating,
    handleChangeInput,
    formState,
    stars,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  const { handleSubmit, register, errors } = useForm()
  const onSubmit = values => {
    handleSendReview()
  }
  const scores = [1, 2, 3, 4, 5]
  console.log(errors)
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
                <div name='quality' style={{ display: 'flex', justifyContent: 'space-between', width: '200px' }}>
                  {scores.map(score => (
                    <span key={score} style={{ border: stars.quality === score ? '1px solid red' : '' }} title='quality' id={score} onClick={(e) => handleRating(e)}>{score}</span>
                  ))}
                  {errors?.quality && <i style={{ color: '#c10000' }}>{errors?.quality?.message || 'error'}</i>}
                </div>
                <label>Punctiality:</label>
                <div name='punctiality' style={{ display: 'flex', justifyContent: 'space-between', width: '200px' }}>
                  {scores.map(score => (
                    <span key={score} style={{ border: stars.punctiality === score ? '1px solid red' : '' }} title='punctiality' id={score} onClick={(e) => handleRating(e)}>{score}</span>
                  ))}
                </div>
                <label>Service:</label>
                <div name='service' style={{ display: 'flex', justifyContent: 'space-between', width: '200px' }}>
                  {scores.map(score => (
                    <span key={score} style={{ border: stars.service === score ? '1px solid red' : '' }} title='service' id={score} onClick={(e) => handleRating(e)}>{score}</span>
                  ))}
                </div>
                <label>Product Packaging:</label>
                <div name='packaging' style={{ display: 'flex', justifyContent: 'space-between', width: '200px' }}>
                  {scores.map(score => (
                    <span key={score} style={{ border: stars.packaging === score ? '1px solid red' : '' }} title='packaging' id={score} onClick={(e) => handleRating(e)}>{score}</span>
                  ))}
                </div>
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
                {formState.result?.error && <p>An error has ocurred when tried send the review</p>}
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
