import React from 'react';
import SideBarMenu from './sidebarMenu';
import SuiteInformation from './suiteInformation';
import OtherInformation from './otherInformation';
import PurchaserInformation from './purchaserInformation';
import AgentInformation from './agentInformation';
import Acknowledgment from './acknowledgement';

class Worksheet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sidebarMenuActive: 'suiteInformation',
            sidebarMenuChildListActive: {
                purchaserInformation: {
                    primaryPurchaser: true, 
                    secondaryPurchaser: false
                },
                brijesh: 'no'
            },
            defaultSidebarMenuChildListActive: {
                purchaserInformation: 'primaryPurchaser'
            }
        };

    }
    showSectionBySidebar = (e) => {
        const sectionClicked = e.target.attributes.getNamedItem('data-sidebar').value;
        this.setState({
            sidebarMenuActive: `${sectionClicked}`
        });
        if(this.state.sidebarMenuChildListActive.hasOwnProperty( sectionClicked )){

            const sectionClickedChildItem = ( e.target.hasAttribute("data-childitem") )? 
                e.target.attributes.getNamedItem('data-childitem').value
                :
                this.state.defaultSidebarMenuChildListActive[sectionClicked];

            let setChildActive = { ...this.state.sidebarMenuChildListActive };

            Object.keys(setChildActive[sectionClicked]).map( (item, i) => {
                setChildActive[sectionClicked][item] = ( sectionClickedChildItem === item )? true : false;
            });

            this.setState({
                sidebarMenuChildListActive: setChildActive
            });

        }
    }
    componentDidUpdate(prevProps, prevState) {
        const prevActiveMenu = prevState.sidebarMenuActive;
        const currentActiveMenu = this.state.sidebarMenuActive;
        console.log(prevState, 'prev');
        console.log(this.state, 'current');
        if (
            ( prevActiveMenu !== currentActiveMenu ) ||
            ( 
                ( prevActiveMenu === currentActiveMenu ) &&
                ( prevState.sidebarMenuChildListActive[prevActiveMenu] === this.state.sidebarMenuChildListActive[currentActiveMenu]  ) 
            )
        ) {

            const body = document.querySelector('#root');

            body.scrollIntoView({
                behavior: 'smooth'
            }, 500)

        }
    }
    render(){
        console.log(this.state);
        return (<section className='my-5 py-5 container body-section'>
            <div className='page-body body-section-wrapper'>
                <h1 className='text-center mb-5'>Worksheet</h1>
                <div className='row'>
                    <div className='col-12 col-md-3'>
                        <SideBarMenu 
                            showSection={this.showSectionBySidebar} 
                            sidebarMenuActive={this.state.sidebarMenuActive}
                            sidebarMenuChildListActive={this.state.sidebarMenuChildListActive}
                        />
                    </div>
                    <div className='col-12 col-md-9'>
                        { 
                            (this.state.sidebarMenuActive === 'suiteInformation')&&
                            <SuiteInformation />
                        }
                        { 
                            (this.state.sidebarMenuActive === 'otherInformation')&&
                            <OtherInformation />
                        }
                        { 
                            (
                                this.state.sidebarMenuActive === 'purchaserInformation' &&
                                this.state.sidebarMenuChildListActive.purchaserInformation.primaryPurchaser
                            )&&
                            <PurchaserInformation pageTitle='Primary Purchaser' purchaserPrefix='p1'/>
                        }
                        { 
                            (
                                this.state.sidebarMenuActive === 'purchaserInformation' &&
                                this.state.sidebarMenuChildListActive.purchaserInformation.secondaryPurchaser
                            )&&
                            <PurchaserInformation pageTitle='Secondary Purchaser' purchaserPrefix='p2'/>
                        }
                        { 
                            (this.state.sidebarMenuActive === 'agentInformation')&&
                            <AgentInformation />
                        }
                        { 
                            (this.state.sidebarMenuActive === 'acknowledgment')&&
                            <Acknowledgment />
                        }
                    </div>
                </div>
            </div>
        </section>);
    }

}

export default Worksheet;