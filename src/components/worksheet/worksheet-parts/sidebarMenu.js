import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

const SidebarMenu = (props) => {

    const myState = useSelector( (state) => state.myState);
    const { worksheetSidebarSetting } = myState;
    const getWorksheetSidebarSettingToArray = Object.entries(worksheetSidebarSetting.sidebarMenu);
    
    useEffect(() => {

        const body = document.querySelector('#root');

        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)

    }, [worksheetSidebarSetting]);

    return(
        <div className='worksheet-sidebar' id='worksheetSidebar'>
            {
                getWorksheetSidebarSettingToArray.map( (item, i) => {
                    if(typeof item[1] === 'object'){
                        return( 
                        <div
                            key={i}
                            className='worksheet-sidebar-item-dropdown-wrapper'
                        >
                            <div 
                                className={`worksheet-sidebar-item ${(props.sidebarMenuActive === item[0] )&& 'worksheet-sidebar-item-active'}`} 
                                id={`sidebar${item[0]}`} 
                                data-sidebar={item[0]} 
                                onClick={props.showSection}
                                >
                                    {item[1].title}
                            </div>
                            <div 
                                className={`worksheet-sidebar-item-child-wrapper ${(props.sidebarMenuActive === item[0])? 'd-block':'d-none'}`}
                            >
                                {
                                    item[1].childInformation.map( (data, j ) => {
                                        const getKey = Object.keys(data);

                                        return(<div 
                                            className={`worksheet-sidebar-item-child-list ${(props.sidebarMenuActive === item[0] && props.sidebarMenuChildListActive.purchaserInformation[getKey[0]] )&& 'worksheet-sidebar-item-active'}`} 
                                            data-sidebar={item[0]} 
                                            data-childitem={getKey[0]} 
                                            onClick={props.showSection}
                                            key={j}
                                            >
                                                {data[getKey[0]]}
                                        </div>)
                                    })
                                }
                            </div>
                        </div>);

                    }else{

                        return (<div 
                            className={`worksheet-sidebar-item ${(props.sidebarMenuActive === item[0] )&& 'worksheet-sidebar-item-active'}`} 
                            id={`sidebar${item[0]}`} 
                            data-sidebar={item[0]} 
                            onClick={props.showSection}
                            key={i}
                            >
                                {item[1]}
                        </div>);

                    }
                })
            }
        </div>
    )
}

export default SidebarMenu;