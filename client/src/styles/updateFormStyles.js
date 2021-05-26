import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    defaultStyle: {
        display: 'grid',
        gap: '1.2rem',
    },
    defaultFormStyle: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem',

        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: '1fr',
            gap: '1.6rem',
        },
    },
    updateFormBtn: {
        width: '100%',
        marginTop: '1rem',
    },
}));

export default useStyles;
