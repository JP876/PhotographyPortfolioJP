import { Button, CircularProgress, Divider, Paper, Typography } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import useStyles from '../styles/cartStyles';
import { AppDispatch } from '../ContextAPI/Context';

const Cart = props => {
    const { cart, handleEmptyCart, deleteCartItem, updateCartItem } = props;
    const classes = useStyles();
    const appDispatch = useContext(AppDispatch);

    return (
        <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <div className={classes.toolbar} />
            {!cart.line_items ? (
                <div className={classes.progress}>
                    <CircularProgress size='3rem' thickness={3} />
                </div>
            ) : (
                <Paper className={classes.cartContainer}>
                    {cart.line_items.length > 0 &&
                        cart.line_items.map(image => (
                            <React.Fragment key={uuidv4()}>
                                <div className={classes.cartItem}>
                                    <div
                                        style={{
                                            backgroundImage: `url(${image.media.source})`,
                                        }}
                                        className={classes.cartImage}
                                    />
                                    <div className={classes.cartInfo}>
                                        <div className={classes.options}>
                                            <div className={classes.quantity}>
                                                <Typography
                                                    style={{ paddingBottom: '.4rem' }}
                                                    align='center'
                                                    variant='h5'
                                                >
                                                    Quantity
                                                </Typography>
                                                <div className={classes.addRemoveImg}>
                                                    <Button
                                                        variant='outlined'
                                                        size='small'
                                                        onClick={() =>
                                                            updateCartItem(
                                                                image.id,
                                                                image.quantity - 1
                                                            )
                                                        }
                                                        color='secondary'
                                                    >
                                                        -
                                                    </Button>
                                                    <Typography variant='h5'>
                                                        {image.quantity}
                                                    </Typography>
                                                    <Button
                                                        variant='outlined'
                                                        size='small'
                                                        onClick={() =>
                                                            updateCartItem(
                                                                image.id,
                                                                image.quantity + 1
                                                            )
                                                        }
                                                        color='primary'
                                                    >
                                                        +
                                                    </Button>
                                                </div>
                                            </div>
                                            <Typography
                                                variant='h5'
                                                className={classes.size}
                                            >
                                                Size: <br />{' '}
                                                <span>
                                                    {image.variants[0].option_name}
                                                </span>
                                            </Typography>
                                        </div>
                                        <div className={classes.price}>
                                            <Typography
                                                variant='h5'
                                                style={{ whiteSpace: 'pre-line' }}
                                            >
                                                Price:{' '}
                                                {image.total_items === 1
                                                    ? image.subtotal.formatted_with_symbol
                                                    : image.line_total
                                                          .formatted_with_symbol}
                                            </Typography>
                                            <Button
                                                type='button'
                                                variant='outlined'
                                                size='medium'
                                                onClick={() => deleteCartItem(image.id)}
                                                className={classes.removeBtn}
                                                color='secondary'
                                            >
                                                {image.quantity > 1
                                                    ? 'Remove Images'
                                                    : 'Remove Image'}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <Divider />
                            </React.Fragment>
                        ))}
                    {cart.line_items.length > 0 ? (
                        <div className={classes.finalDetails}>
                            <div className={classes.finalDetailsBtns}>
                                <Button
                                    type='button'
                                    variant='contained'
                                    size='medium'
                                    onClick={handleEmptyCart}
                                    color='secondary'
                                >
                                    Empty Cart
                                </Button>
                                <Button
                                    type='button'
                                    variant='contained'
                                    size='medium'
                                    component={Link}
                                    to='/checkout'
                                    color='primary'
                                >
                                    Checkout
                                </Button>
                            </div>

                            <Typography variant='h5'>
                                Subtotal: {cart.subtotal.formatted_with_symbol}
                            </Typography>
                        </div>
                    ) : (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                            }}
                        >
                            <Typography
                                variant='h6'
                                style={{ paddingTop: '.8rem', fontSize: '1.4rem' }}
                            >
                                You removed all images from cart
                            </Typography>
                            <div>
                                <Button
                                    style={{ margin: '1rem 0', padding: '.4rem 2rem' }}
                                    type='button'
                                    variant='contained'
                                    size='medium'
                                    component={Link}
                                    to='/gallery'
                                    onClick={() => {
                                        appDispatch({ type: 'setValue', value: 1 });
                                        appDispatch({
                                            type: 'setSelectedIndex',
                                            selectedIndex: 0,
                                        });
                                    }}
                                >
                                    Go to Gallery/Shop
                                </Button>
                            </div>
                        </div>
                    )}
                    <Divider />
                </Paper>
            )}
        </motion.div>
    );
};

export default Cart;
