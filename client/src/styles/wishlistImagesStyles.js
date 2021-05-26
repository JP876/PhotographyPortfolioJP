import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: '100vw',
        overflow: 'hidden',
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.common.grey1,
        padding: '.8rem',

        '& h6': {
            fontSize: '1.6rem',
            borderBottom: `2px solid ${theme.palette.primary.main}`,

            [theme.breakpoints.down('md')]: {
                fontSize: '1.4rem',
            },
        },

        [theme.breakpoints.down('md')]: {
            padding: '.6rem 0 1.2rem 0',
        },
    },
    wishlistImgsContainer: {
        display: 'flex',
        height: '42rem',

        [theme.breakpoints.down('md')]: {
            flexDirection: 'column-reverse',
            height: 'auto',
        },
    },
    gridList: {
        height: '100%',
        display: 'block',
        margin: '0 !important',
        borderLeft: `1.6px solid ${theme.palette.common.grey}`,
        borderTop: `1.6px solid ${theme.palette.common.grey}`,

        '& .MuiGridListTile-root': {
            padding: '.8rem .4rem !important',

            [theme.breakpoints.down('md')]: {
                height: '100% !important',
            },
        },

        [theme.breakpoints.down('md')]: {
            display: 'flex',
            flexWrap: 'nowrap',
            transform: 'translateZ(0)',
            borderTop: `1.6px solid ${theme.palette.common.grey}`,
            borderLeft: 'none',
            height: '10rem',
        },
    },
    gridImage: {
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        //height: '100%',
        cursor: 'pointer',
    },
    currentImageContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',

        [theme.breakpoints.down('md')]: {
            height: '36rem',
        },
    },
    currentImage: {
        flex: '0 0 83.2%',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

        [theme.breakpoints.down('md')]: {
            flex: '0 0 80%',
        },
    },
    listImagesContainer: {
        backgroundColor: theme.palette.common.grey1,
        flex: '0 0 26%',
        borderBottom: `1.6px solid ${theme.palette.common.grey}`,

        '& .MuiGridListTile-tile': {
            display: 'flex',
            justifyContent: 'center',
        },
    },
    listImage: {
        height: '14rem',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'local',
        cursor: 'pointer',
    },
    optionsContainer: {
        backgroundColor: theme.palette.common.grey1,
        padding: '1rem 4rem',
        display: 'flex',
        justifyContent: 'space-between',
        height: '100%',

        [theme.breakpoints.down('sm')]: {
            padding: '1rem 3rem',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '1rem 1.2rem',
        },
    },
    formControl: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'space-between',

        '& .MuiOutlinedInput-input': {
            padding: '1rem',

            [theme.breakpoints.down('md')]: {
                fontSize: '1rem',
                padding: '.84rem',
            },
        },

        '& .MuiSelect-outlined.MuiSelect-outlined': {
            paddingRight: '2rem',
        },
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        '& button': {
            fontSize: '.94rem',
            padding: '.28rem 1.4rem',

            [theme.breakpoints.down('md')]: {
                ...theme.smallButton,
            },
        },
    },
    price: {
        fontSize: '1.32rem',
        '& span': { color: theme.palette.primary.main },

        [theme.breakpoints.down('md')]: {
            fontSize: '1.2rem',
        },
    },
    progress: {
        display: 'flex',
        justifyContent: 'center',
        margin: '1.6rem 0',
    },
}));

export default useStyles;
