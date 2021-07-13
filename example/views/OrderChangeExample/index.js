import React from "react";

import { OrderChangeUI } from "../../components/OrderChangeUI";
import { OrderChange } from "../../../src/components/OrderChange";
import { TestComponent } from "../../components/TestComponent";
import { useParams } from 'react-router-dom'

export const OrderChangeExample = () => {
  const { orderId } = useParams()
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: OrderChangeUI,
    /**
      * This must be contains orderId to fetch
      */
    orderId: orderId || '77bdc3ad-cb88-47fe-af40-9763e428a7c3',
    /**
      * Order, this must be contains an object with all order info
      */
    order: { hidden: ['original', 'api', 'hidden', 'customer', 'business'], original: { id: 556, uuid: '77bdc3ad-cb88-47fe-af40-9763e428a7c3', paymethod_id: 1, business_id: 48, customer_id: 54, delivery_type: 1, delivery_datetime: '2020-12-23 09:00:00', service_fee: 1, tax_type: 2, tax: 2, delivery_zone_price: 10, offer: 0, offer_type: null, offer_rate: 0, discount: 0, coupon: null, status: 0, comment: null, driver_id: null, driver_tip: 0, pay_data: null, refund_data: null, to_print: false, language_id: 1, app_id: 'orderingweb', cash: null, delivery_zone_id: 3, locked: false, order_group_id: null, logistic_status: 0, created_at: '2020-12-22 23:10:07', updated_at: '2020-12-22 23:10:07', offer_id: null, prepared_in: null, delivered_in: null, last_driver_assigned_at: null, last_logistic_attempted_at: null, priority: 0, logistic_attemps: 0, expired_at: null, resolved_at: null, delivery_datetime_utc: '2020-12-23 17:00:00', unread_count: 13, unread_direct_count: 13, unread_general_count: 0, last_message_at: '2021-01-15 15:11:30', last_direct_message_at: '2021-01-15 15:11:30', last_general_message_at: null, hash_key: '93a37612a321f4021a8d185381a9f6db9d44c1cc5f192a2781aa31e5c016ef69', summary: { subtotal: 160, discount: 0, subtotal_with_discount: 160, subtotal_with_tax: 163.2, tax: 3.2, delivery_price: 10, service_fee: 1.6, driver_tip: 0, total: 174.8 }, customer: { id: 556, order_id: 556, name: 'sergio', photo: null, lastname: 'test', email: 'sergio+admin@ordering.co', dropdown_option_id: null, address: '556, Taiwan, Nantou County, Xinyi Township, 人倫林道支線', address_notes: null, zipcode: null, cellphone: '4141231232', phone: null, location: { lat: 23.7038246, lng: 120.964451 }, internal_number: null, map_data: null, tag: 'other', middle_name: null, second_lastname: null, country_phone_code: null, dropdown_option: null }, business: { id: 556, order_id: 556, name: 'The Cellar', logo: 'https://res.cloudinary.com/ordering2/image/upload/v1562275854/urab2ykp8nof14ukmg2f.jpg', email: 'test@ordering.co', city_id: 2, address: '410 Market Street, San Francisco, CA, USA', address_notes: null, zipcode: null, cellphone: '8884894651651', phone: '87945465165156', location: { lat: 37.791370300000004, lng: -122.39876809999998, zipcode: -1, zoom: 15 }, city: { id: 2, name: 'San Francisco', country_id: 1, administrator_id: 4, enabled: true } }, paymethod: { id: 1, name: 'Cash', gateway: 'cash', enabled: true, deleted_at: null, created_at: '2018-10-06 18:18:25', updated_at: '2018-10-06 18:18:25' }, products: [{ id: 697, product_id: 1451, order_id: 556, name: 'Tequila', price: 35, quantity: 4, comment: null, ingredients: [], options: [{ id: 64, name: 'Size', image: null, allow_suboption_quantity: false, with_half_option: false, limit_suboptions_by_max: false, suboptions: [{ id: 221, name: 'Bottle', image: null, price: 5, half_price: null, position: 'whole', quantity: 1 }] }], featured: false, upselling: false, in_offer: false, offer_price: null, images: 'https://res.cloudinary.com/ordering2/image/upload/v1606329384/byshj3gccrkyzpm6ernl.png', category_id: 280, total: 160 }], driver: null, review: null, user_review: null, attachments: [], history: [{ id: 1610, order_id: 556, type: 1, data: null, created_at: '2020-12-22 15:10:00', updated_at: '2020-12-22 23:10:07' }], order_group: null, metafields: [{ id: 37, object_id: 556, model: 'Order', key: 'hash_key', value: '93a37612a321f4021a8d185381a9f6db9d44c1cc5f192a2781aa31e5c016ef69', value_type: 'text', created_at: '2020-12-22 23:10:07', updated_at: '2020-12-22 23:10:07' }] }, api: { attributes: [], query: {}, ordering: { url: 'https://apiv4-staging.ordering.co', version: 'v400', project: 'luisv4', language: 'en', accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGl2NC1zdGFnaW5nLm9yZGVyaW5nLmNvXC92NDAwXC9lblwvbHVpc3Y0XC9hdXRoIiwiaWF0IjoxNjEyNDY0MzUwLCJleHAiOjE2NDQwMDAzNTAsIm5iZiI6MTYxMjQ2NDM1MCwianRpIjoiT20wVWVRcGFWaVpkU1ZCVCIsInN1YiI6NTQsImxldmVsIjowfQ.zvCpawsKzRc-aRI45C64HD735rUF_VVBFUH5FqnDl7k', apiKey: null }, orderId: '77bdc3ad-cb88-47fe-af40-9763e428a7c3' }, id: 556, uuid: '77bdc3ad-cb88-47fe-af40-9763e428a7c3', paymethod_id: 1, business_id: 48, customer_id: 54, delivery_type: 1, delivery_datetime: '2020-12-23 09:00:00', service_fee: 1, tax_type: 2, tax: 2, delivery_zone_price: 10, offer: 0, offer_type: null, offer_rate: 0, discount: 0, coupon: null, status: 0, comment: null, driver_id: null, driver_tip: 0, pay_data: null, refund_data: null, to_print: false, language_id: 1, app_id: 'orderingweb', cash: null, delivery_zone_id: 3, locked: false, order_group_id: null, logistic_status: 0, created_at: '2020-12-22 23:10:07', updated_at: '2020-12-22 23:10:07', offer_id: null, prepared_in: null, delivered_in: null, last_driver_assigned_at: null, last_logistic_attempted_at: null, priority: 0, logistic_attemps: 0, expired_at: null, resolved_at: null, delivery_datetime_utc: '2020-12-23 17:00:00', unread_count: 13, unread_direct_count: 13, unread_general_count: 0, last_message_at: '2021-01-15 15:11:30', last_direct_message_at: '2021-01-15 15:11:30', last_general_message_at: null, hash_key: '93a37612a321f4021a8d185381a9f6db9d44c1cc5f192a2781aa31e5c016ef69', driver: null, review: null, user_review: null, order_group: null },
    /**
     * Components types before my orders list
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after my orders list
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before my orders list
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after my orders list
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>],
  };

  return <OrderChange {...props} />;
};
