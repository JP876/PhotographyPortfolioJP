import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    formInput: {
        '& .MuiOutlinedInput-input': {
            padding: '1.2rem',

            [theme.breakpoints.down('md')]: {
                padding: '1rem',
            },
        },

        '& .MuiInputLabel-formControl': {
            top: '1px',
            left: '2px',

            [theme.breakpoints.down('md')]: {
                top: '-2px',
            },
        },

        '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
            [theme.breakpoints.down('md')]: {
                transform: 'translate(13.2px, -3.2px) scale(0.76)',
            },
        },

        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
}));

export default useStyles;
