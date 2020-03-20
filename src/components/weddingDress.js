import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import {useSelector} from "react-redux";

const dressImages = {
    'structured-aline': 'structured_bodice_aline_silhouette.png',
    'structured-ballgown': 'structured_bodice_ballgown_silhouette.png',
    'structured-sheath': 'structured_bodice_sheath_silhouette.png',
    'unstructured-aline': 'unstructured_bodice_aline_silhouette.png',
    'unstructured-ballgown': 'unstructured_bodice_ballgown_silhouette.png',
    'unstructured-sheath': 'unstructured_bodice_sheath_silhouette.png',
};

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 900,
        width: 345
    },
});

const WeddingDress = () => {
    const classes = useStyles();
    const featureCombination = useSelector(state => state.featureCombination);
    if (!featureCombination) return null;
    const dressUrl = `images/${dressImages[featureCombination]}`;
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    component="img"
                    alt={featureCombination}
                    image={dressUrl}
                    title="My Wedding Dress"
                />
            </CardActionArea>
        </Card>
    );
};

export default WeddingDress;