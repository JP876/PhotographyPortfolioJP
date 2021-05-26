import { Button, FormControl, MenuItem, Select, Typography } from '@material-ui/core';
import { AnimatePresence, motion } from 'framer-motion';
import useStyles from '../styles/wishlistImagesStyles';

const CurrentWishlistImage = props => {
    const {
        currentImage,
        animate,
        price,
        handleChange,
        handleAddToCart,
        variantID,
        optionId,
        removeFromWishlist,
    } = props;
    const classes = useStyles();

    const variants = {
        open: { scale: [0.6, 1] },
        close: { scale: [0.59, 1] },
    };

    return (
        <div className={classes.currentImageContainer}>
            <AnimatePresence>
                <motion.div
                    style={{
                        backgroundImage: `url(${currentImage.media.source})`,
                    }}
                    className={classes.currentImage}
                    animate={animate ? 'open' : 'close'}
                    variants={variants}
                />
            </AnimatePresence>

            <div className={classes.optionsContainer}>
                <div className={classes.formControl}>
                    <FormControl>
                        <Select value={price} onChange={handleChange} variant='outlined'>
                            {currentImage.variants[0].options.map(el => (
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
                    <Button
                        size='small'
                        color='primary'
                        variant='contained'
                        onClick={() =>
                            handleAddToCart(currentImage.id, 1, {
                                [variantID]: optionId.current,
                            })
                        }
                    >
                        Add to Cart
                    </Button>
                    <Button
                        size='small'
                        color='secondary'
                        variant='contained'
                        onClick={removeFromWishlist}
                    >
                        Remove Image
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CurrentWishlistImage;
