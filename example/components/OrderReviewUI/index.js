import React from 'react'

export const OrderReviewUI = (props) => {
  const {
    handleQuality,
    handlePunctiality,
    handleService,
    handlePackage,
    handleComment,
    handleSendReview,
    comment,
    order,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props
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
          <form onSubmit={handleSendReview}>
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
                <select id='Quality' onChange={(e) => handleQuality(e.target.value)}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <label>Punctiality:</label>
                <select onChange={(e) => handlePunctiality(e.target.value)}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <label>Service:</label>
                <select onChange={(e) => handleService(e.target.value)}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <label>Product Packaging:</label>
                <select onChange={(e) => handlePackage(e.target.value)}>
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
                  placeholder='Comments'
                  id='Comments'
                  onChange={(e) => handleComment(e.target.value)}
                  value={comment}
                />
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
