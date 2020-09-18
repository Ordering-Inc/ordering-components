import React, { useEffect, useState } from "react";

import { ProductShare } from "../../../src/components/ProductShare";
import { ProductShareUI } from "../../components/ProductShareUI";
import { TestComponent } from '../../components/TestComponent'

export const ProductShareExample = ({ ordering }) => {
  const [bussinessName, setBussinessName] = useState("");
  const [categoryID, setCategoryID] = useState(undefined);
  const [productID, setProductID] = useState(undefined);

  useEffect(() => {
    product();
  }, []);

  const product = async () => {
    const { response } = await ordering.businesses(47).get();
    const productShown = response.data.result;
    setBussinessName(productShown.name.toLowerCase());
    setCategoryID(productShown.categories[0].id);
    setProductID(productShown.categories[0].products[0].id)
  };

  const props = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: ProductShareUI,

    /**
     * Current product business name
     */
    bussinessName: bussinessName,

    /**
     * product category id
     */
    categoryID: categoryID,

    /**
     * product id
     */
    productID: productID,

    /**
     * Example url to display the name, description and image properly in any social red
     */
    url: `https://orderingweb.ordering.co/${bussinessName}?category=${categoryID}&product=${productID}`,

    /**
     * Components types before moment option
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after moment option
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before moment option
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after moment option
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  };

  return <ProductShare {...props} />;
};
