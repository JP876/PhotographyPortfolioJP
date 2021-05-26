import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Divider, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { commerce } from '../commerce';
import FormInput1 from '../FormInput1';
import SelectFormInput from './SelectFormInput';
import useStyles from '../styles/addressFormStyles';

const AddressForm = props => {
    const { checkoutToken, next, profile } = props;
    const { email, firstname, lastname, address, city, zip } = profile;
    const classes = useStyles();
    const { clearErrors, handleSubmit, control, errors } = useForm();

    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
    const [disableSubDiv, setDisabelSubDiv] = useState(true);
    const [disableOptions, setDisabelOptions] = useState(true);

    const fetchShippingCountries = async checkoutTokenId => {
        const { countries } = await commerce.services.localeListShippingCountries(
            checkoutTokenId
        );
        setShippingCountries(countries);
    };

    const fetchSubdivisions = async countryCode => {
        const { subdivisions } = await commerce.services.localeListSubdivisions(
            countryCode
        );
        setShippingSubdivisions(subdivisions);
    };

    const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {
            country,
            region,
        });
        setShippingOptions(options);
    };

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({
        id: code,
        label: name,
    }));
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({
        id: code,
        label: name,
    }));
    const options = shippingOptions.map(sO => ({
        id: sO.id,
        label: `${sO.description} - (${sO.price.formatted_with_symbol})`,
    }));

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id);
    }, [checkoutToken]);

    useEffect(() => {
        if (shippingCountry) {
            fetchSubdivisions(shippingCountry);
            setDisabelSubDiv(false);
        }
    }, [shippingCountry]);

    useEffect(() => {
        if (shippingSubdivision) {
            fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
            setDisabelOptions(false);
        }
    }, [shippingSubdivision, checkoutToken, shippingCountry]);

    const deleteErrors = () => {
        setTimeout(() => clearErrors(), 3600);
    };

    const selectFormArr = [
        {
            value: shippingCountry,
            menuItems: countries,
            onChange: setShippingCountry,
            title: 'Shipping Country',
            name: 'shippingCountry',
            requiredMsg: 'Select shipping country',
        },
        {
            value: shippingSubdivision,
            menuItems: subdivisions,
            onChange: setShippingSubdivision,
            title: 'Shipping Subdivision',
            name: 'shippingSubdivision',
            requiredMsg: 'Select shipping subdivision',
            disable: disableSubDiv,
        },
        {
            value: shippingOption,
            menuItems: options,
            onChange: setShippingOption,
            title: 'Shipping Options',
            name: 'shippingOption',
            requiredMsg: 'Select shipping options',
            disable: disableOptions,
        },
    ];

    const formArr = [
        { name: 'firstName', defaultValue: firstname ? firstname : '' },
        { name: 'lastName', defaultValue: lastname ? lastname : '' },
        { name: 'address', defaultValue: address ? address : '' },
        { name: 'email', defaultValue: email ? email : '' },
        { name: 'city', defaultValue: city ? city : '' },
        { name: 'zip', defaultValue: zip ? zip : '' },
    ];

    return (
        <div className={classes.root}>
            <Typography className={classes.addressFormTitle} variant='h5'>
                Shipping Address
            </Typography>
            <form
                onSubmit={handleSubmit(data => {
                    next(data);
                    //console.log(data);
                })}
            >
                <div className={classes.formContainer}>
                    {formArr.map(el => (
                        <FormInput1
                            key={el.name}
                            name={el.name}
                            control={control}
                            errors={errors}
                            defaultValue={el.defaultValue}
                            required
                        />
                    ))}
                </div>
                <Divider />
                <SelectFormInput
                    control={control}
                    errors={errors}
                    selectFormArr={selectFormArr}
                />
                <div className={classes.btnContainer}>
                    <Button
                        component={Link}
                        to='/cart'
                        variant='contained'
                        color='secondary'
                    >
                        Back to Cart
                    </Button>
                    <Button
                        type='submit'
                        variant='contained'
                        color='primary'
                        onClick={deleteErrors}
                    >
                        Next
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AddressForm;
