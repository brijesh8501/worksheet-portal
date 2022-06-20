import React from 'react';
import CreateMenu from '../header/createmenu';

const Navbar = (prop) => {

    const currentPagePath = window.location.pathname;
    const pageConfiguration = {
        headerMenu: {
            isWorksheetMenuRequired: {
                flag: true,
                menuFor: 'Worksheet'
            },
            isAssetsMenuRequired: {
                flag: true,
                menuFor: 'Assets'
            }
        }
    }
    const menuList = {
        menuLeft: [],
        menuRight: [{
            name: 'profile',
            label: 'Profile',
            link: '/profile',
            class: `text-decoration-none px-2 py-2 profile-menu-item ${ (currentPagePath.includes('profile'))? 'menu-active':'' }`
        },{
            name: 'logout',
            label: 'Logout',
            link: '/logout',
            class: 'text-decoration-none px-2 py-2 profile-menu-item'
        }]
    }
    
    const headerMenu = pageConfiguration.headerMenu;

    if(headerMenu.isWorksheetMenuRequired.flag){
        menuList['menuLeft'].push({
                name: 'worksheet',
                label: 'Worksheet',
                link: '/worksheet/list',
                menuFor: headerMenu.isWorksheetMenuRequired.menuFor,
                class: `text-decoration-none nav-menu-item d-flex justify-content-center align-items-center text-white p-4 ${ (currentPagePath.includes('worksheet/list'))? 'menu-active':'' }`
            });
    }
    if(headerMenu.isAssetsMenuRequired.flag){
        menuList['menuLeft'].push({
            name: 'Assets',
            label: 'Assets',
            link: '/assets',
            menuFor: headerMenu.isAssetsMenuRequiredmenuFor,
            class: `text-decoration-none nav-menu-item d-flex justify-content-center align-items-center text-white p-4 ${ (currentPagePath.includes('assets'))? 'menu-active':'' }`
        });
    }

    return (
       <nav>
        <CreateMenu menuSide='left' menuList={menuList}/>
       </nav>
    );
}

export default Navbar;