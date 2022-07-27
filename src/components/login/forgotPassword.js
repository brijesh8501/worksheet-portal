import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormFields from '../form-fields';
import HtmlWrapper from './includes/htmlWrapper';
import { Link } from 'react-router-dom';
import { getFormData, resetFormData } from '../../action';
import { setFormFieldDataToState } from '../form-setup';

const ForgotPassword = () => {

    const myState = useSelector( (state) => state.myState);
    const dispatch = useDispatch();

    const { profileForm, validateForm } = myState;
  
    const forgotPasswordInformationData = profileForm.forgotPasswordInformation;
    const validateForgotPasswordInformationData = validateForm.profileForm.forgotPasswordInformation;

    const formFieldData = (e) => {

        const formFieldDataSet = {
            parentForm: 'profileForm',
            childForm: 'forgotPasswordInformation',
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
           <div className='create-account-form d-flex flex-column justify-content-center align-items-center p-3'>
               <div className='create-account-header w-100'>
                   <h2 className='text-center'>Forgot Password</h2>
                   <hr/>
                   <p className='small'>Enter your email address and we'll send you a link to reset your password.</p>
               </div>
               <div className='create-account-body w-100'>
                   <div>
                       <label className='form-label'>
                        {forgotPasswordInformationData['emailAddress'].label}
                        &nbsp;
                        { (validateForgotPasswordInformationData['emailAddress'][0] === 'required')&& <span className='text-danger'>*</span> }
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
                                   value: forgotPasswordInformationData['emailAddress'].value,
                                   onChange: formFieldData
                               }
                           }
                           formFieldMasking = {
                                (validateForgotPasswordInformationData['emailAddress'][0] === 'required')&&
                                {
                                    mask: validateForgotPasswordInformationData['emailAddress'][1],
                                }
                            }
                       />
                   </div>
                   <div className='mt-4 text-center'>
                       <button className='btn btn-primary'>Send email</button>
                   </div>
                   <div className='create-account-footer w-100'>
                       <hr className='mt-4'/>
                       <div className='d-flex justify-content-between'>
                           <Link to='/login' className='btn p-0 text-decoration-underline'>Sign in</Link>
                           <Link to='/create-account' className='btn p-0 text-decoration-underline'>Sign up</Link>
                       </div>
                   </div>
               </div>
           </div>
        </HtmlWrapper>
   </div>
    );

}

export default ForgotPassword;