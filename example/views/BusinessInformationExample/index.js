import React, { useEffect, useState } from 'react'

import { BusinessInformationUI } from '../../components/BusinessInformationUI'
import { BusinessInformation } from '../../../src/components/BusinessInformation'
import { TestComponent } from '../../components/TestComponent'
import { useApi } from '../../../src/contexts/ApiContext'

export const BusinessInformationExample = () => {
  const [ordering] = useApi()
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: BusinessInformationUI,
    /**
     * Business, object with all data to render
     */
    business: {},
    /**
     * google maps controls [zoomControl, streetViewControl, fullscreenControl, mapTypeControl, mapTypeId, mapTypeControlOptions]
     */
    googleMapsControls: {
      defaultZoom: 17,
      zoomControl: true,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeId: 'roadmap', // 'roadmap', 'satellite', 'hybrid', 'terrain'
      mapTypeControl: true,
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite']
      },
      isMarkerDraggable: true
    },
    /**
     * Components types before business information
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after business information
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before business information
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after business information
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }

  const [result, setResult] = useState(props.business)

  const getBusiness = async () => {
    const { content: { result } } = await ordering.businesses(41).get()
    setResult(result)
  }

  useEffect(() => {
    getBusiness()
  }, [])

  return <BusinessInformation {...props} business={result} />
}
