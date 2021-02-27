import React from 'react'
import { useForm } from 'react-hook-form'

const typeNames = [null, 'Delivery', 'Pickup', 'Eat in', 'Drive thru', 'Curbside']
const statusName = [
  'Pending',
  'Completed',
  'Rejected',
  'Driver in business',
  'Preparation Completed',
  'Rejected by business',
  'Canceled by Driver',
  'Accepted by business',
  'Accepted by driver',
  'Pick up completed by driver',
  'Pick up Failed by driver',
  'Delivery completed by driver',
  'Delivery Failed by driver'
]

export const OrderDetailsUI = (props) => {
  const {
    handlerSubmit,
    messageErrors,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  const { order, loading, error } = props.order

  const { handleSubmit, register, errors, formState } = useForm()

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

      {loading && (
        <p>Loading...</p>
      )}

      {error && error.length > 0 &&
        error.map((e, i) => (
          <p key={i}>ERROR: [e]</p>
        ))}

      {!loading && order && Object.keys(order).length === 0 && (
        <p>Not Found elements</p>
      )}

      {order && Object.keys(order).length > 0 && (
        <>
          <form onSubmit={handleSubmit(handlerSubmit)}>
            <label>I am on the parking number:</label>
            <input
              name='spot'
              ref={
                register({
                  validate: value => value > 0
                })
              }
            />
            {errors.spot && errors.spot.type === 'validate' && <p style={{ color: 'red' }}>This value must be a number and greater than zero(0)</p>}
            <button type='submit' disabled={formState.isSubmitting || messageErrors.loading}>
              ✈️
            </button>
          </form>
          {messageErrors.error && messageErrors.error.length > 0 &&
            messageErrors.error.map((e, i) => (
              <p key={i}>ERROR: [e]</p>
            ))}
          <br />
          <br />
          <div className='order-card'>
            <div style={{ background: 'green', padding: '10px', color: 'white', textAlign: 'center' }}>
              <h3>Order Number #{order.uuid || order.id}</h3>
            </div>
            <h2>Status: <span style={{ fontWeight: 'lighter' }}>{statusName[order?.status]}</span></h2>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <div style={{ padding: '5px' }}>
                <h4>From</h4>
                <p>{order?.business?.name}</p>
                <p>{order?.business?.address}</p>
                <p>{order?.business?.cellphone}</p>
                <p>{order?.business?.email}</p>
              </div>
              <div style={{ padding: '5px' }}>
                <h4>To</h4>
                <p>{order?.customer?.name} {order?.customer?.lastname}</p>
                <p>{order?.customer?.address}</p>
                <p>{order?.customer?.zipcode}</p>
                <p>{order?.customer?.cellphone}</p>
                <p>{order?.customer?.email}</p>
              </div>
            </div>
            <h3>Your order</h3>
            <table style={{ width: '100%' }}>
              <tbody>
                {order?.products?.length > 0 && order?.products?.map(product => (
                  <tr key={product.id}>
                    <td>{product.quantity}</td>
                    <td>{product.name}</td>
                    <td>{props.formatPrice(product.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <hr />
            <table style={{ width: '100%' }}>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>{props.formatPrice(order?.subtotal)}</td>
                </tr>
                <tr>
                  <td>Tax (10%)</td>
                  <td>{props.formatPrice(order?.totalTax)}</td>
                </tr>
                <tr>
                  <td>Delivery Fee</td>
                  <td>{props.formatPrice(order?.delivery_zone_price)}</td>
                </tr>
                <tr>
                  <td>Driver tip (0%)</td>
                  <td>{props.formatPrice(order?.driver_tip)}</td>
                </tr>
                <tr>
                  <td>Service Fee (9%)</td>
                  <td>{props.formatPrice(order?.serviceFee)}</td>
                </tr>
              </tbody>
            </table>
            <hr />
            <table style={{ width: '100%' }}>
              <tbody>
                <tr>
                  <td>Total</td>
                  <td>{props.formatPrice(order?.total)}</td>
                </tr>
              </tbody>
            </table>
            <br />
            <p>Payment method: {order?.paymethod?.name}</p>
            <p>Delivery method: {typeNames[order?.delivery_type]}</p>
            <button style={{ borderRadius: '100%' }}>f</button>
            <button style={{ borderRadius: '100%' }}>t</button>
            <button style={{ borderRadius: '100%' }}>w</button>
            <button style={{ borderRadius: '100%' }}>m</button>
            <button style={{ borderRadius: '100%' }}>+</button>
          </div>
        </>
      )}

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
