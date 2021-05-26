import { Button } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import FormInput1 from './FormInput1';
import SnackbarComp from './Snackbar';
import useStyles from './styles/updateFormStyles';

const UpdateForm = props => {
    const {
        updateInputs,
        defaultValues,
        open,
        setOpen,
        onSubmit,
        btnMessage,
        formStyle,
        updateReset,
        clean,
    } = props;
    const {
        handleSubmit,
        control,
        errors,
        formState: { isDirty, isSubmitted },
        reset,
    } = useForm({ defaultValues });
    const classes = useStyles();

    const handleBtn = useCallback(() => {
        if (isSubmitted && updateReset) {
            reset(defaultValues, { isDirty: false, isSubmitted: false });
        }
        if (isSubmitted && clean) {
            reset();
        }
    }, [defaultValues, reset, isSubmitted, updateReset, clean]);

    useEffect(() => handleBtn(), [handleBtn]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
            <div className={formStyle ? formStyle : classes.defaultFormStyle}>
                {updateInputs.map(el => (
                    <FormInput1
                        key={el.name}
                        control={control}
                        name={el.name}
                        type={el.type ? el.type : 'text'}
                        defaultValue={el.defaultValue ? el.defaultValue : ''}
                        rules={el.rules}
                        errors={errors}
                    />
                ))}
            </div>
            <Button
                className={classes.updateFormBtn}
                disabled={!isDirty}
                type='submit'
                variant='contained'
                color='primary'
            >
                {btnMessage}
            </Button>
            {open && (
                <SnackbarComp
                    open={open}
                    setOpen={setOpen}
                    message='Your profile was successfully updated'
                />
            )}
        </form>
    );
};

export default UpdateForm;
