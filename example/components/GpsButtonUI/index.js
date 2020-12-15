import React from 'react'

export const GpsButtonUI = (props) => {
  const {
    handleGPS,
    isGoogleButton,
    googleReady,
    isLoading,
    IconButton,
    IconLoadingButton
  } = props

  return (
    <button type='button' onClick={handleGPS} disabled={(isGoogleButton && !googleReady) || isLoading}>
      {isLoading ? (
        IconLoadingButton ? 'Loading' : 'GPS'
      ) : (
        IconButton ? 'ICON' : 'GPS'
      )}
    </button>
  )
}
