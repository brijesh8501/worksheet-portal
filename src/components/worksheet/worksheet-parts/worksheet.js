import React, { createElement, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SidebarMenu from './sidebarMenu';
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

    const createWorksheetComponent = () =>{
        const createComponent = Object.entries(worksheetSidebarSetting.sidebarMenu).map( (item, i) => {
            if(worksheetSidebarSetting.sidebarMenuActive === item[0]){
                if("childInformation" in item[1]){
                    const CreateComponent = item[1].component;
                    const createChildComponent = Object.keys(worksheetSidebarSetting.sidebarMenuChildListActive[item[0]]).find(key => worksheetSidebarSetting.sidebarMenuChildListActive[item[0]][key] === true); 
                    return item[1].childInformation.map( (data, j) => {
                        if(data.componentProps2 === createChildComponent){                  
                            return <CreateComponent
                                form={worksheetSidebarSetting.form} 
                                pageTitle={item[1].title} 
                                pageChildTitle={data.title} 
                                purchaserPrefix={data.componentProps1}
                                purchaserSlug={data.componentProps2}
                                showSection={eval(data.componentProps3)} 
                                key={j}
                            />
                        }
                    } );

                }else{
                    const CreateComponent = item[1].component;
                    return <CreateComponent
                        form={worksheetSidebarSetting.form} 
                        pageTitle={eval(item[1].componentProps1)} 
                        showSection={ eval(item[1].componentProps2) }
                        key={i} 
                    />
                }
            }
        });

        return createComponent;
    }
    useEffect(() => {

        dispatch( changeWorksheetSideBar({sectionClicked: worksheetSidebarSetting.defaultSidebarMenu}) );
        dispatch ( resetFormData('worksheetForm') );

    }, []);

    return (<section className='my-5 py-5 container body-section'>
            <div className='page-body body-section-wrapper'>
                <h1 className='text-center mb-5'>Worksheet</h1>
                <div className='row'>
                    <div className='col-12 col-md-3 col-xxl-2'>
                        <SidebarMenu 
                            showSection={showSectionBySidebar} 
                            sidebarMenuActive={worksheetSidebarSetting.sidebarMenuActive}
                            sidebarMenuChildListActive={worksheetSidebarSetting.sidebarMenuChildListActive}
                        />
                    </div>
                    <div className='col-12 col-md-9 col-xxl-10 mt-5 mt-md-0'>
                        { createWorksheetComponent() }
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Worksheet;