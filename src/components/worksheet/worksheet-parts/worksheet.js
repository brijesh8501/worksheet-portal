import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SideBarMenu from './sidebarMenu';
import SuiteInformation from './suiteInformation';
import OtherInformation from './otherInformation';
import PurchaserInformation from './purchaserInformation';
import AgentInformation from './agentInformation';
import Acknowledgment from './acknowledgement';
import { changeWorksheetSideBar } from '../../../action';


const Worksheet = () => {

    const myState = useSelector( (state) => state.myState);
    const dispatch = useDispatch();

    const { worksheetSidebarSetting } = myState;

    return (<section className='my-5 py-5 container body-section'>
        <div className='page-body body-section-wrapper'>
            <h1 className='text-center mb-5'>Worksheet</h1>
            <div className='row'>
                <div className='col-12 col-md-3'>
                    <SideBarMenu 
                        showSection={worksheetSidebarSetting.showSectionBySidebar} 
                        sidebarMenuActive={worksheetSidebarSetting.sidebarMenuActive}
                        sidebarMenuChildListActive={worksheetSidebarSetting.sidebarMenuChildListActive}
                    />
                </div>
                <div className='col-12 col-md-9'>
                    { 
                        (worksheetSidebarSetting.sidebarMenuActive === 'suiteInformation')&&
                        <SuiteInformation />
                    }
                    { 
                        (worksheetSidebarSetting.sidebarMenuActive === 'otherInformation')&&
                        <OtherInformation />
                    }
                    { 
                        (
                            worksheetSidebarSetting.sidebarMenuActive === 'purchaserInformation' &&
                            worksheetSidebarSetting.sidebarMenuChildListActive.purchaserInformation.primaryPurchaser
                        )&&
                        <PurchaserInformation pageTitle='Primary Purchaser' purchaserPrefix='p1'/>
                    }
                    { 
                        (
                            worksheetSidebarSetting.sidebarMenuActive === 'purchaserInformation' &&
                            worksheetSidebarSetting.sidebarMenuChildListActive.purchaserInformation.secondaryPurchaser
                        )&&
                        <PurchaserInformation pageTitle='Secondary Purchaser' purchaserPrefix='p2'/>
                    }
                    { 
                        (worksheetSidebarSetting.sidebarMenuActive === 'agentInformation')&&
                        <AgentInformation />
                    }
                    { 
                        (worksheetSidebarSetting.sidebarMenuActive === 'acknowledgment')&&
                        <Acknowledgment />
                    }
                </div>
            </div>
        </div>
    </section>);
}

export default Worksheet;