import React from 'react'
import { Link } from 'react-router-dom'

import { ProductComponentUI } from '../../components/ProductComponentUI'
import { ProductComponent } from '../../../src/components/ProductComponent'
import { TestComponent } from '../../components/TestComponent'

export const ProductDetail = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: ProductComponentUI,
    /**
     * 
     */
    product: {
      "id": 1314,
      "name": "Premium MbWrap Chicken & Bacon (Crispy)",
      "price": 42,
      "description": "",
      "images": "https://s3.amazonaws.com/ordering-images2/res/ordering/image/upload/uvnlgj81xncoyioejvzs/1534195319.jpg",
      "sku": "-1",
      "category_id": 251,
      "inventoried": false,
      "quantity": 0,
      "featured": false,
      "enabled": true,
      "upselling": false,
      "in_offer": false,
      "offer_price": null,
      "rank": null,
      "category": {
        "id": 251,
        "business_id": 41,
        "name": "Wraps",
        "image": "https://res.cloudinary.com/ordering2/image/upload/v1539098927/w1disualek7puy8tz4ku.jpg",
        "rank": 1,
        "enabled": true
      },
      "extras": [
        {
          "id": 49,
          "business_id": 41,
          "name": "McBonalds option1",
          "description": null,
          "enabled": true,
          "pivot": {
            "product_id": 1314,
            "extra_id": 49
          },
          "options": [
            {
              "id": 53,
              "extra_id": 49,
              "name": "Size",
              "image": null,
              "conditioned": false,
              "respect_to": null,
              "min": 1,
              "max": 1,
              "rank": 1,
              "with_half_option": false,
              "allow_suboption_quantity": false,
              "limit_suboptions_by_max": false,
              "enabled": true,
              "suboptions": [
                {
                  "id": 172,
                  "extra_option_id": 53,
                  "name": "small",
                  "price": 1,
                  "image": null,
                  "sku": null,
                  "rank": 1,
                  "description": null,
                  "max": 1,
                  "half_price": null,
                  "enabled": true
                },
                {
                  "id": 173,
                  "extra_option_id": 53,
                  "name": "large",
                  "price": 3,
                  "image": null,
                  "sku": null,
                  "rank": 1,
                  "description": null,
                  "max": 1,
                  "half_price": null,
                  "enabled": true
                },
                {
                  "id": 174,
                  "extra_option_id": 53,
                  "name": "medium",
                  "price": 2,
                  "image": null,
                  "sku": null,
                  "rank": 1,
                  "description": null,
                  "max": 1,
                  "half_price": null,
                  "enabled": true
                }
              ]
            },
            {
              "id": 54,
              "extra_id": 49,
              "name": "Additional Ingredients?",
              "image": null,
              "conditioned": false,
              "respect_to": null,
              "min": 0,
              "max": 2,
              "rank": 2,
              "with_half_option": false,
              "allow_suboption_quantity": false,
              "limit_suboptions_by_max": false,
              "enabled": true,
              "suboptions": [
                {
                  "id": 175,
                  "extra_option_id": 54,
                  "name": "Onion",
                  "price": 0,
                  "image": null,
                  "sku": null,
                  "rank": 2,
                  "description": null,
                  "max": 1,
                  "half_price": null,
                  "enabled": true
                },
                {
                  "id": 176,
                  "extra_option_id": 54,
                  "name": "Cheese",
                  "price": 2,
                  "image": null,
                  "sku": null,
                  "rank": 2,
                  "description": null,
                  "max": 1,
                  "half_price": null,
                  "enabled": true
                }
              ]
            },
            {
              "id": 55,
              "extra_id": 49,
              "name": "Make it combo?",
              "image": null,
              "conditioned": false,
              "respect_to": null,
              "min": 1,
              "max": 1,
              "rank": 3,
              "with_half_option": false,
              "allow_suboption_quantity": false,
              "limit_suboptions_by_max": false,
              "enabled": true,
              "suboptions": [
                {
                  "id": 177,
                  "extra_option_id": 55,
                  "name": "No",
                  "price": 0,
                  "image": null,
                  "sku": null,
                  "rank": 3,
                  "description": null,
                  "max": 1,
                  "half_price": null,
                  "enabled": true
                },
                {
                  "id": 178,
                  "extra_option_id": 55,
                  "name": "Yes",
                  "price": 1,
                  "image": null,
                  "sku": null,
                  "rank": 3,
                  "description": null,
                  "max": 1,
                  "half_price": null,
                  "enabled": true
                }
              ]
            },
            {
              "id": 71,
              "extra_id": 49,
              "name": "Beverage",
              "image": null,
              "conditioned": true,
              "respect_to": 178,
              "min": 1,
              "max": 1,
              "rank": 4,
              "with_half_option": false,
              "allow_suboption_quantity": false,
              "limit_suboptions_by_max": false,
              "enabled": true,
              "suboptions": [
                {
                  "id": 236,
                  "extra_option_id": 71,
                  "name": "Coca Cola",
                  "price": 0,
                  "image": null,
                  "sku": null,
                  "rank": 4,
                  "description": null,
                  "max": 1,
                  "half_price": null,
                  "enabled": true
                },
                {
                  "id": 237,
                  "extra_option_id": 71,
                  "name": "Fanta",
                  "price": 0,
                  "image": null,
                  "sku": null,
                  "rank": 4,
                  "description": null,
                  "max": 1,
                  "half_price": null,
                  "enabled": true
                },
                {
                  "id": 238,
                  "extra_option_id": 71,
                  "name": "Coca Cola Light",
                  "price": 0,
                  "image": null,
                  "sku": null,
                  "rank": 4,
                  "description": null,
                  "max": 1,
                  "half_price": null,
                  "enabled": true
                }
              ]
            }
          ]
        }
      ],
      "ingredients": [
        {
          "id": 1,
          "product_id": 1314,
          "name": "lettuce",
          "image": null
        },
        {
          "id": 2,
          "product_id": 1314,
          "name": "tomato",
          "image": null
        },
        {
          "id": 3,
          "product_id": 1314,
          "name": "chicken",
          "image": null
        },
        {
          "id": 4,
          "product_id": 1314,
          "name": "sauce",
          "image": null
        }
      ],
      "gallery": [],
      "metafields": []
    },
    /**
     * Components types before login form
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after login form
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before login form
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after login form
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>],
  }

  const onAdd = (product) => {
    console.log('===== On clicked button add =====');
    console.log(product);
  }

  const onShare = (product) => {
    console.log('===== On clicked button share =====');
  }

  const onClose = () => {
    console.log('===== On clicked button close =====');
  }

  return <ProductComponent {...props}
    onAdd={onAdd}
    onShare={onShare}
    onClose={onClose}
  />
}
