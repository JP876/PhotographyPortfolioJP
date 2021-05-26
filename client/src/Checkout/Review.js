import { Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../styles/reviewStyles';

const Review = props => {
    const { checkoutToken } = props;
    const classes = useStyles();

    return (
        <div className={classes.review}>
            <Typography variant='h6'>Order summary</Typography>
            <Grid container direction='column' alignItems='center'>
                {checkoutToken.live.line_items.map(el => (
                    <React.Fragment key={el.id}>
                        <div className={classes.itemGrid}>
                            <div
                                style={{
                                    backgroundImage: `url(${el.media.source})`,
                                }}
                                className={classes.itemImg}
                            />
                            <div className={classes.itemDescription}>
                                <Typography variant='h6'>
                                    Size: <span>{el.variants[0].option_name}</span>
                                </Typography>
                                <Typography variant='h6'>
                                    Quantity: <span>{el.quantity}</span>
                                </Typography>
                                <Typography variant='h6'>
                                    Price:{' '}
                                    <span>{el.line_total.formatted_with_symbol}</span>
                                </Typography>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </Grid>
        </div>
    );
};

export default Review;
