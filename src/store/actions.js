export const COMBINE_FEATURES = 'COMBINE_FEATURES';
export const RESET_FEATURES = 'RESET_FEATURES';

export const resetFeatures = () => {
    return {
        type:  RESET_FEATURES,
    };
};

export const combineFeatures = (skirtSilhouette, bodiceStyle) => {
    return {
        type: COMBINE_FEATURES,
        payload: { skirtSilhouette, bodiceStyle }
    };
};

