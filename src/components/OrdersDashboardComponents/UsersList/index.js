import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
import { useApi } from '../../../contexts/ApiContext'
import { useSession } from '../../../contexts/SessionContext'
import { useToast, ToastType } from '../../../contexts/ToastContext'
import { useLanguage } from '../../../contexts/LanguageContext'

export const UsersList = (props) => {
  const {
    UIComponent,
    paginationSettings,
    propsToFetch,
    isSearchByUserId,
    isSearchByUserEmail,
    isSearchByUserPhone,
    isSearchByUserName,
    isBusinessOwners,
    defaultUserTypesSelected,
    disabledActiveStateCondition,
    isDriver,
    isProfessional
  } = props

  const [ordering] = useApi()
  const [session] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [usersList, setUsersList] = useState({ users: [], loading: false, error: null })
  const [filterValues, setFilterValues] = useState({ clear: false, changes: {} })
  const [searchValue, setSearchValue] = useState(null)
  const [isVerified, setIsVerified] = useState(false)
  const [userTypesSelected, setUserTypesSelected] = useState(defaultUserTypesSelected)
  const [paginationProps, setPaginationProps] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10,
    totalItems: null,
    totalPages: null
  })
  const [paginationDetail, setPaginationDetail] = useState({})
  const [selectedUserActiveState, setSelectedUserActiveState] = useState(true)
  const [actionStatus, setActionStatus] = useState({ loading: false, error: null })
  const [selectedUsers, setSelectedUsers] = useState([])
  const [deleteUsersActionState, setDeleteUsersActionState] = useState({ loading: false, error: null })
  const [occupationsState, setOccupationsState] = useState({ occupations: [], loading: false, error: null })
  const [selectedOccupation, setSelectedOccupation] = useState(null)

  /**
   * Get users by params, order options and filters
   * @param {boolean} newFetch Make a new request or next page
   */
  const getUsers = async (page, pageSize) => {
    try {
      setUsersList({ ...usersList, loading: true })
      let parameters = {}

      const paginationParams = {
        page: page,
        page_size: pageSize || paginationProps.pageSize
      }

      if (!isBusinessOwners) {
        parameters = { ...paginationParams }
      }

      let where = null
      const conditions = []

      if (!disabledActiveStateCondition) {
        conditions.push({ attribute: 'enabled', value: selectedUserActiveState })
      }

      if (isVerified) {
        const verifiedConditions = []
        verifiedConditions.push(
          {
            attribute: 'email_verified',
            value: true
          }
        )
        verifiedConditions.push(
          {
            attribute: 'phone_verified',
            value: true
          }
        )
        conditions.push({
          conector: 'OR',
          conditions: verifiedConditions
        })
      }

      if (userTypesSelected.length > 0) {
        conditions.push({ attribute: 'level', value: userTypesSelected })
      }

      if (selectedOccupation) {
        conditions.push({ attribute: 'occupation_id', value: selectedOccupation })
      }

      if (searchValue) {
        const searchConditions = []
        if (isSearchByUserId) {
          searchConditions.push(
            {
              attribute: 'id',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${searchValue}%`)
              }
            }
          )
        }
        if (isSearchByUserEmail) {
          searchConditions.push(
            {
              attribute: 'email',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${searchValue}%`)
              }
            }
          )
        }

        if (isSearchByUserPhone) {
          searchConditions.push(
            {
              attribute: 'cellphone',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${searchValue}%`)
              }
            }
          )
        }

        if (isSearchByUserName) {
          searchConditions.push(
            {
              attribute: 'name',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${searchValue}%`)
              }
            }
          )
          searchConditions.push(
            {
              attribute: 'lastname',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${searchValue}%`)
              }
            }
          )
        }

        conditions.push({
          conector: 'OR',
          conditions: searchConditions
        })
      }

      if (Object.keys(filterValues.changes).length) {
        const filterConditions = []
        if (filterValues?.changes?.name && filterValues?.changes?.name !== null) {
          filterConditions.push(
            {
              attribute: 'name',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${filterValues?.changes?.name}%`)
              }
            }
          )
        }
        if (filterValues.changes.lastname && filterValues.changes.lastname !== null) {
          filterConditions.push(
            {
              attribute: 'lastname',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${filterValues.changes.lastname}%`)
              }
            }
          )
        }
        if (filterValues.changes.email && filterValues.changes.email !== null) {
          filterConditions.push(
            {
              attribute: 'email',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${filterValues.changes.email}%`)
              }
            }
          )
        }
        if (filterValues.changes.email_verified !== undefined) {
          filterConditions.push(
            {
              attribute: 'email_verified',
              value: filterValues.changes.email_verified
            }
          )
        }
        if (filterValues.changes.phone && filterValues.changes.phone !== null) {
          filterConditions.push(
            {
              attribute: 'phone',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${filterValues.changes.phone}%`)
              }
            }
          )
        }
        if (filterValues.changes.phone_verified !== undefined) {
          filterConditions.push(
            {
              attribute: 'phone_verified',
              value: filterValues.changes.phone_verified
            }
          )
        }
        if (filterValues.changes.id && parseInt(filterValues.changes.id) > 0) {
          filterConditions.push(
            {
              attribute: 'id',
              value: parseInt(filterValues.changes.id)
            }
          )
        }
        if (filterConditions.length) {
          conditions.push({
            conector: 'AND',
            conditions: filterConditions
          })
        }
      }

      if (conditions.length) {
        where = {
          conditions,
          conector: 'AND'
        }
      }

      const fetchEndpoint = where
        ? ordering.setAccessToken(session.token).users().select(propsToFetch).parameters(parameters).where(where)
        : ordering.setAccessToken(session.token).users().select(propsToFetch).parameters(parameters)
      const { content: { result, pagination } } = await fetchEndpoint.get()
      usersList.users = result

      setUsersList({
        ...usersList,
        loading: false
      })
      let nextPageItems = 0
      if (pagination.current_page !== pagination.total_pages) {
        const remainingItems = pagination.total - usersList.users.length
        nextPageItems = remainingItems < pagination.page_size ? remainingItems : pagination.page_size
      }
      setPaginationProps({
        ...paginationProps,
        currentPage: pagination.current_page,
        pageSize: pagination.page_size === 0 ? paginationProps.pageSize : pagination.page_size,
        totalPages: pagination.total_pages,
        totalItems: pagination.total,
        from: pagination.from,
        to: pagination.to,
        nextPageItems
      })
      setPaginationDetail({ ...pagination })
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setUsersList({
          ...usersList,
          loading: false,
          error: [err.message]
        })
      }
    }
  }

  /**
   * Get the occupations from API
   */
  const getOccupations = async () => {
    try {
      setOccupationsState({
        ...occupationsState,
        loading: true
      })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.token}`
        }
      }
      const response = await fetch(`${ordering.root}/occupations`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setOccupationsState({
          loading: false,
          occupations: content.result,
          error: null
        })
      } else {
        setOccupationsState({
          ...occupationsState,
          loading: false,
          error: content.result
        })
      }
    } catch (error) {
      setOccupationsState({
        ...occupationsState,
        loading: false,
        error: [error.message]
      })
    }
  }

  /**
   * Change user type
   * @param {object} userType User type
   */
  const handleSelectedUserTypes = (userTypes) => {
    setUserTypesSelected(userTypes)
  }

  /**
   * Method to change user active state for filter
   */
  const handleChangeUserActiveState = () => {
    setSelectedUserActiveState(!selectedUserActiveState)
  }

  /**
   * Method to change user type from API
   * @param {Object} user user id and new type
   */
  const handleChangeUserType = async (user) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionStatus({ ...actionStatus, loading: true })
      const requestsState = {}
      const source = {}
      requestsState.updateOrder = source
      const { content: { error, result } } = await ordering.setAccessToken(session.token).users(user.id).save({ level: user.level }, { cancelToken: source })
      setActionStatus({
        ...actionStatus,
        loading: false,
        error: error ? result : null
      })
      if (!error) {
        let users = []
        if (userTypesSelected.includes(user.level)) {
          users = usersList.users.filter(_user => {
            if (_user.id === user.id) {
              _user.level = user.level
            }
            return true
          })
        } else {
          users = usersList.users.filter(_user => _user.id !== result.id)
        }
        setUsersList({ ...usersList, users })
        showToast(ToastType.Success, t('UPDATED', 'Updated'))
      }
    } catch (err) {
      setActionStatus({ ...actionStatus, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to change user enable/disable
   * @param {Object} user user id and enable state
   */

  const handleChangeActiveUser = async (user) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionStatus({ ...actionStatus, loading: true })
      const { content: { error, result } } = await ordering.setAccessToken(session.token).users(user.id).save({ enabled: user.enabled })
      setActionStatus({
        ...actionStatus,
        loading: false,
        error: error ? result : null
      })
      if (!error) {
        if (isDriver) {
          handleSuccessUpdate(result)
        } else if (!disabledActiveStateCondition) {
          let users = [...usersList?.users]
          if ((!user.enabled && selectedUserActiveState) || (user?.enabled && !selectedUserActiveState)) {
            users = usersList.users.filter(_user => {
              let valid = true
              if (_user.id === user.id) {
                if (user.enabled === !selectedUserActiveState) {
                  valid = false
                }
              }
              return valid
            })
          } else {
            users.push(user)
          }
          setUsersList({ ...usersList, users })
        }
        showToast(ToastType.Success, t('UPDATED', 'Updated'))
      }
    } catch (err) {
      setActionStatus({ ...actionStatus, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to delete users from API
   * @param {Number} userId user id to delete
   */
  const handleDeleteUser = async (userId) => {
    try {
      setActionStatus({ ...actionStatus, loading: true })
      const { content } = await ordering.setAccessToken(session.token).users(userId).delete()
      if (!content.error) {
        const users = usersList.users.filter(user => user.id !== userId)
        setUsersList({ ...usersList, users })
        if (deleteUsersActionState.loading) {
          const _selectedUsers = [...selectedUsers]
          _selectedUsers.shift()
          if (_selectedUsers.length === 0) {
            setDeleteUsersActionState({ ...deleteUsersActionState, loading: false })
          }
          setSelectedUsers(_selectedUsers)
        }
        setPaginationDetail({
          ...paginationDetail,
          total: paginationDetail?.total - 1
        })
      }
      setActionStatus({
        ...actionStatus,
        loading: false,
        error: content.error ? content.result : null
      })
    } catch (err) {
      setActionStatus({ ...actionStatus, loading: false, error: [err.message] })
      if (deleteUsersActionState.loading) {
        setDeleteUsersActionState({ ...deleteUsersActionState, loading: false, error: [err.message] })
      }
    }
  }

  /**
   * Method to delete several users from API
   */
  const handleDeleteSeveralUsers = () => {
    setDeleteUsersActionState({ ...deleteUsersActionState, loading: true })
  }

  /**
   * Method to change selected users
   * @param {Number} userId user id to change selected state
   */
  const handleSelectedUsers = (userId) => {
    let _selectedUsers
    if (selectedUsers.includes(userId)) {
      _selectedUsers = selectedUsers.filter(id => id !== userId)
    } else {
      _selectedUsers = [...selectedUsers, userId]
    }
    setSelectedUsers(_selectedUsers)
  }

  /**
   * Method to update users
   * @param {Object} updatedUser updated user
   */
  const handleSuccessUpdate = (updatedUser) => {
    const users = usersList.users.filter(user => {
      if (user.id === updatedUser.id) {
        Object.assign(user, updatedUser)
      }
      return true
    })
    setUsersList({
      ...usersList,
      users: users
    })
  }
  /**
   * Method to add user
   * @param {Object} newUser new user to add
   */
  const handleSuccessAddUser = (newUser) => {
    if (userTypesSelected.includes(newUser?.level)) {
      setUsersList({
        ...usersList,
        users: [
          ...usersList.users,
          newUser
        ]
      })
      setPaginationDetail({
        ...paginationDetail,
        total: paginationDetail?.total ? paginationDetail?.total + 1 : 1
      })
    }
  }
  /**
   * Method to delete user
   * @param {Object} user new user to delete
   */
  const handleSuccessDeleteUser = (user) => {
    if (userTypesSelected.includes(user?.level)) {
      setUsersList({
        ...usersList,
        users: usersList.users.filter(_user => _user.id !== user.id)
      })
      setPaginationDetail({
        ...paginationDetail,
        total: paginationDetail?.total - 1
      })
    }
  }
  /**
   * Method to update addresses of selected user
   * @param {number, Array} useId and addresses updated addresses
   */
  const handleSuccessAddressesUpdate = (userId, addresses) => {
    const users = usersList.users.filter(user => {
      if (user.id === userId) {
        user.addresses = [...addresses]
      }
      return true
    })
    setUsersList({
      ...usersList,
      users: users
    })
  }

  /**
   * Listening action start to delete several users
   */
  useEffect(() => {
    if (!deleteUsersActionState.loading || selectedUsers.length === 0) return
    handleDeleteUser(selectedUsers[0])
  }, [selectedUsers, deleteUsersActionState])

  useEffect(() => {
    if (usersList.loading) return
    getUsers(1, null)
  }, [userTypesSelected, selectedUserActiveState, searchValue, isVerified, selectedOccupation])

  useEffect(() => {
    if ((Object.keys(filterValues?.changes).length > 0 || filterValues.clear) && !usersList.loading) getUsers(1, null)
  }, [filterValues])

  useEffect(() => {
    if (isProfessional) {
      getOccupations()
    }
  }, [isProfessional])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            actionStatus={actionStatus}
            usersList={usersList}
            filterValues={filterValues}
            setFilterValues={setFilterValues}
            userTypesSelected={userTypesSelected}
            handleSelectedUserTypes={handleSelectedUserTypes}
            paginationProps={paginationProps}
            getUsers={getUsers}
            searchValue={searchValue}
            onSearch={setSearchValue}
            paginationDetail={paginationDetail}
            selectedUserActiveState={selectedUserActiveState}
            isVerified={isVerified}
            setIsVerified={setIsVerified}
            handleChangeUserActiveState={handleChangeUserActiveState}
            handleChangeUserType={handleChangeUserType}
            handleChangeActiveUser={handleChangeActiveUser}
            handleDeleteUser={handleDeleteUser}
            selectedUsers={selectedUsers}
            handleSelectedUsers={handleSelectedUsers}
            deleteUsersActionState={deleteUsersActionState}
            handleDeleteSeveralUsers={handleDeleteSeveralUsers}
            handleSuccessUpdate={handleSuccessUpdate}
            handleSuccessAddUser={handleSuccessAddUser}
            handleSuccessDeleteUser={handleSuccessDeleteUser}
            handleSuccessAddressesUpdate={handleSuccessAddressesUpdate}
            occupationsState={occupationsState}
            selectedOccupation={selectedOccupation}
            handleSelectOccupation={setSelectedOccupation}
            setSelectedUsers={setSelectedUsers}
          />
        )
      }
    </>
  )
}

UsersList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Enable/Disable search option
   * Search Users list by a user ID
   */
  isSearchByUserId: PropTypes.bool,
  /**
   * Enable/Disable search option
   * Search Users list by a user email
   */
  isSearchByUserEmail: PropTypes.bool,
  /**
   * Enable/Disable search option
   * Search Users list by a user phone
   */
  isSearchByUserPhone: PropTypes.bool,
  /**
   * Array of user props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string)
}

UsersList.defaultProps = {
  propsToFetch: [
    'name', 'lastname', 'email', 'phone', 'photo', 'cellphone', 'schedule',
    'country_phone_code', 'city_id', 'city', 'address', 'addresses', 'max_days_in_future',
    'address_notes', 'driver_zone_restriction', 'dropdown_option_id', 'dropdown_option', 'location',
    'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname', 'birthdate', 'drivergroups'
  ],
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' },
  defaultUserTypesSelected: [0, 1, 2, 3]
}
