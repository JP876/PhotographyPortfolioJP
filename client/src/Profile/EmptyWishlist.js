import { Button, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppDispatch } from '../ContextAPI/Context';
import useStyles from '../styles/profileStyles';

const EmptyWishlist = props => {
    const appDispatch = useContext(AppDispatch);
    const classes = useStyles();

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography className={classes.emptyWishlistTitle} variant='h6'>
                You didn't add any images to wishlist
            </Typography>
            <Button
                className={classes.emptyWishlistBtn}
                type='button'
                variant='contained'
                color='primary'
                size='medium'
                component={Link}
                to='/gallery'
                onClick={() => {
                    appDispatch({ type: 'setValue', value: 1 });
                    appDispatch({ type: 'setSelectedIndex', selectedIndex: 0 });
                }}
            >
                Go to Gallery/Shop
            </Button>
        </div>
    );
};

export default EmptyWishlist;
