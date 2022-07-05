import React, { useState }  from 'react';
import FormFields from '../../form-fields/index';
import Modal from '../../includes/modal';
import PrivacyPolicy from '../../includes/privacy';

const Acknowledgement = (props) => {

    const [show, setShow] = useState(false);

    const showModal = () => {
        setShow(true);
        document.body.style.overflow = "hidden";
    };

    const hideModal = () => {
        setShow(false);
        document.body.style.overflow = "scroll";
    };

    const handleChange = (event) => {
        console.log(event.target.value);
    }
    

    return (
        <div className='worksheet-form ps-4 pe-3' id='worksheetForm'>
            <div className='col-12 worksheet-suite-information' id='worksheetotherInformation'>
                <div className='worksheet-form-header py-3'>
                    <h2 className='h4 mb-0'>{props.pageTitle}</h2>
                </div>
                <div className='worksheet-form-body py-3'>
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
                        <p className='text-decoration-underline privacy-link' onClick={showModal}>Click here to read and accept the Privacy Policy/Terms of Use.</p>
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
                                                        id: 'appointmentTypeYes',
                                                        name: 'appointmentType',
                                                        value: 'Yes',
                                                        onChange: handleChange
                                                    }
                                                ]
                                            }
                                        }
                                />}>
                            <PrivacyPolicy />
                        </Modal>
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
                                            sectionClicked:'otherInformation'
                                        }
                                    ) 
                                } 
                            }
                        >
                            <img src='/assets/left-arrow.png' className='back-img-icon img-fluid' />Back
                        </button>
                        {/* <button className='btn btn-secondary'>Save</button> */}
                        <button className='btn btn-primary' onClick={ () => { props.showSection({sectionClicked:'reviewInformation'}) } }>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Acknowledgement;