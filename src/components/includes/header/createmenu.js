import React from 'react';
import { Link } from 'react-router-dom';

class CreateMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isProfileMenuToShow: false,
            leftMenuLimit: 4
        };

    }
    showHideMenu = (e) => {
        if( e.type === 'click' || ( e.type === 'keypress' && e.charCode === 13 ) ){  
            this.setState({isProfileMenuToShow: (this.state.isProfileMenuToShow) ? false : true });
        }
    }
    render() {
        const menuList = this.props.menuList;
        return (<div className='container-fluid px-0'>
            <div className='nav-menu-wrapper d-flex justify-content-between ms-5'>
                <div className='nav-menu-left d-flex'>
                    <Link to='/' className='nav-menu-item navbar-logo-wrapper px-4 py-2 d-flex justify-content-center align-items-center'>
                        <img src="/assets/The-Valley-white-logo.png" className='navbar-logo img-fluid'/>
                    </Link>
                    { 
                        (menuList.menuLeft.length <= this.state.leftMenuLimit) &&
                            menuList.menuLeft.map( (item, i) => {
                                return (<Link to={item.link} className={item.class} key={i}>
                                    <span>{item.label}</span>
                                </Link>);
                            })
                    }
                </div>
                <div className='nav-menu-right d-flex justify-content-center align-items-center position-relative pe-5'>
                    <div className='nav-menu-item text-white' tabIndex='0' onClick={this.showHideMenu} onKeyPress={this.showHideMenu}>
                        <div className='py-2'>
                            <img src="/assets/profile-user.png" className='navbar-profile-logo img-fluid me-3'/>
                            <span>Brijesh Ahir</span>
                        </div>
                    </div>
                    <div className={`profile-menu position-absolute ${ (this.state.isProfileMenuToShow)? '': 'd-none' } `}>
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
}

export default CreateMenu;