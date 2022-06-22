import React, { useState } from 'react';
import FormFields from '../form-fields';
import HtmlWrapper from './includes/htmlWrapper';
import { Link } from 'react-router-dom';

const CreateAccount = () => {

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
                            <label className='form-label'>First name <span className='text-danger'>*</span></label>
                            <FormFields 
                                formField='textbox' 
                                formFieldSettings={ 
                                    { 
                                        class: 'form-control',
                                        id: `firstName`,
                                        name: `firstName`,
                                        type: 'text',
                                        placeholder: 'Enter first name'
                                    }
                                }
                            />
                        </div>
                        <div className='mt-3'>
                            <label className='form-label'>Last name <span className='text-danger'>*</span></label>
                            <FormFields 
                                formField='textbox' 
                                formFieldSettings={ 
                                    { 
                                        class: 'form-control',
                                        id: `lastName`,
                                        name: `lastName`,
                                        type: 'text',
                                        placeholder: 'Enter last name'
                                    }
                                }
                            />
                        </div>
                        <div className='mt-3'>
                            <label className='form-label'>Email address <span className='text-danger'>*</span></label>
                            <FormFields 
                                formField='textbox' 
                                formFieldSettings={ 
                                    { 
                                        class: 'form-control',
                                        id: `emailAddress`,
                                        name: `emailAddress`,
                                        type: 'text',
                                        placeholder: 'Enter email address'
                                    }
                                }
                            />
                        </div>
                        <div className='mt-3'>
                            <label className='form-label'>Confirm email address <span className='text-danger'>*</span></label>
                            <FormFields 
                                formField='textbox' 
                                formFieldSettings={ 
                                    { 
                                        class: 'form-control',
                                        id: `confirmEmailAddress`,
                                        name: `confirmEmailAddress`,
                                        type: 'text',
                                        placeholder: 'Confirm your email address'
                                    }
                                }
                            />
                        </div>
                        <div className='mt-3'>
                            <label className='form-label'>Phone number <span className='text-danger'>*</span></label>
                            <FormFields 
                                formField='textbox' 
                                formFieldSettings={ 
                                    { 
                                        class: 'form-control',
                                        id: `phoneNumber`,
                                        name: `phoneNumber`,
                                        type: 'text',
                                        placeholder: 'Enter phone number'
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
                                        placeholder: 'Enter password'
                                    }
                                }
                            />
                        </div>
                        <div className='mt-3'>
                            <label className='form-label'>Confirm password <span className='text-danger'>*</span></label>
                            <div class="input-group">
                                <FormFields 
                                    formField='textbox' 
                                    formFieldSettings={ 
                                        { 
                                            class: 'form-control',
                                            id: `confirmPassword`,
                                            name: `confirmPassword`,
                                            type: 'password',
                                            placeholder: 'Confirm your password'
                                        }
                                    }
                                />
                                 <span class="input-group-text" tabIndex='0'>
                                    <img src='/assets/eye-hidden.png' className='img-eye-icon img-fluid' />
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