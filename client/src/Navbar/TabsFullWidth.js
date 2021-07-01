import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Badge, Menu, MenuItem, Tab, Tabs, Typography } from '@material-ui/core';
import { AccountCircle, ShoppingCart } from '@material-ui/icons';
import { v4 as uuidv4 } from 'uuid';
import useStyles from '../styles/navbarStyles';
import { AppDispatch, AppState } from '../ContextAPI/Context';

const menuOptions = [
    { name: 'All Images', link: '/gallery', activeIndex: 1, selectedIndex: 0 },
    {
        name: 'Landscape',
        link: '/gallery/landscape',
        activeIndex: 1,
        selectedIndex: 1,
    },
    { name: 'Macro', link: '/gallery/macro', activeIndex: 1, selectedIndex: 2 },
    { name: 'B&W', link: '/gallery/b&w', activeIndex: 1, selectedIndex: 3 },
];

const TabsFullWidth = props => {
    const { profile, totalItems, selectedCategory } = props;
    const classes = useStyles();
    const location = useLocation();

    const appState = useContext(AppState);
    const appDispatch = useContext(AppDispatch);

    const { value, selectedIndex } = appState;
    const [anchorEl, setAnchorEl] = useState(null);

    const handleChange = (e, newValue) => {
        appDispatch({ type: 'setValue', value: newValue });
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        appDispatch({ type: 'setSelectedIndex', selectedIndex: i });
    };

    return (
        <React.Fragment>
            <Tabs
                className={classes.navigationContainer}
                value={value > 4 ? 0 : value}
                onChange={handleChange}
                indicatorColor='primary'
                classes={{ indicator: classes.tabsIndicator }}
            >
                <Tab
                    style={{ gridColumn: '2 / 3' }}
                    component={Link}
                    to='/'
                    label='Home'
                />
                <Tab
                    style={{ gridColumn: '3 / 4' }}
                    component={Link}
                    to='/gallery'
                    label='Gallery/ Shop'
                    onMouseOver={handleClick}
                />
                <Tab
                    style={{ gridColumn: '4 / 5' }}
                    component={Link}
                    to='/aboutme'
                    label='About me'
                />
                {location.pathname === '/profile' || profile._id ? (
                    <Tab
                        style={{ gridColumn: '6 / 7' }}
                        component={Link}
                        to='/profile'
                        icon={
                            <Typography
                                style={{
                                    fontSize: '0.875rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                Profile{' '}
                                <AccountCircle
                                    style={{
                                        fontSize: '2.2rem',
                                        paddingLeft: '.4rem',
                                        marginTop: '-.1rem',
                                    }}
                                />
                            </Typography>
                        }
                    />
                ) : (
                    <Tab
                        style={{ gridColumn: '6 / 7' }}
                        component={Link}
                        to='/signup'
                        label='Sign Up/ Login'
                    />
                )}
                <Tab
                    style={{ gridColumn: '7 / 8', color: 'rgb(230, 240, 240)' }}
                    component={Link}
                    to='/cart'
                    icon={
                        <Badge badgeContent={totalItems} showZero={true}>
                            <ShoppingCart />
                        </Badge>
                    }
                    disabled={totalItems === 0}
                />
            </Tabs>
            <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                    onMouseLeave: handleClose,
                    onClick: selectedCategory,
                }}
                style={{ zIndex: 1304 }}
            >
                {menuOptions.map((option, i) => (
                    <MenuItem
                        key={uuidv4()}
                        component={Link}
                        to={option.link}
                        onClick={e => {
                            handleMenuItemClick(e, i);
                            appDispatch({ type: 'setValue', value: 1 });
                            handleClose();
                        }}
                        selected={i === selectedIndex && value === 1}
                    >
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>
        </React.Fragment>
    );
};

export default TabsFullWidth;
