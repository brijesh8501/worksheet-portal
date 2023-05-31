import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import { useSelector, useDispatch } from 'react-redux';
import FormFields from '../../form-fields/index';
import { stepFormPrevNextSidebarItem, stepFormPrevNextSidebarChildItem } from '../../form-setup';

const AgentInformation = (props) => {

    const whichParentForm = props.form;
    const myState = useSelector( (state) => state.myState);

    const { worksheetSidebarSetting, portalSetting } = myState;

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

     // image viewer
     const [currentImage, setCurrentImage] = useState(0);
     const [isViewerOpen, setIsViewerOpen] = useState(false);

     const agentBusinessCard = [
        `/${portalSetting.projectSetup.assetFolder}/${portalSetting.projectSetup.projectLogo}`,
        `/${portalSetting.projectSetup.assetFolder}/${portalSetting.projectSetup.profileIcon}`
      ];
 
     const openImageViewer = useCallback((index) => {
         setCurrentImage(index);
         setIsViewerOpen(true);
       }, []);
     
       const closeImageViewer = () => {
         setCurrentImage(0);
         setIsViewerOpen(false);
       };
 


    return (
        <div className='step-form ps-4 pe-3' id={whichParentForm}>
            <div className='col-12' id='stepagentInformation'>
                <div className='step-form-header py-3'>
                    <h2 className='h4 mb-0 page-title'>{props.pageTitle}</h2>
                    <hr className='mb-0'/>
                </div>
                <div className='step-form-body pt-2 pb-3'>
                    <div className='agent-information-wrapper bg-white p-3'>
                        <div className='d-flex gap-3'>
                            <div className='cw-50'>
                                <div>First name</div>
                                <div className='text-readonly'>Brijesh</div>
                            </div>
                            <div className='cw-50'>
                                <div>Last name</div>
                                <div className='text-readonly'>Brijesh</div>
                            </div>
                        </div>
                        <div className='d-flex gap-3 mt-3'>
                            <div className='cw-50'>
                                <div>Contact number</div>
                                <div className='text-readonly'>Brijesh</div>
                            </div>
                            <div className='cw-50'>
                                <div>Email address</div>
                                <div className='text-readonly'>Brijesh</div>
                            </div>
                        </div>
                        <div className='d-flex gap-3 mt-3'>
                            <div className='cw-50'>
                                <div>Brokerage name</div>
                                <div className='text-readonly'>Brijesh</div>
                            </div>
                            <div className='cw-50'>
                                <div>Brokerage contact number</div>
                                <div className='text-readonly'>Brijesh</div>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <div>Brokerage address</div>
                            <div className='text-readonly'>Brijesh</div>
                        </div>
                        <div className='d-flex gap-3 mt-3'>
                            <div className='cw-50'>
                                <div>Brokerage city</div>
                                <div className='text-readonly'>Brijesh</div>
                            </div>
                            <div className='cw-50'>
                                <div>Brokerage province/state/region</div>
                                <div className='text-readonly'>Brijesh</div>
                            </div>
                        </div>
                        <div className='d-flex gap-3 mt-3'>
                            <div className='cw-50'>
                                <div>Brokerage country</div>
                                <div className='text-readonly'>Brijesh</div>
                            </div>
                            <div className='cw-50'>
                                <div>Brokerage postal/zip code</div>
                                <div className='text-readonly'>Brijesh</div>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <div className='d-flex gap-3 justify-content-start align-items-start'>
                                {agentBusinessCard.map((src, index) => (
                                    <img
                                        src={ src }
                                        onClick={ () => openImageViewer(index) }
                                        key={ index }
                                        style={{ margin: '2px' }}
                                        alt=""
                                        className="img-fluid agent-business-card"
                                    />
                                ))}

                                {isViewerOpen && (
                                    <ImageViewer
                                    src={ agentBusinessCard }
                                    currentIndex={ currentImage }
                                    onClose={ closeImageViewer }
                                    />
                                )}
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
                            }
                        >Continue</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default AgentInformation;