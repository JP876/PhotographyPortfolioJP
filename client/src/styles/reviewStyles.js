import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    review: {
        margin: '1rem 0',
    },
    itemGrid: {
        height: '18rem',
        width: '100%',
        padding: '1rem 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        [theme.breakpoints.down('xs')]: {
            //height: '16rem',
            flexDirection: 'column',
        },
    },
    itemImg: {
        height: '100%',
        flex: '0 0 64%',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'local',

        [theme.breakpoints.down('xs')]: {
            flex: '0 0 70%',
            marginBottom: '.6rem',
            width: '100%',
        },
    },
    divider: {
        position: 'absolute',
        bottom: '11rem',
        left: '0',
        height: '2px',
        width: '100%',
    },
    itemDescription: {
        flex: '0 0 36%',
        backgroundColor: theme.palette.common.grey1,

        '& h6': {
            textAlign: 'center',
            padding: '.4rem 0',

            '& span': {
                color: theme.palette.primary.main,
            },

            '&:not(:last-child)': {
                borderBottom: '2px solid white',

                [theme.breakpoints.down('xs')]: {
                    border: 'none',
                },
            },

            '&:last-child': {
                width: '100%',
                borderTop: '2px solid white',
            },

            [theme.breakpoints.down('md')]: {
                fontSize: '1.2rem',
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: '1.08rem',
                padding: '0 .8rem',
            },
        },

        [theme.breakpoints.down('xs')]: {
            flex: '0 0 30%',

            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap',
        },
    },
}));

export default useStyles;
