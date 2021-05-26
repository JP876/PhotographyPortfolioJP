import React, { useCallback, useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    AppBar,
    Typography,
    useMediaQuery,
    useScrollTrigger,
    useTheme,
} from '@material-ui/core';
import useStyles from '../styles/navbarStyles';
import { AppDispatch, AppState } from '../ContextAPI/Context';
import TabsFullWidth from './TabsFullWidth';
import DrawerComp from './DrawerComp';

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const Navbar = props => {
    const { totalItems, profile, categories } = props;
    const classes = useStyles();
    const location = useLocation();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('lg'));

    const appState = useContext(AppState);
    const appDispatch = useContext(AppDispatch);

    const { value } = appState;

    const selectedCategory = useCallback(async () => {
        const path = window.location.pathname;
        if (path.slice(1, 8) === 'gallery') {
            appDispatch({
                type: 'setCurrentCategory',
                currentCategory: categories.filter(
                    el => el.name.toLowerCase() === path.slice(9)
                ),
            });
        }
    }, [categories, appDispatch]);

    const activeLink = useCallback(() => {
        let profileSignup =
            location.pathname === '/profile' || profile._id ? 'profile' : 'signup';
        let cartCheckout = location.pathname === '/checkout' ? 'checkout' : 'cart';
        const links = ['', 'gallery', 'aboutme', profileSignup, cartCheckout];
        const galleryLinks = ['gallery', 'landscape', 'macro', 'b&w'];

        links.forEach((link, i) => {
            if (window.location.pathname === `/${link}`) {
                appDispatch({ type: 'setValue', value: i });
            }
        });
        galleryLinks.forEach((link, i) => {
            if (
                window.location.pathname === `/gallery/${link}` ||
                window.location.pathname === 'gallery'
            ) {
                appDispatch({ type: 'setValue', value: 1 });
                appDispatch({ type: 'setSelectedIndex', selectedIndex: i });
            }
        });
    }, [location, profile, appDispatch]);

    useEffect(() => {
        if (matches) {
            activeLink();
        }
    }, [activeLink, matches]);

    useEffect(() => selectedCategory(), [selectedCategory, value]);

    return (
        <ElevationScroll>
            <AppBar className={classes.appBar} position='fixed'>
                <div className={classes.navbarContainer}>
                    <Typography
                        className={classes.logo}
                        variant='h6'
                        component={Link}
                        to='/'
                    >
                        JPPhotography
                    </Typography>
                    {matches ? (
                        <TabsFullWidth
                            profile={profile}
                            totalItems={totalItems}
                            selectedCategory={selectedCategory}
                            matches={matches}
                        />
                    ) : (
                        <DrawerComp profile={profile} totalItems={totalItems} />
                    )}
                </div>
            </AppBar>
        </ElevationScroll>
    );
};

export default Navbar;
