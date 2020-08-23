import React from 'react'

export const ProductIngredientUI = (props) => {
  const {
    state,
    ingredient,
    toggleSelect
  } = props

  const ingredientStyles = {
    borderBottom: '1px solid #ccc',
    padding: 15,
    backgroundColor: state?.selected ? '#eee' : null
  }

  return (
    <div onClick={() => toggleSelect()} style={ingredientStyles}>
      {ingredient.id}. {ingredient.name}
    </div>
  )
}
