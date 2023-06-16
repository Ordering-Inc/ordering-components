import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../../contexts/ApiContext'
import { useSession } from '../../../contexts/SessionContext'
import { useWebsocket } from '../../../contexts/WebsocketContext'

export const PointsWalletLevels = (props) => {
  const {
    UIComponent
  } = props

  const [ordering] = useApi()
  const socket = useWebsocket()
  const [{ token }] = useSession()
  const [levelList, setLevelList] = useState({ loading: false, levels: [], error: null })

  /**
   * Add a level
   * @param {Object || Array} level data of level
   */
  const handleAddLevelList = (level) => {
    const levels = [...levelList.levels]
    levels.push(level)
    setLevelList({ ...levelList, levels: levels })
  }

  /**
   * Update a level
   * @param {Object || Array} result data of level
   */
  const handleUpdateLevelList = (result) => {
    const updatedLevels = levelList?.levels.map(level => {
      if (level.id === result.id) return result
      else return level
    })
    setLevelList({ ...levelList, levels: updatedLevels })
  }

  /**
   * Delete a level
   * @param {Object || Array} level data of level
   */
  const handleDeleteLevelList = (level) => {
    const levels = levelList?.levels?.filter(item => item.id !== level.id)
    setLevelList({ ...levelList, levels: levels })
  }

  /**
   * Method to get level list from API
   */
  const getLevelList = async () => {
    try {
      setLevelList({ ...levelList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId()
        }
      }
      const fetchEndpoint = `${ordering.root}/loyalty_levels`
      const response = await fetch(fetchEndpoint, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setLevelList({ ...levelList, loading: false, error: null, levels: result })
      } else {
        setLevelList({ ...levelList, loading: false, error: result })
      }
    } catch (error) {
      setLevelList({ ...levelList, loading: false, error: error.message })
    }
  }

  useEffect(() => {
    getLevelList()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          levelList={levelList}
          handleAddLevelList={handleAddLevelList}
          handleUpdateLevelList={handleUpdateLevelList}
          handleDeleteLevelList={handleDeleteLevelList}
        />
      )}
    </>
  )
}

PointsWalletLevels.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before business type filter
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after business type filter
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

PointsWalletLevels.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
