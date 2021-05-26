import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    profileContainer: {
        margin: '6.8rem auto 4rem auto',
        display: 'flex',

        [theme.breakpoints.down('md')]: {
            margin: '6rem 0 3.6rem 0',
        },
        [theme.breakpoints.down('xs')]: {
            width: '84%',
            margin: '6rem auto 2.4rem auto',
        },
    },
    profilePaper: {
        margin: '0 auto',

        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    profileBtns: {
        display: 'flex',
        flexDirection: 'column',

        '& .MuiButton-containedSecondary': {
            marginTop: '1rem',

            [theme.breakpoints.down('md')]: {
                ...theme.smallButton,
                marginTop: '0rem',
            },

            '&:last-child': {
                [theme.breakpoints.down('md')]: {
                    marginLeft: '1rem',
                },
                [theme.breakpoints.down('xs')]: {
                    marginTop: '1rem',
                    marginLeft: '0rem',
                },
            },
        },

        [theme.breakpoints.down('md')]: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        [theme.breakpoints.down('sm')]: {
            //flex: '0 0 70%',
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    profileInformaion: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '2.4rem 3.6rem',

        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            padding: '1.8rem 2.8rem',
        },

        [theme.breakpoints.down('xs')]: {
            padding: '1.6rem 1.2rem',
        },
    },
    profileTitle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '.8rem',

        '& h6': {
            fontSize: '1.6rem',
            borderBottom: `2px solid ${theme.palette.primary.main}`,

            [theme.breakpoints.down('md')]: {
                fontSize: '1.4rem',
            },
        },
    },
    profileAvatar: {
        marginBottom: '3.2rem',
        height: '4.2rem',
        width: '4.2rem',
        fontSize: '2.4rem',
        backgroundColor: theme.palette.primary.main,

        [theme.breakpoints.down('md')]: {
            marginBottom: '0rem',
            height: '3.4rem',
            width: '3.4rem',
            fontSize: '2rem',
        },
        [theme.breakpoints.down('xs')]: {
            //marginBottom: '1.4rem',
        },
    },
    signUpForm: {
        padding: '1.4rem 2.4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    updateProfileContainer: {
        flex: '0 0 66%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    leftContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: '4rem',

        [theme.breakpoints.down('md')]: {
            padding: '0 0 3rem 0',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'space-between',
            paddingBottom: '2rem',
        },
        [theme.breakpoints.down('xs')]: {
            //justifyContent: 'space-around',
            padding: '0 1rem 2rem 1rem',
        },
    },
    profileLogin: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    updateEmailBtn: {
        [theme.breakpoints.down('md')]: {
            ...theme.smallButton,
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginTop: '.8rem',
            padding: '.4rem 4.2rem',
        },
    },
    updateEmailForm: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    formStyle: {
        display: 'grid',
        gap: '1rem',
        width: '20rem',

        [theme.breakpoints.down('xs')]: {
            width: 'auto',
            gap: '.8rem',
        },
    },
    emptyWishlistTitle: {
        marginTop: '1rem',
        fontSize: '1.4rem',
        textAlign: 'center',

        [theme.breakpoints.down('xs')]: {
            fontSize: '1.32rem',
            margin: '1rem 1.2rem 0 1.2rem',
        },
    },
    emptyWishlistBtn: {
        margin: '1.4rem 0',
        padding: '.4rem 2rem',

        [theme.breakpoints.down('md')]: {
            ...theme.smallButton,
            margin: '1.2rem 0',
        },
    },
}));

export default useStyles;
