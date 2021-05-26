import mediaQuery from './sizes';

const styles = {
    root: {
        height: '32rem',
        width: props => (props.height < props.width ? '44rem' : '26rem'),

        [mediaQuery.down('lg')]: {
            height: '24rem',
            width: props => (props.height < props.width ? '32rem' : '23.2rem'),
        },
        [mediaQuery.down('sm')]: {
            height: props => (props.height < props.width ? '18rem' : '24rem'),
            width: '100% !important',
        },
    },
    imgContainer: {
        height: '100%',
        position: 'relative',
    },
    styleImage: {
        height: '100%',
        backgroundSize: 'cover',
        backgroundAttachment: 'local',
        backgroundPosition: 'center',
    },
    name: {
        fontSize: '1.4rem',
    },
    cardActions: {
        height: '7.6rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: props =>
            props.height > props.width || props.height === props.width
                ? '1.2rem'
                : '1.2rem 4rem',

        [mediaQuery.down('md')]: {
            height: '6.8rem',
            padding: props =>
                props.height > props.width || props.height === props.width
                    ? '.94rem 1.2rem'
                    : '.94rem 2.6rem',
        },
        [mediaQuery.down('sm')]: {
            width: '100%',
            flexDirection: 'column',
            padding: '.6rem !important',
        },
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',

        [mediaQuery.down('sm')]: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
    },
    formControl: {
        '& .MuiSelect-outlined.MuiSelect-outlined': {
            [mediaQuery.down('lg')]: {
                padding: '.84rem',
                fontSize: '1rem',
            },
            [mediaQuery.down('md')]: {
                padding: '.84rem 1.6rem',
                fontSize: '1rem',
            },
        },
    },
    price: {
        marginTop: '.4rem',
        fontSize: '1.32rem',

        '& span': {
            color: props => props.theme.palette.primary.main,
        },

        [mediaQuery.down('md')]: {
            marginTop: '.2rem',
            fontSize: '1.12rem',
        },
    },
    btnContainer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        [mediaQuery.down('lg')]: {
            '& button': {
                padding: '.32rem 1rem',
            },
        },
        [mediaQuery.down('sm')]: {
            width: '100%',
            paddingTop: '.6rem',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',

            '& button': {
                padding: '.32rem .8rem',
            },
        },
    },
    zoomIconContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(.32rem)',
    },
    zoomIcon: {
        color: props => props.theme.palette.common.grey1,
        fontSize: '7.2rem',
    },
};

export default styles;
