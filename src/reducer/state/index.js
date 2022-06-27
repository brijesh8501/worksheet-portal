export const initialState = {

    navSetting:{

        isProfileMenuToShow: false,
        leftMenuLimit: 4

    },
    worksheetSidebarSetting:{

        sidebarMenuActive: 'suiteInformation',
        sidebarMenuChildListActive: {
            purchaserInformation: {
                primaryPurchaser: true, 
                secondaryPurchaser: false
            }
        },
        defaultSidebarMenuChildListActive: {
            purchaserInformation: 'primaryPurchaser'
        }

    }
   
}