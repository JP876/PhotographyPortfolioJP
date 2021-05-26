import React, { useCallback, useEffect, useState } from 'react';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';
import { Button, Divider, Typography } from '@material-ui/core';
import useStyles from '../styles/paymentFormStyles';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = props => {
    const {
        shippingData,
        checkoutToken,
        backStep,
        nextStep,
        timeout,
        handleCaptureCheckout,
    } = props;
    const classes = useStyles();
    const [price, setPrice] = useState();
    const [errorMsg, setErrorMsg] = useState('');

    const findShippingOption = useCallback(() => {
        const option = checkoutToken.shipping_methods.filter(
            el => el.id === shippingData.shippingOption
        );
        const shippingOption = option[0].price.raw + checkoutToken.live.subtotal.raw;
        setPrice('€' + shippingOption + '.00');
    }, [checkoutToken, shippingData]);

    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setErrorMsg(error.message);
            setTimeout(() => setErrorMsg(''), 3000);
        }
        if (!error) {
            const orderData = {
                line_items: checkoutToken.live.line_items,
                customer: {
                    firstname: shippingData.firstName,
                    lastname: shippingData.lastName,
                    email: shippingData.email,
                },
                shipping: {
                    name: `${shippingData.firstName} ${shippingData.lastName}`,
                    street: shippingData.address,
                    town_city: shippingData.city,
                    county_state: shippingData.shippingSubdivision,
                    postal_zip_code: shippingData.zip,
                    country: shippingData.shippingCountry,
                },
                fulfillment: { shipping_method: shippingData.shippingOption },
                payment: {
                    gateway: 'stripe',
                    stripe: {
                        payment_method_id: paymentMethod.id,
                    },
                },
            };

            //handleCaptureCheckout(checkoutToken.id, orderData);
            timeout();
            nextStep();
        }
    };

    useEffect(() => findShippingOption(), [findShippingOption]);

    return (
        checkoutToken.live && (
            <div className={classes.root}>
                <Review checkoutToken={checkoutToken} />
                <Divider />
                <Typography className={classes.paymentTitle} variant='h6'>
                    Payment method
                </Typography>
                <Elements stripe={stripePromise}>
                    <ElementsConsumer>
                        {({ elements, stripe }) => (
                            <form
                                className={classes.paymentForm}
                                onSubmit={e => {
                                    handleSubmit(e, elements, stripe);
                                }}
                            >
                                <CardElement />
                                <Typography
                                    variant='subtitle2'
                                    color='secondary'
                                    style={{
                                        marginTop: '1rem',
                                    }}
                                >
                                    {errorMsg}
                                </Typography>
                                <div className={classes.btnsContainer}>
                                    <Button
                                        variant='contained'
                                        onClick={backStep}
                                        color='secondary'
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        type='submit'
                                        variant='contained'
                                        disabled={!stripe}
                                        color='primary'
                                    >
                                        Pay {price}
                                    </Button>
                                </div>
                            </form>
                        )}
                    </ElementsConsumer>
                </Elements>
            </div>
        )
    );
};

export default PaymentForm;
