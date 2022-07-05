import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormFields from '../form-fields';
import HtmlWrapper from './includes/htmlWrapper';
import { Link } from 'react-router-dom';
import { getFormData, resetFormData } from '../../action';
import { setFormFieldDataToState } from '../form-setup';

const Login = () => {

    const myState = useSelector( (state) => state.myState);
    const dispatch = useDispatch();

    const { profileForm } = myState;
  
    const loginInformationData = profileForm.loginInformation;

    const formFieldData = (e) => {

        const formFieldDataSet = {
            parentForm: 'profileForm',
            childForm: 'loginInformation',
            event: e
        };

        setFormFieldDataToState(formFieldDataSet);
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
                        <label className='form-label'>Email address <span className='text-danger'>*</span></label>
                        <FormFields 
                            formField='textbox' 
                            formFieldSettings={ 
                                { 
                                    class: 'form-control',
                                    id: `emailAddress`,
                                    name: `emailAddress`,
                                    type: 'text',
                                    placeholder: 'Enter email address',
                                    value: loginInformationData['emailAddress'],
                                    onChange: formFieldData
                                }
                            }
                            formFieldMasking={
                                {
                                    mask: 'required',
                                }
                            }
                        />
                    </div>
                    <div className='mt-3'>
                        <label className='form-label'>Password <span className='text-danger'>*</span></label>
                        <FormFields 
                            formField='textbox' 
                            formFieldSettings={ 
                                { 
                                    class: 'form-control',
                                    id: `password`,
                                    name: `password`,
                                    type: 'password',
                                    placeholder: 'Enter password',
                                    value: loginInformationData['password'],
                                    onChange: formFieldData
                                }
                            }
                            formFieldMasking={
                                {
                                    mask: 'required',
                                }
                            }
                        />
                    </div>
                    <div className='mt-3 d-flex justify-content-start align-items-center'>
                        <FormFields 
                                formField='checkbox' 
                                formFieldSettings={{ 
                                        class: '',
                                        optionData: [
                                            {
                                                label: 'Remember me',
                                                class: 'form-check-input square-radio',
                                                id: 'rememberMe',
                                                name: 'rememberMe',
                                                value: 'Yes'
                                            }
                                        ]
                                    }
                                }
                        />
                    </div>
                    <div className='mt-4 d-flex justify-content-between'>
                        <button className='btn btn-primary'>Sign in</button>
                        <Link to='/forgot-password' className='btn text-decoration-underline'>Forgot password?</Link>
                    </div>
                </div>
            </div>
            </HtmlWrapper>
        </div>
    );

}

export default Login;