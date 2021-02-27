import React, { useState } from 'react'
import { useConfig } from '../../../src/contexts/ConfigContext'
import { useUtils } from '../../../src/contexts/UtilsContext'

export const ConfigsExample = (props) => {
  const [{ loading, configs }, { refreshConfigs }] = useConfig()
  const [{ parsePrice, parseDate, parseDistance, getTimeAgo }] = useUtils()
  const [numberParsed, setNumberParsed] = useState()
  const [formatDate, setFormatDate] = useState()
  const [numberOptions, setNumberOptions] = useState({})
  const [dateOptions, setDateOptions] = useState({})
  const [distance, setDistance] = useState()
  const [distanceOptions, setDistanceOptions] = useState({})
  const [timeAgoOptions, setTimeAgoOptions] = useState({})
  const [timeAgo, setTimeAgo] = useState()
  const hanldeChangeInput = (e) => {
    setNumberParsed(parsePrice(e.target.value, numberOptions))
  }
  const hanldeChangeInputDate = (e) => {
    setFormatDate(parseDate(e.target.value, dateOptions))
  }
  const hanldeChangeDistance = (e) => {
    setDistance(parseDistance(e.target.value, distanceOptions))
  }
  const handleTimeAgo = (e) => {
    setTimeAgo(getTimeAgo(e.target.value, timeAgoOptions))
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
      [e.target.name]: e.target.name === 'utc' ? e.target.value === '1' : e.target.value
    })
  }
  const handleAgoOptions = (e) => {
    setTimeAgoOptions({
      ...timeAgoOptions,
      [e.target.name]: e.target.name === 'utc' ? e.target.value === '1' : e.target.value
    })
  }
  const handlekmOptions = (e) => {
    setDistanceOptions({
      ...distanceOptions,
      [e.target.name]: e.target.checked ? 'KM' : 'MI'
    })
  }

  return (
    <>
      <h1>Configs</h1>
      <ul>
        {
          Object.values(configs).map((config) => (
            <li key={config.id || config.key}>
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
      <input type='number' name='numberParsed' onChange={hanldeChangeInput} /> <strong>number parsed:</strong> {numberParsed}
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
      <input type='text' onChange={hanldeChangeInputDate} name='formatedTime' /> <strong>Formated date : </strong> {formatDate}
      <h2>Parse Distance Example</h2>
      <input type='checkbox' name='unit' defaultChecked='true' onChange={handlekmOptions} />
      <input type='number' onChange={hanldeChangeDistance} name='distance' /> <strong>Distance : </strong> {distance}
      <h2>GeT time Ago Example</h2>
      <label>UTC</label>
      <select name='utc' onChange={handleAgoOptions}>
        <option value='1'>TRUE</option>
        <option value='0'>FALSE</option>
      </select>
      <label> Time Format</label>
      <input type='text' name='inputFormat' onChange={handleAgoOptions} />
      <br />
      <input type='text' onChange={handleTimeAgo} name='formatedDate' /> <strong>Formated date : </strong> {timeAgo}

    </>
  )
}
