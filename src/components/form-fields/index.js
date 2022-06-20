import React from 'react';

const createField = (inputType, formFieldSettings) => {
    
    switch(inputType) {
        case 'div-button':
          return (<div className={formFieldSettings.class}>{formFieldSettings.label}</div>);
        default:
          return 'foo';
    }
}

const FormFields = (props) => {

    const formField = props.formField;
    const formFieldSettings = props.formFieldSettings;

    return createField(formField, formFieldSettings);
}

export default FormFields;