import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormFields from '../form-fields';
import HtmlWrapper from './includes/htmlWrapper';
import { Link } from 'react-router-dom';
import { getFormData, resetFormData } from '../../action';
import { setFormFieldDataToState, showHidePassword } from '../form-setup';

const CreateAccount = () => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const myState = useSelector( (state) => state.myState);
    const dispatch = useDispatch();

    const { profileForm, validateForm } = myState;
  
    const createAccountInformationData = profileForm.createAccountInformation;
    const validateCreateAccountInformationData = validateForm.profileForm.createAccountInformation;

    const formFieldData = (e) => {

        const formFieldDataSet = {
            parentForm: 'profileForm',
            childForm: 'createAccountInformation',
            event: e
        };

        setFormFieldDataToState(formFieldDataSet);
    }

    const showHidePasswordField = (e) => {

        const target = e.target.getAttribute('data-target');
        let visible;

        if( target === 'password' ){

            visible = (isPasswordVisible)? false:  true;
            setIsPasswordVisible( visible );
            
        }else if( target === 'confirmPassword'){

            visible = (isConfirmPasswordVisible)? false:  true;
            setIsConfirmPasswordVisible( visible );

        }

        const showHidePasswordFieldSet = {
            target,
            visible 
        }
        showHidePassword(showHidePasswordFieldSet);

    }

    useEffect(() => {

        dispatch ( resetFormData('profileForm') );

    }, []);
    return(
        <div>
             <HtmlWrapper>
                <div className='create-account-form d-flex flex-column justify-content-center align-items-center p-3'>
                    <div className='create-account-header w-100'>
                        <h2 className='text-center'>Sign Up</h2>
                        <hr/>
                        <p className='mb-2 mb-sm-0 small'>Please fill in your profile to sign up for a new account.</p>
                        <p className='small'>You can add additional information after you have signed up.</p>
                    </div>
                    <div className='create-account-body w-100'>
                        <div>
                            <label className='form-label'>
                                {createAccountInformationData['firstName'].label} 
                                &nbsp;
                                { (validateCreateAccountInformationData['firstName'][0] === 'required')&& <span className='text-danger'>*</span> }
                            </label>
                            <FormFields 
                                formField='textbox' 
                                formFieldSettings={ 
                                    { 
                                        class: 'form-control',
                                        id: `firstName`,
                                        name: `firstName`,
                                        type: 'text',
                                        placeholder: 'Enter first name',
                                        value: createAccountInformationData['firstName'].value,
                                        onChange: formFieldData
                                    }
                                }
                                formFieldMasking = {
                                    (validateCreateAccountInformationData['firstName'][0] === 'required')&&
                                    {
                                        mask: 'required',
                                    }
                                }
                            />
                        </div>
                        <div className='mt-3'>
                            <label className='form-label'>
                                {createAccountInformationData['lastName'].label} 
                                &nbsp;
                                { (validateCreateAccountInformationData['lastName'][0] === 'required')&& <span className='text-danger'>*</span> }
                            </label>
                            <FormFields 
                                formField='textbox' 
                                formFieldSettings={ 
                                    { 
                                        class: 'form-control',
                                        id: `lastName`,
                                        name: `lastName`,
                                        type: 'text',
                                        placeholder: 'Enter last name',
                                        value: createAccountInformationData['lastName'].value,
                                        onChange: formFieldData
                                    }
                                }
                                formFieldMasking = {
                                    (validateCreateAccountInformationData['lastName'][0] === 'required')&&
                                    {
                                        mask: 'required',
                                    }
                                }
                            />
                        </div>
                        <div className='mt-3'>
                            <label className='form-label'>
                                {createAccountInformationData['emailAddress'].label} 
                                &nbsp;
                                { (validateCreateAccountInformationData['emailAddress'][0] === 'required')&& <span className='text-danger'>*</span> }
                            </label>
                            <FormFields 
                                formField='textbox' 
                                formFieldSettings={ 
                                    { 
                                        class: 'form-control',
                                        id: `emailAddress`,
                                        name: `emailAddress`,
                                        type: 'text',
                                        placeholder: 'Enter email address',
                                        value: createAccountInformationData['emailAddress'].value,
                                        onChange: formFieldData
                                    }
                                }
                                formFieldMasking = {
                                    (validateCreateAccountInformationData['emailAddress'][0] === 'required')&&
                                    {
                                        mask: validateCreateAccountInformationData['emailAddress'][1],
                                    }
                                }
                            />
                        </div>
                        <div className='mt-3'>
                            <label className='form-label'>
                                {createAccountInformationData['confirmEmailAddress'].label} 
                                &nbsp;
                                { (validateCreateAccountInformationData['confirmEmailAddress'][0] === 'required')&& <span className='text-danger'>*</span> }
                            </label>
                            <FormFields 
                                formField='textbox' 
                                formFieldSettings={ 
                                    { 
                                        class: 'form-control',
                                        id: `confirmEmailAddress`,
                                        name: `confirmEmailAddress`,
                                        type: 'text',
                                        placeholder: 'Confirm your email address',
                                        value: createAccountInformationData['confirmEmailAddress'].value,
                                        onChange: formFieldData
                                    }
                                }
                                formFieldMasking = {
                                    (validateCreateAccountInformationData['confirmEmailAddress'][0] === 'required')&&
                                    {
                                        mask: validateCreateAccountInformationData['confirmEmailAddress'][1],
                                    }
                                }
                            />
                        </div>
                        <div className='mt-3'>
                            <label className='form-label'>
                                {createAccountInformationData['phoneNumber'].label} 
                                &nbsp;
                                { (validateCreateAccountInformationData['phoneNumber'][0] === 'required')&& <span className='text-danger'>*</span> }
                            </label>
                            <FormFields 
                                formField='textbox' 
                                formFieldSettings={ 
                                    { 
                                        class: 'form-control',
                                        id: `phoneNumber`,
                                        name: `phoneNumber`,
                                        type: 'text',
                                        placeholder: 'Enter phone number',
                                        value: createAccountInformationData['phoneNumber'].value,
                                        onChange: formFieldData
                                    }
                                }
                                formFieldMasking = {
                                    (validateCreateAccountInformationData['phoneNumber'][0] === 'required')&&
                                    {
                                        mask: validateCreateAccountInformationData['phoneNumber'][1],
                                    }
                                }
                            />
                        </div>
                        <div className='mt-3'>
                            <label className='form-label'>
                                {createAccountInformationData['password'].label} 
                                &nbsp;
                                { (validateCreateAccountInformationData['password'][0] === 'required')&& <span className='text-danger'>*</span> }
                            </label>
                            <div className="input-group">
                                <FormFields 
                                    formField='textbox' 
                                    formFieldSettings={ 
                                        { 
                                            class: 'form-control',
                                            id: `password`,
                                            name: `password`,
                                            type: 'password',
                                            placeholder: 'Enter password',
                                            value: createAccountInformationData['password'].value,
                                            onChange: formFieldData
                                        }
                                    }
                                    formFieldMasking = {
                                        (validateCreateAccountInformationData['password'][0] === 'required')&&
                                        {
                                            mask: 'required',
                                        }
                                    }
                                />
                                <span className="input-group-text" tabIndex='0'>
                                    <img 
                                        src={ (isPasswordVisible)? '/assets/eye-view.png' : '/assets/eye-hidden.png' }
                                        data-target='password' 
                                        className='img-eye-icon img-fluid'
                                        onClick = { showHidePasswordField } 
                                    />
                                </span>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <label className='form-label'>
                                {createAccountInformationData['confirmPassword'].label}
                                &nbsp;
                                { (validateCreateAccountInformationData['confirmPassword'][0] === 'required')&& <span className='text-danger'>*</span> }
                            </label>
                            <div className="input-group">
                                <FormFields 
                                    formField='textbox' 
                                    formFieldSettings={ 
                                        { 
                                            class: 'form-control',
                                            id: `confirmPassword`,
                                            name: `confirmPassword`,
                                            type: 'password',
                                            placeholder: 'Confirm your password',
                                            value: createAccountInformationData['confirmPassword'].value,
                                            onChange: formFieldData
                                        }
                                    }
                                    formFieldMasking = {
                                        (validateCreateAccountInformationData['confirmPassword'][0] === 'required')&&
                                        {
                                            mask: 'required',
                                        }
                                    }
                                />
                                <span className="input-group-text" tabIndex='0'>
                                    <img 
                                        src={ (isConfirmPasswordVisible)? '/assets/eye-view.png' : '/assets/eye-hidden.png' } 
                                        data-target='confirmPassword' 
                                        className='img-eye-icon img-fluid'
                                        onClick = {showHidePasswordField} 
                                    />
                                </span>
                            </div>
                        </div>
                        <div className='mt-4 text-center'>
                            <button className='btn btn-primary'>Create account</button>
                        </div>
                        <div className='create-account-footer w-100'>
                            <hr className='mt-4'/>
                            <div className='d-flex justify-content-between'>
                                <Link to='/login' className='btn p-0 text-decoration-underline'>Sign in</Link>
                                <Link to='/forgot-password' className='btn p-0 text-decoration-underline'>Forgot password?</Link>
                            </div>
                        </div>
                    </div>
                </div>
             </HtmlWrapper>
        </div>
    );

}

export default CreateAccount;