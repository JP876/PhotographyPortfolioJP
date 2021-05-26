import React, { useCallback, useEffect, useState } from 'react';
import { FormControl, MenuItem, Select, withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from '../styles/imageElementStyles';
import SnackbarComp from '../Snackbar';
import { ZoomIn } from '@material-ui/icons';
import GalleryButton from './GalleryButton';

const ImageElement = props => {
    const {
        classes,
        image,
        setOpenBackdrop,
        setSelectedImage,
        handleAddToCart,
        addToWishlist,
        loggedIn,
        profile,
    } = props;
    const [price, setPrice] = useState(
        image.variants[0].options[1].price.formatted_with_symbol
    );
    const [disableWishBtn, setDisableWishBtn] = useState(false);
    const [open, setOpen] = useState(false);
    const [hover, setHover] = useState(false);
    const [cartBtn, setCartBtn] = useState(null);
    const [optionId, setOptionId] = useState();
    const variantID = image.variants[0].id;

    const handleChange = e => {
        setPrice(e.target.value);
    };

    const findOptionId = useCallback(() => {
        let optionObj = image.variants[0].options.filter(
            option => option.price.formatted_with_symbol === price
        );
        setOptionId(optionObj[0].id);
    }, [image, price]);

    const handleDisableWishBtn = useCallback(() => {
        if (loggedIn) {
            const found = profile.imagesId.find(id => id === image.id);
            if (found) setDisableWishBtn(true);
        }
    }, [image, loggedIn, profile]);

    useEffect(() => handleDisableWishBtn(), [handleDisableWishBtn]);

    useEffect(() => findOptionId(), [findOptionId]);

    return (
        price && (
            <Card>
                <CardActionArea
                    onClick={() => {
                        setSelectedImage(image);
                        setOpenBackdrop(true);
                    }}
                    disableRipple
                    disableTouchRipple
                    className={classes.root}
                    onMouseOver={() => {
                        setHover(true);
                    }}
                    onMouseLeave={() => {
                        setTimeout(() => setHover(false), 200);
                    }}
                >
                    <CardMedia className={classes.imgContainer} component='div'>
                        <div
                            style={{
                                backgroundImage: `url(${image.media.source})`,
                            }}
                            className={classes.styleImage}
                        >
                            {hover && (
                                <div className={classes.zoomIconContainer}>
                                    <ZoomIn className={classes.zoomIcon} />
                                </div>
                            )}
                        </div>
                    </CardMedia>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                    <div className={classes.formContainer}>
                        <FormControl className={classes.formControl}>
                            <Select
                                variant='outlined'
                                value={price}
                                onChange={handleChange}
                            >
                                {image.variants[0].options.map(el => (
                                    <MenuItem
                                        key={el.id}
                                        value={el.price.formatted_with_symbol}
                                    >
                                        {el.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Typography className={classes.price}>
                            Price: <span>{price}</span>
                        </Typography>
                    </div>
                    <div className={classes.btnContainer}>
                        <GalleryButton
                            onClick={() => {
                                addToWishlist(image.id);
                                setOpen(true);
                                setCartBtn(false);
                            }}
                            msg='Add to Wishlist'
                            disabled={disableWishBtn}
                            msgDisabled='Already added'
                        />
                        <GalleryButton
                            color='primary'
                            onClick={() => {
                                handleAddToCart(image.id, 1, {
                                    [variantID]: optionId,
                                });
                                setOpen(true);
                                setCartBtn(true);
                            }}
                            msg='Add to Cart'
                        />
                    </div>
                    <SnackbarComp
                        open={open}
                        setOpen={setOpen}
                        message={
                            cartBtn
                                ? 'Successfully added to cart'
                                : 'Successfully added to wishlist'
                        }
                    />
                </CardActions>
            </Card>
        )
    );
};

export default withStyles(styles)(ImageElement);
