import { CircularProgress, Divider, Typography } from '@material-ui/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import CurrentWishlistImage from './CurrentWishlistImage';
import ListImages from './ListImages';
import EmptyWishlist from './EmptyWishlist';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import useStyles from '../styles/wishlistImagesStyles';

const WishlistImages = props => {
    const {
        images,
        profile: { imagesId },
        handleAddToCart,
        token,
        setProfile,
    } = props;
    const classes = useStyles();
    const [wishlistImgs, setWishlistImgs] = useState(null);
    const [currentImage, setCurrentImage] = useState(null);
    const [variantID, setVariantID] = useState('');
    const [price, setPrice] = useState('');
    const [animate, setAnimate] = useState(true);
    const [loading, setLoading] = useState(false);
    const optionId = useRef('');

    const filterImages = useCallback(
        imagesId => {
            let uniqueIds = [...new Set(imagesId)];
            let filteredImgs = uniqueIds.map(img => {
                return images.filter(fImg => fImg.id === img).shift();
            });
            setWishlistImgs(filteredImgs);
        },
        [images]
    );

    const handleChange = e => {
        setPrice(e.target.value);
    };

    const findOptionId = useCallback(() => {
        let optionObj = currentImage.variants[0].options.filter(
            option => option.price.formatted_with_symbol === price
        );
        optionId.current = optionObj[0].id;
    }, [currentImage, price]);

    const removeFromWishlist = () => {
        let filteredImgs = wishlistImgs.filter(img => img.id !== currentImage.id);
        let imagesArr = filteredImgs.map(img => img.id);
        filterImages(imagesArr);
        updateWishlist(imagesArr);
    };

    const updateWishlist = async imagesArr => {
        try {
            const updateProfile = await fetch('/api/users/profile', {
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token.current,
                },
                method: 'PATCH',
                body: JSON.stringify({ imagesArr }),
            });
            setProfile(await updateProfile.json());
        } catch (error) {}
    };

    useEffect(() => {
        filterImages(imagesId);
    }, [filterImages, imagesId]);

    useEffect(() => {
        if (wishlistImgs) {
            if (wishlistImgs.length > 0) {
                if (wishlistImgs[0]) {
                    setCurrentImage(wishlistImgs[0]);
                    setPrice(
                        wishlistImgs[0].variants[0].options[1].price.formatted_with_symbol
                    );
                    setVariantID(wishlistImgs[0].variants[0].id);
                    setLoading(false);
                } else {
                    setLoading(true);
                }
            } else {
                setCurrentImage(null);
            }
        }
    }, [wishlistImgs]);

    useEffect(() => {
        if (currentImage) {
            findOptionId();
        }
    }, [findOptionId, currentImage]);

    return (
        <div className={classes.root}>
            {wishlistImgs && currentImage && price ? (
                <motion.div
                    variants={pageAnimation}
                    initial='hidden'
                    animate='show'
                    exit='exit'
                >
                    <div className={classes.title}>
                        <Typography variant='h6'>Wishlist</Typography>
                    </div>

                    <div className={classes.wishlistImgsContainer}>
                        <CurrentWishlistImage
                            currentImage={currentImage}
                            animate={animate}
                            price={price}
                            handleChange={handleChange}
                            handleAddToCart={handleAddToCart}
                            variantID={variantID}
                            optionId={optionId}
                            removeFromWishlist={removeFromWishlist}
                        />
                        <ListImages
                            wishlistImgs={wishlistImgs}
                            animate={animate}
                            setCurrentImage={setCurrentImage}
                            setVariantID={setVariantID}
                            setAnimate={setAnimate}
                        />
                    </div>
                </motion.div>
            ) : loading ? (
                <div className={classes.progress}>
                    <CircularProgress size='3.5rem' thickness={3.5} />
                </div>
            ) : (
                <EmptyWishlist />
            )}
        </div>
    );
};

export default WishlistImages;
