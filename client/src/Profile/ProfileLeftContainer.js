import React, { useState } from 'react';
import {
    Avatar,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
} from '@material-ui/core';
import { useHistory } from 'react-router';
import useStyles from '../styles/profileStyles';

const ProfileLeftContainer = props => {
    const { email, deleteCookie, deleteProfile } = props;
    const classes = useStyles();
    const history = useHistory();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDeletingAccount = () => {
        deleteProfile();
        history.push('/signup');
    };

    return (
        <React.Fragment>
            <div className={classes.leftContainer}>
                <Avatar className={classes.profileAvatar}>
                    {email.slice(0, 1).toUpperCase()}
                </Avatar>
                <div className={classes.profileBtns}>
                    <Button
                        variant='contained'
                        color='secondary'
                        onClick={() => {
                            deleteCookie('x-access-token');
                            history.push('/signup');
                        }}
                    >
                        Sign Out
                    </Button>
                    <Button
                        //style={{ marginTop: '1rem' }}
                        variant='contained'
                        color='secondary'
                        onClick={handleClickOpen}
                    >
                        Delete Account
                    </Button>
                </div>
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete account ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeletingAccount} color='primary'>
                        Yes
                    </Button>
                    <Button onClick={handleClose} color='secondary'>
                        No
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};

export default ProfileLeftContainer;
