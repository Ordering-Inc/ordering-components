import React from 'react'
import { range, before } from 'lodash'

export const ProductsListingUI = (props) => {
  const {
    categories,
    category,
    onClickedCategory,
    products,
    loadMoreProducts,
    pagination,
    paginationSettings
  } = props

  return (
    <>
			<h1>Product List!</h1> {category.name}
			<div>
				{
					categories.map((item, index) => 
						<button onClick={() => onClickedCategory(item)} key={index}>
							{item.name}
						</button>
					)
				}
			</div>
			<div>Search Component</div>
			<div>
				{
					products.map((item,index) => 
						<div key={index}>
							<img src={item.image} />
							<h3>{item.name}</h3>
							<p>{item.description}</p>
						</div>
					)
				}
			</div>
			{
				paginationSettings.controlType === 'infinity' && (
					<div>
						Load more control:{' '}
						{
							pagination.totalPages && pagination.currentPage < pagination.totalPages && <button type='button' onClick={loadMoreProducts}>Load more</button>
						}
					</div>
				)
			}
			{
				paginationSettings.controlType === 'pages' && (
					<div>
							Pagination control:{' '}
							{
								pagination.totalPages && pagination.currentPage < pagination.totalPages && range(1, pagination.totalPages).map(i => (
									<button key={i} type='button' onClick={() => goToPage(i)}>Page {i} {i === pagination.currentPage && '(Current)'}</button>
								))
							}
					</div>
				)
			}
    </>
  )
}
