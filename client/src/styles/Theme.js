import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        common: {
            grey: '#d2d3c9',
            grey1: '#e9eae5',
            orange: '#f6830f',
        },
        primary: {
            main: '#0e918c',
            dark: '#0d827d',
            darker: '#085350',
        },
        secondary: {
            main: '#bb2205',
        },
        background: {
            paper: '#f9f9f8',
            default: '#f1f2ee',
        },
        text: {
            primary: '#434437',
            disabled: '#303128',
        },
        success: {
            main: '#11b0aa',
        },
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif',
        fontWeightLight: 300,
        fontWeightMedium: 400,
        fontWeightBold: 500,
    },
    smallButton: {
        fontSize: '.84rem',
        padding: '.4rem 1.2rem',
    },
});
