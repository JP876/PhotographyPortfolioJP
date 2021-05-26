import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        '& h6': {
            textAlign: 'center',
        },
    },
    addressFormTitle: {
        padding: '1rem 0',
        textAlign: 'center',
    },
    menuItem: {
        minWidth: '20rem',
    },
    formContainer: {
        padding: '1rem 1.2rem 1.6rem 1.2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem 5rem',

        '& div': {
            width: '100%',
        },

        [theme.breakpoints.down('md')]: {
            gap: '1rem 3.2rem',
        },
        [theme.breakpoints.down('xs')]: {
            gap: '1.6rem ',
            gridTemplateColumns: '1fr',
        },
    },
    selectInputLabel: {
        textTransform: 'uppercase',
        color: '#0e918c',
        margin: '.6rem 0 1rem 0',

        [theme.breakpoints.down('xs')]: {
            marginBottom: '0.6rem',
        },
    },
    btnContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1.4rem 2rem',
        backgroundColor: theme.palette.common.grey1,

        [theme.breakpoints.down('md')]: {
            padding: '1.2rem 2rem',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '1rem',
        },
    },
}));

export default useStyles;
