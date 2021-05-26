import { ErrorMessage } from '@hookform/error-message';
import { InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import React from 'react';
import { Controller } from 'react-hook-form';
import useStyles from '../styles/addressFormStyles';

const SelectFormInput = props => {
    const { control, errors, selectFormArr } = props;
    const classes = useStyles();

    return (
        <div className={classes.formContainer}>
            {selectFormArr.map(el => (
                <div key={el.title}>
                    <InputLabel className={classes.selectInputLabel}>
                        {el.title}
                    </InputLabel>
                    <Controller
                        render={props => (
                            <Select
                                disabled={el.disable ? el.disable : false}
                                value={el.value}
                                variant='outlined'
                                error={errors[el.name] && el.value === '' && true}
                                fullWidth
                                onChange={e => {
                                    el.onChange(e.target.value);
                                    props.onChange(e.target.value);
                                }}
                            >
                                {el.menuItems.map(country => (
                                    <MenuItem key={country.id} value={country.id}>
                                        {country.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        )}
                        name={el.name}
                        fullWidth
                        control={control}
                        defaultValue=''
                        rules={{ required: el.requiredMsg }}
                    />
                    {el.value === '' && !el.disable && (
                        <ErrorMessage
                            errors={errors}
                            name={el.name}
                            render={({ message }) => (
                                <Typography
                                    style={{ margin: '.8rem' }}
                                    variant='caption'
                                    color='secondary'
                                >
                                    {message}
                                </Typography>
                            )}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default SelectFormInput;
