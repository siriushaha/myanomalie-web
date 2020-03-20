import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import FeatureForm from './featureForm';
import WeddingDress from './weddingDress';

const DressBuilderPage = () => {
    return (
        <>
            <Container maxWidth="sm">
                <Grid container spacing={2} justify="center" alignItems="center">
                    <Grid item xs={12}>
                        <FeatureForm />
                    </Grid>
                    <Grid item xs={12}>
                        <WeddingDress />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default DressBuilderPage;