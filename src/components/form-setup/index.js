
import store from "../../store";
import { getFormData } from "../../action";
import { validation } from './validate';

export const setFormFieldDataToState = (props) => {

    const state = store.getState();

    const { validateForm } = state.myState;
    const { event, parentForm, childForm } = props;

    const eventTargetType = event.target.type;

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