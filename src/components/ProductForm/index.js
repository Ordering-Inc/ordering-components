import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import * as Sentry from '@sentry/react'
import { useOrder } from '../../contexts/OrderContext'
import { useConfig } from '../../contexts/ConfigContext'
import { useApi } from '../../contexts/ApiContext'
import { useEvent } from '../../contexts/EventContext'
import { useSession } from '../../contexts/SessionContext'
import { ToastType, useToast } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useWebsocket } from '../../contexts/WebsocketContext'

export const ProductForm = (props) => {
  const {
    UIComponent,
    useOrderContext,
    onSave,
    handleCustomSave,
    isStarbucks,
    isService,
    isCartProduct,
    productAddedToCartLength,
    professionalList,
    handleUpdateProducts,
    handleUpdateProfessionals,
    handleChangeProfessional,
    setProductLoading
  } = props

  const requestsState = {}

  const [{ user, token }, { login }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [ordering] = useApi()
  const socket = useWebsocket()
  /**
   * Events context
  */
  const [events] = useEvent()
  /**
   * Original product state
   */
  const availableLazyLoad = props.product?.load_type === 'lazy' && props.businessId && props.categoryId && props.productId
  const [product, setProduct] = useState({ product: availableLazyLoad ? null : props.product, loading: false, error: null })

  /**
   * Product cart state
   */
  const [productCart, setProductCart] = useState({ ingredients: {}, options: {} })

  /**
   * Errors state
   */
  const [errors, setErrors] = useState({})

  /**
   * Suboption by default when there is only one
   */
  const [defaultSubOptions, setDefaultSubOptions] = useState([])

  /**
   * Custom Suboption by default
   */
  const [customDefaultSubOptions, setCustomDefaultSubOptions] = useState([])

  /**
   * preselected and selected suboptions
   */
  const [selectedSuboptions, setSelectedSuboptions] = useState([])

  /**
   * dictionary of respect_to suboptions
   */
  const [dependsSuboptions, setDependsSuboptions] = useState([])

  const [professionalListState, setProfessionalListState] = useState({ loading: false, professionals: [], error: null })

  /**
   * Action status
   */
  const [actionStatus, setActionStatus] = useState({ loading: false, error: null })

  /**
   * pizza type and position
   */
  const [pizzaState, setPizzaState] = useState({})

  /**
   * Edit mode
   */
  const editMode = typeof props.productCart?.code !== 'undefined'

  /**
   * Order context manager
   */
  const [orderState, { addProduct, updateProduct }] = useOrder()

  /**
   * Remove to balances in edit mode
   */
  const removeToBalance = editMode ? props.productCart.quantity : 0

  /**
   * Current cart
   */
  const cart = orderState.carts?.[`businessId:${props.businessId}`]

  /**
   * Total products in cart
   */
  const cartProducts = Object.values(orderState.carts).reduce((products, _cart) => [...products, ..._cart?.products], [])

  /**
   * Total the current product in cart
   */
  const productBalance = cartProducts.reduce((sum, _product) => sum + (product.product && _product.id === product.product.id ? _product.quantity : 0), 0)

  /**
   * Total product in cart
   */
  const totalBalance = (productBalance || 0) - removeToBalance

  /**
   * Config context manager
   */
  const [stateConfig] = useConfig()

  /**
   * Max total product in cart by config
   */
  const maxCartProductConfig = (stateConfig.configs.max_product_amount ? parseInt(stateConfig.configs.max_product_amount) : 100) - totalBalance

  /**
   * Max total product in cart by config
   */
  let maxCartProductInventory = (product.product?.inventoried ? product.product?.quantity : undefined) - totalBalance

  /**
   * True if product is sold out
   */
  const isSoldOut = product.product?.inventoried && product.product?.quantity === 0

  /**
   * Fix if maxCartProductInventory is not valid
   */
  maxCartProductInventory = !isNaN(maxCartProductInventory) ? maxCartProductInventory : maxCartProductConfig

  /**
   * Max product quantity
   */
  const maxProductQuantity = Math.min(maxCartProductConfig, maxCartProductInventory)

  /**
   * Init product cart status
   * @param {object} product Product to init product cart status
   */
  const initProductCart = (product) => {
    const ingredients = {}
    for (const key in product.ingredients) {
      const ingredient = product.ingredients[key]
      ingredients[`id:${ingredient.id}`] = {
        selected: true
      }
    }
    const quantity = (productAddedToCartLength && product?.maximum_per_order) ? (product?.maximum_per_order - productAddedToCartLength) : props.productCart?.quantity
    const newProductCart = {
      ...props.productCart,
      id: product.id,
      price: product.price,
      name: product.name,
      businessId: props.businessId,
      categoryId: product.category_id,
      inventoried: product.inventoried,
      stock: product.quantity,
      ingredients: props.productCart?.ingredients || ingredients,
      options: props.productCart?.options || {},
      comment: props.productCart?.comment || null,
      quantity: quantity || 1,
      favorite: product?.favorite
    }
    newProductCart.unitTotal = getUnitTotal(newProductCart)
    newProductCart.total = newProductCart.unitTotal * newProductCart.quantity
    setProductCart(newProductCart)
  }

  /**
   * Get unit total for product cart
   * @param {object} productCart Current product status
   */
  const getUnitTotal = (productCart) => {
    let subtotal = 0
    for (let i = 0; i < product.product?.extras?.length; i++) {
      const extra = product.product?.extras[i]
      for (let j = 0; j < extra.options?.length; j++) {
        const option = extra.options[j]
        for (let k = 0; k < option.suboptions?.length; k++) {
          const suboption = option.suboptions[k]
          if (productCart.options[`id:${option.id}`]?.suboptions[`id:${suboption.id}`]?.selected) {
            const suboptionState = productCart.options[`id:${option.id}`].suboptions[`id:${suboption.id}`]
            const quantity = option.allow_suboption_quantity ? suboptionState.quantity : 1
            const price = option.with_half_option && suboption.half_price && suboptionState.position !== 'whole' ? suboption.half_price : suboption.price
            subtotal += price * quantity
          }
        }
      }
    }
    return product.product?.price + subtotal
  }
  /**
   * Method to add, remove favorite info for user from API
   */
  const handleFavoriteProduct = async (productFav, isAdd = false) => {
    if (!product || !user) return
    showToast(ToastType.Info, t('LOADING', 'loading'))
    try {
      setProduct({ ...product, loading: true, error: null })
      const productId = productFav?.id
      const changes = { object_id: productId }
      const requestOptions = {
        method: isAdd ? 'POST' : 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId()
        },
        ...(isAdd && { body: JSON.stringify(changes) })
      }
      const fetchEndpoint = isAdd
        ? `${ordering.root}/users/${user?.id}/favorite_products`
        : `${ordering.root}/users/${user.id}/favorite_products/${productId}`
      const response = await fetch(fetchEndpoint, requestOptions)
      const content = await response.json()
      if (!content.error) {
        loadProductWithOptions()
        handleUpdateProducts && handleUpdateProducts(productId, { favorite: isAdd })
        showToast(ToastType.Success, isAdd ? t('FAVORITE_ADDED', 'Favorite added') : t('FAVORITE_REMOVED', 'Favorite removed'))
      } else {
        setProduct({
          ...product,
          loading: false,
          error: content.result
        })
        showToast(ToastType.Error, content.result)
      }
    } catch (error) {
      setProduct({
        ...product,
        loading: false,
        error: [error.message]
      })
      showToast(ToastType.Error, [error.message])
    }
  }

  /**
   * Load product from API
   */
  const loadProductWithOptions = async () => {
    try {
      setProduct({ ...product, loading: true })
      const source = {}
      requestsState.product = source
      const { content: { result, error } } = await ordering
        .businesses(props.businessId)
        .categories(props.categoryId)
        .products(props.productId)
        .get({ cancelToken: source })

      if (!error) {
        setProduct({
          ...product,
          loading: false,
          product: result
        })
        return
      }
      setProduct({
        ...product,
        loading: false,
        error: [result]
      })
    } catch (err) {
      setProduct({
        ...product,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
   * Remove related option by respect_to
   * @param {object} cart Current cart
   * @param {number} suboptionId Suboption id
   */
  const removeRelatedOptions = (productCart, suboptionId) => {
    product.product.extras.forEach(_extra => {
      _extra.options.forEach(_option => {
        if (_option.respect_to === suboptionId) {
          const suboptions = productCart.options[`id:${_option.id}`]?.suboptions
          if (suboptions) {
            Object.keys(suboptions).map(suboptionKey => removeRelatedOptions(productCart, parseInt(suboptionKey.split(':')[1])))
          }
          if (productCart.options[`id:${_option.id}`]) {
            productCart.options[`id:${_option.id}`].suboptions = {}
            pizzaState[`option:${_option.id}`] = {}
          }
        }
      })
    })
  }

  /**
   * Get changes for ingredients state
   * @param {object} state Current ingrediente state
   * @param {object} ingredient Current ingredient
   */
  const handleChangeIngredientState = (state, ingredient) => {
    productCart.ingredients[`id:${ingredient.id}`] = state
    setProductCart({
      ...productCart,
      ingredients: productCart.ingredients
    })
  }

  /**
   * Change product state with new suboption state
   * @param {object} state New state with changes
   * @param {object} suboption Suboption object
   * @param {objecrt} option Option object
   * @param {object} product Product object
   */
  const handleChangeSuboptionState = (state, suboption, option) => {
    const newProductCart = JSON.parse(JSON.stringify(productCart))
    if (!newProductCart.options) {
      newProductCart.options = {}
    }
    if (!newProductCart.options[`id:${option.id}`]) {
      newProductCart.options[`id:${option.id}`] = {
        id: option.id,
        name: option.name,
        suboptions: {}
      }
    }
    let newPizzaState = {}

    if (!state.selected) {
      delete newProductCart.options[`id:${option.id}`].suboptions[`id:${suboption.id}`]
      removeRelatedOptions(newProductCart, suboption.id)
      newPizzaState = handleVerifyPizzaState(state, suboption, option)
    } else {
      if (option.min === option.max && option.min === 1) {
        const suboptions = newProductCart.options[`id:${option.id}`].suboptions
        if (suboptions) {
          Object.keys(suboptions).map(suboptionKey => removeRelatedOptions(newProductCart, parseInt(suboptionKey.split(':')[1])))
        }
        if (newProductCart.options[`id:${option.id}`]) {
          newProductCart.options[`id:${option.id}`].suboptions = {}
        }
      }
      newProductCart.options[`id:${option.id}`].suboptions[`id:${suboption.id}`] = state
    }
    let suboptionsArray = []
    const _selectedSuboptions = selectedSuboptions
    if (state.selected) {
      for (const extra of product.product.extras) {
        for (const option of extra.options) {
          if (Object.keys(newProductCart?.options[`id:${option?.id}`]?.suboptions || {})?.length === 0) {
            delete newProductCart?.options[`id:${option?.id}`]
          }
        }
      }
      if (newProductCart?.options) {
        for (const extra of product.product.extras) {
          for (const option of extra.options) {
            for (const suboption of option.suboptions) {
              if (newProductCart?.options[`id:${option?.id}`]) {
                if (newProductCart?.options[`id:${option?.id}`]?.suboptions[`id:${suboption?.id}`]) {
                  _selectedSuboptions[`suboption:${suboption.id}`] = true
                } else {
                  _selectedSuboptions[`suboption:${suboption.id}`] = false
                }
              } else {
                _selectedSuboptions[`suboption:${suboption.id}`] = suboption?.preselected || (option?.max === 1 && option?.min === 1 && option?.suboptions?.length === 1)
              }
            }
          }
        }
      }
      const preselectedOptions = []
      const preselectedSuboptions = []
      for (const extra of product.product.extras) {
        for (const option of extra.options) {
          for (const suboption of option.suboptions) {
            if (checkSuboptionsSelected(suboption?.id, _selectedSuboptions, dependsSuboptions)) {
              preselectedOptions.push(option)
              preselectedSuboptions.push(suboption)
            }
          }
        }
      }

      const states = preselectedSuboptions.map((suboption, i) => {
        const cartSuboption = newProductCart?.options[`id:${preselectedOptions[i]?.id}`]?.suboptions[`id:${suboption?.id}`] || suboption
        const price = preselectedOptions[i]?.with_half_option && cartSuboption?.half_price && cartSuboption?.position !== 'whole'
          ? cartSuboption.half_price
          : cartSuboption.price

        return {
          id: cartSuboption.id,
          name: cartSuboption.name,
          position: state?.id === cartSuboption?.id ? state?.position : cartSuboption.position || 'whole',
          price: state?.id === cartSuboption?.id ? state.price : price,
          quantity: state?.id === cartSuboption?.id ? state.quantity : cartSuboption?.quantity || 1,
          selected: true,
          total: state?.id === cartSuboption?.id ? state.total : price
        }
      })
      preselectedOptions.map((option, i) => {
        const defaultSuboption = {
          option: option,
          suboption: preselectedSuboptions[i],
          state: states[i]
        }
        suboptionsArray = [...suboptionsArray, defaultSuboption]
      })
      newPizzaState = handleVerifyPizzaState(state, suboption, option, preselectedOptions, preselectedSuboptions, states)
    }

    let newBalance = Object.keys(newProductCart.options[`id:${option.id}`].suboptions).length
    if (option.limit_suboptions_by_max) {
      newBalance = Object.values(newProductCart.options[`id:${option.id}`].suboptions).reduce((count, suboption) => {
        return count + suboption.quantity
      }, 0)
    }
    const hasPreselectedFlow = suboptionsArray.filter(state => state?.suboption?.preselected)
    if (newBalance <= option.max || (newPizzaState?.[`option:${option?.id}`]?.value <= option.max && option?.with_half_option)) {
      newProductCart.options[`id:${option.id}`].balance = newBalance
      newProductCart.unitTotal = getUnitTotal(newProductCart)
      newProductCart.total = newProductCart.unitTotal * newProductCart.quantity
      if (state.selected && hasPreselectedFlow?.length > 0) {
        handleChangeSuboptionDefault(suboptionsArray, newPizzaState)
        setSelectedSuboptions(_selectedSuboptions)
      } else {
        setProductCart(newProductCart)
      }
    }
  }

  const handleChangeSuboptionDefault = (defaultOptions, newPizzaState) => {
    const newProductCart = JSON.parse(JSON.stringify(productCart))
    if (!newProductCart.options) {
      newProductCart.options = {}
    }
    defaultOptions.map(({ option, state, suboption }) => {
      if (!newProductCart.options[`id:${option.id}`]) {
        newProductCart.options[`id:${option.id}`] = {
          id: option.id,
          name: option.name,
          suboptions: {}
        }
      }
      if (!state?.selected) {
        delete newProductCart.options[`id:${option.id}`].suboptions[`id:${suboption.id}`]
        removeRelatedOptions(newProductCart, suboption.id)
      } else {
        if (option.min === option.max && option.min === 1) {
          const suboptions = newProductCart.options[`id:${option.id}`].suboptions
          if (suboptions) {
            Object.keys(suboptions).map(suboptionKey => removeRelatedOptions(newProductCart, parseInt(suboptionKey.split(':')[1])))
          }
          if (newProductCart.options[`id:${option.id}`]) {
            newProductCart.options[`id:${option.id}`].suboptions = {}
          }
        }
        newProductCart.options[`id:${option.id}`].suboptions[`id:${suboption.id}`] = state
      }
      let newBalance = Object.keys(newProductCart.options[`id:${option.id}`].suboptions).length
      if (option.limit_suboptions_by_max) {
        newBalance = Object.values(newProductCart.options[`id:${option.id}`].suboptions).reduce((count, suboption) => {
          return count + suboption.quantity
        }, 0)
      }

      if (newBalance <= option.max || (newPizzaState?.[`option:${option.id}`]?.value <= option.max && option?.with_half_option)) {
        newProductCart.options[`id:${option.id}`].balance = newBalance
        newProductCart.unitTotal = getUnitTotal(newProductCart)
        newProductCart.total = newProductCart.unitTotal * newProductCart.quantity
      }
    })
    setProductCart(newProductCart)
  }

  /**
   * Change product state with new comment state
   * @param {object} e Product comment
   */
  const handleChangeCommentState = (e) => {
    const comment = e.target.value ?? ''
    productCart.comment = comment.trim()
    setProductCart({
      ...productCart,
      comment: comment.trim()
    })
  }

  /**
   * Check options to get errors
   */
  const checkErrors = () => {
    const errors = {}
    if (!product?.product) {
      return errors
    }
    product.product?.extras?.forEach(extra => {
      extra.options.map(option => {
        const suboptions = productCart.options[`id:${option.id}`]?.suboptions
        const quantity = suboptions
          ? option?.with_half_option
            ? pizzaState?.[`option:${option?.id}`]?.value
            : (option.limit_suboptions_by_max
              ? Object.values(suboptions).reduce((count, suboption) => {
                return count + suboption.quantity
              }, 0)
              : Object.keys(suboptions)?.length)
          : 0
        let evaluateRespectTo = false
        if (option.respect_to && productCart.options) {
          const options = productCart?.options
          for (const key in options) {
            const _option = options[key]
            if (_option.suboptions[`id:${option.respect_to}`]?.selected) {
              evaluateRespectTo = true
              break
            }
          }
        }
        const evaluate = option.respect_to ? evaluateRespectTo : true
        if (option?.suboptions?.length > 0 && evaluate) {
          if (option.min > quantity) {
            errors[`id:${option.id}`] = true
          } else if (option.max < quantity) {
            errors[`id:${option.id}`] = true
          }
        }
      })
    })
    setErrors(errors)
    return errors
  }

  /**
   * Handle when click on save product
   */
  const handleSave = async (values) => {
    try {
      setProductLoading && setProductLoading(true)
      if (handleCustomSave) {
        handleCustomSave && handleCustomSave()
      }
      const errors = checkErrors()
      if (Object.keys(errors).length === 0 || isService) {
        let successful = true
        if (useOrderContext) {
          successful = false
          const changes = cart || { business_id: props.businessId }
          const currentProduct = !isService
            ? { ...productCart }
            : {
              ...productCart,
              professional_id: values?.professional?.id,
              service_start: values?.serviceTime ?? orderState.options?.moment
            }
          onSave(productCart, !props.productCart?.code)
          if (!props.productCart?.code) {
            successful = await addProduct(currentProduct, changes, false)
          } else {
            successful = await updateProduct(currentProduct, changes, false)
            if (successful) {
              events.emit('product_edited', currentProduct)
            }
          }
        }
        if (successful) {
          if (isService) {
            const updatedProfessional = JSON.parse(JSON.stringify(values?.professional))
            const duration = product?.product?.duration
            updatedProfessional.busy_times.push({
              start: values?.serviceTime,
              end: moment(values?.serviceTime).add(duration, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
              duration
            })
            handleUpdateProfessionals && handleUpdateProfessionals(updatedProfessional)
            handleChangeProfessional && handleChangeProfessional(updatedProfessional)
          }
        } else {
          showToast(
            ToastType.Error,
            !props.productCart?.code ? t('FAILED_TO_ADD_PRODUCT', 'Failed to add product') : t('FAILED_TO_UPDATE_PRODUCT', 'Failed to update product'),
            5000
          )
        }
      }
      setProductLoading && setProductLoading(false)
    } catch (err) {
      showToast(
        ToastType.Error,
        !props.productCart?.code ? t('FAILED_TO_ADD_PRODUCT', 'Failed to add product') : t('FAILED_TO_UPDATE_PRODUCT', 'Failed to update product'),
        5000
      )
      setProductLoading && setProductLoading(false)
    }
  }

  const handleCreateGuestUser = async (values) => {
    try {
      setActionStatus({ ...actionStatus, loading: true })
      const { content: { error, result } } = await ordering.users().save(values)
      if (!error) {
        setActionStatus({ error: null, loading: false })
        login({
          user: result,
          token: result.session?.access_token
        })
      } else {
        setActionStatus({ error: result, loading: false })
      }
    } catch (err) {
      setActionStatus({ error: err.message, loading: false })
    }
  }

  const increment = () => {
    if (maxProductQuantity <= 0 || productCart.quantity >= maxProductQuantity) {
      return
    }
    productCart.quantity++
    productCart.unitTotal = getUnitTotal(productCart)
    productCart.total = productCart.unitTotal * productCart.quantity
    setProductCart({
      ...productCart
    })
  }

  const decrement = () => {
    if (productCart.quantity === 0) {
      return
    }
    productCart.quantity--
    productCart.unitTotal = getUnitTotal(productCart)
    productCart.total = productCart.unitTotal * productCart.quantity
    setProductCart({
      ...productCart
    })
  }

  const handleChangeProductCartQuantity = (quantity) => {
    if (maxProductQuantity <= 0 || quantity > maxProductQuantity) {
      return
    }
    productCart.quantity = quantity || 0
    productCart.total = productCart.unitTotal * productCart.quantity
    setProductCart({
      ...productCart
    })
  }

  /**
   * Check if option must show
   * @param {object} option Option to check
   */
  const showOption = (option) => {
    let showOption = true
    if (option.respect_to) {
      showOption = false
      if (productCart.options) {
        const options = productCart.options
        for (const key in options) {
          const _option = options[key]
          if (_option.suboptions[`id:${option.respect_to}`]?.selected) {
            showOption = true
            break
          }
        }
      }
    }

    if (option?.suboptions?.length === 0) showOption = false

    return showOption
  }

  /**
   * Load professionals from API
   */
  const getProfessionalList = async () => {
    try {
      setProfessionalListState({ ...professionalListState, loading: true })
      const { content: { result, error } } = await ordering
        .businesses(props.businessId)
        .select(['id', 'professionals'])
        .get()

      if (!error) {
        setProfessionalListState({
          ...professionalListState,
          loading: false,
          professionals: result?.professionals ?? []
        })
        return
      }
      setProfessionalListState({
        ...professionalListState,
        loading: false,
        error: [result]
      })
    } catch (err) {
      setProfessionalListState({
        ...professionalListState,
        loading: false,
        error: [err.message]
      })
    }
  }
  /**
   * function to verify position of pizza ingredients
   * @param {object} newProductCart cart updated with suboptions
   */
  const handleVerifyPizzaState = (state, suboption, option, preselectedOptions, preselectedSuboptions, states) => {
    let newPizzaState = {}
    if (state?.selected) {
      preselectedOptions.map((option, i) => {
        if (option?.with_half_option) {
          newPizzaState = {
            ...newPizzaState,
            [`option:${option?.id}`]: {
              ...newPizzaState?.[`option:${option?.id}`],
              [`suboption:${preselectedSuboptions[i]?.id}`]: (states[i]?.position === 'whole' ? 1 : 0.5) * states[i].quantity
            }
          }
          const value = ((states[i]?.position === 'whole' ? 1 : 0.5) * states[i].quantity) + (newPizzaState[`option:${option?.id}`].value || 0)
          newPizzaState[`option:${option?.id}`].value = value
        }
      })
    } else {
      newPizzaState = {
        ...pizzaState,
        [`option:${option?.id}`]: {
          ...pizzaState[`option:${option?.id}`],
          value: 0
        }
      }
      delete newPizzaState?.[`option:${option?.id}`]?.[`suboption:${suboption?.id}`]
      const value = Object?.values(newPizzaState?.[`option:${option?.id}`] || {})?.reduce((acc, value) => acc + value, 0)
      newPizzaState[`option:${option?.id}`].value = value
    }
    setPizzaState(newPizzaState)
    return newPizzaState
  }
  /**
   * Init product cart when product changed
   */
  useEffect(() => {
    if (product.product) {
      initProductCart(product.product)
    }
  }, [product.product])

  /**
   * Check error when product state changed
   */
  useEffect(() => {
    checkErrors()
  }, [productCart])

  /**
   * Listening product changes
   */
  useEffect(() => {
    if (props?.product?.load_type === 'lazy') return
    setProduct({ ...product, product: props.product })
  }, [props.product])

  /**
   * Check if there is an option required with one suboption
  */

  const checkSuboptionsSelected = (suboptionId, _selectedSuboptions, _dependsSuboptions, count = 0) => {
    if (count > 100) {
      Sentry.captureMessage('Suboptions selected bucle, more than 100 iterations')
      return false
    }
    if (!_selectedSuboptions[`suboption:${suboptionId}`]) {
      return false
    }
    const respectTo = _dependsSuboptions[`suboption:${suboptionId}`] ?? null
    if (respectTo === null) {
      return _selectedSuboptions[`suboption:${suboptionId}`]
    }
    return checkSuboptionsSelected(respectTo, _selectedSuboptions, _dependsSuboptions, count++)
  }

  useEffect(() => {
    if (!product?.loading && product?.product && product.product?.extras?.length > 0) {
      const _selectedSuboptions = {}
      const _dependsSuboptions = {}
      const preselectedOptions = []
      const preselectedSuboptions = []
      for (const extra of product.product.extras) {
        for (const option of extra.options) {
          for (const suboption of option.suboptions) {
            _selectedSuboptions[`suboption:${suboption.id}`] =
              (suboption.preselected ||
                (option?.max === 1 && option?.min === 1 && option?.suboptions?.length === 1)) &&
              (!editMode || !!props.productCart?.options[`id:${option?.id}`]?.suboptions[`id:${suboption?.id}`])
            _dependsSuboptions[`suboption:${suboption.id}`] = option?.conditioned && option?.respect_to !== null ? option?.respect_to : null
          }
        }
      }

      if (editMode && props?.productCart) {
        Object.values(props?.productCart?.options)?.map(option => Object.values(option?.suboptions)?.map(suboption => {
          _selectedSuboptions[`suboption:${suboption.id}`] = true
        }))
      }

      for (const extra of product.product.extras) {
        for (const option of extra.options) {
          for (const suboption of option.suboptions) {
            if (checkSuboptionsSelected(suboption?.id, _selectedSuboptions, _dependsSuboptions)) {
              preselectedOptions.push(option)
              preselectedSuboptions.push(suboption)
            }
          }
        }
      }
      if (!preselectedOptions?.length) {
        return
      }
      let states = {}
      if (editMode && props?.productCart) {
        const cartSuboptions = Object.values(props?.productCart?.options)?.map(option => Object.values(option?.suboptions))?.flat()
        states = cartSuboptions.map((suboption, i) => {
          const price = preselectedOptions[i]?.with_half_option && suboption?.half_price && suboption?.position !== 'whole'
            ? suboption.half_price
            : suboption.price
          return {
            id: suboption.id,
            name: suboption.name,
            position: suboption.position || 'whole',
            price,
            quantity: suboption.quantity,
            selected: true,
            total: price
          }
        })
      } else {
        states = preselectedSuboptions.map((suboption, i) => {
          const price = preselectedOptions[i]?.with_half_option && suboption?.half_price && suboption?.position !== 'whole'
            ? suboption.half_price
            : suboption.price
          return {
            id: suboption.id,
            name: suboption.name,
            position: suboption.position || preselectedOptions[i]?.with_half_option ? 'left' : 'whole',
            price,
            quantity: 1,
            selected: true,
            total: price
          }
        })
      }

      let suboptionsArray = []
      let newPizzaState = {}
      preselectedOptions.map((option, i) => {
        const defaultSuboption = {
          option: option,
          suboption: preselectedSuboptions[i],
          state: states[i]
        }
        suboptionsArray = [...suboptionsArray, defaultSuboption]

        if (option?.with_half_option) {
          newPizzaState = {
            ...newPizzaState,
            [`option:${option?.id}`]: {
              ...newPizzaState?.[`option:${option?.id}`],
              [`suboption:${preselectedSuboptions[i]?.id}`]: (states[i]?.position === 'whole' ? 1 : 0.5) * states[i].quantity
            }
          }
          const value = ((states[i]?.position === 'whole' ? 1 : 0.5) * states[i].quantity) + (newPizzaState[`option:${option?.id}`].value || 0)
          newPizzaState[`option:${option?.id}`].value = value
        }
      })

      setPizzaState(newPizzaState)
      setSelectedSuboptions(_selectedSuboptions)
      setDependsSuboptions(_dependsSuboptions)
      setDefaultSubOptions(suboptionsArray)
      setCustomDefaultSubOptions(suboptionsArray)
    }
  }, [JSON.stringify(product.product), product?.loading])

  if (isStarbucks) {
    useEffect(() => {
      if (product?.product && Object.keys(product?.product).length) {
        const options = [].concat(...product.product.extras.map(extra => extra.options.filter(
          option => (
            option.name === 'Tamaño' &&
            option.suboptions.filter(suboption => suboption.name === 'Grande (16oz - 437ml)').length === 1
          )
        )))
        if (!options?.length) {
          return
        }
        const suboptions = []
          .concat(...options.map(option => option.suboptions))
          .filter(suboption => suboption.name === 'Grande (16oz - 437ml)')
        const states = suboptions.map((suboption, i) => {
          const price = options[i].with_half_option && suboption.half_price && suboption?.position !== 'whole'
            ? suboption.half_price
            : suboption.price

          return {
            id: suboption.id,
            name: suboption.name,
            position: suboption.position || 'whole',
            price,
            quantity: 1,
            selected: true,
            total: price
          }
        })
        const defaultOptions = options.map((option, i) => {
          return {
            option: option,
            suboption: suboptions[i],
            state: states[i]
          }
        })
        setDefaultSubOptions([...customDefaultSubOptions, ...defaultOptions])
      }
    }, [customDefaultSubOptions])
  }
  /**
   * Check if defaultSubOption has content to set product Cart
   */
  useEffect(() => {
    if (defaultSubOptions?.length) {
      handleChangeSuboptionDefault(defaultSubOptions)
    }
  }, [JSON.stringify(defaultSubOptions)])

  /**
   * Load product on component mounted
   */
  useEffect(() => {
    if (!props.product && (!props.businessId || !props.categoryId || !props.productId)) {
      throw new Error('`businessId` && `categoryId` && `productId` are required if `product` was not provided.')
    }
    if ((props.product && props.product?.load_type === 'lazy' && props.businessId && props.categoryId && props.productId) ||
      (!props.product && props.businessId && props.categoryId && props.productId)
    ) {
      loadProductWithOptions()
    }
    return () => {
      if (requestsState.product) {
        requestsState.product.cancel()
      }
    }
  }, [])

  useEffect(() => {
    if (!isService) return

    if (isCartProduct) {
      getProfessionalList()
    } else {
      setProfessionalListState({
        ...professionalListState,
        professionals: professionalList
      })
    }
  }, [isService, isCartProduct, professionalList])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            productObject={product}
            productCart={productCart}
            errors={errors}
            editMode={editMode}
            isSoldOut={isSoldOut}
            actionStatus={actionStatus}
            maxProductQuantity={maxProductQuantity}
            pizzaState={pizzaState}
            setPizzaState={setPizzaState}
            increment={increment}
            decrement={decrement}
            handleChangeProductCartQuantity={handleChangeProductCartQuantity}
            handleSave={handleSave}
            showOption={showOption}
            handleCreateGuestUser={handleCreateGuestUser}
            handleFavoriteProduct={handleFavoriteProduct}
            handleChangeIngredientState={handleChangeIngredientState}
            handleChangeSuboptionState={handleChangeSuboptionState}
            handleChangeCommentState={handleChangeCommentState}
            professionalListState={professionalListState}
          />
        )
      }
    </>
  )
}

ProductForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * `businessId`
   */
  businessId: PropTypes.number.isRequired,
  /**
   * `categoryId` is required if `product` prop is not present
   */
  categoryId: PropTypes.number,
  /**
   * `productId` is required if `product` prop is not present
   */
  productId: PropTypes.number,
  /**
   * `product` is required if `businessId`, `categoryId` or `productId` is not present
   */
  product: PropTypes.object,
  /**
   * Product from cart
   */
  productCart: PropTypes.object,
  /**
   * useOrderContext
   */
  useOrderContext: PropTypes.bool,
  /**
   * Function to save event
   */
  onSave: PropTypes.func
}

ProductForm.defaultProps = {
  productCart: {},
  useOrderContext: true,
  balance: 0
}
