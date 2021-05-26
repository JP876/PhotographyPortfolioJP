import { Button, makeStyles, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppDispatch } from '../ContextAPI/Context';

const useStyles = makeStyles(theme => ({
    root: { padding: '1.4rem' },
    title: {
        paddingBottom: '1.6rem',
        textAlign: 'center',

        [theme.breakpoints.down('xs')]: {
            fontSize: '1.4rem',
        },
    },
    btnContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        marginBottom: '.4rem',

        '& a': {
            [theme.breakpoints.down('sm')]: {
                ...theme.smallButton,
            },
            '&:last-child': {
                [theme.breakpoints.down('xs')]: {
                    marginTop: '1rem',
                },
            },
            [theme.breakpoints.down('xs')]: {
                display: 'block',
                textAlign: 'center',
            },
        },

        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
}));

const Finish = props => {
    const appDispatch = useContext(AppDispatch);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.title} variant='h5'>
                Thank you for your purchase
            </Typography>
            <div className={classes.btnContainer}>
                <Button
                    component={Link}
                    to='/'
                    variant='contained'
                    type='button'
                    color='primary'
                >
                    Back to Home
                </Button>
                <Button
                    component={Link}
                    to='/gallery'
                    variant='outlined'
                    type='button'
                    onClick={() => {
                        appDispatch({ type: 'setValue', value: 1 });
                        appDispatch({ type: 'setSelectedIndex', selectedIndex: 0 });
                    }}
                >
                    To Gallery/ Shop
                </Button>
            </div>
        </div>
    );
};

export default Finish;
