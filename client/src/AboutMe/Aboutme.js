import React from 'react';
import { makeStyles, Paper, Typography } from '@material-ui/core';
import img from '../assets/IMG_3294-min.jpg';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            height: 'auto',
        },
    },
    aboutMeContainer: {
        height: '30rem',
        width: '50rem',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',

        '& h6': {
            padding: '2rem',
            textAlign: 'center',

            [theme.breakpoints.down('xs')]: {
                padding: '.6rem',
                fontSize: '1rem',
            },
        },

        [theme.breakpoints.down('sm')]: {
            width: '90%',
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            height: 'auto',
            width: '84%',
            margin: '4.8rem 0 2rem 0',
        },
    },
    imgContainer: {
        height: '100%',
        flex: '0 0 46%',
        padding: '1rem 2rem',

        [theme.breakpoints.down('xs')]: {
            height: '20rem',
            width: '80%',
            padding: '1rem 0',
        },
    },
    aboutMeImg: {
        height: '100%',
        width: '100%',
        backgroundSize: 'cover',
        backgroundAttachment: 'local',
        backgroundPosition: 'center',
        borderRadius: '4px',
        backgroundBlendMode: 'lighten',

        [theme.breakpoints.down('xs')]: {
            height: '20rem',

            //width: '74%',
        },
    },
}));

const Aboutme = () => {
    const classes = useStyles();

    return (
        <motion.div
            className={classes.root}
            variants={pageAnimation}
            initial='hidden'
            animate='show'
            exit='exit'
        >
            <Paper className={classes.aboutMeContainer}>
                <div className={classes.imgContainer}>
                    <div
                        style={{
                            backgroundImage: `linear-gradient(218deg, rgba(8,83,80,.56) 0%, rgba(17,176,170,.56) 100%), url(${img})`,
                        }}
                        className={classes.aboutMeImg}
                    />
                </div>
                <Typography variant='h6'>
                    Hi, my name is Josip.
                    <br /> I have spent several years doing photography, so on this
                    website are what I consider my best photos. I find insects
                    interesting, especially their colors, therefore some of my photos are
                    macro. However, I also find myself engaged in looking for the best
                    shot in vast landscapes.
                </Typography>
            </Paper>
        </motion.div>
    );
};

export default Aboutme;
