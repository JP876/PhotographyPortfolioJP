import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.primary.main,
        height: '4rem',
        width: '100%',
        marginTop: 'auto',
    },
    footerContainer: {
        height: '4rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '& h6': {
            color: theme.palette.common.grey1,
            padding: '0 1rem',
            textAlign: 'center',

            [theme.breakpoints.down('xs')]: {
                padding: '0 .4rem',
            },

            '&:not(:last-child)': {
                borderRight: `1px solid ${theme.palette.common.grey1}`,
            },
        },
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <div className={classes.footerContainer}>
                <Typography variant='subtitle2'>All Rights Reserved</Typography>
                <Typography variant='subtitle2'>
                    Made with React and Commerce.js by Josip Popović
                </Typography>
            </div>
        </footer>
    );
};

export default Footer;
