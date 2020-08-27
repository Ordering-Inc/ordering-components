import React from 'react'

export const IndividualBusiness = ({ category, search }) => {
  return (
    <div>
      {search
        ? category.products.map((product) =>
          product.name.indexOf(search) !== -1 ||
            product.description.indexOf(search) !== -1 ? (
              <h4
                style={{ padding: '10px', border: '1px solid red' }}
                key={product.id}
              >
                {product.name} - {product.description}
              </h4>
            ) : (
              ''
            )
        )
        : category.products.map((product) => (
          <h4
            style={{ padding: '10px', border: '1px solid red' }}
            key={product.id}
          >
            {product.name} - {product.description}
          </h4>
        ))}
    </div>
  )
}
