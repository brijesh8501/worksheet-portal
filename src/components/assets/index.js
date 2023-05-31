import React from 'react';
import Navbar from '../includes/header/navbar';
import Footer from '../includes/footer/index';
import FormFields from '../form-fields/index';

const Assets = () => {
    return (
        <div>
            <Navbar/>
                <section className='my-5 py-5 container body-section'>
                    <div className='asset-page page-body body-section-wrapper'>
                        <h2 className='mb-3 text-uppercase'>Available Now</h2>
                        <div className='d-flex gap-2 flex-column flex-sm-row flex-wrap jusitfy-content-center align-items-center'>
                        <FormFields 
                            formField='div-button' 
                            formFieldSettings={ 
                                { 
                                    label: 'Logo', 
                                    class: 'text-uppercase asset-btn',
                                    id: 'assetLogo',
                                    anchorLinkSetting: {
                                        isEnabled: true,
                                        class: 'text-decoration-none anchor-btn',
                                        hrefLink: '#',
                                        isTarget: true
                                    }
                                }
                            }
                        /> 
                        <FormFields 
                            formField='div-button' 
                            formFieldSettings={ 
                                { 
                                    label: 'Site Plan', 
                                    class: 'text-uppercase asset-btn',
                                    id: 'assetSitePlan',
                                    anchorLinkSetting: {
                                        isEnabled: true,
                                        class: 'text-decoration-none anchor-btn',
                                        hrefLink: '#',
                                        isTarget: false
                                    }
                                }
                            }
                        /> 
                        <FormFields 
                            formField='div-button' 
                            formFieldSettings={ 
                                { 
                                    label: 'Floorplans', 
                                    class: 'text-uppercase asset-btn',
                                    id: 'assetFloorplans',
                                    anchorLinkSetting: {
                                        isEnabled: true,
                                        class: 'text-decoration-none anchor-btn',
                                        hrefLink: '#',
                                        isTarget: true
                                    }
                                }
                            }
                        /> 
                        <FormFields 
                            formField='div-button' 
                            formFieldSettings={ 
                                { 
                                    label: 'Sales Procedures', 
                                    class: 'text-uppercase asset-btn',
                                    id: 'assetSalesProcedures',
                                    anchorLinkSetting: {
                                        isEnabled: true,
                                        class: 'text-decoration-none anchor-btn',
                                        hrefLink: '#',
                                        isTarget: true
                                    }
                                }
                            }
                        /> 
                        <FormFields 
                            formField='div-button' 
                            formFieldSettings={ 
                                { 
                                    label: 'Amenities', 
                                    class: 'text-uppercase asset-btn',
                                    id: 'assetAmenities',
                                    anchorLinkSetting: {
                                        isEnabled: true,
                                        class: 'text-decoration-none anchor-btn',
                                        hrefLink: '#',
                                        isTarget: true
                                    }
                                }
                            }
                        /> 
                        </div>
                        <hr className='my-5'/>
                        <h2 className='mb-3 text-uppercase'>Coming Soon</h2>
                        <div className='d-flex gap-2 flex-column flex-sm-row flex-wrap jusitfy-content-center align-items-center'>
                        <FormFields 
                            formField='div-button' 
                            formFieldSettings={ 
                                { 
                                    label: 'Logo', 
                                    class: 'text-uppercase asset-coming-soon-btn',
                                    id: 'assetLogo1',
                                    anchorLinkSetting: {
                                        isEnabled: false
                                    }
                                    
                                }
                            }
                        /> 
                        <FormFields 
                            formField='div-button' 
                            formFieldSettings={ 
                                { 
                                    label: 'Worksheet', 
                                    class: 'text-uppercase asset-coming-soon-btn',
                                    id: 'assetWorksheet',
                                    anchorLinkSetting: {
                                        isEnabled: false
                                    }
                                }
                            }
                        /> 
                        <FormFields 
                            formField='div-button' 
                            formFieldSettings={ 
                                { 
                                    label: 'Incentives', 
                                    class: 'text-uppercase asset-coming-soon-btn',
                                    id: 'assetIncentives',
                                    anchorLinkSetting: {
                                        isEnabled: false
                                    }
                                }
                            }
                        /> 
                        <FormFields 
                            formField='div-button' 
                            formFieldSettings={ 
                                { 
                                    label: 'Broker Point', 
                                    class: 'text-uppercase asset-coming-soon-btn',
                                    id: 'assetBrokerPoint',
                                    anchorLinkSetting: {
                                        isEnabled: false
                                    }
                                }
                            }
                        /> 
                        </div>
                    </div>
                </section>
            <Footer />
       </div>
    );
}

export default Assets;