import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../includes/header/navbar';
import Footer from '../includes/footer/index';
import FormFields from '../form-fields';
import PrivacyPolicy from '../includes/privacy';
import Modal from '../includes/modal';
import { getFormData, resetFormData } from '../../action';
import { setFormFieldDataToState } from '../form-setup';

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

    const myState = useSelector( (state) => state.myState);
    const dispatch = useDispatch();

    const { profileForm, validateForm } = myState;
  
    const profileInformationData = profileForm.profileInformation;
    const validateProfileInformationData = validateForm.profileForm.profileInformation;

    const formFieldData = (e) => {

        const formFieldDataSet = {
            parentForm: 'profileForm',
            childForm: 'profileInformation',
            event: e
        };
        
        setFormFieldDataToState(formFieldDataSet);
        if(e.target.name === 'privacyPolicy'){
            (e.target.checked)&&
                hideModal(); 
        }

    }
    useEffect(() => {

        dispatch ( resetFormData('profileForm') );

    }, []);

    return (
        <div>
            <Navbar/>
            <section className='my-5 py-5 container body-section'>
                <div className='page-body body-section-wrapper'>
                    <h1 className='text-center mb-5 page-title'>Profile</h1>
                    <div className='profile-form px-3 position-relative' id='profileForm'>
                        <div className='d-flex justify-content-end profile-form-header py-4'>
                            <button className='btn btn-secondary btn-delete-account'>
                                <img src='/assets/delete-profile-icon.png' className='stepform-img-icon img-fluid'/>Delete account</button> 
                        </div>
                        <div className='profile-form-body pb-3'>
                            <div className='d-flex flex-wrap gap-3 justify-content-center align-items-center'>
                                <div className='cw-50'>
                                    <label className='form-label'>
                                        {profileInformationData['firstName'].label} 
                                        &nbsp;
                                        { (validateProfileInformationData['firstName'][0] === 'required')&& <span className='text-danger'>*</span> }
                                    </label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `firstName`,
                                                name: `firstName`,
                                                type: 'text',
                                                value: profileInformationData['firstName'].value,
                                                placeholder: 'Enter agent first name',
                                                onChange: formFieldData
                                            }
                                        }
                                        formFieldMasking = {
                                            (validateProfileInformationData[`firstName`][0] === 'required')&&
                                            {
                                                mask: 'required',
                                            }
                                        }
                                    />
                                </div>
                                <div className='cw-50'>
                                    <label className='form-label'>
                                        {profileInformationData['lastName'].label}
                                        &nbsp;
                                        { (validateProfileInformationData['lastName'][0] === 'required')&& <span className='text-danger'>*</span> }
                                    </label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `lastName`,
                                                name: `lastName`,
                                                type: 'text',
                                                value: profileInformationData['lastName'].value,
                                                placeholder: 'Enter agent last name',
                                                onChange: formFieldData
                                            }
                                        }
                                        formFieldMasking = {
                                            (validateProfileInformationData[`lastName`][0] === 'required')&&
                                            {
                                                mask: 'required',
                                            }
                                        }
                                    />
                                </div>
                            </div>
                            <div className='d-flex flex-wrap gap-3 justify-content-center align-items-center mt-3'>
                                <div className='cw-50'>
                                    <label className='form-label'>
                                        {profileInformationData['phoneNumber'].label}
                                        &nbsp;
                                        { (validateProfileInformationData['phoneNumber'][0] === 'required')&& <span className='text-danger'>*</span> }
                                    </label>
                                    <FormFields
                                        formField='textbox'
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `phoneNumber`,
                                                name: `phoneNumber`,
                                                type: 'text',
                                                value: profileInformationData['phoneNumber'].value,
                                                placeholder: 'Enter agent phone number, e.g. 9999999999',
                                                maxlength: '10',
                                                onChange: formFieldData,
                                                onBlur: formFieldData
                                            }
                                        }
                                        formFieldMasking = {
                                            (validateProfileInformationData[`phoneNumber`][0] === 'required')&&
                                            {
                                                mask: validateProfileInformationData[`phoneNumber`][1],
                                            }
                                        }
                                    />
                                </div>
                                <div className='cw-50'>
                                    <label className='form-label'>
                                        {profileInformationData['emailAddress'].label} 
                                        &nbsp;
                                        { (validateProfileInformationData['emailAddress'][0] === 'required')&& <span className='text-danger'>*</span> }
                                    </label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `emailAddress`,
                                                name: `emailAddress`,
                                                type: 'text',
                                                value: profileInformationData['emailAddress'].value,
                                                placeholder: 'Enter agent email address',
                                                onChange: formFieldData
                                            }
                                        }
                                        formFieldMasking = {
                                            (validateProfileInformationData[`emailAddress`][0] === 'required')&&
                                            {
                                                mask: validateProfileInformationData['emailAddress'][1],
                                            }
                                        }
                                    />
                                </div>
                            </div>
                            <div className='d-flex flex-wrap gap-3 justify-content-center align-items-center mt-3'>
                                <div className='cw-50'>
                                    <label className='form-label'>
                                        {profileInformationData['brokerageName'].label}
                                        &nbsp;
                                        { (validateProfileInformationData['brokerageName'][0] === 'required')&& <span className='text-danger'>*</span> }
                                    </label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `brokerageName`,
                                                name: `brokerageName`,
                                                type: 'text',
                                                value: profileInformationData['brokerageName'].value,
                                                placeholder: 'Enter brokerage name',
                                                onChange: formFieldData
                                            }
                                        }
                                        formFieldMasking = {
                                            (validateProfileInformationData[`brokerageName`][0] === 'required')&&
                                            {
                                                mask: 'required',
                                            }
                                        }
                                    />
                                </div>
                                <div className='cw-50'>
                                    <label className='form-label'>
                                        {profileInformationData['brokeragePhoneNumber'].label}
                                        &nbsp;
                                        { (validateProfileInformationData['brokeragePhoneNumber'][0] === 'required')&& <span className='text-danger'>*</span> }
                                    </label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `brokeragePhoneNumber`,
                                                name: `brokeragePhoneNumber`,
                                                type: 'text',
                                                maxlength: '10',
                                                value: profileInformationData['brokeragePhoneNumber'].value,
                                                placeholder: 'Enter brokerage phone number, e.g. 9999999999',
                                                onChange: formFieldData,
                                                onBlur: formFieldData
                                            }
                                        }
                                        formFieldMasking = {
                                            (validateProfileInformationData[`brokeragePhoneNumber`][0] === 'required')&&
                                            {
                                                mask: validateProfileInformationData[`brokeragePhoneNumber`][1],
                                            }
                                        }
                                    />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <label className='form-label'>
                                    {profileInformationData['brokerageAddress'].label} 
                                    &nbsp;
                                    { (validateProfileInformationData['brokerageAddress'][0] === 'required')&& <span className='text-danger'>*</span> }
                                </label>
                                <FormFields 
                                    formField='textbox' 
                                    formFieldSettings={ 
                                        { 
                                            class: 'form-control',
                                            id: `brokerageAddress`,
                                            name: `brokerageAddress`,
                                            type: 'text',
                                            value: profileInformationData['brokerageAddress'].value,
                                            placeholder: 'Enter brokerage address',
                                            onChange: formFieldData
                                        }
                                    }
                                    formFieldMasking = {
                                        (validateProfileInformationData[`brokerageAddress`][0] === 'required')&&
                                        {
                                            mask: 'required',
                                        }
                                    }
                                />
                            </div>
                            <div className='d-flex flex-wrap gap-3 justify-content-center align-items-center mt-3'>
                                <div className='cw-50'>
                                    <label className='form-label'>
                                        {profileInformationData['brokerageCity'].label} 
                                        &nbsp;
                                        { (validateProfileInformationData['brokerageCity'][0] === 'required')&& <span className='text-danger'>*</span> }
                                    </label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `brokerageCity`,
                                                name: `brokerageCity`,
                                                type: 'text',
                                                value: profileInformationData['brokerageCity'].value,
                                                placeholder: 'Enter brokerage city',
                                                onChange: formFieldData
                                            }
                                        }
                                        formFieldMasking = {
                                            (validateProfileInformationData[`brokerageCity`][0] === 'required')&&
                                            {
                                                mask: 'required',
                                            }
                                        }
                                    />
                                </div>
                                <div className='cw-50'>
                                    <label className='form-label'>
                                        {profileInformationData['brokerageProvince'].label} 
                                        &nbsp;
                                        { (validateProfileInformationData['brokerageProvince'][0] === 'required')&& <span className='text-danger'>*</span> }
                                    </label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `brokerageProvince`,
                                                name: `brokerageProvince`,
                                                type: 'text',
                                                value: profileInformationData['brokerageProvince'].value,
                                                placeholder: 'Enter brokerage province/state/region',
                                                onChange: formFieldData
                                            }
                                        }
                                        formFieldMasking = {
                                            (validateProfileInformationData[`brokerageProvince`][0] === 'required')&&
                                            {
                                                mask: 'required',
                                            }
                                        }
                                    />
                                </div>
                            </div>
                            <div className='d-flex flex-wrap gap-3 justify-content-center align-items-center mt-3'>
                                <div className='cw-50'>
                                    <label className='form-label'>
                                        {profileInformationData['brokerageCountry'].label} 
                                        &nbsp;
                                        { (validateProfileInformationData['brokerageCountry'][0] === 'required')&& <span className='text-danger'>*</span> }
                                    </label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `brokerageCountry`,
                                                name: `brokerageCountry`,
                                                type: 'text',
                                                value: profileInformationData['brokerageCountry'].value,
                                                placeholder: 'Enter brokerage country',
                                                onChange: formFieldData
                                            }
                                        }
                                        formFieldMasking = {
                                            (validateProfileInformationData[`brokerageCountry`][0] === 'required')&&
                                            {
                                                mask: 'required',
                                            }
                                        }
                                    />
                                </div>
                                <div className='cw-50'>
                                    <label className='form-label'>
                                        {profileInformationData['brokeragePostalCode'].label} 
                                        &nbsp;
                                        { (validateProfileInformationData['brokeragePostalCode'][0] === 'required')&& <span className='text-danger'>*</span> }
                                    </label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `brokeragePostalCode`,
                                                name: `brokeragePostalCode`,
                                                type: 'text',
                                                value: profileInformationData['brokeragePostalCode'].value,
                                                maxlength: '6',
                                                placeholder: 'Enter brokerage postal code, e.g. A9A9A9',
                                                onChange: formFieldData,
                                                onBlur: formFieldData
                                            }
                                        }
                                        formFieldMasking = {
                                            (validateProfileInformationData[`brokeragePostalCode`][0] === 'required')&&
                                            {
                                                mask: validateProfileInformationData[`brokeragePostalCode`][1],
                                            }
                                        }
                                    />
                                </div>
                            </div>
                            <div className='mt-3'>
                                    <label className='form-label'>
                                        Business card (front) 
                                        <span className='text-danger'>*</span>
                                    </label>
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
                                    <label className='form-label'>
                                        Business card (Back) 
                                        <span className='text-danger'>*</span>
                                    </label>
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
                            <div className='mt-3 text-decoration-underline privacy-link' onClick={showModal}>
                                <p className='mb-0 d-flex justify-content-start align-items-center'>
                                    {
                                    (profileInformationData['privacyPolicy'].value)&&
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
                                                            label: profileInformationData.privacyPolicy.label,
                                                            class: 'form-check-input square-radio',
                                                            id: 'privacyPolicy',
                                                            name: 'privacyPolicy',
                                                            value: 'true',
                                                            checked: profileInformationData.privacyPolicy.value === true,
                                                            onChange: formFieldData
                                                        }
                                                    ]
                                                }
                                            }
                                            formFieldMasking = {
                                                (validateProfileInformationData[`privacyPolicy`][0] === 'required')&&
                                                {
                                                    mask: 'required',
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