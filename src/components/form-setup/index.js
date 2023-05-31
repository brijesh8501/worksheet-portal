
import store from "../../store";
import { getFormData } from "../../action";
import { validation } from './validate';

export const setFormFieldDataToState = (props) => {

    const state = store.getState();

    const { validateForm } = state.myState;
    const { event, parentForm, childForm } = props;

    const eventTargetType = event.target.type;
    console.log(validateForm);
    const informationFieldToBeValidate = validateForm[parentForm][childForm][event.target.name]; 

    const validateType = event.target.getAttribute('data-validatetype');

    let inputFieldData;
    if(informationFieldToBeValidate.includes(validateType)){

        let eventTargetValue;

        if(eventTargetType === 'checkbox' || eventTargetType === 'radio'){

            const noOfElementsTargetName = document.querySelectorAll(`input[type="${eventTargetType}"][name="${event.target.name}"]`).length;
            
            eventTargetValue = (noOfElementsTargetName === 1)?
                (event.target.checked)? true : false
                :
                event.target.value;

        }else{
            eventTargetValue = event.target.value;
        }

        const validateData = {
            type: validateType,
            value: eventTargetValue,
            maxLength: event.target.getAttribute('maxlength')
        }
        const validatedData = validation(validateData);

        inputFieldData = (event.type === 'blur')? 
            (validatedData.flag)? validatedData.value : ''
            :
            validatedData.value

    }else{
        inputFieldData = event.target.value;
    }

    const passFormData = { 
        inputField: { 
            type: event.target.type,
            [event.target.name]: inputFieldData 
        }, 
        formType: {
            parentForm,
            childForm 
        }
    };
    store.dispatch( getFormData(passFormData) );

}

export const showHidePassword = (data) => {

    const { target, visible } = data;

    const passwordVisible = (visible)? 'text' : 'password';

    document.getElementById(target).setAttribute('type', passwordVisible);

}

export const stepFormPrevNextSidebarItem = (item) => {

    let keySidebarMenu;
    let nextIndexSidebarMenu;
    let prevIndexSidebarMenu;
    const currentActiveSidebarMenu = item.sidebarMenuActive;
    let currentActiveSidebarMenuChildList;
    let nextSidebarMenu;
    let prevSidebarMenu;

    const sidebarMenuItem = Object.keys(item.sidebarMenu);
    const getPositionOfCurrentActiveSidebarMenu =  sidebarMenuItem.indexOf(currentActiveSidebarMenu);
    const getTotalSidebarMenuLength = sidebarMenuItem.length;

    if("childInformation" in item.sidebarMenu[currentActiveSidebarMenu]){

        currentActiveSidebarMenuChildList = Object.keys(item.sidebarMenuChildListActive[currentActiveSidebarMenu]).find(key => item.sidebarMenuChildListActive[currentActiveSidebarMenu][key] === true); 
        keySidebarMenu = Object.values( item.sidebarMenu[currentActiveSidebarMenu].childInformation.map( (info, i) => info.componentProps2 ) );

        const lastChildItemOfSidebarMenu = keySidebarMenu[ keySidebarMenu.length - 1 ];
        const firstChildItemOfSidebarMenu = keySidebarMenu[0];

        let getPositionOfChildList;

        if(currentActiveSidebarMenuChildList === lastChildItemOfSidebarMenu){
            getPositionOfChildList = 'last';
        }else if(currentActiveSidebarMenuChildList === firstChildItemOfSidebarMenu){
            getPositionOfChildList = 'first';
        }else{
            getPositionOfChildList = 'middle';
        }

        if( getPositionOfChildList === 'first'){

            prevIndexSidebarMenu = sidebarMenuItem.indexOf(currentActiveSidebarMenu) - 1;
            if(keySidebarMenu.length === 1){
                nextIndexSidebarMenu = sidebarMenuItem.indexOf(currentActiveSidebarMenu) + 1;
                nextSidebarMenu = sidebarMenuItem[nextIndexSidebarMenu];
            }else{
                nextIndexSidebarMenu = keySidebarMenu.indexOf(currentActiveSidebarMenuChildList) + 1;
                nextSidebarMenu = keySidebarMenu[nextIndexSidebarMenu];
            }

            prevSidebarMenu = sidebarMenuItem[prevIndexSidebarMenu];

        }else if(getPositionOfChildList === 'middle'){

            nextIndexSidebarMenu = keySidebarMenu.indexOf(currentActiveSidebarMenuChildList) + 1;
            prevIndexSidebarMenu = keySidebarMenu.indexOf(currentActiveSidebarMenuChildList) - 1;

            nextSidebarMenu = keySidebarMenu[nextIndexSidebarMenu];
            prevSidebarMenu = keySidebarMenu[prevIndexSidebarMenu];

        }else if( getPositionOfChildList === 'last'){

            nextIndexSidebarMenu = sidebarMenuItem.indexOf(currentActiveSidebarMenu) + 1;
            if(keySidebarMenu.length === 1){
                prevIndexSidebarMenu = sidebarMenuItem.indexOf(currentActiveSidebarMenu) - 1;
                prevSidebarMenu = sidebarMenuItem[prevIndexSidebarMenu];
            }else{
                prevIndexSidebarMenu = keySidebarMenu.indexOf(currentActiveSidebarMenuChildList) - 1;
                prevSidebarMenu = keySidebarMenu[prevIndexSidebarMenu];
            }

            nextSidebarMenu = sidebarMenuItem[nextIndexSidebarMenu];
         
        }
      
    }else{

        nextIndexSidebarMenu = sidebarMenuItem.indexOf(currentActiveSidebarMenu) + 1;
        prevIndexSidebarMenu = sidebarMenuItem.indexOf(currentActiveSidebarMenu) - 1;

        nextSidebarMenu = sidebarMenuItem[nextIndexSidebarMenu];
        prevSidebarMenu = sidebarMenuItem[prevIndexSidebarMenu];

    }

    let navigateStepForm = { current: currentActiveSidebarMenu };

    if(prevSidebarMenu){ navigateStepForm['prev'] = prevSidebarMenu; }
        
    if(nextSidebarMenu){ navigateStepForm['next'] = nextSidebarMenu; }

    return navigateStepForm;

}

export const stepFormPrevNextSidebarChildItem = ({ whichPrevNextForm, whichCurrentForm, worksheetSidebarSetting, navigateBackNextButton  }) => {

    if(
        'childInformation' in worksheetSidebarSetting.sidebarMenu[whichCurrentForm] && 
        whichPrevNextForm in worksheetSidebarSetting.sidebarMenuChildListActive[whichCurrentForm]
    ){
        
        navigateBackNextButton['sectionClicked'] = whichCurrentForm;

        const setFalseToAllChild = Object.keys( worksheetSidebarSetting.sidebarMenuChildListActive[whichCurrentForm]  ).reduce((accumulator, key) => {
            return {...accumulator, [key]: false};
        }, {});
        
        navigateBackNextButton['childItem'] = { 
            [whichCurrentForm] : { ...setFalseToAllChild, ...{ [whichPrevNextForm]: true } }
        }

    }else{
        navigateBackNextButton['sectionClicked'] = whichPrevNextForm;
    }
    return navigateBackNextButton;
}