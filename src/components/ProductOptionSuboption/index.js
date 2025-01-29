import React from 'react'
import PropTypes from 'prop-types'

/**
 * Component to render product option suboption
 */
export const ProductOptionSuboption = (props) => {
  const {
    UIComponent,
    balance,
    option,
    suboption,
    onChange,
    isOrigin,
    pizzaState,
    isAlsea,
    quesoYSalsaOptions
  } = props

  /**
   * Predefine default values for suboption state
   */
  const selected = props.state.selected || props.state.quantity > 0
  let quantity = 0
  if (selected && props.state.quantity && props.state.quantity > 0) {
    quantity = props.state.quantity
  } else if (selected) {
    quantity = quesoYSalsaOptions.includes(option?.name?.toLowerCase()) && isAlsea ? props.state.quantity : 1
  }
  const position = props.state.position || 'whole'
  const price = option.with_half_option && suboption.half_price && position !== 'whole' ? suboption.half_price : suboption.price
  const usePizzaValidation = (pizzaState?.[`option:${option?.id}`]?.value >= option?.max) && !(option?.max === 1 && option?.min === 1)

  /**
   * Set current state
   */
  const state = { id: suboption.id, name: suboption.name, price, selected, quantity, position, total: price * quantity }

  /**
   * Run onChange function with new state
   * @param {object} newState State with changes
   */
  const changeState = (newState) => {
    onChange && onChange(newState, suboption, option)
  }

  /**
   * Select/unselect the suboption
   */
  const toggleSelect = () => {
    const selectStatus = isOrigin ? !state.selected : state.selected
    const minMaxValidation = option.with_half_option ? usePizzaValidation : (balance === option.max && !(option?.max === 1 && option?.min === 1))
    const canBeSelectedByHalf = (pizzaState?.[`option:${option?.id}`]?.value === (option.max - 0.5)) && option.with_half_option

    const shouldApplyHalfLogic = option?.with_half_option && option?.allow_suboption_quantity && option?.limit_suboptions_by_max
    const remainingBalance = option.max - balance
    const canOnlySelectHalf = shouldApplyHalfLogic && remainingBalance < 1 && remainingBalance > 0

    if (selectStatus && (option.limit_suboptions_by_max || isAlsea) && minMaxValidation && !canBeSelectedByHalf) {
      return
    }

    changeState({
      ...state,
      quantity: state.selected ? 0 : 1,
      selected: !state.selected,
      position: (canBeSelectedByHalf || canOnlySelectHalf) ? 'left' : 'whole'
    })
  }

  /**
   * Increment suboption quantity
   */
  const increment = () => {
    const shouldApplyHalfLogic = option?.with_half_option && option?.allow_suboption_quantity && option?.limit_suboptions_by_max
    const maxByPosition = shouldApplyHalfLogic && state.position !== 'whole'
      ? suboption.max * 2
      : suboption.max

    // Validar si incrementar excedería el máximo de la opción cuando está en 'whole'
    if (shouldApplyHalfLogic && state.position === 'whole') {
      const otherOptionsValue = pizzaState?.[`option:${option?.id}`]?.value
      const wouldExceedMax = (otherOptionsValue + 1) > option.max

      if (wouldExceedMax) {
        return
      }
    }

    if (!option?.with_half_option && option.limit_suboptions_by_max && (balance === option.max || state.quantity === suboption.max)) {
      return
    }
    if (!option?.with_half_option && !option.limit_suboptions_by_max && state.quantity === suboption.max) {
      return
    }
    if (shouldApplyHalfLogic && state.quantity === maxByPosition) {
      return
    }
    if (option?.with_half_option && usePizzaValidation) {
      return
    }

    changeState({
      ...state,
      selected: state.quantity === 0 ? true : state.selected,
      quantity: state.quantity + 1,
      total: state.price * (state.quantity + 1)
    })
  }

  /**
   * Decrement suboption quantity
   */
  const decrement = () => {
    if (state.quantity === 0) {
      return
    }
    changeState({
      ...state,
      selected: state.quantity === 1 ? false : state.selected,
      quantity: state.quantity - 1,
      total: state.price * (state.quantity - 1)
    })
  }

  /**
   * Change position of the suboption
   * @param {string} position Position of the suboption
   */
  const changePosition = (position) => {
    const price = option.with_half_option && suboption.half_price && position !== 'whole' ? suboption.half_price : suboption.price

    const shouldApplyHalfLogic = option?.with_half_option && option?.allow_suboption_quantity && option?.limit_suboptions_by_max

    if (shouldApplyHalfLogic && position === 'whole') {
      const otherOptionsValue = pizzaState?.[`option:${option?.id}`]?.value
      const additionalValue = position === 'whole' ? state.quantity / 2 : 0
      const wouldExceedMax = (otherOptionsValue + additionalValue) > option.max

      if (wouldExceedMax) {
        return
      }
    }

    let newQuantity = state.quantity
    if (shouldApplyHalfLogic && position === 'whole' && state.quantity > suboption.max) {
      newQuantity = suboption.max
    }

    changeState({
      ...state,
      position,
      price,
      quantity: newQuantity,
      total: price * newQuantity
    })
  }

  /**
   * Change quantity of the suboption
   * @param {number} quantity Quantity of the suboption
   */
  const changeQuantity = (quantity) => {
    changeState({
      ...state,
      quantity: quantity,
      total: state.price * quantity
    })
  }

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            state={state}
            usePizzaValidation={usePizzaValidation}
            changeQuantity={changeQuantity}
            increment={increment}
            decrement={decrement}
            changePosition={changePosition}
            toggleSelect={toggleSelect}
          />
        )
      }
    </>
  )
}

ProductOptionSuboption.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Current quantity options or suboptions selected
   */
  balance: PropTypes.number.isRequired,
  /**
   * Option object to render UI
   */
  option: PropTypes.object.isRequired,
  /**
   * Suboption object to render UI
   */
  suboption: PropTypes.object.isRequired,
  /**
   * Current state
   */
  state: PropTypes.shape({
    selected: PropTypes.bool,
    quantity: PropTypes.number,
    position: PropTypes.string
  }).isRequired,
  /**
   * Function to get suboption changes
   */
  onChange: PropTypes.func
}

ProductOptionSuboption.defaultProps = {
  state: {},
  balance: 0
}
