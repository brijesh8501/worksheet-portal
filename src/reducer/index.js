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

            let changeWorksheetSidebar = {
                ...state,
                worksheetSidebarSetting:{
                    ...state.worksheetSidebarSetting,
                    sidebarMenuActive:action.payload.sectionClicked
                }
            }
            if(action.payload.childItem){
                changeWorksheetSidebar = {
                    ...changeWorksheetSidebar,
                    worksheetSidebarSetting:{
                        ...changeWorksheetSidebar.worksheetSidebarSetting,
                        sidebarMenuChildListActive:{
                            ...changeWorksheetSidebar.sidebarMenuChildListActive,
                            ...action.payload.childItem
                        }
                    }
                }
            }
            return changeWorksheetSidebar;

        case 'GET_FORM_DATA':

            const worksheetFormType = action.payload.worksheetFormType;
            const payloadKeyValue = Object.entries(action.payload.inputField);
            
            let getFormData = {
                ...state,
                worksheetForm:{
                    ...state.worksheetForm,
                    [worksheetFormType]:(
                        worksheetFormType === 'secondaryPurchaser' && 
                        ( payloadKeyValue[0][0] === 'isSecondaryPurchaserRequired' || 
                        payloadKeyValue[0][0] === 'No'
                        ) 
                    )?
                    { 
                        ...initialState.worksheetForm[worksheetFormType], 
                        ...{ [payloadKeyValue[0][0]]: payloadKeyValue[0][1] }  
                    }
                    :
                    {
                        ...state.worksheetForm[worksheetFormType],
                        ...{ [payloadKeyValue[0][0]]: payloadKeyValue[0][1] }
                    }
                }
            }
            return getFormData;

        case 'RESET_FORM_DATA':
            return { 
                ...state,
                [action.payload]:{
                    ...initialState[action.payload]
                }
             };
        default:

            return state;

    }
}

const rootReducer = combineReducers({
    myState
});

export default rootReducer;