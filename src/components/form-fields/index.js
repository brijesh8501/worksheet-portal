import React from 'react';

const createField = (inputType, formFieldSettings) => {
    switch(inputType) {
        case 'div-button':
          return (<div className={formFieldSettings.class} id={formFieldSettings.id}>{formFieldSettings.label}</div>);
        case 'drop-down':
          return (
            <select 
              className={formFieldSettings.class} 
              id={formFieldSettings.id} 
              name={formFieldSettings.name}
              value={formFieldSettings.value} 
              onChange={formFieldSettings.onChange}
            >
              {
                formFieldSettings.optionData.map( (item, i) => {
                    return ( 
                      <option 
                        value={item.value} 
                        key={i}
                        disabled={(item.disabled)? true: false}
                      >
                        {item.option}
                      </option>
                    );
                })
              }
            </select>);
        case 'textbox':
          return (
            <input 
              type={formFieldSettings.type} 
              placeholder={formFieldSettings.placeholder} 
              className={formFieldSettings.class} 
              id={formFieldSettings.id} 
              name={formFieldSettings.name}
              value={formFieldSettings.value}
              onChange={formFieldSettings.onChange} 
            />);
        case 'file':
          return (
            <input 
              type='file' 
              className={formFieldSettings.class} 
              id={formFieldSettings.id} 
              name={formFieldSettings.name} 
            />);
        case 'textarea':
          return (
            <textarea 
              className={formFieldSettings.class} 
              id={formFieldSettings.id} 
              name={formFieldSettings.name}
              onChange={formFieldSettings.onChange}
              value={formFieldSettings.value}
            ></textarea>);
        case 'radio':
          return (
            <div className={formFieldSettings.class}>
              {
                formFieldSettings.optionData.map( (item, i) => {
                  return ( 
                    <div key={i} className='d-flex gap-2 justify-content-center align-items-center'>
                      <input 
                        type='radio'
                        className={item.class} 
                        value={item.value} 
                        id={item.id} 
                        name={item.name} 
                        checked={item.checked}
                        onChange={item.onChange}/>
                      <label htmlFor={item.id} className='form-label mb-0'>{item.label}</label>
                    </div>
                  );
                })
              }
            </div>
          );
        case 'checkbox':
          return (
            <div className={formFieldSettings.class}>
              {
                formFieldSettings.optionData.map( (item, i) => {
                  return ( 
                    <div key={i} className='d-flex gap-2 justify-content-center align-items-center'>
                      <input type='checkbox' className={item.class} value={item.value} id={item.id} name={item.name} onChange={item.onChange}/>
                      <label htmlFor={item.id} className='form-label mb-0'>{item.label}</label>
                    </div>
                  );
                })
              }
            </div>
          );
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