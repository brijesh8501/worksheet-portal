import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { showHideNavProfileMenu } from "../../../action";

const CreateMenu = (props) => {

    const myState = useSelector( (state) => state.myState);
    const dispatch = useDispatch();

    const { navSetting } = myState;
    const menuList = props.menuList;

    const showHideMenu = (e) => {
        if( e.type === 'click' || ( e.type === 'keypress' && e.charCode === 13 ) ){  
            dispatch(showHideNavProfileMenu(false));
        }
    }
    useEffect(() => {

        dispatch(showHideNavProfileMenu(true));

    }, []);

    return (<div className='container-fluid px-0'>
        <div className='nav-menu-wrapper d-flex justify-content-between ms-5'>
            <div className='nav-menu-left d-flex'>
                <Link to='/' className='nav-menu-item navbar-logo-wrapper px-4 py-2 d-flex justify-content-center align-items-center'>
                    <img src="/assets/The-Valley-white-logo.png" className='navbar-logo img-fluid'/>
                </Link>
                { 
                    (menuList.menuLeft.length <= navSetting.leftMenuLimit) &&
                        menuList.menuLeft.map( (item, i) => {
                            return (<Link to={item.link} className={item.class} key={i}>
                                <span>{item.label}</span>
                            </Link>);
                        })
                }
            </div>
            <div className='nav-menu-right d-flex justify-content-center align-items-center position-relative pe-5'>
                <div className='nav-menu-item text-white' tabIndex='0' onClick={showHideMenu} onKeyPress={showHideMenu}>
                    <div className='py-2'>
                        <img src="/assets/profile-user.png" className='navbar-profile-logo img-fluid me-3'/>
                        <span>Brijesh Ahir</span>
                    </div>
                </div>
                <div className={`profile-menu position-absolute ${ (navSetting.isProfileMenuToShow)? '': 'd-none' } `}>
                    {
                        menuList.menuRight.map( (item, i) => {
                            return (<Link to={item.link} className={item.class} key={i}>
                                <span>{item.label}</span>
                            </Link>);
                        })
                    }
                </div>
            </div>
        </div>
    </div>);

}

export default CreateMenu;