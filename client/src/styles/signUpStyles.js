import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    signUpBackground: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',

        [theme.breakpoints.down('xs')]: {
            width: '84%',
        },
    },
    signUpLoginContainer: {
        display: 'flex',
        width: '48rem',

        [theme.breakpoints.down('md')]: {
            width: '40rem',
        },
    },
    signUp: {
        flex: '0 0 50%',
        padding: '2rem 3rem',

        '& h4': {
            marginBottom: '1.6rem',

            [theme.breakpoints.down('md')]: {
                marginBottom: '1.4rem',
                fontSize: '1.8rem',
            },
        },

        [theme.breakpoints.down('md')]: {
            padding: '1.4rem 2rem',
        },
    },
    signUpForm: {
        display: 'grid',
        gap: '.6rem',
    },
    login: {
        backgroundColor: 'rgba(50, 50, 50, .1)',
        flex: '0 0 50%',
        padding: '2rem 3rem',

        '& h4': {
            marginBottom: '1.6rem',
            textAlign: 'right',

            [theme.breakpoints.down('md')]: {
                marginBottom: '1.4rem',
                fontSize: '1.8rem',
            },
        },

        [theme.breakpoints.down('md')]: {
            padding: '1.4rem 2rem',
        },
    },
    signUpBtn: {
        paddingTop: '1rem',
        textAlign: 'center',
    },
    updateForm: {
        display: 'grid',
        gap: '1.8rem',

        [theme.breakpoints.down('md')]: {
            gap: '1.2rem',
        },
    },
    formStyles: {
        display: 'grid',
        gap: '1rem',

        [theme.breakpoints.down('md')]: {
            gap: '.8rem',
        },
    },
    mobileBtn: {
        marginTop: '1rem',
        width: '100%',
    },
}));

export default useStyles;
