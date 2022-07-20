import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stepFormPrevNextSidebarItem, stepFormPrevNextSidebarChildItem } from '../../form-setup';

const ReviewInformation = (props) => {

    const whichParentForm = props.form;
    const myState = useSelector( (state) => state.myState);
   
    const { worksheetForm, worksheetSidebarSetting } = myState;

    const getNavigateStepForm = stepFormPrevNextSidebarItem(worksheetSidebarSetting);
    const whichPrevForm = (getNavigateStepForm.prev)? getNavigateStepForm.prev : null;
    const whichChildForm = getNavigateStepForm.current;
    const whichNextForm = (getNavigateStepForm.next)? getNavigateStepForm.next : null;

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
    console.log(worksheetForm.suiteInformation)
    return(
        <div className='step-form ps-4 pe-3' id={whichParentForm}>
            <div className='col-12' id='stepreviewInformation'>
                <div className='step-form-header py-3'>
                    <h2 className='h4 mb-0'>{props.pageTitle}</h2>
                </div>
                <div className='step-form-body py-3'>
                    <div className='step-form-body-wrapper'>
                        <fieldset>
                            <legend>Suite Information</legend>
                            <div className='d-flex flex-wrap gap-3 justify-content-center align-items-center'>
                                <div className='cw-33'>
                                    <label htmlFor="readModelType1">Model</label>
                                    <input type="text" className='form-control' name="readModelType1" id="readModelType1" value={worksheetForm.suiteInformation.modelType1} readOnly/>
                                </div>
                                <div className='cw-33'>
                                    <label htmlFor="readLotType1">Lot</label>
                                    <input type="text" className='form-control' name="readLotType1" id="readLotType1" value={worksheetForm.suiteInformation.lotType1} readOnly/>
                                </div>
                                <div className='cw-33'>
                                    <label htmlFor="readPreference1">Lot</label>
                                    <input type="text" className='form-control' name="readPreference1" id="readPreference1" value={worksheetForm.suiteInformation.preference1} readOnly/>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Purchaser Information</legend>
                        </fieldset>
                        <fieldset>
                            <legend>Agent Information</legend>
                        </fieldset>
                        <fieldset>
                            <legend>Other Information</legend>
                        </fieldset>
                        <fieldset>
                            <legend>Acknowledgement</legend>
                        </fieldset>
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
                        >
                            Submit worksheet</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewInformation;