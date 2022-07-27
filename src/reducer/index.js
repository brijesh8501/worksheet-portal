import { combineReducers } from 'redux';
import { initialState } from "./state";

const myState = (state = initialState, action) => {
    switch(action.type){
        case 'SHOW_HIDE_NAV_PROFILE_MENU':
            return {
                ...state,
                navSetting: {
                    ...state.navSetting,
                    isProfileMenuToShow: (action.payload)? false : (state.navSetting.isProfileMenuToShow)? false : true
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

            const { parentForm, childForm }  = action.payload.formType;
            const { type } = action.payload.inputField;

            const payloadKeyValue = Object.entries(action.payload.inputField);

            let setChildForm;
            payloadKeyValue.map( (item, i) => {

                if(item[0] !== 'type'){
                  
                    if( 
                        ( 
                            childForm === 'secondaryPurchaser' && 
                            ( 
                                item[0] === 'isSecondaryPurchaserRequired' || 
                                item[1] === 'No'
                            ) 
                        )
                    ){

                        setChildForm =  { ...initialState[parentForm][childForm] }
                    
                    }else{

                        setChildForm =  { ...state[parentForm][childForm] }

                    }
                        
                    setChildForm =  { ...setChildForm, ...{ 
                            [item[0]]: { ...state[parentForm][childForm][item[0]], ...{ value: item[1] } } 
                        } 
                    }
                }
               
            });
          

            let getFormData = {
                ...state,
                [parentForm]:{
                    ...state[parentForm],
                    [childForm]: setChildForm
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