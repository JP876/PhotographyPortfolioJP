import { Divider, Paper, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { pageAnimation } from '../animation';
import ProfileLeftContainer from './ProfileLeftContainer';
import useStyles from '../styles/profileStyles';
import UpdateEmail from './UpdateEmail';
import UpdateForm from '../UpdateForm';
import WishlistImages from './WishlistImages';
import { deleteProfile, updateProfile } from '../profileFunctions';

const Profile = props => {
    const {
        profile,
        handleLogin,
        token,
        setProfile,
        images,
        handleAddToCart,
        deleteCookie,
    } = props;
    const { email, _id, firstname, lastname, age, address, city, zip } = profile;
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const updateInputsForm = [
        { name: 'firstname', defaultValue: firstname },
        { name: 'lastname', defaultValue: lastname },
        { name: 'age', defaultValue: age, type: 'number' },
        { name: 'address', defaultValue: address },
        { name: 'city', defaultValue: city },
        { name: 'zip', defaultValue: zip },
    ];

    const defaultValuesUpdateForm = {
        firstname: firstname ? firstname : '',
        lastname: lastname ? lastname : '',
        age: age ? age : '',
        address: address ? address : '',
        city: city ? city : '',
        zip: zip ? zip : '',
    };

    const signUpLoginForm = [
        { name: 'email', rules: { required: 'Email is required' } },
        {
            name: 'password',
            rules: { required: 'Password is required' },
            type: 'password',
        },
    ];

    const onSubmit = async data => {
        try {
            const profileUpdateRes = await updateProfile(data, token.current);
            if (profileUpdateRes._id) {
                setProfile(profileUpdateRes);
                setOpen(true);
            }
        } catch (error) {}
    };

    const deleteUser = () => {
        deleteProfile(_id, token.current);
        setProfile({});
        deleteCookie('x-access-token');
    };

    return (
        <React.Fragment>
            {_id ? (
                <motion.div
                    variants={pageAnimation}
                    initial='hidden'
                    animate='show'
                    exit='exit'
                >
                    <div className={classes.profileContainer}>
                        <Paper className={classes.profilePaper}>
                            <div className={classes.profileTitle}>
                                <Typography variant='h6'>Profile Information</Typography>
                            </div>
                            <Divider />
                            <div className={classes.profileInformaion}>
                                <ProfileLeftContainer
                                    email={email}
                                    deleteCookie={deleteCookie}
                                    deleteProfile={deleteUser}
                                />
                                <div className={classes.updateProfileContainer}>
                                    <UpdateEmail
                                        email={email}
                                        token={token}
                                        setProfile={setProfile}
                                    />
                                    <Divider
                                        style={{ margin: '1.4rem 0', width: '100%' }}
                                    />
                                    <UpdateForm
                                        updateInputs={updateInputsForm}
                                        defaultValues={defaultValuesUpdateForm}
                                        open={open}
                                        setOpen={setOpen}
                                        onSubmit={onSubmit}
                                        btnMessage='Save'
                                        profile={profile}
                                        updateReset={true}
                                    />
                                </div>
                            </div>
                            <Divider />
                            <WishlistImages
                                images={images}
                                profile={profile}
                                setProfile={setProfile}
                                handleAddToCart={handleAddToCart}
                                token={token}
                            />
                        </Paper>
                    </div>
                </motion.div>
            ) : (
                <motion.div
                    variants={pageAnimation}
                    initial='hidden'
                    animate='show'
                    exit='exit'
                >
                    <div className={classes.profileLogin}>
                        <Paper>
                            <Typography
                                style={{ marginTop: '1rem ', textAlign: 'center' }}
                                variant='h4'
                            >
                                Login
                            </Typography>
                            <div style={{ padding: '2rem 2.8rem' }}>
                                <UpdateForm
                                    onSubmit={handleLogin}
                                    btnMessage='Login'
                                    updateInputs={signUpLoginForm}
                                    formStyle={classes.formStyle}
                                />
                            </div>
                        </Paper>
                    </div>
                </motion.div>
            )}
        </React.Fragment>
    );
};

export default Profile;
