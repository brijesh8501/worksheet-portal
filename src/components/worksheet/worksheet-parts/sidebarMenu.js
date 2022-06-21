import React from 'react';

const SideBarMenu = (props) => {
    return (<div className='worksheet-sidebar' id='worksheetSidebar'>
        <div 
            className={`worksheet-sidebar-item ${(props.sidebarMenuActive === 'suiteInformation')&& 'worksheet-sidebar-item-active'}`} 
            id='sidebarsuiteInformation' 
            data-sidebar='suiteInformation' 
            onClick={props.showSection}>
                Suite Information
        </div>
        <div 
            className={`worksheet-sidebar-item ${(props.sidebarMenuActive === 'otherInformation')&& 'worksheet-sidebar-item-active'}`} 
            id='sidebarotherInformation' 
            data-sidebar='otherInformation' 
            onClick={props.showSection}>
                Other Information
        </div>
        <div 
            className={`worksheet-sidebar-item ${(props.sidebarMenuActive === 'purchaserInformation')&& 'worksheet-sidebar-item-active'}`} 
            id='sidebarpurchaserInformation' 
            data-sidebar='purchaserInformation' 
            onClick={props.showSection}>
                Purchaser Information
        </div>
        <div 
            className={`worksheet-sidebar-item-child-wrapper ${(props.sidebarMenuActive === 'purchaserInformation')? 'd-block':'d-none'}`}>
            <div 
                className={`worksheet-sidebar-item-child-list ${(props.sidebarMenuActive === 'purchaserInformation' && props.sidebarMenuChildListActive.purchaserInformation.primaryPurchaser )&& 'worksheet-sidebar-item-active'}`} 
                data-sidebar='purchaserInformation' 
                data-childitem='primaryPurchaser' 
                onClick={props.showSection}>
                    Primary Purchaser
            </div>
            <div 
                className={`worksheet-sidebar-item-child-list ${(props.sidebarMenuActive === 'purchaserInformation' && props.sidebarMenuChildListActive.purchaserInformation.secondaryPurchaser )&& 'worksheet-sidebar-item-active'}`} 
                data-sidebar='purchaserInformation' 
                onClick={props.showSection} 
                data-childitem='secondaryPurchaser'>
                    Secondary Purchaser
            </div>
        </div>
        <div 
            className={`worksheet-sidebar-item ${(props.sidebarMenuActive === 'agentInformation')&& 'worksheet-sidebar-item-active'}`} 
            id='sidebaragentInformation' 
            data-sidebar='agentInformation' 
            onClick={props.showSection}>
                Agent Information
        </div>
        <div 
            className={`worksheet-sidebar-item ${(props.sidebarMenuActive === 'acknowledgment')&& 'worksheet-sidebar-item-active'}`} 
            id='sidebaracknowledgment'
            data-sidebar='acknowledgment' 
            onClick={props.showSection}>
                Acknowledgment
        </div>
    </div>);
}

export default SideBarMenu;