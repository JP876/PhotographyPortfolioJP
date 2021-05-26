import React, { useCallback, useEffect, useState } from 'react';
import {
    CircularProgress,
    CssBaseline,
    Paper,
    Step,
    StepLabel,
    Stepper,
    Typography,
} from '@material-ui/core';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import { commerce } from '../commerce';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import Finish from './Finish';
import useStyles from '../styles/checkoutStyles';
import { useHistory } from 'react-router';

const steps = ['Shipping address', 'Payment details', 'Final stage'];

const Checkout = props => {
    const { cart, handleEmptyCart, profile, handleCaptureCheckout } = props;
    const classes = useStyles();
    const history = useHistory();
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});
    const [isFinished, setIsFinished] = useState(false);

    const nextStep = () => setActiveStep(prevActiveStep => prevActiveStep + 1);
    const backStep = () => setActiveStep(prevActiveStep => prevActiveStep - 1);

    const next = data => {
        setShippingData(data);
        nextStep();
    };

    const generateToken = useCallback(async () => {
        if (cart.id && cart.total_items > 0) {
            try {
                const token = await commerce.checkout.generateToken(cart.id, {
                    type: 'cart',
                });
                setCheckoutToken(token);
            } catch (error) {
                history.push('/');
            }
        }
    }, [cart, history]);

    const timeout = () => {
        setTimeout(() => {
            setIsFinished(true);
            handleEmptyCart();
            setShippingData({});
        }, 4000);
    };

    useEffect(() => {
        generateToken();
    }, [generateToken]);

    return (
        <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <CssBaseline />
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant='h4' align='center'>
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map(step => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    {checkoutToken && checkoutToken.live.line_items.length !== 0 ? (
                        activeStep === 0 ? (
                            <AddressForm
                                checkoutToken={checkoutToken}
                                next={next}
                                profile={profile}
                            />
                        ) : activeStep === 1 ? (
                            <PaymentForm
                                shippingData={shippingData}
                                checkoutToken={checkoutToken}
                                backStep={backStep}
                                nextStep={nextStep}
                                handleEmptyCart={handleEmptyCart}
                                timeout={timeout}
                                handleCaptureCheckout={handleCaptureCheckout}
                            />
                        ) : (
                            activeStep === 2 &&
                            (isFinished ? (
                                <Finish />
                            ) : (
                                <div className={classes.progress}>
                                    <CircularProgress size='3rem' thickness={3} />
                                </div>
                            ))
                        )
                    ) : (
                        <div className={classes.progress}>
                            <CircularProgress size='3rem' thickness={3} />
                        </div>
                    )}
                </Paper>
            </main>
        </motion.div>
    );
};

export default Checkout;
