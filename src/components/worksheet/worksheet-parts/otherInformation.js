import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormFields from '../../form-fields/index';
import { getFormData } from '../../../action';
import { setFormFieldDataToState, stepFormPrevNextSidebarItem, stepFormPrevNextSidebarChildItem } from '../../form-setup';

const OtherInformation = (props) => {

    const whichParentForm = props.form;

    const myState = useSelector( (state) => state.myState);
    const dispatch = useDispatch();

    const { worksheetForm, validateForm, worksheetSidebarSetting } = myState;

    const otherInformationData = worksheetForm.otherInformation;
    const validateOtherInformationData = validateForm.worksheetForm.otherInformation;

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
                <div className='step-form-body pb-3'>
                    <div>
                        <label className='form-check-label'>
                            Preferred appointment type:
                            &nbsp;
                            { (validateOtherInformationData['appointmentType'][0] === 'required')&& <span className='text-danger'>*</span> }
                        </label>
                        <FormFields 
                            formField='radio' 
                            formFieldSettings={ 
                                { 
                                    class: 'd-flex gap-3 mt-2',
                                    optionData: [
                                        {
                                            label: 'Yes',
                                            class: 'form-check-input square-radio',
                                            id: 'appointmentTypeYes',
                                            name: 'appointmentType',
                                            value: 'Yes',
                                            checked: otherInformationData.appointmentType === 'Yes',
                                            onChange: formFieldData
                                        },
                                        {
                                            label: 'No',
                                            class: 'form-check-input square-radio',
                                            id: 'appointmentTypeNo',
                                            name: 'appointmentType',
                                            value: 'No',
                                            checked: otherInformationData.appointmentType === 'No',
                                            onChange: formFieldData
                                        }
                                    ]
                                }
                            }
                            formFieldMasking = {
                                {
                                    mask: ( validateOtherInformationData[`appointmentType`].length === 2 ) ? 
                                    validateOtherInformationData[`appointmentType`][1] 
                                    :
                                    validateOtherInformationData[`appointmentType`][0]
                                }
                            }
                        />
                    </div>
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
                                >
                                    <img src='/assets/left-arrow.png' className='back-img-icon img-fluid' />Back
                                </button>
                        }
                        <button 
                            className='btn btn-primary' 
                            onClick={ () => { 
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

export default OtherInformation;