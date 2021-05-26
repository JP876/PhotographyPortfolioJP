import {
    IconButton,
    List,
    ListItem,
    ListItemText,
    SwipeableDrawer,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { AppDispatch, AppState } from '../ContextAPI/Context';
import useStyles from '../styles/navbarStyles';

const DrawerComp = props => {
    const { profile, totalItems } = props;
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [routes, setRoutes] = useState([]);
    const location = useLocation();

    const appState = useContext(AppState);
    const appDispatch = useContext(AppDispatch);

    const { value } = appState;

    const getRoutes = useCallback(() => {
        const newRoutes = [
            { name: 'Home', link: '/' },
            { name: 'All Images', link: '/gallery' },
            { name: 'Landscape', link: '/gallery/landscape' },
            { name: 'Macro', link: '/gallery/macro' },
            { name: 'B&W', link: '/gallery/b&w' },
            { name: 'About Me', link: '/aboutme' },
            {
                name:
                    location.pathname === '/profile' || profile._id
                        ? 'Profile'
                        : 'Sign Up/ Login',
                link:
                    location.pathname === '/profile' || profile._id
                        ? '/profile'
                        : '/signup',
            },
            { name: 'Cart', link: '/cart', disable: totalItems === 0 },
        ];
        setRoutes(newRoutes);
    }, [location, profile, totalItems]);

    const setRoute = useCallback(() => {
        routes.forEach((link, i) => {
            if (window.location.pathname === `${link.link}`) {
                appDispatch({ type: 'setValue', value: i });
            }
        });
    }, [appDispatch, routes]);

    useEffect(() => getRoutes(), [getRoutes]);

    useEffect(() => setRoute(), [setRoute]);

    return (
        <React.Fragment>
            <SwipeableDrawer
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            >
                <div className={classes.toolbarMargin} />
                <List className={classes.drawerList}>
                    {routes.map((route, i) => (
                        <ListItem
                            key={route.name}
                            button
                            divider={i === 0 || i === 4}
                            component={Link}
                            to={route.link}
                            selected={value === i}
                            disabled={route.disable}
                            classes={{ selected: classes.drawerItemSelected }}
                            onClick={() => {
                                setOpen(false);
                                appDispatch({ type: 'setValue', value: i });
                            }}
                        >
                            <ListItemText
                                className={classes.drawerItem}
                                disableTypography
                            >
                                {route.name}
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </SwipeableDrawer>
            <IconButton
                style={{ color: '#e9eae5' }}
                onClick={() => setOpen(!open)}
                disableRipple
            >
                <MenuIcon color='inherit' />
            </IconButton>
        </React.Fragment>
    );
};

export default DrawerComp;
