import { combineReducers } from 'redux';
import { initialState } from "./state";

const myState = (state = initialState, action) => {
    switch(action.type){
        case 'SHOW_HIDE_NAV_PROFILE_MENU':
            return {
                ...state,
                navSetting: {
                    ...state.navSetting,
                    isProfileMenuToShow: (state.navSetting.isProfileMenuToShow)? false : true
                }
            }
        case 'CHANGE_WORKSHEET_SIDEBAR':
            return state;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    myState
});

export default rootReducer;