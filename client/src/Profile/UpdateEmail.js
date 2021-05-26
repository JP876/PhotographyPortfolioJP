import { Button } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import FormInput1 from '../FormInput1';
import { updateEmail } from '../profileFunctions';
import useStyles from '../styles/profileStyles';

const UpdateEmail = props => {
    const { email, token, setProfile } = props;
    const {
        handleSubmit,
        control,
        errors,
        register,
        formState: { isDirty },
    } = useForm({ defaultValues: { Email: email } });
    const oldEmail = email;
    const classes = useStyles();

    const onSubmit = async data => {
        const { email } = data;
        const emailUpdateRequest = await updateEmail(oldEmail, email, token.current);
        if (emailUpdateRequest.ok) {
            setProfile({});
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.updateEmailForm}>
            <FormInput1
                control={control}
                name='email'
                defaultValue={email}
                rules={{
                    required: 'Email is required',
                    pattern: {
                        value: /^\S+@\S+$/,
                        message: 'Invalid email',
                    },
                }}
                errors={errors}
            />

            <Button
                className={classes.updateEmailBtn}
                size='large'
                disabled={!isDirty}
                type='submit'
                variant='contained'
                color='primary'
            >
                Change Email
            </Button>
        </form>
    );
};

export default UpdateEmail;
