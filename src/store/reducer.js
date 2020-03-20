import { COMBINE_FEATURES, RESET_FEATURES } from './actions';

const INITIAL_STATE = {
    skirtSilhouette: '',
    bodiceStyle: '',
    featureCombination: ''
};

const reducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case RESET_FEATURES:
            return INITIAL_STATE;

        case COMBINE_FEATURES:
            const {skirtSilhouette, bodiceStyle} = action.payload;
            const featureCombination = `${bodiceStyle}-${skirtSilhouette}`;
            return {
                ...state,
                skirtSilhouette,
                bodiceStyle,
                featureCombination
            };

        default:
            return state;
    }
};

export default reducer;
