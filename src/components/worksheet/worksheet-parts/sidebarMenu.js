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
        <div className='stepform-sidebar' id='worksheetSidebar'>
            {
                getWorksheetSidebarSettingToArray.map( (item, i) => {
                    if("childInformation" in item[1]){
                        return( 
                        <div
                            key={i}
                            className='stepform-sidebar-item-dropdown-wrapper'
                        >
                            <div 
                                className={`stepform-sidebar-item ${(props.sidebarMenuActive === item[0] )&& 'stepform-sidebar-item-active'}`} 
                                id={`sidebar${item[0]}`} 
                                data-sidebar={item[0]} 
                                onClick={props.showSection}
                                >
                                    {item[1].title}
                            </div>
                            <div 
                                className={`stepform-sidebar-item-child-wrapper ${(props.sidebarMenuActive === item[0])? 'd-block':'d-none'}`}
                            >
                                {
                                    item[1].childInformation.map( (data, j ) => {
                                        const getKey = Object.keys(data);
                                        return(<div 
                                            className={`stepform-sidebar-item-child-list ${(props.sidebarMenuActive === item[0] && props.sidebarMenuChildListActive.purchaserInformation[data[getKey[2]]] )&& 'stepform-sidebar-item-active'}`} 
                                            data-sidebar={item[0]} 
                                            data-childitem={data[getKey[2]]} 
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
                            className={`stepform-sidebar-item ${(props.sidebarMenuActive === item[0] )&& 'stepform-sidebar-item-active'}`} 
                            id={`sidebar${item[0]}`} 
                            data-sidebar={item[0]} 
                            onClick={props.showSection}
                            key={i}
                            >
                                {item[1].title}
                        </div>);

                    }
                })
            }
        </div>
    )
}

export default SidebarMenu;