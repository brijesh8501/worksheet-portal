import React from 'react';
import FormFields from '../../form-fields/index';


class OtherInformation extends React.Component {

    constructor(props) {
        super(props);
    }

    handleChange = (event) => {
        console.log(event.target.value);
    }

    render(){
        return (
            <div className='worksheet-form ps-4 pe-3' id='worksheetForm'>
                <div className='col-12 worksheet-suite-information' id='worksheetotherInformation'>
                    <div className='worksheet-form-header py-3'>
                        <h2 className='h4 mb-0'>Other Information</h2>
                    </div>
                    <div className='worksheet-form-body py-3'>
                        <div>
                            <label className='form-check-label'>Preferred appointment type:<span className='text-danger'>*</span></label>
                            <FormFields 
                                formField='radio' 
                                formFieldSettings={ 
                                    { 
                                        class: 'd-flex gap-3 mt-2',
                                        optionData: [
                                            {
                                                label: 'Yes',
                                                class: 'form-check-input square-radio',
                                                id: 'appointmentTypeYes',
                                                name: 'appointmentType',
                                                value: 'Yes',
                                                onChange: this.handleChange
                                            },
                                            {
                                                label: 'No',
                                                class: 'form-check-input square-radio',
                                                id: 'appointmentTypeNo',
                                                name: 'appointmentType',
                                                value: 'No',
                                                onChange: this.handleChange
                                            }
                                        ]
                                    }
                                }
                            />
                        </div>
                    </div>
                    <div className='worksheet-form-footer pb-3'>
                        <div className='d-flex gap-3 justify-content-end'>
                            <button className='btn btn-back'>
                                <img src='/assets/left-arrow.png' className='back-img-icon img-fluid' />Back
                            </button>
                            {/* <button className='btn btn-secondary'>Save</button> */}
                            <button className='btn btn-primary'>Save and continue</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OtherInformation;