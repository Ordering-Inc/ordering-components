import React from 'react'

export const BusinessUI = (props) => {
  const {
    handleCategory,
    handleSearch,
    featured,
    data,
    categoryBlock,
    productBlock,
    beforeElements,
    beforeComponents,
    afterComponents,
    afterElements
  } = props
  return (
    <>
      {data.loading ? <h2>Loading</h2> : <h2>{data.business.name}</h2>}
      {beforeElements.map((BeforeElement, i) => (
        <React.Fragment key={i}>{BeforeElement}</React.Fragment>
      ))}
      {beforeComponents.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />
      ))}
      {
        <div style={{ margin: '10px' }}>
          <button onClick={() => handleCategory('')}>All</button>
          {featured ? (
            <button onClick={() => handleCategory('featured')}>Featured</button>
          ) : (
            ''
          )}
          {data.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategory(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>
      }
      {
        <div style={{ margin: '10px' }}>
          <input type='text' onChange={(e) => handleSearch(e.target.value)} />
        </div>
      }
      {(!data.actualCategory || data.actualCategory === 'featured') &&
        featured && <h3>Featured</h3>}
      {!data.actualCategory || data.actualCategory === 'featured'
        ? data.categories.map((category) => {
          return data.search
            ? category.products.map((product) =>
              (product.name.indexOf(data.search) !== -1 ||
                    product.description.indexOf(data.search) !== -1) &&
                  product.featured
                ? productBlock(product)
                : ''
            )
            : category.products.map(
              (product) => product.featured && productBlock(product)
            )
        })
        : data.categories.map((category) => {
          category.products.map((product) => productBlock(product))
        })}
      {
        <div>
          {data.actualCategory
            ? data.categories.map((category) =>
              category.name === data.actualCategory
                ? categoryBlock(category)
                : ''
            )
            : data.categories.map((category) => categoryBlock(category))}
        </div>
      }
      {afterComponents.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />
      ))}
      {afterElements.map((AfterElement, i) => (
        <React.Fragment key={i}>{AfterElement}</React.Fragment>
      ))}
    </>
  )
}
