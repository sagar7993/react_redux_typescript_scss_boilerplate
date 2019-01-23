export const MyActions = {
    SHOW_LOADER: 'SHOW_LOADER',
    HIDE_LOADER: 'HIDE_LOADER',
};

export const MyActionCreators = {
    showLoader: () => {
        return (dispatch) => {
            dispatch({
                type: MyActions.SHOW_LOADER
            });
        };
    },
    hideLoader: () => {
        return (dispatch) => {
            dispatch({
                type: MyActions.HIDE_LOADER
            });
        };
    }
};