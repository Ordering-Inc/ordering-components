import React from 'react'

import { OrderDetailsUI } from '../../components/OrderDetailsUI'
import { OrderDetails } from '../../../src/components/OrderDetails'
import { TestComponent } from '../../components/TestComponent'

export const OrderDetailsExample = ({ ordering }) => {
  const props = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: OrderDetailsUI,
    /**
     * Order, this must be contains an object with all order info
     */
    order: {
      app_id: 'orderingweb',
      attachments: [],
      business: {
        address: '300 5th Avenue, New York, NY, USA',
        address_notes: null,
        cellphone: '123123123123',
        city_id: 1,
        email: 'test@ordering.co',
        id: 51,
        location: {
          lat: 40.74677350000001,
          lng: -73.98595739999996,
          zipcode: -1,
          zoom: 15
        },
        logo: 'https://res.cloudinary.com/ordering2/image/upload/v1562277711/bk6kvzrnfkvqgav9qi7j.png',
        name: 'McBonalds',
        order_id: 51,
        phone: '123123',
        zipcode: null
      },
      business_id: 41,
      cash: null,
      comment: null,
      created_at: '2020-09-03 13:52:27',
      customer: {
        address: '500 5th Ave, New York, NY 10110, USA',
        address_notes: 'Special address notes here',
        cellphone: '33183467364',
        country_phone_code: null,
        dropdown_option: null,
        dropdown_option_id: null,
        email: 'superadmin@ordering.co',
        id: 51,
        internal_number: null,
        lastname: 'Admin',
        location: {
          lat: 40.7539143,
          lng: -73.9810162
        },
        map_data: null,
        middle_name: null,
        name: 'Demo',
        order_id: 51,
        phone: null,
        photo: null,
        second_lastname: null,
        tag: 'other',
        zipcode: '10001'
      },
      customer_id: 1,
      delivery_datetime: '2020-09-03 09:52:00',
      delivery_type: 1,
      delivery_zone_id: 5,
      delivery_zone_price: 1,
      discount: 0,
      driver: null,
      driver_id: null,
      driver_tip: 0,
      driver_tip_total: 0,
      history: [{
        created_at: '2020-09-03 09:52:00',
        data: null,
        id: 148,
        order_id: 51,
        type: 1,
        updated_at: '2020-09-03 13:52:27'
      }],
      id: 51,
      language: {
        code: 'en',
        default: true,
        deleted_at: null,
        enabled: true,
        id: 1,
        name: 'English',
        rtl: '0'
      },
      language_id: 1,
      metafields: [],
      offer: 0,
      offer_id: null,
      pay_data: null,
      paymethod: {
        created_at: '2018-10-06 18:18:25',
        deleted_at: null,
        enabled: true,
        gateway: 'cash',
        id: 1,
        name: 'Cash',
        updated_at: '2018-10-06 18:18:25'
      },
      paymethod_id: 1,
      products: [{
        category_id: 252,
        comment: null,
        featured: false,
        id: 74,
        images: 'https://s3.amazonaws.com/ordering-images2/res/ordering/image/upload/eapprhj4mdy8aefualfj/1534195475.jpg',
        in_offer: false,
        ingredients: [],
        name: 'Hamburger',
        object: {},
        offer_price: null,
        options: [],
        order_id: 51,
        price: 7,
        product_id: 1299,
        quantity: 1,
        upselling: false
      }],
      ref_business: {
        about: '',
        address: '300 5th Avenue, New York, NY, USA',
        address_notes: null,
        alcohol: false,
        always_deliver: false,
        cellphone: '123123123123',
        city_id: 1,
        currency: 'USD',
        delivery_price: 0,
        delivery_time: '0:0',
        description: '',
        email: 'test@ordering.co',
        enabled: true,
        featured: false,
        fixed_usage_fee: 1,
        food: true,
        groceries: false,
        header: 'https://res.cloudinary.com/ordering2/image/upload/v1562277717/tiznbig1lvmegwemunpn.png',
        id: 41,
        laundry: false,
        location: {
          lat: 40.74677350000001,
          lng: -73.98595739999996,
          zipcode: -1,
          zoom: 15
        },
        logo: 'https://res.cloudinary.com/ordering2/image/upload/v1562277711/bk6kvzrnfkvqgav9qi7j.png',
        minimum: 0,
        name: 'McBonalds',
        owner_id: 3,
        owners: [{
          address: '5th avenue',
          address_notes: null,
          available: false,
          birthdate: null,
          busy: false,
          cellphone: '',
          city_id: 1,
          country_phone_code: null,
          created_at: '2018-10-06 18:18:24',
          deleted_at: null,
          dropdown_option_id: null,
          email: 'business@ordering.co',
          enabled: true,
          id: 3,
          internal_number: null,
          language_id: 1,
          lastname: '',
          level: 2,
          location: {
            lat: 40.774734,
            lng: -73.9653844,
            zipcode: -1,
            zoom: 15
          },
          login_type: 0,
          map_data: null,
          middle_name: null,
          name: 'Business',
          phone: '',
          photo: null,
          pivot: {
            business_id: 41,
            owner_id: 3
          },
          push_notifications: true,
          second_lastname: null,
          social_id: null,
          updated_at: '2018-10-06 18:18:25',
          zipcode: ''
        }],
        percentage_usage_fee: 10,
        phone: '123123',
        pickup_time: '0:0',
        printer_id: null,
        schedule: [],
        service_fee: 9,
        slug: 'mcbonalds',
        tax: 10,
        tax_type: 2,
        timezone: 'America/New_York',
        use_printer: false,
        zipcode: null
      },
      ref_user: {
        address: '500 5th Ave, New York, NY 10110, USA',
        address_notes: 'Special address notes here',
        available: false,
        birthdate: null,
        busy: false,
        cellphone: '33183467364',
        city_id: 1,
        country_phone_code: null,
        created_at: '2018-10-06 18:18:24',
        deleted_at: null,
        dropdown_option_id: 0,
        email: 'superadmin@ordering.co',
        enabled: true,
        id: 1,
        internal_number: null,
        language_id: 1,
        lastname: 'Admin',
        level: 0,
        location: {
          lat: 40.7539143,
          lng: -73.9810162
        },
        login_type: 0,
        map_data: null,
        middle_name: null,
        name: 'Demo',
        phone: '2332223',
        photo: null,
        push_notifications: true,
        second_lastname: null,
        social_id: null,
        updated_at: '2018-10-08 17:01:01',
        zipcode: '10001'
      },
      review: null,
      service_fee: 9,
      service_fee_total: 0.63,
      status: 0,
      subtotal: 7,
      tax: 10,
      tax_total: 0.7,
      tax_type: 2,
      to_print: false,
      total: 9.33,
      updated_at: '2020-09-03 13:52:27'
    },
    /**
     * Components types before order details
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after order details
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before order details
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after order details
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }
  return <OrderDetails {...props} />
}
