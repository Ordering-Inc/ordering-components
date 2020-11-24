import React from 'react'
import { ProductOptionSuboptionUI } from '../ProductOptionSuboptionUI'
import { ProductIngredientUI } from '../ProductIngredientUI'
import { ProductOptionUI } from '../ProductOptionUI'
import { ProductIngredient } from '../../../src/components/ProductIngredient'
import { ProductOption } from '../../../src/components/ProductOption'
import { ProductOptionSuboption } from '../../../src/components/ProductOptionSuboption'

export const ProductFormUI = (props) => {
  const {
    editMode,
    isSoldOut,
    productObject,
    productCart,
    increment,
    decrement,
    showOption,
    maxProductQuantity,
    errors,
    handleSave,
    handleChangeIngredientState,
    handleChangeSuboptionState,
    handleChangeCommentState
  } = props

  const { product, loading, error } = productObject

  const productSuboptionProps = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: ProductOptionSuboptionUI,
    /**
     * Function to get suboption changes
     */
    onChange: handleChangeSuboptionState
  }

  const producOptionProps = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: ProductOptionUI
  }

  const productIngredientProps = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: ProductIngredientUI,
    /**
     * Function to get ingredient changes
     */
    onChange: handleChangeIngredientState
  }
  return (
    <>
      {
        product && <h1>{product.id}. {product.name}</h1>
      }
      {
        product?.ingredients.map(ingredient => (
          <ProductIngredient
            key={ingredient.id}
            {...productIngredientProps}
            state={productCart.ingredients[`id:${ingredient.id}`]}
            ingredient={ingredient}
          />
        ))
      }
      {
        product?.extras.map(extra => extra.options.map(option => {
          const currentState = productCart.options[`id:${option.id}`] || {}
          return (
            <React.Fragment key={option.id}>
              {
                showOption(option) && (
                  <ProductOption {...producOptionProps} option={option} currentState={currentState} error={errors[`id:${option.id}`]}>
                    {
                      option.suboptions.map(suboption => {
                        const currentState = productCart.options[`id:${option.id}`]?.suboptions[`id:${suboption.id}`] || {}
                        const balance = productCart.options[`id:${option.id}`]?.balance || 0
                        return (
                          <ProductOptionSuboption
                            key={suboption.id}
                            {...productSuboptionProps}
                            balance={balance}
                            option={option}
                            suboption={suboption}
                            state={currentState}
                          />
                        )
                      })
                    }
                  </ProductOption>
                )
              }
            </React.Fragment>
          )
        }))
      }
      <div>
        Special comment:<br />
        <textarea
          rows={4}
          style={{ width: '100%' }}
          defaultValue={productCart.comment}
          onChange={handleChangeCommentState}
        />
      </div>
      Total: {productCart.total}
      {
        productCart && (
          <>
            <button type='button' name='add' onClick={decrement} disabled={productCart.quantity === 1}>-</button>
            {productCart.quantity}
            <button type='button' name='decrease' onClick={increment} disabled={maxProductQuantity <= 0 || productCart.quantity >= maxProductQuantity}>+</button>
          </>
        )
      }
      {
        productCart && !isSoldOut && <button type='button' name='save' onClick={handleSave} disabled={maxProductQuantity === 0}>{editMode ? 'Save' : 'Add'}</button>
      }
      {
        isSoldOut && <button type='button' name='sold' disabled>Sold out</button>
      }
      <p>Max: {maxProductQuantity}</p>
      <p>Sold out: {isSoldOut ? 'Yes' : 'No'}</p>
    </>
  )
}
