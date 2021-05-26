import React from 'react';
import { makeStyles, Slide, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
    alert: {
        backgroundColor: theme.palette.text.primary,

        '& span': {
            color: 'white',
            fontSize: '1rem',
            letterSpacing: '.5px',
        },
    },
}));

const SlideTransition = props => {
    return <Slide {...props} direction='up' />;
};

const SnackbarComp = props => {
    const { setOpen, open, message } = props;
    const classes = useStyles();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            TransitionComponent={SlideTransition}
        >
            <Alert onClose={handleClose} severity='success' className={classes.alert}>
                <span>{message}</span>
            </Alert>
        </Snackbar>
    );
};

export default SnackbarComp;
