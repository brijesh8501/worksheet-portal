import * as actionCreater from "./action";

const action = actionCreater;

export const changeWorksheetSideBar = () => { 
    return { type: action.CHANGE_WORKSHEET_SIDEBAR } 
}
export const showHideNavProfileMenu = () => { 
    return { type: action.SHOW_HIDE_NAV_PROFILE_MENU } 
}
export const navLeftMenuLimit = () => { 
    return { type: action.NAV_LEFT_MENU_LIMIT } 
}
