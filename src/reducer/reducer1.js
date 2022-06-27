import { initialState } from "./state";

const worksheetSideBar = (state = initialState, action) => {
    switch(action.type){
        case 'CHANGE_WORKSHEET_SIDEBAR':
            return state;
        default:
            return state;
    }
}
export default worksheetSideBar;