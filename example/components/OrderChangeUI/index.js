import React, {useState} from "react";

export const OrderChangeUI = (props) => {
  const {order, beforeComponents, afterComponents, beforeElements, afterElements } =
    props;
  const [status, setStatus] = useState('Pending')

    const changeStatus = (action) => {
      if(action === 'accept') setStatus('Accepted by Bussines')
      if(action === 'reject') setStatus('Rejected by Bussines')
    }

  return (
    <>
      {beforeElements.map((BeforeElement, i) => (
        <React.Fragment key={i}>{BeforeElement}</React.Fragment>
      ))}

      {beforeComponents.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />
      ))}

      <h1 style={{ textTransform: "capitalize" }}>order</h1>

      {order && Object.keys(order).length > 0 && (
        <>
          <br />
          <br />
          <div className='order-card'>
            <div style={{ background: 'green', padding: '10px', color: 'white', textAlign: 'center' }}>
              <h3>Order Number #{order.uuid || order.id}</h3>
            </div>
            <h2>Status: <span style={{ fontWeight: 'lighter' }}> {status}</span></h2>
          </div>
          <br />
          <br />
          <button onClick={() => changeStatus('accept')}>Accept</button>
          <button onClick={() => changeStatus('reject')}>Reject</button>
          </>

      )}



      {afterComponents.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />
      ))}

      {afterElements.map((AfterElement, i) => (
        <React.Fragment key={i}>{AfterElement}</React.Fragment>
      ))}
    </>
  );
};
