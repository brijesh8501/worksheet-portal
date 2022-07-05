import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormFields from '../../form-fields/index';
import { getFormData } from '../../../action';

const SuiteInformation = (props) => {

    const whichParentForm = 'worksheetForm';
    const whichChildForm = 'suiteInformation';
    const whichNextForm = 'purchaserInformation';

    const myState = useSelector( (state) => state.myState);
    const dispatch = useDispatch();

    const { worksheetSuiteInformationSetting, worksheetForm, validateForm } = myState;

    const suiteInformationData = worksheetForm.suiteInformation;
    const validateSuiteInformationData = validateForm.worksheetForm.suiteInformation;

    const getFormFieldData = (e) => {
        dispatch( getFormData({ 
            inputField: { [e.target.name]: e.target.value }, 
            formType: {
                parentForm: whichParentForm,
                childForm: whichChildForm 
            }
        }) );
    }
    return (
        <div className='worksheet-form ps-4 pe-3' id={whichParentForm}>
            <div className='col-12 worksheet-suite-information' id={`worksheet${whichChildForm}`}>
                <div className='worksheet-form-header py-3'>
                    <h2 className='h4 mb-0'>{props.pageTitle}</h2>
                </div>
                <div className='worksheet-form-body py-3'>
                    {
                        worksheetSuiteInformationSetting.choice.map( (item, i) =>{
                            return( <div
                                className='worksheet-choice position-relative'
                                id={`worksheetChoice${props.pageTitle}Choice${i+1}`}
                                key={i}
                            >
                                <div className='worksheet-choice-title position-absolute'>{item.label}</div>
                                <div className='d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center px-3 pt-5 pb-3'>
                                    {
                                        item.fields.map( (data, j) =>{
                                            if(data.fieldType === 'textbox'){

                                                return( <div className='flex-even' key={j}>
                                                    <label className='form-label'>
                                                        {data.label} 
                                                        &nbsp;
                                                        { (validateSuiteInformationData[data.name][0] === 'required')&& <span className='text-danger'>*</span> }
                                                    </label>
                                                    <FormFields 
                                                        formField='textbox' 
                                                        formFieldSettings={ 
                                                            { 
                                                                class: 'form-control',
                                                                id: data.id,
                                                                name: data.name,
                                                                type: 'text',
                                                                placeholder: data.placeholder,
                                                                value: suiteInformationData[data.id],
                                                                onChange: getFormFieldData
                                                            }
                                                        }
                                                    />
                                                </div>)

                                            }else if(data.fieldType === 'dropdown'){

                                                return( <div className='flex-even' key={j}>
                                                    <label htmlFor={data.id} className='form-label'>
                                                        {data.label}
                                                        &nbsp;
                                                        { (validateSuiteInformationData[data.name][0] === 'required')&& <span className='text-danger'>*</span> }
                                                    </label>
                                                    <FormFields 
                                                        formField='drop-down' 
                                                        formFieldSettings={ 
                                                            { 
                                                                class: 'form-select',
                                                                id: data.id,
                                                                name: data.name,
                                                                value: suiteInformationData[data.id],
                                                                dataRequired: validateSuiteInformationData[data.name],
                                                                onChange: getFormFieldData,
                                                                optionData: [
                                                                    {
                                                                        option: data.placeholder,
                                                                        value: '',
                                                                        disabled: true
                                                                    },
                                                                    {
                                                                        option: 10,
                                                                        value: 10
                                                                    },
                                                                    {
                                                                        option: 25,
                                                                        value: 25
                                                                    },
                                                                    {
                                                                        option: 50,
                                                                        value: 50
                                                                    },
                                                                    {
                                                                        option: 100,
                                                                        value: 100
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    />
                                                </div>)

                                            }
                                        })
                                    }
                                </div>
                            </div>)
                        })
                    }
                </div>
                <div className='worksheet-form-footer pb-3'>
                    <div className='d-flex gap-3 justify-content-end'>
                        {/* <button className='btn btn-secondary'>Save</button> */}
                        <button className='btn btn-primary' onClick={ () => { props.showSection({sectionClicked:whichNextForm}) } }>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SuiteInformation;