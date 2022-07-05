import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormFields from '../../form-fields/index';
import { getFormData } from '../../../action';

const OtherInformation = (props) => {

    const whichParentForm = 'worksheetForm';
    const whichChildForm = 'otherInformation';
    const whichNextForm = 'purchaserInformation';

    const myState = useSelector( (state) => state.myState);
    const dispatch = useDispatch();

    const { worksheetForm, validateForm } = myState;

    const otherInformationData = worksheetForm.otherInformation;
    const validateOtherInformationData = validateForm.worksheetForm.otherInformation;

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
                                            onChange: getFormFieldData
                                        },
                                        {
                                            label: 'No',
                                            class: 'form-check-input square-radio',
                                            id: 'appointmentTypeNo',
                                            name: 'appointmentType',
                                            value: 'No',
                                            checked: otherInformationData.appointmentType === 'No',
                                            onChange: getFormFieldData
                                        }
                                    ]
                                }
                            }
                        />
                    </div>
                </div>
                <div className='worksheet-form-footer pb-3'>
                    <div className='d-flex gap-3 justify-content-end'>
                        <button 
                        className='btn btn-back'
                        onClick={
                            () => { 
                                props.showSection(
                                    {
                                        sectionClicked:'agentInformation'
                                    }
                                ) 
                            } 
                        }
                    >
                        <img src='/assets/left-arrow.png' className='back-img-icon img-fluid' />Back
                    </button>
                        <button className='btn btn-primary' onClick={ () => { props.showSection({sectionClicked:'acknowledgement'}) } }>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OtherInformation;