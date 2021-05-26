import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',

        '& h6': {
            textAlign: 'center',
        },
    },
    divider: {
        position: 'absolute',
        bottom: '11rem',
        left: '0',
        height: '2px',
        width: '100%',
    },
    paymentTitle: {
        margin: '.6rem 0',
    },
    paymentForm: {
        '& .StripeElement.StripeElement--empty': {
            padding: '1rem 3rem 0 3rem',

            [theme.breakpoints.down('sm')]: {
                padding: '1rem 1rem 0 1rem',
            },
        },
    },
    btnsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(50, 50, 50, .1)',
        padding: '1.4rem 2rem ',
        marginTop: '2rem',

        '& button': {
            [theme.breakpoints.down('sm')]: {
                ...theme.smallButton,
            },
        },

        [theme.breakpoints.down('xs')]: {
            padding: '1.2rem ',
        },
    },
}));

export default useStyles;
