import { updateObjectImmutably } from '../Contracts';
import { MyActions } from '../Actions';

const initialState = {
    isLoading: false
};

export const MyReducer = (state = initialState, action) => {
    switch (action.type) {
        case MyActions.SHOW_LOADER: {
            return updateObjectImmutably(state, {
                isLoading: true
            });
        }
        case MyActions.HIDE_LOADER: {
            return updateObjectImmutably(state, {
                isLoading: false
            });
        }
        default: {
            return state;
        }
    }
};