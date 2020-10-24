import React, { useState } from 'react'
import { useConfig } from '../../../src/contexts/ConfigContext'

export const ConfigsExample = (props) => {
  const [{ loading, configs }, { refreshConfigs, parsePrice, parseDate, parseDistance}] = useConfig()
  const [numberParsed, setNumberParsed] = useState()
  const [formatDate, setFormatDate] = useState()
  const [numberOptions, setNumberOptions] = useState({})
  const [dateOptions, setDateOptions] = useState({})
  const [distance, setDistance] = useState()
  const [distanceOptions, setDistanceOptions] = useState({})
  const hanldeChangeInput = (e) => {
    setNumberParsed(parsePrice(e.target.value, numberOptions))
  }
  const hanldeChangeInputDate = (e) => {
    setFormatDate(parseDate(e.target.value, dateOptions))
  }
  const hanldeChangeDistance = (e) => {
    setDistance(parseDistance(e.target.value, distanceOptions))
  }
  const handleNumberOptions = (e) => {
    setNumberOptions({
      ...numberOptions,
      [e.target.name]: e.target.value
    })
  }
  const handleDateOptions = (e) => {
    setDateOptions({
      ...dateOptions,
      [e.target.name]: e.target.value
    })
  }
  const handlekmOptions = (e) => {
    setDistanceOptions({
      ...distanceOptions,
      [e.target.name]: e.target.checked
    })
  }
  return (
    <>
      <h1>Configs</h1>
      <ul>
        {
          Object.values(configs).map((config) => (
            <li key={config.id}>
              <strong>{config.key}:</strong> {config.value}
            </li>
          ))
        }
      </ul>
      <button type='button' onClick={() => refreshConfigs()} disabled={loading}>Refresh configs</button>
      <h2>Parse number Example</h2>
      <form>
        <label>Decimal Quiantity</label>
        <input type='number' name='decimal' onChange={handleNumberOptions} />
        <label>Decimal Separator</label>
        <input type='text' name='separator' onChange={handleNumberOptions} />
        <label>thousand Separator</label>
        <input type='text' name='thousand' onChange={handleNumberOptions} />
        <label>Currency</label>
        <input type='text' name='currency' onChange={handleNumberOptions} />
        <label>Currency Position</label>
        <select name='currencyPosition' onChange={handleNumberOptions}>
          <option value='left'>left</option>
          <option value='right'>right</option>
        </select>
      </form>
      <br />
      <input type='number' onChange={hanldeChangeInput} /> <strong>number parsed:</strong> {numberParsed}
      <h2>Parse date Example</h2>
      <form>
        <label>Input format</label>
        <input type='text' name='inputFormat' onChange={handleDateOptions} />
        <label>output format</label>
        <input type='text' name='outputFormat' onChange={handleDateOptions} />
        <label>utc</label>
        <select name='utc' onChange={handleDateOptions}>
          <option value='1'>TRUE</option>
          <option value='0'>FALSE</option>
        </select>
        <label>format time</label>
        <select name='formatTime' onChange={handleDateOptions}>
          <option value='24'>24</option>
          <option value='12'>12</option>
        </select>
      </form>
      <input type='text' onChange={hanldeChangeInputDate} /> <strong>Formated date : </strong> {formatDate}
      <h2>Parse Distance Example</h2>
      <input type='checkbox' name='unitKm' defaultChecked='true' onChange={handlekmOptions} />
      <input type='number' onChange={hanldeChangeDistance} /> <strong>Distance : </strong> {distance}
    </>
  )
}
