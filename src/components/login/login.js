import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormFields from '../form-fields';
import HtmlWrapper from './includes/htmlWrapper';
import { Link } from 'react-router-dom';
import { getFormData, resetFormData } from '../../action';
import { setFormFieldDataToState, showHidePassword } from '../form-setup';

const Login = () => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const myState = useSelector( (state) => state.myState);
    const dispatch = useDispatch();

    const { profileForm, validateForm } = myState;
  
    const loginInformationData = profileForm.loginInformation;
    const validateLoginInformationData = validateForm.profileForm.loginInformation;

    const formFieldData = (e) => {

        const formFieldDataSet = {
            parentForm: 'profileForm',
            childForm: 'loginInformation',
            event: e
        };

        setFormFieldDataToState(formFieldDataSet);
    }

    const showHidePasswordField = (e) => {

        const target = e.target.getAttribute('data-target');
        let visible = (isPasswordVisible)? false :  true;
        setIsPasswordVisible( visible );

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
            <div className='login-form d-flex flex-column justify-content-center align-items-center p-3'>
                <div className='login-form-header w-100'>
                    <p className='mb-0 text-danger text-center'>If you have NOT logged in yet, please <Link to='/create-account' className='text-decoration-underline text-black'>Sign Up</Link> for your new account</p>
                    <hr/>
                </div>
                <div className='login-form-body w-100'>
                    <div>
                        <label className='form-label'>
                            {loginInformationData['emailAddress'].label}
                            &nbsp;
                            { (validateLoginInformationData['emailAddress'][0] === 'required')&& <span className='text-danger'>*</span> }
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
                                    value: loginInformationData['emailAddress'].value,
                                    onChange: formFieldData
                                }
                            }
                            formFieldMasking = {
                                (validateLoginInformationData['emailAddress'][0] === 'required')&&
                                {
                                    mask: validateLoginInformationData['emailAddress'][1]
                                }
                            }
                        />
                    </div>
                    <div className='mt-3'>
                        <label className='form-label'>
                            {loginInformationData['password'].label} 
                            &nbsp;
                            { (validateLoginInformationData['password'][0] === 'required')&& <span className='text-danger'>*</span> }
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
                                        value: loginInformationData['password'].value,
                                        onChange: formFieldData
                                    }
                                }
                                formFieldMasking = {
                                    (validateLoginInformationData['password'][0] === 'required')&&
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
                    <div className='mt-3 d-flex justify-content-start align-items-center'>
                        <FormFields 
                                formField='checkbox' 
                                formFieldSettings={{ 
                                        class: '',
                                        optionData: [
                                            {
                                                label: loginInformationData.rememberMe.label,
                                                class: 'form-check-input square-radio',
                                                id: 'rememberMe',
                                                name: 'rememberMe',
                                                value: 'true',
                                                checked: loginInformationData.rememberMe.value === true,
                                                onChange: formFieldData
                                            }
                                        ]
                                    }
                                }
                                formFieldMasking = {
                                    (validateLoginInformationData['rememberMe'][0] === 'required')&&
                                    {
                                        mask: 'required'
                                    }
                                }

                        />
                    </div>
                    <div className='mt-4 d-flex justify-content-between'>
                        <button className='btn btn-primary'>Sign in</button>
                        <Link to='/forgot-password/' className='btn text-decoration-underline'>Forgot password?</Link>
                    </div>
                </div>
            </div>
            </HtmlWrapper>
        </div>
    );

}

export default Login;