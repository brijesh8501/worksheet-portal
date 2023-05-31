import React from 'react';

const createField = (inputType, formFieldSettings, formFieldMasking) => {

    switch(inputType) {
        case 'div-button':
          return (
            (formFieldSettings.anchorLinkSetting.isEnabled)?
              <div className={formFieldSettings.class} id={formFieldSettings.id}>
                <a 
                  href={formFieldSettings.anchorLinkSetting.hrefLink}
                  className={formFieldSettings.anchorLinkSetting.class}
                  target={ (formFieldSettings.anchorLinkSetting.isTarget)? "_blank" : "_self" } 
                >
                  {formFieldSettings.label}
                </a>
              </div>
            :
              <div className={formFieldSettings.class} id={formFieldSettings.id}>{formFieldSettings.label}</div>
          );
        case 'drop-down':
          return (
            <select 
              className={formFieldSettings.class} 
              id={formFieldSettings.id} 
              name={formFieldSettings.name}
              value={formFieldSettings.value} 
              onChange={formFieldSettings.onChange}
              data-validatetype={ (formFieldMasking)? formFieldMasking.mask : formFieldMasking }
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
              onBlur={formFieldSettings.onBlur}
              data-validatetype={ (formFieldMasking)? formFieldMasking.mask : formFieldMasking }
              maxLength = { (formFieldSettings.maxlength)? formFieldSettings.maxlength : "" }
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
              data-validatetype={ (formFieldMasking)? formFieldMasking.mask : formFieldMasking }
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
                        data-validatetype={ (formFieldMasking)? formFieldMasking.mask : formFieldMasking }
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
                      <input 
                        type='checkbox' 
                        className={item.class} 
                        value={item.value} 
                        id={item.id} 
                        name={item.name} 
                        data-validatetype={ (formFieldMasking)? formFieldMasking.mask : formFieldMasking }
                        checked={item.checked}
                        onChange={item.onChange}
                      />
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
    const formFieldMasking = (props.formFieldMasking) ? props.formFieldMasking : null; 

    return createField(formField, formFieldSettings, formFieldMasking);
}

export default FormFields;