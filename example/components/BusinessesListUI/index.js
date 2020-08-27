import React from 'react'
import { BussinessesComponent } from '../BussinessesComponent'

export const BusinessesListUI = (props) => {
  const { handleCategory, handleSearch, search, time, data } = props

  return (
    <>
      <div>
        <h2>{data.pagination}</h2>
        <input
          type='text'
          onChange={(e) => handleSearch(e.target.value)}
          value={data.search}
          placeholder='search'
        />
        <select
          defaultValue='sortBy'
        >
          <option value='sortBy'>sortBy</option>
          <option value='distance'>Distance</option>
          <option value='rating'>Rating</option>
          <option value='newest'>Newest</option>
          <option value='AZ'>A to Z</option>
          <option value='sortBy'>Minimun order</option>
          <option value='sortBy'>Delivery time</option>
        </select>
        <div>
          <button onClick={() => handleCategory('')}>All</button>
          <button onClick={() => handleCategory('food')}>Food</button>
          <button onClick={() => handleCategory('alcohol')}>Alcohol</button>
          <button onClick={() => handleCategory('groceries')}>Groceries</button>
          <button onClick={() => handleCategory('laundry')}>Laundry</button>
        </div>
        {data.loading ? (
          <div style={{ margin: '10px' }}>Loading</div>
        ) : (
          <div>
            {!data.category
              ? data.list.map((item) => (
                <BussinessesComponent
                  key={item.id}
                  item={item}
                  search={search}
                  time={time}
                />
              ))
              : data.categoryList.map((item) => (
                <BussinessesComponent
                  key={item.id}
                  item={item}
                  search={search}
                  time={time}
                />
              ))}
          </div>
        )}
      </div>
    </>
  )
}
