import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SidebarMenu from './sidebarMenu';
import SuiteInformation from './suiteInformation';
import OtherInformation from './otherInformation';
import PurchaserInformation from './purchaserInformation';
import AgentInformation from './agentInformation';
import Acknowledgement from './acknowledgement';
import ReviewInformation from './reviewInformation';
import { changeWorksheetSideBar, resetFormData } from '../../../action';


const Worksheet = () => {

    const myState = useSelector( (state) => state.myState);
    const dispatch = useDispatch();

    const { worksheetSidebarSetting } = myState;

    const showSectionBySidebar = (e) => {
        if( e.type === 'click' || ( e.type === 'keypress' && e.charCode === 13 ) ){  
            const sectionClicked = e.target.attributes.getNamedItem('data-sidebar').value;
            let actionPayload = {
                sectionClicked
            }

            if(worksheetSidebarSetting.sidebarMenuChildListActive.hasOwnProperty( sectionClicked )){

                const sectionClickedChildItem = ( e.target.hasAttribute("data-childitem") )? 
                    e.target.attributes.getNamedItem('data-childitem').value
                    :
                    worksheetSidebarSetting.defaultSidebarMenuChildListActive[sectionClicked];

                let setChildActive = { ...worksheetSidebarSetting.sidebarMenuChildListActive };

                Object.keys(setChildActive[sectionClicked]).map( (item, i) => {
                    setChildActive[sectionClicked][item] = ( sectionClickedChildItem === item )? true : false;
                });


                actionPayload['childItem'] = setChildActive;

            }else{
                actionPayload['childItem'] = null;
            }
            dispatch( changeWorksheetSideBar(actionPayload) );
        }
    }

    const navigateWorksheetSection = (nextComponent) => {
        dispatch( changeWorksheetSideBar(nextComponent) );
    }
    useEffect(() => {

        dispatch( changeWorksheetSideBar({sectionClicked: worksheetSidebarSetting.defaultSidebarMenu}) );
        dispatch ( resetFormData('worksheetForm') );

    }, []);

    return (<section className='my-5 py-5 container body-section'>
        <div className='page-body body-section-wrapper'>
            <h1 className='text-center mb-5'>Worksheet</h1>
            <div className='row'>
                <div className='col-12 col-md-3'>
                    <SidebarMenu 
                        showSection={showSectionBySidebar} 
                        sidebarMenuActive={worksheetSidebarSetting.sidebarMenuActive}
                        sidebarMenuChildListActive={worksheetSidebarSetting.sidebarMenuChildListActive}
                    />
                </div>
                <div className='col-12 col-md-9'>
                    { 
                        (worksheetSidebarSetting.sidebarMenuActive === 'suiteInformation')&&
                        <SuiteInformation 
                            pageTitle={worksheetSidebarSetting.sidebarMenu.suiteInformation}
                            showSection={navigateWorksheetSection}  
                        />
                    }
                    { 
                        (worksheetSidebarSetting.sidebarMenuActive === 'otherInformation')&&
                        <OtherInformation 
                            pageTitle={worksheetSidebarSetting.sidebarMenu.otherInformation}
                            showSection={navigateWorksheetSection}  
                        />
                    }
                    { 
                        (
                            worksheetSidebarSetting.sidebarMenuActive === 'purchaserInformation' &&
                            worksheetSidebarSetting.sidebarMenuChildListActive.purchaserInformation.primaryPurchaser
                        )&&
                        <PurchaserInformation 
                            pageTitle={worksheetSidebarSetting.sidebarMenu.purchaserInformation.title} 
                            pageChildTitle={worksheetSidebarSetting.sidebarMenu.purchaserInformation.childInformation[0].primaryPurchaser} 
                            purchaserPrefix='p1'
                            purchaserSlug='primaryPurchaser'
                            showSection={navigateWorksheetSection} 
                        />
                    }
                    { 
                        (
                            worksheetSidebarSetting.sidebarMenuActive === 'purchaserInformation' &&
                            worksheetSidebarSetting.sidebarMenuChildListActive.purchaserInformation.secondaryPurchaser
                        )&&
                        <PurchaserInformation 
                            pageTitle={worksheetSidebarSetting.sidebarMenu.purchaserInformation.title} 
                            pageChildTitle={worksheetSidebarSetting.sidebarMenu.purchaserInformation.childInformation[1].secondaryPurchaser} 
                            purchaserPrefix='p2'
                            purchaserSlug='secondaryPurchaser'
                            showSection={navigateWorksheetSection} 
                        />
                    }
                    { 
                        (worksheetSidebarSetting.sidebarMenuActive === 'agentInformation')&&
                        <AgentInformation
                            pageTitle={worksheetSidebarSetting.sidebarMenu.agentInformation}
                            showSection={navigateWorksheetSection}       
                        />
                    }
                    { 
                        (worksheetSidebarSetting.sidebarMenuActive === 'acknowledgement')&&
                        <Acknowledgement 
                            pageTitle={worksheetSidebarSetting.sidebarMenu.acknowledgement}
                            showSection={navigateWorksheetSection}  
                        />
                    }
                    { 
                        (worksheetSidebarSetting.sidebarMenuActive === 'reviewInformation')&&
                        <ReviewInformation 
                            pageTitle={worksheetSidebarSetting.sidebarMenu.reviewInformation}
                            showSection={navigateWorksheetSection}  
                        />
                    }
                </div>
            </div>
        </div>
    </section>);
}

export default Worksheet;