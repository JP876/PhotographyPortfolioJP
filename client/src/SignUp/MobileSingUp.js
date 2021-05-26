import { Button, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import UpdateForm from '../UpdateForm';
import useStyles from '../styles/signUpStyles';

const MobileSingUp = props => {
    const { handleLogin, loginForm, errorMessage, signUpUser, signUpForm } = props;
    const classes = useStyles();
    const [login, setLogin] = useState(true);

    return login ? (
        <Paper>
            <div className={classes.signUp}>
                <Typography style={{ textAlign: 'center' }} variant='h4'>
                    Login
                </Typography>
                <UpdateForm
                    onSubmit={handleLogin}
                    btnMessage='Login'
                    updateInputs={loginForm}
                    style={classes.updateForm}
                    formStyle={classes.formStyles}
                    clean={true}
                />
                {errorMessage.message && (
                    <Typography
                        style={{
                            textAlign: 'center',
                            marginTop: '.4rem',
                        }}
                        color='secondary'
                    >
                        {errorMessage.message}
                    </Typography>
                )}
                <Button
                    className={classes.mobileBtn}
                    variant='outlined'
                    size='small'
                    onClick={() => {
                        setLogin(!login);
                    }}
                >
                    Need account ?
                </Button>
            </div>
        </Paper>
    ) : (
        <Paper>
            <div className={classes.signUp}>
                <Typography style={{ textAlign: 'center' }} variant='h4'>
                    Sign Up
                </Typography>
                <UpdateForm
                    onSubmit={signUpUser}
                    btnMessage='Sign Up'
                    updateInputs={signUpForm}
                    style={classes.updateForm}
                    formStyle={classes.formStyles}
                    clean={true}
                />
                {errorMessage.message && (
                    <Typography
                        style={{
                            textAlign: 'center',
                            marginTop: '.4rem',
                        }}
                        color='secondary'
                    >
                        {errorMessage.message}
                    </Typography>
                )}
                <Button
                    className={classes.mobileBtn}
                    variant='outlined'
                    size='small'
                    onClick={() => setLogin(!login)}
                >
                    Already have account ?
                </Button>
            </div>
        </Paper>
    );
};

export default MobileSingUp;
