import React, { createContext, useState, useContext, useEffect } from 'react'

/**
 * Create ConfigContext
 * This context will manage the current configs internally and provide an easy interface
 */
export const ConfigContext = createContext()

/**
 * Custom provider to configs manager
 * This provider has a reducer for manage configs state
 * @param {props} props
 */
export const ConfigProvider = ({ ordering, children }) => {
  const [state, setState] = useState({ loading: true, configs: {} })

  const refreshConfigs = async () => {
    try {
      !state.loading && setState({ ...state, loading: true })
      const { content: { error, result } } = await ordering.configs().asDictionary().get()
      setState({
        ...state,
        loading: false,
        configs: error ? {} : result
      })
    } catch (err) {
      setState({ ...state, loading: false })
    }
  }

  useEffect(() => {
    refreshConfigs()
  }, [])

  return (
    <ConfigContext.Provider value={[state, refreshConfigs]}>
      {children}
    </ConfigContext.Provider>
  )
}

/**
 * Hook to get and update configs state
 */
export const useConfig = () => {
  const configManager = useContext(ConfigContext)
  return configManager || [{}, async () => {}]
}
