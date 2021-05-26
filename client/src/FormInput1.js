import { ErrorMessage } from '@hookform/error-message';
import { TextField, Typography } from '@material-ui/core';
import React from 'react';
import { Controller } from 'react-hook-form';
import useStyles from './styles/formInputStyles';

const FormInput1 = props => {
    const { name, type, defaultValue, rules, control, errors, required } = props;
    let defaultRules = rules;
    const classes = useStyles();

    if (required) {
        defaultRules = {
            required: `${name.toUpperCase()} is required`,
        };
    }

    return (
        <Controller
            className={classes.formInput}
            as={TextField}
            control={control}
            //fullWidth
            variant='outlined'
            defaultValue={defaultValue ? defaultValue : ''}
            name={name}
            label={<p style={{ textTransform: 'uppercase', color: '#0e918c' }}>{name}</p>}
            type={type}
            rules={defaultRules}
            helperText={
                errors && (
                    <ErrorMessage
                        errors={errors}
                        name={name}
                        render={({ message }) => (
                            <Typography
                                component='span'
                                variant='caption'
                                color='secondary'
                            >
                                {message}
                            </Typography>
                        )}
                    />
                )
            }
            error={errors && (errors[name] ? true : false)}
        />
    );
};

export default FormInput1;
