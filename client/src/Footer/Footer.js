import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.primary.main,
        height: '4rem',
        width: '100%',
        marginTop: 'auto',

        [theme.breakpoints.down('xs')]: {
            height: 'auto',
        },
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
                padding: '.4rem 0',
                width: '94%',
            },

            '&:not(:last-child)': {
                borderRight: `1px solid ${theme.palette.common.grey1}`,

                [theme.breakpoints.down('xs')]: {
                    border: '0',
                    borderBottom: `1px solid ${theme.palette.common.grey1}`,
                },
            },
        },

        '& a': {
            textDecoration: 'none',
            color: theme.palette.text.disabled,
        },

        [theme.breakpoints.down('xs')]: {
            margin: '0.4rem 0',
            height: 'auto',
            flexDirection: 'column',
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
                    Icon for favicon made by{' '}
                    <a
                        href='https://www.freepik.com'
                        title='Freepik'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Freepik
                    </a>{' '}
                    from{' '}
                    <a
                        href='https://www.flaticon.com/'
                        title='Flaticon'
                        target='_blank'
                        rel='noreferrer'
                    >
                        flaticon
                    </a>
                </Typography>
                <Typography variant='subtitle2'>
                    Made with React and Commerce.js by Josip Popović
                </Typography>
            </div>
        </footer>
    );
};

export default Footer;
