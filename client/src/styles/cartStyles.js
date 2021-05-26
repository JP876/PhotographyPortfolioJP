import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    toolbar: {
        paddingBottom: '5.2rem',

        [theme.breakpoints.down('xs')]: {
            padding: '0',
        },
    },
    cartContainer: {
        maxWidth: '48rem',
        margin: '0 auto 4rem auto',

        [theme.breakpoints.down('md')]: {
            maxWidth: '38rem',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '84%',
            margin: '6rem auto 2.4rem auto',
        },
    },
    cartItem: {
        height: '22rem',
        width: '100%',
        padding: '1.36rem 0 ',
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'center',
        backgroundSize: 'cover',

        [theme.breakpoints.down('md')]: {
            height: '18rem',
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            height: '30rem',
            padding: '0',
        },
    },
    cartImage: {
        flex: '0 0 72%',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'local',

        [theme.breakpoints.down('md')]: {
            flex: '0 0 70%',
        },
    },
    cartInfo: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: '0 0 28%',
        backgroundColor: theme.palette.common.grey1,

        '& h5': {
            fontSize: '1.4rem',

            [theme.breakpoints.down('md')]: {
                fontSize: '1.2rem',
            },
        },

        [theme.breakpoints.down('md')]: {
            flex: '0 0 30%',
        },
    },
    options: {
        //marginBottom: '1rem',
        width: '100%',
        flex: '0 0 66%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',

        borderBottom: '4px solid white',

        [theme.breakpoints.down('md')]: {
            flex: '0 0 60%',
        },
        [theme.breakpoints.down('xs')]: {
            borderBottom: '2px solid white',
            flexDirection: 'row',
            padding: '0 1rem',
        },
    },
    addRemoveImg: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',

        '& button': {
            padding: '.2rem .6rem',

            [theme.breakpoints.down('md')]: {
                padding: '.1rem',
                justifyContent: 'space-around',
            },
        },

        [theme.breakpoints.down('xs')]: {
            padding: '0',

            '& h5': {
                padding: '0 .4rem',
            },
        },
    },
    size: {
        width: '100%',

        '& span': {
            fontSize: '1.32rem',
            color: theme.palette.primary.main,

            [theme.breakpoints.down('md')]: {
                fontSize: '1.2rem',
            },
        },

        [theme.breakpoints.down('md')]: {},
        [theme.breakpoints.down('xs')]: {
            padding: '0',
        },
    },
    quantity: {
        width: '100%',
    },
    price: {
        //margin: '.4rem',
        flex: '0 0 34%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        '& button': {
            [theme.breakpoints.down('md')]: {
                margin: '.6rem',
                padding: '.2rem .6rem',
            },
        },

        [theme.breakpoints.down('md')]: {
            flex: '0 0 40%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            padding: '0 1rem',
        },
    },
    finalDetails: {
        backgroundColor: theme.palette.common.grey1,
        padding: '1.4rem 2rem ',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        '& h5': {
            fontSize: '1.72rem',

            [theme.breakpoints.down('md')]: {
                fontSize: '1.4rem',
            },
        },

        [theme.breakpoints.down('md')]: {
            padding: '1rem 1.6rem',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '1.4rem',
            padding: '1rem 0',
            flexDirection: 'column-reverse',
        },
    },
    finalDetailsBtns: {
        '& button': {
            marginRight: '1.2rem',
        },
        '& button, a': {
            [theme.breakpoints.down('md')]: {
                padding: '.4rem 1rem',
                fontSize: '.84rem',
            },
        },

        [theme.breakpoints.down('xs')]: {
            marginTop: '1rem',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly',
        },
    },
    removeBtn: {
        marginTop: '.4rem',
    },
    progress: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '1.8rem 0',
    },
}));

export default useStyles;
