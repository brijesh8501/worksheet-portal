import React from 'react';
import FormFields from '../../form-fields/index';


class AgentInformation extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className='worksheet-form ps-4 pe-3' id='worksheetForm'>
                <div className='col-12 worksheet-suite-information' id='worksheetotherInformation'>
                    <div className='worksheet-form-header py-3'>
                        <h2 className='h4 mb-0'>Agent Information</h2>
                    </div>
                    <div className='worksheet-form-body py-3'>
                        <div className='agent-information-wrapper bg-white p-3'>
                            <div className='d-flex gap-3'>
                                <div className='cw-50'>
                                    <div>First name</div>
                                    <div className='text-readonly'>Brijesh</div>
                                </div>
                                <div className='cw-50'>
                                    <div>Last name</div>
                                    <div className='text-readonly'>Brijesh</div>
                                </div>
                            </div>
                            <div className='d-flex gap-3 mt-3'>
                                <div className='cw-50'>
                                    <div>Contact number</div>
                                    <div className='text-readonly'>Brijesh</div>
                                </div>
                                <div className='cw-50'>
                                    <div>Email address</div>
                                    <div className='text-readonly'>Brijesh</div>
                                </div>
                            </div>
                            <div className='d-flex gap-3 mt-3'>
                                <div className='cw-50'>
                                    <div>Brokerage name</div>
                                    <div className='text-readonly'>Brijesh</div>
                                </div>
                                <div className='cw-50'>
                                    <div>Brokerage contact number</div>
                                    <div className='text-readonly'>Brijesh</div>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <div>Brokerage address</div>
                                <div className='text-readonly'>Brijesh</div>
                            </div>
                            <div className='d-flex gap-3 mt-3'>
                                <div className='cw-50'>
                                    <div>Brokerage city</div>
                                    <div className='text-readonly'>Brijesh</div>
                                </div>
                                <div className='cw-50'>
                                    <div>Brokerage province/state/region</div>
                                    <div className='text-readonly'>Brijesh</div>
                                </div>
                            </div>
                            <div className='d-flex gap-3 mt-3'>
                                <div className='cw-50'>
                                    <div>Brokerage country</div>
                                    <div className='text-readonly'>Brijesh</div>
                                </div>
                                <div className='cw-50'>
                                    <div>Brokerage postal/zip code</div>
                                    <div className='text-readonly'>Brijesh</div>
                                </div>
                            </div>
                            <div className='d-flex gap-3 mt-3'>
                                <div>Image 1</div>
                                <div>Image 2</div>
                            </div>
                       </div>
                    </div>
                    <div className='worksheet-form-footer pb-3'>
                        <div className='d-flex gap-3 justify-content-end'>
                            <button className='btn btn-back'>
                                <img src='/assets/left-arrow.png' className='back-img-icon img-fluid' />Back
                            </button>
                            <button className='btn btn-primary'>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AgentInformation;