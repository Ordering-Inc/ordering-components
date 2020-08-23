import React from 'react'
import { useConfig } from '../../../src/contexts/ConfigContext'

export const ConfigsExample = (props) => {
  const [{ loading, configs }, refreshConfigs] = useConfig()

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
    </>
  )
}
