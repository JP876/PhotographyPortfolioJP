import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    toolbar: {
        marginBottom: '5rem',

        [theme.breakpoints.down('xs')]: {
            margin: '0',
        },
    },
    layout: {
        position: 'relative',
        maxWidth: '48rem',
        margin: '0 auto 4rem auto',

        '& h4': {
            padding: '1rem 0',

            [theme.breakpoints.down('md')]: {
                padding: '.8rem 0',
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: '1.8rem',
            },
        },

        [theme.breakpoints.down('md')]: {
            maxWidth: '38rem',
        },
        [theme.breakpoints.down('xs')]: {
            width: '84%',
            margin: '6rem auto 2.4rem auto',
        },
    },
    stepper: {
        backgroundColor: theme.palette.common.grey1,

        '& .MuiStepLabel-root': {
            [theme.breakpoints.down('xs')]: {
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',

                '& .MuiStepLabel-labelContainer': {
                    marginTop: '.4rem',
                    textAlign: 'center',
                },

                '& .MuiStepLabel-iconContainer': {
                    padding: '0',
                },
            },
        },

        '& .MuiStep-horizontal': {
            [theme.breakpoints.down('xs')]: {
                flex: '0 0 26%',
                '&:first-child': {
                    paddingLeft: '1rem',
                },
                '&:last-child': {
                    paddingRight: '1rem',
                },
            },
        },

        '& .MuiStepConnector-root': {
            alignSelf: 'center',
        },

        [theme.breakpoints.down('xs')]: {
            padding: '1rem 0',
            alignItems: 'flex-start',
        },
    },
    progress: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '1.8rem 0',
    },
}));

export default useStyles;
