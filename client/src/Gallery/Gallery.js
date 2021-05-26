import React, { useContext, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
    Backdrop,
    CircularProgress,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from '@material-ui/core';
import ImageElement from './ImageElement';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router';
import { updateProfile } from '../profileFunctions';
import { AppState } from '../ContextAPI/Context';
import useStyles from '../styles/galleryStyles';

const variants = {
    open: { scale: [0.8, 1] },
    close: { scale: [1, 0.6] },
};

const Gallery = props => {
    const { handleAddToCart, token, profile, setProfile, loggedIn } = props;
    const [selectedImage, setSelectedImage] = useState({});
    const [openBackdrop, setOpenBackdrop] = useState(false);
    const theme = useTheme();
    const history = useHistory();
    const classes = useStyles();
    const matches = useMediaQuery(theme.breakpoints.up('lg'));

    const appState = useContext(AppState);
    const { currentImages } = appState;

    const addToWishlist = id => {
        if (loggedIn) {
            const copyArr = [...profile.imagesId];
            copyArr.push(id);
            updateWishlist(copyArr);
        } else {
            history.push('/signup');
        }
    };

    const updateWishlist = async imagesArr => {
        try {
            const updateProfileRes = await updateProfile({ imagesArr }, token.current);
            setProfile(updateProfileRes);
        } catch (error) {}
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            {currentImages && currentImages.length === 0 ? (
                <div className={classes.progress}>
                    <CircularProgress
                        style={{ color: '#f9f9f8' }}
                        size='3.5rem'
                        thickness={3.5}
                    />
                    <Typography className={classes.loading} variant='h5'>
                        Loading images ...
                    </Typography>
                </div>
            ) : (
                <main className={classes.content}>
                    <div className={classes.toolbar} />

                    <Grid container alignItems='center' justify='center'>
                        {currentImages.map((img, i) => {
                            const { width, height } = img.assets[0].image_dimensions;

                            return (
                                <div className={classes.imgEl} key={uuidv4()}>
                                    <ImageElement
                                        theme={theme}
                                        width={width}
                                        height={height}
                                        image={img}
                                        setOpenBackdrop={setOpenBackdrop}
                                        setSelectedImage={setSelectedImage}
                                        handleAddToCart={handleAddToCart}
                                        addToWishlist={addToWishlist}
                                        loggedIn={loggedIn}
                                        profile={profile}
                                    />
                                </div>
                            );
                        })}
                    </Grid>
                    {selectedImage && selectedImage.id && (
                        <Backdrop
                            open={openBackdrop}
                            style={{ zIndex: '1000' }}
                            onClick={() => {
                                setOpenBackdrop(false);
                                setTimeout(() => setSelectedImage({}), 1200);
                            }}
                            transitionDuration={1200}
                        >
                            <motion.div
                                variants={variants}
                                animate={openBackdrop ? 'open' : 'close'}
                                style={{
                                    marginTop: `${matches ? '4.2rem' : '3.2rem'}`,
                                    backgroundImage: `url(${selectedImage.media.source})`,
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    height: '92%',
                                    width: '96%',
                                    cursor: 'pointer',
                                }}
                            />
                        </Backdrop>
                    )}
                </main>
            )}
        </div>
    );
};

export default Gallery;
