import React from 'react'
import { useForm } from 'react-hook-form'

export const OrderReviewUI = (props) => {
  const {
    handleSendReview,
    order,
    handleChangeRating,
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
                  {[...Array(5)].map((score, i) => (
                    <label key={i}>
                      <input type='radio' name='quality' value={i + 1} onClick={(e) => handleChangeRating(e)} style={{ display: 'none' }} />
                      <span style={{ border: stars.quality === (i + 1) ? '1px solid red' : '' }}>{i + 1}</span>
                    </label>
                  ))}
                  {errors?.quality && <i style={{ color: '#c10000' }}>{errors?.quality?.message || 'error'}</i>}
                </div>
                <label>Punctiality:</label>
                <div name='punctiality' style={{ display: 'flex', justifyContent: 'space-between', width: '200px' }}>
                  {[...Array(5)].map((score, i) => (
                    <label key={i}>
                      <input type='radio' name='punctiality' value={i + 1} onClick={(e) => handleChangeRating(e)} style={{ display: 'none' }} />
                      <span style={{ border: stars.punctiality === (i + 1) ? '1px solid red' : '' }}>{i + 1}</span>
                    </label>
                  ))}
                </div>
                <label>Service:</label>
                <div name='service' style={{ display: 'flex', justifyContent: 'space-between', width: '200px' }}>
                  {[...Array(5)].map((score, i) => (
                    <label key={i}>
                      <input type='radio' name='service' value={i + 1} onClick={(e) => handleChangeRating(e)} style={{ display: 'none' }} />
                      <span style={{ border: stars.service === (i + 1) ? '1px solid red' : '' }}>{i + 1}</span>
                    </label>
                  ))}
                </div>
                <label>Product Packaging:</label>
                <div name='packaging' style={{ display: 'flex', justifyContent: 'space-between', width: '200px' }}>
                  {[...Array(5)].map((score, i) => (
                    <label key={i}>
                      <input type='radio' name='packaging' value={i + 1} onClick={(e) => handleChangeRating(e)} style={{ display: 'none' }} />
                      <span style={{ border: stars.packaging === (i + 1) ? '1px solid red' : '' }}>{i + 1}</span>
                    </label>
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
