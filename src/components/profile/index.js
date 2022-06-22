import React, { useState } from 'react';
import Navbar from '../includes/header/navbar';
import Footer from '../includes/footer/index';
import FormFields from '../form-fields';
import PrivacyPolicy from '../includes/privacy';
import Modal from '../includes/modal';

const Profile = () => {

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
        <div>
            <Navbar/>
            <section className='my-5 py-5 container body-section'>
                <div className='page-body body-section-wrapper'>
                    <h1 className='text-center mb-5'>Profile</h1>
                    <div className='profile-form px-3 position-relative' id='profileForm'>
                        <div className='d-flex justify-content-end profile-form-header py-4'>
                            <button className='btn btn-secondary btn-delete-account'>
                                <img src='/assets/delete-profile-icon.png' className='worksheet-img-icon img-fluid'/>Delete account</button> 
                        </div>
                        <div className='profile-form-body pb-3'>
                            <div className='d-flex flex-wrap gap-3 justify-content-center align-items-center'>
                                <div className='cw-50'>
                                    <label className='form-label'>Agent first name <span className='text-danger'>*</span></label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `firstName`,
                                                name: `firstName`,
                                                type: 'text',
                                                placeholder: 'Enter agent first name'
                                            }
                                        }
                                    />
                                </div>
                                <div className='cw-50'>
                                    <label className='form-label'>Agent last name <span className='text-danger'>*</span></label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `lastName`,
                                                name: `lastName`,
                                                type: 'text',
                                                placeholder: 'Enter agent last name'
                                            }
                                        }
                                    />
                                </div>
                            </div>
                            <div className='d-flex flex-wrap gap-3 justify-content-center align-items-center mt-3'>
                                <div className='cw-50'>
                                    <label className='form-label'>Agent phone number <span className='text-danger'>*</span></label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `phoneNumber`,
                                                name: `phoneNumber`,
                                                type: 'text',
                                                placeholder: 'Enter agent phone number'
                                            }
                                        }
                                    />
                                </div>
                                <div className='cw-50'>
                                    <label className='form-label'>Agent email address <span className='text-danger'>*</span></label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `emailAddress`,
                                                name: `emailAddress`,
                                                type: 'text',
                                                placeholder: 'Enter agent email address'
                                            }
                                        }
                                    />
                                </div>
                            </div>
                            <div className='d-flex flex-wrap gap-3 justify-content-center align-items-center mt-3'>
                                <div className='cw-50'>
                                    <label className='form-label'>Brokerage name <span className='text-danger'>*</span></label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `brokerageName`,
                                                name: `brokerageName`,
                                                type: 'text',
                                                placeholder: 'Enter brokerage name'
                                            }
                                        }
                                    />
                                </div>
                                <div className='cw-50'>
                                    <label className='form-label'>Brokerage Phone number <span className='text-danger'>*</span></label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `brokeragePhoneNumber`,
                                                name: `brokeragePhoneNumber`,
                                                type: 'text',
                                                placeholder: 'Enter brokerage phone number'
                                            }
                                        }
                                    />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <label className='form-label'>Brokerage Address <span className='text-danger'>*</span></label>
                                <FormFields 
                                    formField='textbox' 
                                    formFieldSettings={ 
                                        { 
                                            class: 'form-control',
                                            id: `brokerageAddress`,
                                            name: `brokergaeAddress`,
                                            type: 'text',
                                            placeholder: 'Enter brokerage address'
                                        }
                                    }
                                />
                            </div>
                            <div className='d-flex flex-wrap gap-3 justify-content-center align-items-center mt-3'>
                                <div className='cw-50'>
                                    <label className='form-label'>Brokerage city <span className='text-danger'>*</span></label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `brokerageCity`,
                                                name: `brokerageCity`,
                                                type: 'text',
                                                placeholder: 'Enter brokerage city'
                                            }
                                        }
                                    />
                                </div>
                                <div className='cw-50'>
                                    <label className='form-label'>Brokerage province/state/region <span className='text-danger'>*</span></label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `brokerageProvince`,
                                                name: `brokerageProvince`,
                                                type: 'text',
                                                placeholder: 'Enter brokerage province/state/region'
                                            }
                                        }
                                    />
                                </div>
                            </div>
                            <div className='d-flex flex-wrap gap-3 justify-content-center align-items-center mt-3'>
                                <div className='cw-50'>
                                    <label className='form-label'>Brokerage country <span className='text-danger'>*</span></label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `brokerageCountry`,
                                                name: `brokerageCountry`,
                                                type: 'text',
                                                placeholder: 'Enter brokerage country'
                                            }
                                        }
                                    />
                                </div>
                                <div className='cw-50'>
                                    <label className='form-label'>Brokerage postal/zip code <span className='text-danger'>*</span></label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `brokeragePostalCode`,
                                                name: `brokeragePostalCode`,
                                                type: 'text',
                                                placeholder: 'Enter brokerage postal code'
                                            }
                                        }
                                    />
                                </div>
                            </div>
                            <div className='mt-3'>
                                    <label className='form-label'>Business card (front) <span className='text-danger'>*</span></label>
                                    <FormFields 
                                        formField='file' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control file-custom-control',
                                                id: 'businessCardFront',
                                                name: 'businessCardFront'
                                            }
                                        }
                                    />
                                </div>
                                <div className='mt-3'>
                                    <label className='form-label'>Business card (Back) <span className='text-danger'>*</span></label>
                                    <FormFields 
                                        formField='file' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control file-custom-control',
                                                id: 'businessCardBack',
                                                name: 'BusinessCardBack'
                                            }
                                        }
                                    />
                                </div>
                            <p className='mt-3 mb-0 text-decoration-underline privacy-link' onClick={showModal}>Click here to read and accept the Privacy Policy/Terms of Use.</p>
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
                        <div className='worksheet-form-footer pb-3'>
                            <div>
                                <button className='btn btn-primary'>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Profile;