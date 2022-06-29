import * as actionCreater from "./action";

const action = actionCreater;

export const changeWorksheetSideBar = (payload) => { 
    return { type: action.CHANGE_WORKSHEET_SIDEBAR, payload } 
}
export const showHideNavProfileMenu = () => { 
    return { type: action.SHOW_HIDE_NAV_PROFILE_MENU } 
}
export const navLeftMenuLimit = () => { 
    return { type: action.NAV_LEFT_MENU_LIMIT } 
}
export const getFormData = (payload) => { 
    return { type: action.GET_FORM_DATA, payload } 
}
export const resetFormData = (payload) => { 
    return { type: action.RESET_FORM_DATA, payload } 
}
export const suiteInformationFormData = (payload) => { 
    return { type: action.SUITE_INFORMATION_FORM_DATA, payload } 
}

