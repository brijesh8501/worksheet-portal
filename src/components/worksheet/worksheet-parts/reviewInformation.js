import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stepFormPrevNextSidebarItem, stepFormPrevNextSidebarChildItem } from '../../form-setup';

const ReviewInformation = (props) => {

    const whichParentForm = props.form;
    const myState = useSelector( (state) => state.myState);
   
    const { worksheetForm, profileForm, worksheetSidebarSetting, worksheetSuiteInformationSetting } = myState;

    const getNavigateStepForm = stepFormPrevNextSidebarItem(worksheetSidebarSetting);
    const whichPrevForm = (getNavigateStepForm.prev)? getNavigateStepForm.prev : null;
    const whichChildForm = getNavigateStepForm.current;
    const whichNextForm = (getNavigateStepForm.next)? getNavigateStepForm.next : null;

    const reviewDesignSetting = {
        fullWidth: [
            'p1address',
            'p1purchasingType',
            'p1notes',
            'isSecondaryPurchaserRequired',
            'p2address',
            'p2purchasingType',
            'p2notes',
            'brokerageAddress',
            'appointmentType',
            'privacyPolicy'
        ]
    }

    let navigateBackButton = {};
    if(whichPrevForm){
        const objPrevNextForNavigation = {
            whichPrevNextForm: whichPrevForm,
            whichCurrentForm: whichChildForm,
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
            whichCurrentForm: whichChildForm,
            worksheetSidebarSetting,
            navigateBackNextButton: navigateNextButton
        }
     
        const respPrevNextForNavigation = stepFormPrevNextSidebarChildItem(objPrevNextForNavigation);
        navigateNextButton = respPrevNextForNavigation; 
    }
   console.log(worksheetForm);
    return(
        <div className='step-form ps-4 pe-3' id={whichParentForm}>
            <div className='col-12' id='stepreviewInformation'>
                <div className='step-form-header py-3'>
                    <h2 className='h4 mb-0 page-title'>{props.pageTitle}</h2>
                    <hr/>
                    <p className='mb-0 fst-italic small'>* Review details carefully before submitting. You may not be able to update once the details are submitted.</p>
                </div>
                <div className='step-form-body pb-3'>
                    <div className='step-form-body-wrapper'>
                        <fieldset>
                            <legend>{worksheetSuiteInformationSetting.suiteInformationTitle}</legend>
                            {
                                worksheetSuiteInformationSetting.choice.map( (item, i) => {
                                    return(
                                        <div key={i}>
                                            <h2 className={`text-decoration-underline h6 ${(i>0)? 'mt-4' : 'mt-2'}`}>{item.label}</h2>
                                            <div className='d-flex gap-3 flex-column flex-sm-row justify-content-center align-items-center'>
                                                {
                                                    item.fields.map( (child, j) => {
                                                        return(
                                                            <div className='cw-33' key={j}>
                                                                <label htmlFor={`${whichChildForm}${child.id}`}>{child.label}</label>
                                                                <input type="text" className='form-control' name={`${whichChildForm}${child.name}`} id={`${whichChildForm}${child.id}`} value={worksheetForm.suiteInformation[child.id].value} readOnly/>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                } )
                            }
                        </fieldset>
                        <fieldset className='mt-4'>
                            <legend className='page-title'>Other Information</legend>
                            <div className='d-flex flex-wrap gap-3 justify-content-center align-items-center'>
                                {
                                    Object.entries(worksheetForm.otherInformation).map( (item, i)=>{
                                        return(<div className={`${reviewDesignSetting.fullWidth.includes(item[0])? 'w-100' : 'cw-50'}`} key={i}>
                                                <label htmlFor={`${whichChildForm}${item[0]}`}>{item[1].label}</label>
                                                <input type="text" className='form-control' name={`${whichChildForm}${item[0]}`} id={`${whichChildForm}${item[0]}`} value={item[1].value} readOnly/>
                                            </div>
                                        );
                                    })
                                }
                                </div>
                        </fieldset>
                        <fieldset className='mt-4'>
                            <legend className='page-title'>Purchaser Information</legend>
                            <div>
                                <h2 className='h6 mt-3 mb-3 text-decoration-underline'>Primary Purchaser</h2>
                                <div className='d-flex flex-wrap gap-3 justify-content-start align-items-start'>
                                {
                                    Object.entries(worksheetForm.primaryPurchaser).map( (item, i)=>{
                                        return(<div className={`${reviewDesignSetting.fullWidth.includes(item[0])? 'w-100' : 'cw-50'}`} key={i}>
                                                <label htmlFor={`${whichChildForm}${item[0]}`}>{item[1].label}</label>
                                                <input type="text" className='form-control' name={`${whichChildForm}${item[0]}`} id={`${whichChildForm}${item[0]}`} value={item[1].value} readOnly/>
                                            </div>
                                        );
                                    })
                                }
                                </div>
                            </div>
                            <div>
                                <h2 className='h6 mt-5 mb-3 text-decoration-underline'>Secondary Purchaser</h2>
                                <div className='d-flex flex-wrap gap-3 justify-content-start align-items-start'>
                                {
                                    Object.entries(worksheetForm.secondaryPurchaser).map( (item, i)=>{

                                        if(
                                            (
                                                worksheetForm.secondaryPurchaser.isSecondaryPurchaserRequired.value === "No" ||
                                                worksheetForm.secondaryPurchaser.isSecondaryPurchaserRequired.value === ""
                                            )
                                        ){

                                            return (i === 0)?
                                                (<div className={`${reviewDesignSetting.fullWidth.includes(item[0])? 'w-100' : 'cw-50'}`} key={i}>
                                                    <label htmlFor={`${whichChildForm}${item[0]}`}>{item[1].label}</label>
                                                    <input type="text" className='form-control' name={`${whichChildForm}${item[0]}`} id={`${whichChildForm}${item[0]}`} value={item[1].value} readOnly/>
                                                </div>) : '';

                                        }else{

                                            return(<div className={`${reviewDesignSetting.fullWidth.includes(item[0])? 'w-100' : 'cw-50'}`} key={i}>
                                                <label htmlFor={`${whichChildForm}${item[0]}`}>{item[1].label}</label>
                                                <input type="text" className='form-control' name={`${whichChildForm}${item[0]}`} id={`${whichChildForm}${item[0]}`} value={item[1].value} readOnly/>
                                            </div>);

                                        }

                                    })
                                }
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className='mt-4'>
                            <legend className='page-title'>Agent Information</legend>
                            <div>
                                <div className='d-flex flex-wrap gap-3 justify-content-start align-items-start'>
                                {
                                    Object.entries(profileForm.profileInformation).map( (item, i)=>{
                                        return (item[0] !== 'privacyPolicy')?
                                            (<div className={`${reviewDesignSetting.fullWidth.includes(item[0])? 'w-100' : 'cw-50'}`} key={i}>
                                                    <label htmlFor={`${whichChildForm}${item[0]}`}>{item[1].label}</label>
                                                    <input type="text" className='form-control' name={`${whichChildForm}${item[0]}`} id={`${whichChildForm}${item[0]}`} value={item[1].value} readOnly/>
                                                </div>
                                            ) : ''
                                    })
                                }
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className='mt-4'>
                            <legend className='page-title'>Acknowledgement</legend>
                            <div>
                                <div className='d-flex flex-wrap gap-3 justify-content-start align-items-start'>
                                    {
                                        Object.entries(worksheetForm.acknowledgement).map( (item, i)=>{
                                            return (<div className={`${reviewDesignSetting.fullWidth.includes(item[0])? 'w-100' : 'cw-50'}`} key={i}>
                                                        <label htmlFor={`${whichChildForm}${item[0]}`}>{item[1].label}</label>
                                                        <input type="text" className='form-control' name={`${whichChildForm}${item[0]}`} id={`${whichChildForm}${item[0]}`} value={(item[1].value)? 'Yes' : 'No'} readOnly/>
                                                    </div>
                                                )
                                        })
                                    } 
                                </div>
                            </div>
                        </fieldset>
                        <div className='mt-4 fst-italic small'>
                            <p className='mb-0'>* If you wish not to submit worksheet at this moment then "Save" and continue with submitting worksheet later.</p> 
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
                            className='btn btn-secondary'
                        >
                            Save</button>
                        <button 
                            className='btn btn-primary'
                        >
                            Submit worksheet</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewInformation;