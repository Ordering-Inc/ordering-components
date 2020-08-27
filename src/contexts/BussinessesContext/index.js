import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState
} from 'react'

export const BUSINESSES_ACTIONS = {
  SHOW_LIST: 'SHOW_lIST',
  LOADING: 'LOADING',
  FILT_BY_CATEGORY: 'FILT_BY_CATEGORY',
  FILT_BY_SEARCH: 'FILT_BY_SEARCH',
  FILT_BUSINESS_BY_CATEGORY: 'FILT_BUSINESS_BY_CATEGORY',
  UPDATE_TIME: 'UPDATE_TIME',
  SHOW_BUSINESS: 'SHOW_BUSINESS',
  SET_CATEGORIES: 'SET_CATEGORIES',
  SET_CATEGORY: 'SET_CATEGORY'
}

export const BussinessesContext = createContext()

const defaultInitialState = {
  list: [],
  categoryList: [],
  loading: false,
  actualCategory: '',
  search: '',
  time: 0,
  pagination: 0,
  business: {},
  categories: []
}

const defaultReducer = (state, action) => {
  switch (action.type) {
    case BUSINESSES_ACTIONS.SHOW_LIST:
      return {
        ...state,
        list: action.list,
        pagination: action.pagination
      }
    case BUSINESSES_ACTIONS.LOADING:
      return {
        ...state,
        loading: action.loading
      }
    case BUSINESSES_ACTIONS.FILT_BY_CATEGORY:
      return {
        ...state,
        category: action.category,
        categoryList: state.list.filter((bussinesses) => {
          if (action.category === 'food') {
            return bussinesses.food
          } else if (action.category === 'laundry') {
            return bussinesses.laundry
          } else if (action.category === 'groceries') {
            return bussinesses.groceries
          } else if (action.category === 'alcohol') {
            return bussinesses.alcohol
          } else {
            return state.list
          }
        }),
        pagination: state.categoryList.length
      }
    case BUSINESSES_ACTIONS.FILT_BY_SEARCH:
      return {
        ...state,
        search: action.search
      }
    case BUSINESSES_ACTIONS.UPDATE_TIME:
      return {
        ...state,
        time: action.time
      }
    case BUSINESSES_ACTIONS.SHOW_BUSINESS:
      return {
        ...state,
        business: action.business
      }
    case BUSINESSES_ACTIONS.SET_CATEGORY:
      return {
        ...state,
        actualCategory: action.actualCategory
      }
    case BUSINESSES_ACTIONS.SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      }
    case BUSINESSES_ACTIONS.FILT_BUSINESS_BY_CATEGORY:
      return {
        ...state,
        actualCategory: action.category
      }
    default:
      return {
        state
      }
  }
}

export const BusinessesProvider = ({ children, ordering }) => {
  const [data, dispatcher] = useReducer(defaultReducer, defaultInitialState)
  const [currentPage, setCurrentPage] = useState(1)
  const [bussinesPerPage] = useState(10)

  useEffect(() => {
    fetchList()
    const hour = new Date()
    dispatcher({
      type: BUSINESSES_ACTIONS.UPDATE_TIME,
      time: hour.getHours()
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const hour = new Date()
      dispatcher({
        type: BUSINESSES_ACTIONS.UPDATE_TIME,
        time: hour.getHours()
      })
    }, 10000)
    return () => {
      clearInterval(interval)
    }
  }, [10000])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const maxHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const maxScrolled = window.scrollY
      if (Math.ceil(maxScrolled) === maxHeight) {
        setCurrentPage(currentPage + 1)
      }
    })
  })

  const fetchList = async () => {
    try {
      dispatcher({ type: BUSINESSES_ACTIONS.LOADING, loading: true })
      const url = 'https://apiv4.ordering.co/v400/en/demo/business?type=1&location=40.7539143,-73.9810162&time=2020.08.15,17.05,UTC.-6&params=name,logo,food,laundry,alcohol,groceries,zones,delivery_price,minimum,schedule,featured,reviews,about,delivery_time,pickup_time,offers&limit=21'
      const res = await fetch(url)
      const data = await res.json()
      // const response = await ordering.businesses().get();
      // console.log(response)
      dispatcher({
        type: BUSINESSES_ACTIONS.SHOW_LIST,
        list: data.result,
        pagination: data.pagination.total
      })
    } catch (err) {
      console.log(err)
    }
    dispatcher({ type: BUSINESSES_ACTIONS.LOADING, loading: false })
  }

  const indexOfLastBuss = currentPage * bussinesPerPage
  // eslint-disable-next-line no-unused-vars
  const currentBussinesses = data.list.slice(0, indexOfLastBuss)

  return (
    <BussinessesContext.Provider value={[data, dispatcher]}>
      {children}
    </BussinessesContext.Provider>
  )
}

export const useBusinesses = () => {
  const BussinessesManager = useContext(BussinessesContext)
  return BussinessesManager || [{}, () => {}]
}
