import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormFields from '../../form-fields/index';
import { getFormData } from '../../../action';
import { setFormFieldDataToState, stepFormPrevNextSidebarItem, stepFormPrevNextSidebarChildItem } from '../../form-setup';

const SuiteInformation = (props) => {

    const whichParentForm = props.form;
    const myState = useSelector( (state) => state.myState);
    const dispatch = useDispatch();

    const { worksheetSuiteInformationSetting, worksheetForm, validateForm, worksheetSidebarSetting } = myState;

    const suiteInformationData = worksheetForm.suiteInformation;
    const validateSuiteInformationData = validateForm.worksheetForm.suiteInformation;

    const getNavigateStepForm = stepFormPrevNextSidebarItem(worksheetSidebarSetting);
    const whichPrevForm = (getNavigateStepForm.prev)? getNavigateStepForm.prev : null;
    const whichChildForm = getNavigateStepForm.current;
    const whichNextForm = (getNavigateStepForm.next)? getNavigateStepForm.next : null;

    let navigateBackButton = {};
    if(whichPrevForm){
        const objPrevNextForNavigation = {
            whichPrevNextForm: whichPrevForm,
            whichCurrentForm: whichChildForm,
            worksheetSidebarSetting,
            navigateBackNextButton: navigateBackButton
        }
     
        const respPrevNextForNavigation = stepFormPrevNextSidebarChildItem(objPrevNextForNavigation);
        navigateBackButton = respPrevNextForNavigation;   
    }
    let navigateNextButton = {};
    if(whichNextForm){
        navigateNextButton['sectionClicked'] = whichNextForm;

        const objPrevNextForNavigation = {
            whichPrevNextForm: whichNextForm,
            whichCurrentForm: whichChildForm,
            worksheetSidebarSetting,
            navigateBackNextButton: navigateNextButton
        }
     
        const respPrevNextForNavigation = stepFormPrevNextSidebarChildItem(objPrevNextForNavigation);
        navigateNextButton = respPrevNextForNavigation; 
    }
    const formFieldData = (e) => {

        const formFieldDataSet = {
            parentForm: whichParentForm,
            childForm: whichChildForm,
            event: e
        };
        
        setFormFieldDataToState(formFieldDataSet);
       
    }

    return (
        <div className='step-form ps-4 pe-3' id={whichParentForm}>
            <div className='col-12' id={`step${whichChildForm}`}>
                <div className='step-form-header py-3'>
                    <h2 className='h4 mb-0 page-title'>{props.pageTitle}</h2>
                    <hr className='mb-0'/>
                </div>
                <div className='step-form-body pt-2 pb-3'>
                    {
                        worksheetSuiteInformationSetting.choice.map( (item, i) =>{
                            return( <div
                                className='stepform-choice position-relative'
                                id={`worksheetChoice${props.pageTitle}Choice${i+1}`}
                                key={i}
                            >
                                <div className='stepform-choice-title position-absolute'>{item.label}</div>
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
                                                                value: suiteInformationData[data.id].value,
                                                                onChange: formFieldData
                                                            }
                                                        }
                                                        formFieldMasking = {
                                                            {
                                                                mask: ( validateSuiteInformationData[data.name].length === 2 ) ? 
                                                                validateSuiteInformationData[data.name][1] 
                                                                :
                                                                validateSuiteInformationData[data.name][0]
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
                                                                value: suiteInformationData[data.id].value,
                                                                onChange: formFieldData,
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
                                                        formFieldMasking = {
                                                            {
                                                                mask: ( validateSuiteInformationData[data.name].length === 2 ) ? 
                                                                validateSuiteInformationData[data.name][1] 
                                                                :
                                                                validateSuiteInformationData[data.name][0]
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
                <div className='step-form-footer pb-3'>
                    <div className='d-flex gap-3 justify-content-end'>
                        {
                            (whichPrevForm)&&
                                <button 
                                    className='btn btn-back'
                                    onClick={
                                        () => { 
                                            props.showSection(navigateBackButton) 
                                        } 
                                    }
                                ><img src='/assets/left-arrow.png' className='back-img-icon img-fluid' />Back
                                </button>
                        }
                            
                        <button 
                            className='btn btn-primary' 
                            onClick={ 
                                () => { 
                                    props.showSection(navigateNextButton) 
                                } 
                            }
                        >Continue</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SuiteInformation;