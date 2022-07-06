import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormFields from '../form-fields';
import HtmlWrapper from './includes/htmlWrapper';
import { Link } from 'react-router-dom';
import { getFormData, resetFormData } from '../../action';
import { setFormFieldDataToState, showHidePassword } from '../form-setup';

const ChangePassword = () => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const myState = useSelector( (state) => state.myState);
    const dispatch = useDispatch();

    const { profileForm, validateForm } = myState;
  
    const changePasswordInformationData = profileForm.changePasswordInformation;
    const validateChangePasswordInformationData = validateForm.profileForm.changePasswordInformation;

    const formFieldData = (e) => {

        const formFieldDataSet = {
            parentForm: 'profileForm',
            childForm: 'changePasswordInformation',
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
                        <h2 className='text-center'>Change Password</h2>
                        <hr/>
                        <p className='small'>Enter your email address and we'll send you a link to reset your password.</p>
                    </div>
                    <div className='create-account-body w-100'>
                        <div>
                            <label className='form-label'>
                                Password 
                                &nbsp;
                                { (validateChangePasswordInformationData['password'][0] === 'required')&& <span className='text-danger'>*</span> }
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
                                            value: changePasswordInformationData['password'],
                                            onChange: formFieldData
                                        }
                                    }
                                    formFieldMasking = {
                                        (validateChangePasswordInformationData['password'][0] === 'required')&&
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
                                Confirm password 
                                &nbsp;
                                { (validateChangePasswordInformationData['confirmPassword'][0] === 'required')&& <span className='text-danger'>*</span> }
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
                                            value: changePasswordInformationData['confirmPassword'],
                                            onChange: formFieldData
                                        }
                                    }
                                    formFieldMasking = {
                                        (validateChangePasswordInformationData['confirmPassword'][0] === 'required')&&
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
                            <button className='btn btn-primary'>Change password</button>
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

export default ChangePassword;