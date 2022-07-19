import React, { useState }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormFields from '../../form-fields/index';
import Modal from '../../includes/modal';
import PrivacyPolicy from '../../includes/privacy';
import { setFormFieldDataToState } from '../../form-setup';

const Acknowledgement = (props) => {

    const whichParentForm = props.form;
    const whichChildForm = 'acknowledgementInformation';
    const whichNextForm = 'reviewInformation';
    
    const [show, setShow] = useState(false);

    const showModal = () => {
        setShow(true);
        document.body.style.overflow = "hidden";
    };

    const hideModal = () => {
        setShow(false);
        document.body.style.overflow = "scroll";
    };

    const myState = useSelector( (state) => state.myState);
    const dispatch = useDispatch();

    const { worksheetForm, validateForm } = myState;

    const acknowledgementInformationData = worksheetForm.acknowledgementInformation;
    const validateAcknowledgementInformationData = validateForm.worksheetForm.acknowledgementInformation;

    const formFieldData = (e) => {

        const formFieldDataSet = {
            parentForm: whichParentForm,
            childForm: whichChildForm,
            event: e
        };

        setFormFieldDataToState(formFieldDataSet);
        if(e.target.name === 'privacyPolicyProfile'){
            (e.target.checked)&&
                hideModal(); 
        }

    }

    return (
        <div className='step-form ps-4 pe-3' id={whichParentForm}>
            <div className='col-12' id='stepotherInformation'>
                <div className='step-form-header py-3'>
                    <h2 className='h4 mb-0'>{props.pageTitle}</h2>
                </div>
                <div className='step-form-body py-3'>
                    <div>
                        <p>Please note:</p>
                        <p>In order to comply with the Government of Canada's <a href='https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/pipeda_brief/' target='_blank' className='text-black'>Personal Information Protection and 
                            Electronic Documents Act (PIPEDA)</a> act, this system does not store the following 
                            personal information:</p>
                            <ul>
                                <li>Government ID (held next to your face)</li>
                                <li>Government ID (Front) Image</li>
                                <li>Government ID (Back) Image</li>
                            </ul>
                        <p>This information is sent directly to the sales team.</p>
                        <div className='mt-3 text-decoration-underline privacy-link' onClick={showModal}>
                            <p className='mb-0 d-flex justify-content-start align-items-center'>
                                {
                                (acknowledgementInformationData['privacyPolicyProfile'])&&
                                    <>
                                        <img src="/assets/check-symbol.svg" className="img-check-icon img-fluid" />&nbsp;
                                    </>
                                }   
                                Click here to read and accept the Privacy Policy/Terms of Use.
                            </p>
                        </div>
                        <Modal 
                            modalTitle='Privacy Policy/Terms of Use' 
                            show={show} 
                            hideModal={hideModal} 
                            modalFooter={<FormFields 
                                        formField='checkbox' 
                                        formFieldSettings={{ 
                                                class: '',
                                                optionData: [
                                                    {
                                                        label: 'I agree that I have read and accept the Privacy Policy/Terms of Use',
                                                        class: 'form-check-input square-radio',
                                                        id: 'privacyPolicyProfile',
                                                        name: 'privacyPolicyProfile',
                                                        value: 'true',
                                                        checked: acknowledgementInformationData.privacyPolicyProfile === true,
                                                        onChange: formFieldData 
                                                    }
                                                ]
                                            }
                                        }
                                        formFieldMasking={
                                            (validateAcknowledgementInformationData[`privacyPolicyProfile`][0] === 'required')&&
                                            {
                                                mask: 'required',
                                            }
                                        }
                                />}>
                            <PrivacyPolicy />
                        </Modal>
                    </div>
                </div>
                <div className='step-form-footer pb-3'>
                    <div className='d-flex gap-3 justify-content-end'>
                        <button 
                            className='btn btn-back'
                            onClick={
                                () => { 
                                    props.showSection(
                                        {
                                            sectionClicked:'otherInformation'
                                        }
                                    ) 
                                } 
                            }
                        >
                            <img src='/assets/left-arrow.png' className='back-img-icon img-fluid' />Back
                        </button>
                        {/* <button className='btn btn-secondary'>Save</button> */}
                        <button className='btn btn-primary' onClick={ () => { props.showSection({sectionClicked:whichNextForm}) } }>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Acknowledgement;