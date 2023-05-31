import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormFields from '../../form-fields/index';
import { getFormData } from '../../../action';
import { setFormFieldDataToState, stepFormPrevNextSidebarItem, stepFormPrevNextSidebarChildItem } from '../../form-setup';

const PurchaserInformation = (props) => {

    const whichParentForm = props.form;
    const whichChildForm = props.purchaserSlug;

    const myState = useSelector( (state) => state.myState);
    const dispatch = useDispatch();

    const { worksheetForm, validateForm, worksheetSidebarSetting } = myState;

    const purchaserInformationData = worksheetForm[whichChildForm];
    const validatePurchaserInformationData = validateForm.worksheetForm[whichChildForm];

    const purchaserPrefix = props.purchaserPrefix;

    const getNavigateStepForm = stepFormPrevNextSidebarItem(worksheetSidebarSetting);
    const whichPrevForm = (getNavigateStepForm.prev)? getNavigateStepForm.prev : null;
    const whichCurrentForm = getNavigateStepForm.current;
    const whichNextForm = (getNavigateStepForm.next)? getNavigateStepForm.next : null;

    let navigateBackButton = {};
    if(whichPrevForm){
        const objPrevNextForNavigation = {
            whichPrevNextForm: whichPrevForm,
            whichCurrentForm,
            worksheetSidebarSetting,
            navigateBackNextButton: navigateBackButton
        }
     
        const respPrevNextForNavigation = stepFormPrevNextSidebarChildItem(objPrevNextForNavigation);
        navigateBackButton = respPrevNextForNavigation;   
    }
    let navigateNextButton = {};
    if(whichNextForm){
        navigateNextButton['sectionClicked'] = whichNextForm;

        const objPrevNextForNavigation = {
            whichPrevNextForm: whichNextForm,
            whichCurrentForm,
            worksheetSidebarSetting,
            navigateBackNextButton: navigateNextButton
        }
     
        const respPrevNextForNavigation = stepFormPrevNextSidebarChildItem(objPrevNextForNavigation);
        navigateNextButton = respPrevNextForNavigation; 
    }

    const formFieldData = (e) => {

        const formFieldDataSet = {
            parentForm: whichParentForm,
            childForm: whichChildForm,
            event: e
        };

        setFormFieldDataToState(formFieldDataSet);
    }

    return(
        <div className='step-form ps-4 pe-3' id={whichParentForm}>
            <div className='col-12' id={`step${whichChildForm}`}>
                <div className='step-form-header py-3'>
                    <h2 className='h4 mb-0 page-title'>{props.pageTitle}</h2>
                    <hr className='mb-0'/>
                </div>
                <div className={`step-form-body pb-3`}>
                    {
                        (purchaserPrefix === 'p2')&&
                            <div>
                                <label className='form-check-label' htmlFor='isSecondaryPurchaserRequired' aria-label='Would you like to add secondary purchaser?'>
                                    {purchaserInformationData[`isSecondaryPurchaserRequired`].label}
                                    &nbsp; 
                                    { ( purchaserPrefix === 'p2' && validatePurchaserInformationData['isSecondaryPurchaserRequired'][0] === 'required')&& <span className='text-danger'>*</span> }
                                </label>
                                    <FormFields 
                                        formField='radio' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'd-flex gap-3 mt-2',
                                                optionData: [
                                                    {
                                                        label: 'Yes',
                                                        class: 'form-check-input square-radio',
                                                        id: 'isSecondaryPurchaserRequiredYes',
                                                        name: 'isSecondaryPurchaserRequired',
                                                        value: 'Yes',
                                                        checked: purchaserInformationData[`isSecondaryPurchaserRequired`].value === 'Yes',
                                                        onChange: formFieldData 
                                                    },
                                                    {
                                                        label: 'No',
                                                        class: 'form-check-input square-radio',
                                                        id: 'isSecondaryPurchaserRequiredNo',
                                                        name: 'isSecondaryPurchaserRequired',
                                                        value: 'No',
                                                        checked: purchaserInformationData[`isSecondaryPurchaserRequired`].value === 'No',
                                                        onChange: formFieldData
                                                    }
                                                ]
                                            }
                                        }
                                        formFieldMasking = {
                                            (purchaserPrefix === 'p2')&&
                                            {
                                                mask: ( validatePurchaserInformationData[`isSecondaryPurchaserRequired`].length === 2 ) ? 
                                                validatePurchaserInformationData[`isSecondaryPurchaserRequired`][1] 
                                                :
                                                validatePurchaserInformationData[`isSecondaryPurchaserRequired`][0]
                                            }
                                        }
                                />
                            </div>
                    }
                    <div className={`position-relative bg-white pt-5 pb-3 ${ ( ('isSecondaryPurchaserRequired' in purchaserInformationData) && purchaserInformationData[`isSecondaryPurchaserRequired`].value === 'Yes')? 'mt-4' : 'mt-2' } ${( (purchaserPrefix === 'p1') || (purchaserPrefix === 'p2' && purchaserInformationData[`isSecondaryPurchaserRequired`].value === 'Yes' ) )? 'd-block' : 'd-none' } `}>
                        <h3 className='h6 mb-0 position-absolute stepform-choice-title purchaser-title'>{props.pageChildTitle}</h3>
                        <div className='purchaser-information-box px-3'>
                            <div className='d-flex gap-3 justify-content-center align-items-center'>
                                <div className='cw-50'>
                                    <label className='form-label' htmlFor={`${purchaserPrefix}firstName`}>
                                        {purchaserInformationData[`${purchaserPrefix}firstName`].label}
                                        &nbsp;
                                        { (validatePurchaserInformationData[`${purchaserPrefix}firstName`][0] === 'required')&& <span className='text-danger'>*</span> } 
                                    </label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `${purchaserPrefix}firstName`,
                                                name: `${purchaserPrefix}firstName`,
                                                type: 'text',
                                                value: purchaserInformationData[`${purchaserPrefix}firstName`].value,
                                                placeholder: 'Enter first name',
                                                onChange: formFieldData
                                            }
                                        }
                                        formFieldMasking = {
                                            {
                                                mask: ( validatePurchaserInformationData[`${purchaserPrefix}firstName`].length === 2 ) ? 
                                                validatePurchaserInformationData[`${purchaserPrefix}firstName`][1] 
                                                :
                                                validatePurchaserInformationData[`${purchaserPrefix}firstName`][0]
                                            }
                                        }
                                    />
                                </div>
                                <div className='cw-50'>
                                    <label className='form-label' htmlFor={`${purchaserPrefix}lastName`}>
                                        {purchaserInformationData[`${purchaserPrefix}lastName`].label}
                                        &nbsp; 
                                        { (validatePurchaserInformationData[`${purchaserPrefix}lastName`][0] === 'required')&& <span className='text-danger'>*</span> }
                                    </label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `${purchaserPrefix}lastName`,
                                                name: `${purchaserPrefix}lastName`,
                                                type: 'text',
                                                value: purchaserInformationData[`${purchaserPrefix}lastName`].value,
                                                placeholder: 'Enter last name',
                                                onChange: formFieldData
                                            }
                                        }
                                        formFieldMasking = {
                                            {
                                                mask: ( validatePurchaserInformationData[`${purchaserPrefix}lastName`].length === 2 ) ? 
                                                validatePurchaserInformationData[`${purchaserPrefix}lastName`][1] 
                                                :
                                                validatePurchaserInformationData[`${purchaserPrefix}lastName`][0]
                                            }
                                        }
                                    />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <label className='form-label' htmlFor={`${purchaserPrefix}address`}>
                                    {purchaserInformationData[`${purchaserPrefix}address`].label}
                                    &nbsp;
                                    { (validatePurchaserInformationData[`${purchaserPrefix}address`][0] === 'required')&& <span className='text-danger'>*</span> }
                                </label>
                                <FormFields 
                                    formField='textbox' 
                                    formFieldSettings={ 
                                        { 
                                            class: 'form-control',
                                            id: `${purchaserPrefix}address`,
                                            name: `${purchaserPrefix}address`,
                                            type: 'text',
                                            value: purchaserInformationData[`${purchaserPrefix}address`].value,
                                            placeholder: 'Enter address',
                                            onChange: formFieldData
                                        }
                                    }
                                    formFieldMasking = {
                                        {
                                            mask: ( validatePurchaserInformationData[`${purchaserPrefix}address`].length === 2 ) ? 
                                            validatePurchaserInformationData[`${purchaserPrefix}address`][1] 
                                            :
                                            validatePurchaserInformationData[`${purchaserPrefix}address`][0]
                                        }
                                    }
                                />
                            </div>
                            <div className='d-flex gap-3 justify-content-center align-items-center mt-3'>
                                <div className='cw-50'>
                                    <label className='form-label' htmlFor={`${purchaserPrefix}city`}>
                                        {purchaserInformationData[`${purchaserPrefix}city`].label}
                                        &nbsp; 
                                        { (validatePurchaserInformationData[`${purchaserPrefix}city`][0] === 'required')&& <span className='text-danger'>*</span> }
                                    </label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `${purchaserPrefix}city`,
                                                name: `${purchaserPrefix}city`,
                                                type: 'text',
                                                value: purchaserInformationData[`${purchaserPrefix}city`].value,
                                                placeholder: 'Enter city',
                                                onChange: formFieldData
                                            }
                                        }
                                        formFieldMasking = {
                                            {
                                                mask: ( validatePurchaserInformationData[`${purchaserPrefix}city`].length === 2 ) ? 
                                                validatePurchaserInformationData[`${purchaserPrefix}city`][1] 
                                                :
                                                validatePurchaserInformationData[`${purchaserPrefix}city`][0]
                                            }
                                        }
                                    />
                                </div>
                                <div className='cw-50'>
                                    <label className='form-label' htmlFor={`${purchaserPrefix}province`}>
                                        {purchaserInformationData[`${purchaserPrefix}province`].label}
                                        &nbsp;
                                        { (validatePurchaserInformationData[`${purchaserPrefix}province`][0] === 'required')&& <span className='text-danger'>*</span> }
                                    </label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `${purchaserPrefix}province`,
                                                name: `${purchaserPrefix}province`,
                                                type: 'text',
                                                value: purchaserInformationData[`${purchaserPrefix}province`].value,
                                                placeholder: 'Enter province/state/region',
                                                onChange: formFieldData
                                            }
                                        }
                                        formFieldMasking = {
                                            {
                                                mask: ( validatePurchaserInformationData[`${purchaserPrefix}province`].length === 2 ) ? 
                                                validatePurchaserInformationData[`${purchaserPrefix}province`][1] 
                                                :
                                                validatePurchaserInformationData[`${purchaserPrefix}province`][0]
                                            }
                                        }
                                    />
                                </div>
                            </div>
                            <div className='d-flex gap-3 justify-content-center align-items-center mt-3'>
                                <div className='cw-50'>
                                    <label className='form-label' htmlFor={`${purchaserPrefix}country`}>
                                        {purchaserInformationData[`${purchaserPrefix}country`].label}
                                        &nbsp;
                                        { (validatePurchaserInformationData[`${purchaserPrefix}country`][0] === 'required')&& <span className='text-danger'>*</span> }
                                    </label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `${purchaserPrefix}country`,
                                                name: `${purchaserPrefix}country`,
                                                type: 'text',
                                                value: purchaserInformationData[`${purchaserPrefix}country`].value,
                                                placeholder: 'Enter country',
                                                onChange: formFieldData
                                            }
                                        }
                                        formFieldMasking = {
                                            {
                                                mask: ( validatePurchaserInformationData[`${purchaserPrefix}country`].length === 2 ) ? 
                                                validatePurchaserInformationData[`${purchaserPrefix}country`][1] 
                                                :
                                                validatePurchaserInformationData[`${purchaserPrefix}country`][0]
                                            }
                                        }
                                    />
                                </div>
                                <div className='cw-50'>
                                    <label className='form-label' htmlFor={`${purchaserPrefix}postalCode`}>
                                        {purchaserInformationData[`${purchaserPrefix}postalCode`].label}
                                        &nbsp;
                                        { (validatePurchaserInformationData[`${purchaserPrefix}postalCode`][0] === 'required')&& <span className='text-danger'>*</span> }
                                    </label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `${purchaserPrefix}postalCode`,
                                                name: `${purchaserPrefix}postalCode`,
                                                type: 'text',
                                                value: purchaserInformationData[`${purchaserPrefix}postalCode`].value,
                                                maxlength: '6',
                                                placeholder: 'Enter postal code, e.g. A9A9A9',
                                                onChange: formFieldData,
                                                onBlur: formFieldData
                                            }
                                        }
                                        formFieldMasking = {
                                            {
                                                mask: ( validatePurchaserInformationData[`${purchaserPrefix}postalCode`].length === 2 ) ? 
                                                validatePurchaserInformationData[`${purchaserPrefix}postalCode`][1] 
                                                :
                                                validatePurchaserInformationData[`${purchaserPrefix}postalCode`][0]
                                            }
                                        }
                                    />
                                </div>
                            </div>
                            <div className='d-flex gap-3 justify-content-center align-items-center mt-3'>
                                <div className='cw-50'>
                                    <label className='form-label' htmlFor={`${purchaserPrefix}phoneNumber`}>
                                        {purchaserInformationData[`${purchaserPrefix}phoneNumber`].label}
                                        &nbsp;
                                        { (validatePurchaserInformationData[`${purchaserPrefix}phoneNumber`][0] === 'required')&& <span className='text-danger'>*</span> }
                                    </label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `${purchaserPrefix}phoneNumber`,
                                                name: `${purchaserPrefix}phoneNumber`,
                                                type: 'text',
                                                value: purchaserInformationData[`${purchaserPrefix}phoneNumber`].value,
                                                maxlength: '10',
                                                placeholder: 'Enter phone number, e.g. 9999999999',
                                                onChange: formFieldData,
                                                onBlur: formFieldData
                                            }
                                        }
                                        formFieldMasking = {
                                            {
                                                mask: ( validatePurchaserInformationData[`${purchaserPrefix}phoneNumber`].length === 2 ) ? 
                                                validatePurchaserInformationData[`${purchaserPrefix}phoneNumber`][1] 
                                                :
                                                validatePurchaserInformationData[`${purchaserPrefix}phoneNumber`][0]
                                            }
                                        }
                                    />
                                </div>
                                <div className='cw-50'>
                                    <label className='form-label' htmlFor={`${purchaserPrefix}emailAddress`}>
                                        {purchaserInformationData[`${purchaserPrefix}emailAddress`].label}
                                        &nbsp;
                                        { (validatePurchaserInformationData[`${purchaserPrefix}emailAddress`][0] === 'required')&& <span className='text-danger'>*</span> }
                                    </label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `${purchaserPrefix}emailAddress`,
                                                name: `${purchaserPrefix}emailAddress`,
                                                type: 'text',
                                                value: purchaserInformationData[`${purchaserPrefix}emailAddress`].value,
                                                placeholder: 'Enter email address',
                                                onChange: formFieldData
                                            }
                                        }
                                        formFieldMasking = {
                                            {
                                                mask: ( validatePurchaserInformationData[`${purchaserPrefix}emailAddress`].length === 2 ) ? 
                                                validatePurchaserInformationData[`${purchaserPrefix}emailAddress`][1] 
                                                :
                                                validatePurchaserInformationData[`${purchaserPrefix}emailAddress`][0]
                                            }
                                        }
                                    />
                                </div>
                            </div>
                            <div className='d-flex gap-3 justify-content-center align-items-center mt-3'>
                                <div className='cw-50'>
                                    <label className='form-label' htmlFor={`${purchaserPrefix}dob`}>
                                        {purchaserInformationData[`${purchaserPrefix}dob`].label}
                                        &nbsp;
                                        { (validatePurchaserInformationData[`${purchaserPrefix}dob`][0] === 'required')&& <span className='text-danger'>*</span> }
                                    </label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `${purchaserPrefix}dob`,
                                                name: `${purchaserPrefix}dob`,
                                                type: 'text',
                                                value: purchaserInformationData[`${purchaserPrefix}dob`].value,
                                                maxlength: '8',
                                                placeholder: 'Enter date of birth, e.g. DDMMYYYY',
                                                onChange: formFieldData,
                                                onBlur: formFieldData
                                            }
                                        }
                                        formFieldMasking = {
                                            {
                                                mask: ( validatePurchaserInformationData[`${purchaserPrefix}dob`].length === 2 ) ? 
                                                validatePurchaserInformationData[`${purchaserPrefix}dob`][1] 
                                                :
                                                validatePurchaserInformationData[`${purchaserPrefix}dob`][0]
                                            }
                                        }
                                    />
                                </div>
                                <div className='cw-50'>
                                    <label className='form-label' htmlFor={`${purchaserPrefix}maritalStatus`}>
                                        {purchaserInformationData[`${purchaserPrefix}maritalStatus`].label}
                                        &nbsp;
                                        { (validatePurchaserInformationData[`${purchaserPrefix}maritalStatus`][0] === 'required')&& <span className='text-danger'>*</span> }
                                    </label>
                                    <FormFields 
                                        formField='drop-down' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-select',
                                                id: `${purchaserPrefix}maritalStatus`,
                                                name: `${purchaserPrefix}maritalStatus`,
                                                value: purchaserInformationData[`${purchaserPrefix}maritalStatus`].value,
                                                onChange: formFieldData,
                                                optionData: [
                                                    {
                                                        option: 'Single',
                                                        value: 'Single'
                                                    },
                                                    {
                                                        option: 'Married',
                                                        value: 'Married'
                                                    },
                                                    {
                                                        option: 'Living Together',
                                                        value: 'Living Together'
                                                    },
                                                    {
                                                        option: 'Engaged',
                                                        value: 'Engaged'
                                                    },
                                                    {
                                                        option: 'Common-law',
                                                        value: 'Common-law'
                                                    },
                                                    {
                                                        option: 'Prefer not to say',
                                                        value: 'Prefer not to say'
                                                    }
                                                ]
                                            }
                                        }
                                        formFieldMasking = {
                                            {
                                                mask: ( validatePurchaserInformationData[`${purchaserPrefix}maritalStatus`].length === 2 ) ? 
                                                validatePurchaserInformationData[`${purchaserPrefix}maritalStatus`][1] 
                                                :
                                                validatePurchaserInformationData[`${purchaserPrefix}maritalStatus`][0]
                                            }
                                        }
                                    />
                                </div>
                            </div>
                            <div className='d-flex gap-3 justify-content-center align-items-center mt-3'>
                                <div className='cw-50'>
                                    <label className='form-label' htmlFor={`${purchaserPrefix}occupation`}>
                                        {purchaserInformationData[`${purchaserPrefix}occupation`].label}
                                        &nbsp;
                                        { (validatePurchaserInformationData[`${purchaserPrefix}occupation`][0] === 'required')&& <span className='text-danger'>*</span> }
                                    </label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `${purchaserPrefix}occupation`,
                                                name: `${purchaserPrefix}occupation`,
                                                type: 'text',
                                                value: purchaserInformationData[`${purchaserPrefix}occupation`].value,
                                                placeholder: 'Enter occupation',
                                                onChange: formFieldData
                                            }
                                        }
                                        formFieldMasking = {
                                            {
                                                mask: ( validatePurchaserInformationData[`${purchaserPrefix}occupation`].length === 2 ) ? 
                                                validatePurchaserInformationData[`${purchaserPrefix}occupation`][1] 
                                                :
                                                validatePurchaserInformationData[`${purchaserPrefix}occupation`][0]
                                            }
                                        }
                                    />
                                </div>
                                <div className='cw-50'>
                                    <label className='form-label' htmlFor={`${purchaserPrefix}employer`}>
                                        {purchaserInformationData[`${purchaserPrefix}employer`].label}
                                        &nbsp; 
                                        { (validatePurchaserInformationData[`${purchaserPrefix}employer`][0] === 'required')&& <span className='text-danger'>*</span> }
                                    </label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `${purchaserPrefix}employer`,
                                                name: `${purchaserPrefix}employer`,
                                                type: 'text',
                                                value: purchaserInformationData[`${purchaserPrefix}employer`].value,
                                                placeholder: 'Enter employer',
                                                onChange: formFieldData
                                            }
                                        }
                                        formFieldMasking = {
                                            {
                                                mask: ( validatePurchaserInformationData[`${purchaserPrefix}employer`].length === 2 ) ? 
                                                validatePurchaserInformationData[`${purchaserPrefix}employer`][1] 
                                                :
                                                validatePurchaserInformationData[`${purchaserPrefix}employer`][0]
                                            }
                                        }
                                    />
                                </div>
                            </div>
                            <div className='mt-3 d-flex gap-3 justify-content-start align-items-center'>
                                <label className='form-label mb-0' htmlFor={`${purchaserPrefix}purchasingType`} aria-label='Your client is purchasing this home'>
                                    {purchaserInformationData[`${purchaserPrefix}purchasingType`].label}
                                    &nbsp;
                                    { (validatePurchaserInformationData[`${purchaserPrefix}purchasingType`][0] === 'required')&& <span className='text-danger'>*</span> }
                                </label>
                                <FormFields 
                                    formField='radio' 
                                    formFieldSettings={ 
                                        { 
                                            class: 'd-flex gap-3',
                                            optionData: [
                                                {
                                                    label: 'As an investment',
                                                    class: 'form-check-input square-radio',
                                                    id: `${purchaserPrefix}purchasingTypeInvestment`,
                                                    name: `${purchaserPrefix}purchasingType`,
                                                    value: 'As an investment',
                                                    checked: purchaserInformationData[`${purchaserPrefix}purchasingType`].value === 'As an investment',
                                                    onChange: formFieldData
                                                   
                                                },
                                                {
                                                    label: 'To live in',
                                                    class: 'form-check-input square-radio',
                                                    id: `${purchaserPrefix}purchasringTypeLiveIn`,
                                                    name: `${purchaserPrefix}purchasingType`,
                                                    value: 'To live in',
                                                    checked: purchaserInformationData[`${purchaserPrefix}purchasingType`].value === 'To live in',
                                                    onChange: formFieldData
                                           
                                                }
                                            ]
                                        }
                                    }
                                    formFieldMasking = {
                                        {
                                            mask: ( validatePurchaserInformationData[`${purchaserPrefix}purchasingType`].length === 2 ) ? 
                                            validatePurchaserInformationData[`${purchaserPrefix}purchasingType`][1] 
                                            :
                                            validatePurchaserInformationData[`${purchaserPrefix}purchasingType`][0]
                                        }
                                    }
                                />
                            </div>
                            <div className='mt-3'>
                                <div className='alert alert-box d-flex align-items-center gap-2'>
                                    <img src='/assets/warning.png' className='stepform-img-icon img-fluid' />
                                    <div className='d-flex gap-1 flex-column flex-md-row align-items-start'>
                                        <div 
                                            className='d-flex align-items-center custom-tooltip'
                                            tabIndex="0" 
                                        >
                                            <div className='text-decoration-underline'>Click here</div>
                                            <div className='custom-tooltip-box'>
                                                <div className='custom-tooltip-box-header'>How to submit government ID?</div>
                                                <div className='custom-tooltip-box-body'>
                                                    <div className='d-flex gap-3 flex-column flex-md-row'>
                                                        <div>
                                                            <p className='mb-2'>1. Take a Picture</p>
                                                            <div className='mb-2'>
                                                                <img src='/assets/step-one.png' className='id-info-steps-img img-fluid'/>
                                                            </div>
                                                            <p className='small'>Take a picture of secondary purchaser clearly holding their Government ID. Secondary purchaser face and ID should be clear</p>
                                                        </div>
                                                        <div>
                                                            <p className='mb-2'>2. Government ID (Front)</p>
                                                            <div className='mb-2'>
                                                                <img src='/assets/step-two.png' className='id-info-steps-img img-fluid'/>
                                                            </div>
                                                            <p className='small'>Take a high resolution, well-lit closeup picture of the front of secondary purchaser Government ID so that all information is as clear as possible</p>
                                                        </div>
                                                        <div>
                                                            <p className='mb-2'>3. Government ID (Back)</p>
                                                            <div className='mb-2'>
                                                                <img src='/assets/step-two.png' className='id-info-steps-img img-fluid'/>
                                                            </div>
                                                            <p className='small'>Take a high resolution, well-lit closeup picture of the back of secondary purchaser Government ID so that all information is as clear as possible</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>for instructions about submiting images of government ID.</div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <label className='form-label' htmlFor='governmentIdWithFace'>Government ID (held next to your face) <span className='text-danger'>*</span></label>
                                <FormFields 
                                    formField='file' 
                                    formFieldSettings={ 
                                        { 
                                            class: 'form-control file-custom-control',
                                            id: 'governmentIdWithFace',
                                            name: 'governmentIdWithFace'
                                        }
                                    }
                                />
                            </div>
                            <div className='mt-3'>
                                <label className='form-label' htmlFor='governmentIdFront'>Government ID (front) <span className='text-danger'>*</span></label>
                                <FormFields 
                                    formField='file' 
                                    formFieldSettings={ 
                                        { 
                                            class: 'form-control file-custom-control',
                                            id: 'governmentIdFront',
                                            name: 'governmentIdFront'
                                        }
                                    }
                                />
                            </div>
                            <div className='mt-3'>
                                <label className='form-label' htmlFor='governmentIdBack'>Government ID (back) <span className='text-danger'>*</span></label>
                                <FormFields 
                                    formField='file' 
                                    formFieldSettings={ 
                                        { 
                                            class: 'form-control file-custom-control',
                                            id: 'governmentIdBack',
                                            name: 'governmentIdBack'
                                        }
                                    }
                                />
                            </div>
                            <div className='mt-3'>
                                <label className='form-label' htmlFor={`${purchaserPrefix}notes`}>
                                    {purchaserInformationData[`${purchaserPrefix}notes`].label}
                                    &nbsp;
                                    { (validatePurchaserInformationData[`${purchaserPrefix}notes`][0] === 'required')&& <span className='text-danger'>*</span> }
                                </label>
                                <FormFields 
                                    formField='textarea' 
                                    formFieldSettings={ 
                                        { 
                                            class: 'form-control',
                                            id: `${purchaserPrefix}notes`,
                                            name: `${purchaserPrefix}notes`,
                                            value: purchaserInformationData[`${purchaserPrefix}notes`].value,
                                            onChange: formFieldData
                                        }
                                    }
                                    formFieldMasking = {
                                        {
                                            mask: ( validatePurchaserInformationData[`${purchaserPrefix}notes`].length === 2 ) ? 
                                            validatePurchaserInformationData[`${purchaserPrefix}notes`][1] 
                                            :
                                            validatePurchaserInformationData[`${purchaserPrefix}notes`][0]
                                        }
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='step-form-footer pb-3'>
                    <div className='d-flex gap-3 justify-content-end'>
                        {
                            (whichPrevForm)&&
                                <button 
                                    className='btn btn-back'
                                    onClick={
                                        () => { 
                                            props.showSection(navigateBackButton) 
                                        } 
                                    }
                                >
                                    <img src='/assets/left-arrow.png' className='back-img-icon img-fluid' />Back
                                </button>
                        }
                        <button 
                            className='btn btn-primary' 
                            onClick={ 
                                () => { 
                                    props.showSection(navigateNextButton) 
                                } 
                            }>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PurchaserInformation;