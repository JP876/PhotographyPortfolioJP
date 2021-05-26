import { Button, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';

const GalleryButton = props => {
    const {
        size = 'medium',
        color,
        variant = 'contained',
        onClick,
        msg,
        disabled,
        msgDisabled,
    } = props;
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <Button
            disabled={disabled}
            size={matches ? 'small' : size}
            color={color}
            variant={variant}
            onClick={onClick}
        >
            <Typography variant='button' color={disabled ? 'secondary' : 'initial'}>
                {disabled && msgDisabled ? msgDisabled : msg}
            </Typography>
        </Button>
    );
};

export default GalleryButton;
