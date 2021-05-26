import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        margin: '0 auto',
        maxWidth: '100rem',

        [theme.breakpoints.down('md')]: {
            maxWidth: '100vw',
        },
    },
    content: {
        marginBottom: '3.2rem',

        [theme.breakpoints.down('md')]: {
            width: '84%',
            margin: '2.4rem auto',
        },
    },
    toolbar: {
        marginBottom: '5.6rem',

        [theme.breakpoints.down('md')]: {
            margin: '3.2rem',
        },
    },
    progress: {
        width: '100vw',
        marginTop: '8rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    loading: {
        marginTop: '2rem',
        color: '#f9f9f8',
    },
    imgEl: {
        margin: '1.6rem',

        [theme.breakpoints.down('xs')]: {
            width: '100%',

            '&:not(:last-child)': {
                margin: '0 0 1.6rem 0',
            },
            '&:last-child': {
                margin: '0',
            },
        },
    },
}));

export default useStyles;
