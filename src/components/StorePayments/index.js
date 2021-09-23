import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import {
  initStripe,
  useGooglePay,
  useApplePay,
} from '@stripe/stripe-react-native';
import { useApi } from '../../contexts/ApiContext';
import { useSession } from '../../contexts/SessionContext';
import { useConfig } from '../../contexts/ConfigContext';
import { useLanguage } from '../../contexts/LanguageContext';

export const StorePayments = (props) => {
  const { UIComponent, item, cart, choosePaymentMethod, platform } = props;

  const [ordering] = useApi();
  const [{ token }] = useSession();
  const [{ configs }] = useConfig();
  const [, t] = useLanguage();
  const { loading, initGooglePay, createGooglePayPaymentMethod } =
    useGooglePay();
  const {
    presentApplePay,
    confirmApplePayPayment,
    isApplePaySupported,
    openApplePaySetup,
  } = useApplePay();

  /**
   * Method to get stripe credentials from API
   */
  const getCredentials = async () => {
    try {
      const {
        content: { result },
      } = await ordering.setAccessToken(token).paymentCards().getCredentials();

      return result?.publishable;
    } catch (err) {
      Alert.alert(
        t('FAILED', 'Failed'),
        t('ERROR_GET_CREDENTIALS', 'Error getting credentials for Google Pay')
      );

      return null;
    }
  };

  const openPaySetup = async () => {
    if (isApplePaySupported) {
      Alert.alert(
        t('UNSUPPORTED', 'Unsupported'),
        t(
          'UNSUPPORTED_PAYMENT_METHOD',
          'The device does not support this payment method'
        )
      );
      return;
    }

    const { error } = await openApplePaySetup();

    if (error) {
      Alert.alert(
        t(error.code.toUpperCase(), error.code),
        t(error.message.toUpperCase(), error.message)
      );
    }
  };

  const createPaymentMethod = async () => {
    if (loading) {
      Alert.alert(
        t('LOADING', 'Loading'),
        t('LOADING_PAYMENT_METHOD', 'Loading payment method')
      );
      return;
    }

    const { error, paymentMethod } = await createGooglePayPaymentMethod({
      amount: cart?.total,
      currencyCode:
        configs?.stripe_currency?.value ?? cart?.business?.currency ?? 'USD',
    });

    if (error) {
      Alert.alert(
        t(error.code.toUpperCase(), error.code),
        t(error.message.toUpperCase(), error.message)
      );
    } else if (paymentMethod) {
      choosePaymentMethod(item, paymentMethod);
    }
  };

  useEffect(() => {
    const initialize = async () => {
      const publishableKey = await getCredentials();

      if (publishableKey) {
        await initStripe({
          publishableKey,
        });

        if (platform === 'android') {
          const { error } = await initGooglePay({
            testEnv: true,
            merchantName: cart?.business?.name,
            countryCode: 'US', // Needs to be replaced by a variable
            billingAddressConfig: {
              format: 'FULL',
              isPhoneNumberRequired: true,
              isRequired: false,
            },
            existingPaymentMethodRequired: false,
            isEmailRequired: true,
          });

          if (error) {
            Alert.alert(
              t(error.code.toUpperCase(), error.code),
              t(error.message.toUpperCase(), error.message)
            );
          }
        }
      }
    };

    initialize();
  }, []);

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          createPaymentMethod={createPaymentMethod}
          openPaySetup={openPaySetup}
        />
      )}
    </>
  );
};

StorePayments.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * item, this must contain all the properties of the payment method
   */
  item: PropTypes.object,
  /**
   * cart, this must contain all the information from the shopping cart
   */
  cart: PropTypes.object,
  /**
   * choose Payment Method, Set the payment method
   */
  choosePaymentMethod: PropTypes.func,
};
