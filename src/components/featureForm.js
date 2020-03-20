import React, { useState } from "react";
import { useSelector, useDispatch }from 'react-redux';
import { useForm } from "react-hook-form";

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import FeatureSelect from './featureSelect';
import { combineFeatures } from '../store/actions';

const skirtSilhouetteOptions = [
    {
        label: 'Select...',
        value: '',
    },
    {
        label: 'A-line',
        value: 'aline'
    },
    {
        label: 'Sheath',
        value: 'sheath'
    },
    {
        label: 'Ballgown',
        value: 'ballgown'
    }
];

const bodiceStyleOptions = [
    {
        label: 'Select...',
        value: '',
    },
    {
        label: 'Structured',
        value: 'structured'
    },
    {
        label: 'Unstructured',
        value: 'unstructured'
    }
];

const FeatureForm = (props) => {
    const dispatch = useDispatch();
    const bodiceStyle = useSelector(state => state.bodiceStyle);
    const skirtSilhouette = useSelector(state => state.skirtSilhouette);
    const [state, setState ] = useState({ skirtSilhouette, bodiceStyle});
    const isFeatureCombinationInvalid = (bodiceStyle, skirtSilhouette) => {
        return (bodiceStyle === 'unstructured' && skirtSilhouette === 'ballgown') ||
               (bodiceStyle === 'structured' && skirtSilhouette === 'sheath')
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!state.skirtSilhouette) {
            alert('Skirt silhouette entry is required. Pls select an entry.');
            return false;
        }
        if (!state.bodiceStyle) {
            alert('Bodice style entry is required. Pls select an entry.');
            return false;
        }
        if (isFeatureCombinationInvalid(state.bodiceStyle, state.skirtSilhouette)) {
            alert(`Combination of ${state.bodiceStyle} ${state.skirtSilhouette} is not permitted`);
            return false;
        }
        dispatch(combineFeatures(state.skirtSilhouette, state.bodiceStyle));
        e.target.reset();
        return true;
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    return (
        <form onSubmit={onSubmit} >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FeatureSelect
                        key="skirtSilhouette"
                        name="skirtSilhouette"
                        label="Skirt Silhouette"
                        options={skirtSilhouetteOptions}
                        value={state.skirtSilhouette}
                        handleChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FeatureSelect
                        key="bodiceStyle"
                        name="bodiceStyle"
                        label="Bodice Style"
                        options={bodiceStyleOptions}
                        value={state.bodiceStyle}
                        handleChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        type="submit"
                        variant="outlined"
                        size="small"
                        fullWidth
                    >
                        Select Features
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default FeatureForm;