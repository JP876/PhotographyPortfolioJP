import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.modal + 1,
        height: '4.2rem',

        '& .MuiAppBar-colorPrimary': {
            backgroundColor: '#e9eae5 !important',
        },

        [theme.breakpoints.down('md')]: {
            height: '3.6rem',
        },
        [theme.breakpoints.down('xs')]: {
            overflowX: 'hidden',
        },
    },
    navbarContainer: {
        margin: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',

        '& .MuiAppBar-colorPrimary': {
            backgroundColor: '#e9eae5 !important',
        },

        [theme.breakpoints.down('md')]: {
            margin: '0 auto',
            width: '100vw',
            display: 'flex',
            justifyContent: 'space-around',
        },
    },
    logo: {
        fontFamily: 'Reggae One',
        color: theme.palette.common.grey1,
        textDecoration: 'none',
        fontSize: '1.6rem',

        [theme.breakpoints.down('md')]: {
            fontSize: '1.4rem',
        },
    },
    navigationContainer: {
        '& .MuiTabs-flexContainer': {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr) 1fr repeat(2, 1fr)',

            '& .MuiAppBar-colorPrimary': {
                color: theme.palette.common.grey,
            },

            '& .MuiTabs-indicator': {
                backgroundColor: theme.palette.common.grey,
            },

            '& .MuiTabs-root': {
                width: '100%',
                minWidth: '10rem',
            },

            '& .MuiTab-root': {
                padding: '0px',
            },
        },
    },
    toolbarMargin: {
        marginTop: '4.2rem',
    },
    drawerList: {
        padding: '0rem',

        '& a': {
            fontSize: '1.4rem',
            padding: '.6rem 2rem',

            [theme.breakpoints.down('md')]: {
                fontSize: '1.2rem',
                padding: '.4rem 1.6rem',
            },
        },

        '& .MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover': {
            backgroundColor: theme.palette.common.grey1,
        },
    },
    drawerItem: {
        color: theme.palette.text.primary,
    },
}));

export default useStyles;
