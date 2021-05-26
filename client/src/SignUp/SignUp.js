import { Paper, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import UpdateForm from '../UpdateForm';
import { handleSignUp } from '../profileFunctions';
import useStyles from '../styles/signUpStyles';
import MobileSingUp from './MobileSingUp';

const signUpForm = [
    {
        name: 'email',
        rules: {
            required: 'Email is required',
            pattern: {
                value: /^\S+@\S+$/,
                message: 'Invalid email',
            },
        },
    },
    {
        name: 'password',
        type: 'password',
        rules: {
            required: 'Password is required',
            minLength: {
                value: 8,
                message: 'Password must contain at least 8 characters',
            },
            pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
                message:
                    'Password must contain at least 1 lowercase character,at least 1 uppercase character and at least 1 numeric character.',
            },
        },
    },
];

const loginForm = [
    {
        name: 'email',
        rules: {
            required: 'Email is required',
            pattern: {
                value: /^\S+@\S+$/,
                message: 'Invalid email',
            },
        },
    },
    {
        name: 'password',
        rules: { required: 'Password is required' },
        type: 'password',
    },
];

const SignUp = props => {
    const { handleLogin, errorMessage, setErrorMessage } = props;
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    const signUpUser = async data => {
        const { email, password } = data;
        if (email && password) {
            try {
                const request = await handleSignUp(email, password);
                if (request.ok) {
                    handleLogin(data);
                } else {
                    const signUpRes = await request.json();
                    setErrorMessage({ message: signUpRes.message });
                    setTimeout(() => {
                        setErrorMessage({});
                    }, 4000);
                }
            } catch (error) {}
        }
        return null;
    };

    return (
        <div className={classes.signUpBackground}>
            {matches ? (
                <motion.div
                    variants={pageAnimation}
                    initial='hidden'
                    animate='show'
                    exit='exit'
                >
                    <Paper className={classes.signUpLoginContainer}>
                        <div className={classes.signUp}>
                            <Typography variant='h4'>Sign Up</Typography>
                            <UpdateForm
                                onSubmit={signUpUser}
                                btnMessage='Sign Up'
                                updateInputs={signUpForm}
                                style={classes.updateForm}
                                formStyle={classes.formStyles}
                            />
                        </div>
                        <div className={classes.login}>
                            <Typography variant='h4'>Login</Typography>
                            <UpdateForm
                                onSubmit={handleLogin}
                                btnMessage='Login'
                                updateInputs={loginForm}
                                style={classes.updateForm}
                                formStyle={classes.formStyles}
                            />
                            {errorMessage.message && (
                                <Typography
                                    style={{ textAlign: 'center', marginTop: '.4rem' }}
                                    color='secondary'
                                >
                                    {errorMessage.message}
                                </Typography>
                            )}
                        </div>
                    </Paper>
                </motion.div>
            ) : (
                <motion.div
                    variants={pageAnimation}
                    initial='hidden'
                    animate='show'
                    exit='exit'
                >
                    <MobileSingUp
                        handleLogin={handleLogin}
                        loginForm={loginForm}
                        errorMessage={errorMessage}
                        signUpUser={signUpUser}
                        signUpForm={signUpForm}
                    />
                </motion.div>
            )}
        </div>
    );
};

export default SignUp;
