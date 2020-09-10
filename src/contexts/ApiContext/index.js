import React, { createContext, useContext } from 'react'
import { Ordering } from 'ordering-api-sdk'

/**
 * Create ApiContext
 * Context to use Ordering API on the app
 */
const ApiContext = createContext()

/**
 * Api provider to manage api request
 * @param {props} props
 */
export const ApiProvider = ({ settings, children }) => {
  const ordering = new Ordering(settings)
  // console.log(ordering)

  // const [state, setState] = useState({
  //   loading: true,
  //   language: JSON.parse(window.localStorage.getItem('language')),
  //   dictionary: {}
  // })

  // const refreshTranslations = async () => {
  //   try {
  //     !state.loading && setState({ ...state, loading: true })
  //     ordering.language = state.language.code
  //     const { content: { error, result } } = await ordering.translations().asDictionary().get()
  //     setState({
  //       ...state,
  //       loading: false,
  //       dictionary: error ? {} : result
  //     })
  //   } catch (err) {
  //     setState({ ...state, loading: false })
  //   }
  // }

  // const loadDefaultLanguege = async () => {
  //   try {
  //     ordering.language = state.language.code
  //     const { content: { error, result } } = await ordering.languages().where([{ attribute: 'default', value: true }]).get()
  //     if (!error) {
  //       const language = { id: result[0].id, code: result[0].code, rtl: result[0].rtl }
  //       window.localStorage.setItem('language', JSON.stringify(language))
  //       setState({
  //         ...state,
  //         language
  //       })
  //     }
  //   } catch (err) {}
  // }

  // const setLanguage = async (language) => {
  //   const _language = { id: language.id, code: language.code, rtl: language.rtl }
  //   window.localStorage.setItem('language', JSON.stringify(_language))
  //   setState({ ...state, language: _language })
  // }

  // const initLanguage = async () => {
  //   if (!state.language) {
  //     await loadDefaultLanguege()
  //   }
  //   await refreshTranslations()
  // }

  // useEffect(() => {
  //   initLanguage()
  // }, [state.language])

  // const t = (key) => {
  //   return state.dictionary[key] || key
  // }

  return (
    <ApiContext.Provider value={[ordering]}>
      {children}
    </ApiContext.Provider>
  )
}

/**
 * Hook to get api state
 */
export const useApi = () => {
  const apiManager = useContext(ApiContext)
  return apiManager || [{}]
}
