import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        width: '100%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const FeatureSelect = ({ register, name, label, options, handleChange, value}) => {
    const classes = useStyles();
    const labelId = `label-${name}`;

    useEffect(() => {
        register({ name });
    }, [register, name]);

    return (
        <FormControl required className={classes.formControl}>
            <InputLabel id={labelId}>{label}</InputLabel>
            <Select
                name={name}
                labelId={labelId}
                id={labelId}
                value={value}
                label={label}
                onChange={handleChange}
                fullWidth
            >
                {
                    options.map(option => (<MenuItem key={option.label} value={option.value}>{option.label}</MenuItem>))
                }
            </Select>
        </FormControl>
    );
};

export default FeatureSelect;