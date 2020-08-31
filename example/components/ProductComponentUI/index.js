import React, { useState } from 'react'

export const ProductComponentUI = (props, ref) => {
  const {
    onShare,
    onClose,
    productName,
    productLogo,
    productCount,
    productPrice,
    ingredients,
    options,
    note,
    onChangedIngredient,
    onChangedOption,
    onChangedNote,
    onClickedButtonPlus,
    onClickedButtonMinus,
    onClickedButtonAdd
  } = props

  const ingredientList = () => {
    let iElementList = [];
    if (typeof ingredients != 'undefined') {
      for (let idx = 0; idx < ingredients.length; idx++) {
        let item = ingredients[idx];
        let element = (
          <div key={item.id}>
            <label>
              <input type="checkbox" checked={item.isChecked} onChange={() => onChangedIngredient(idx)} /> {item.name}
            </label>
          </div>
        )
        iElementList.push(element);
      }
    }
    return iElementList;
  }

  const subOptionItemList = (index, option) => {
    let subOptionElementList = [];
    let subOptions = option.suboptions;
    for (let sIdx = 0; sIdx < subOptions.length; sIdx++) {
      let subOption = subOptions[sIdx];
      if (option.min == 1 && option.max == 1) {
        let element = (
          <div key={subOption.id}>
            <label>
              <input type="radio" checked={subOption.isChecked} onChange={() => onChangedOption(index, sIdx, true)} /> {subOption.name} +${subOption.price}
            </label>
          </div>
        )
        subOptionElementList.push(element);
      }
      else {
        let element = (
          <div key={subOption.id}>
            <label>
              <input type="checkbox" checked={subOption.isChecked} onChange={() => onChangedOption(index, sIdx, false)} /> {subOption.name} +${subOption.price}
            </label>
          </div>
        )
        subOptionElementList.push(element);
      }
    }
    return subOptionElementList;
  }

  const optionList = () => {
    let oElementList = [];
    if (typeof options != 'undefined') {
      for (let oIdx = 0; oIdx < options.length; oIdx++) {
        let item = options[oIdx];
        if (item.isDisplay) {
          let element = (
            <div key={item.id}>
              <div>{item.name}</div>
              {subOptionItemList(oIdx, item)}
            </div>
          )
          oElementList.push(element);
        }
      }
    }
    return oElementList;
  }

  return (
    <>
      <div>
        {productName}
        {' '}
        <button onClick={onShare}>share</button> {' '} <button onClick={onClose}>close</button>
      </div>
      <div>Photo Gallery</div>
      <img src={productLogo} style={{ "width": "320px", "height": "240px" }} />
      {typeof ingredients != 'undefined' && ingredients.length > 0 && <div>
        <div>Ingredients</div>
        {ingredientList()}
      </div>}
      {optionList()}
      <div>Special Instructions</div>
      <textarea value={note} onChange={onChangedNote} />
      <div>
        <button onClick={onClickedButtonMinus}>-</button>
        {' '}{productCount}{' '}
        <button onClick={onClickedButtonPlus}>+</button>
      </div>
      <div>${productPrice}</div>
      <button onClick={onClickedButtonAdd}>Add</button>
    </>
  )
}
