import React from 'react'

export const ProductComponentUI = (props) => {
  const {
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

  const ingredientList = ingredients.map((item, index) =>
    <div key={item.id}>
      <label>
        <input type="checkbox" checked={item.isChecked} onChange={() => onChangedIngredient(index)} /> {item.name}
      </label>
    </div>
  );

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

  const optionList = options.map((item, index) => {
    if (item.isDisplay) {
      return (
        <div key={item.id}>
          <div>{item.name}</div>
          {subOptionItemList(index, item)}
        </div>
      )
    }
  });

  return (
    <>
      <div>
        {productName}
        {' '}
        <button>share</button> {' '} <button>close</button>
      </div>
      <div>Photo Gallery</div>
      <img src={productLogo} style={{ "width": "320px", "height": "240px" }} />
      {ingredients.length > 0 && <div>
        <div>Ingredients</div>
        {ingredientList}
      </div>}
      {optionList}
      <div>Special Instructions</div>
      <textarea value={note} onChange={onChangedNote}/>
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
