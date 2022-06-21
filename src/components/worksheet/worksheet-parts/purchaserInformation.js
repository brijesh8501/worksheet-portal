import React from 'react';
import FormFields from '../../form-fields/index';

class PurchaserInformation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            purchaserPrefix: this.props.purchaserPrefix,
            pageTitle: this.props.pageTitle,
            isSecondaryPurchaserRequired: false
        };

    }

    handleChange = (event) => {
        if( event.target.name === 'secondaryPurchaser' ){
            this.setState({
                isSecondaryPurchaserRequired: (event.target.value === 'Yes' ) ? true : false
            });
        }
    }

    render(){
        return(
            <div className='worksheet-form ps-4 pe-3' id='worksheetForm'>
                <div className='col-12 worksheet-suite-information' id='worksheetpurchaserInformation'>
                    <div className='worksheet-form-header py-3'>
                        <h2 className='h4 mb-0'>Purchaser Information</h2>
                    </div>
                    <div className={`worksheet-form-body py-3`}>
                        <div className={`${(this.state.purchaserPrefix === 'p2')? 'd-block' : 'd-none' }`}>
                            <label className='form-check-label'>Would you like to add secondary purchaser? <span className='text-danger'>*</span></label>
                                <FormFields 
                                    formField='radio' 
                                    formFieldSettings={ 
                                        { 
                                            class: 'd-flex gap-3 mt-2',
                                            optionData: [
                                                {
                                                    label: 'Yes',
                                                    class: 'form-check-input square-radio',
                                                    id: 'secondaryPurchaserYes',
                                                    name: 'secondaryPurchaser',
                                                    value: 'Yes',
                                                    onChange: this.handleChange
                                                },
                                                {
                                                    label: 'No',
                                                    class: 'form-check-input square-radio',
                                                    id: 'secondaryPurchaserNo',
                                                    name: 'secondaryPurchaser',
                                                    value: 'No',
                                                    onChange: this.handleChange
                                                }
                                            ]
                                        }
                                    }
                            />
                        </div>
                        <div className={`position-relative bg-white purchaser-information-wrapper pt-5 pb-3 ${ (this.state.isSecondaryPurchaserRequired === true)&& 'mt-4' } ${( (this.state.purchaserPrefix === 'p1') || (this.state.purchaserPrefix === 'p2' && this.state.isSecondaryPurchaserRequired === true ) )? 'd-block' : 'd-none' } `}>
                            <h3 className='h6 mb-0 position-absolute purchaser-information-title'>{this.state.pageTitle}</h3>
                            <div className='purchaser-information-box px-3' id='purchaserInformation'>
                                <div className='d-flex gap-3 justify-content-center align-items-center'>
                                    <div className='cw-50'>
                                        <label className='form-label'>First name <span className='text-danger'>*</span></label>
                                        <FormFields 
                                            formField='textbox' 
                                            formFieldSettings={ 
                                                { 
                                                    class: 'form-control',
                                                    id: `${this.state.purchaserPrefix}firstName`,
                                                    name: `${this.state.purchaserPrefix}firstName`
                                                }
                                            }
                                        />
                                    </div>
                                    <div className='cw-50'>
                                        <label className='form-label'>Last name <span className='text-danger'>*</span></label>
                                        <FormFields 
                                            formField='textbox' 
                                            formFieldSettings={ 
                                                { 
                                                    class: 'form-control',
                                                    id: `lastName`,
                                                    name: `lastName`
                                                }
                                            }
                                        />
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <label className='form-label'>Address <span className='text-danger'>*</span></label>
                                    <FormFields 
                                        formField='textbox' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: `address`,
                                                name: `address`
                                            }
                                        }
                                    />
                                </div>
                                <div className='d-flex gap-3 justify-content-center align-items-center mt-3'>
                                    <div className='cw-50'>
                                        <label className='form-label'>City <span className='text-danger'>*</span></label>
                                        <FormFields 
                                            formField='textbox' 
                                            formFieldSettings={ 
                                                { 
                                                    class: 'form-control',
                                                    id: `city`,
                                                    name: `city`
                                                }
                                            }
                                        />
                                    </div>
                                    <div className='cw-50'>
                                        <label className='form-label'>Province/State/Region <span className='text-danger'>*</span></label>
                                        <FormFields 
                                            formField='textbox' 
                                            formFieldSettings={ 
                                                { 
                                                    class: 'form-control',
                                                    id: `province`,
                                                    name: `province`
                                                }
                                            }
                                        />
                                    </div>
                                </div>
                                <div className='d-flex gap-3 justify-content-center align-items-center mt-3'>
                                    <div className='cw-50'>
                                        <label className='form-label'>Country <span className='text-danger'>*</span></label>
                                        <FormFields 
                                            formField='textbox' 
                                            formFieldSettings={ 
                                                { 
                                                    class: 'form-control',
                                                    id: `country`,
                                                    name: `country`
                                                }
                                            }
                                        />
                                    </div>
                                    <div className='cw-50'>
                                        <label className='form-label'>Postal/Zip code <span className='text-danger'>*</span></label>
                                        <FormFields 
                                            formField='textbox' 
                                            formFieldSettings={ 
                                                { 
                                                    class: 'form-control',
                                                    id: `postalCode`,
                                                    name: `postalCode`
                                                }
                                            }
                                        />
                                    </div>
                                </div>
                                <div className='d-flex gap-3 justify-content-center align-items-center mt-3'>
                                    <div className='cw-50'>
                                        <label className='form-label'>Phone number <span className='text-danger'>*</span></label>
                                        <FormFields 
                                            formField='textbox' 
                                            formFieldSettings={ 
                                                { 
                                                    class: 'form-control',
                                                    id: `phoneNumber`,
                                                    name: `phoneNumber`
                                                }
                                            }
                                        />
                                    </div>
                                    <div className='cw-50'>
                                        <label className='form-label'>Email address <span className='text-danger'>*</span></label>
                                        <FormFields 
                                            formField='textbox' 
                                            formFieldSettings={ 
                                                { 
                                                    class: 'form-control',
                                                    id: `emailAddress`,
                                                    name: `emailAddress`
                                                }
                                            }
                                        />
                                    </div>
                                </div>
                                <div className='d-flex gap-3 justify-content-center align-items-center mt-3'>
                                    <div className='cw-50'>
                                        <label className='form-label'>Date of birth <span className='text-danger'>*</span></label>
                                        <FormFields 
                                            formField='textbox' 
                                            formFieldSettings={ 
                                                { 
                                                    class: 'form-control',
                                                    id: `dob`,
                                                    name: `dob`
                                                }
                                            }
                                        />
                                    </div>
                                    <div className='cw-50'>
                                        <label className='form-label'>Marital status <span className='text-danger'>*</span></label>
                                        <FormFields 
                                            formField='drop-down' 
                                            formFieldSettings={ 
                                                { 
                                                    class: 'form-select',
                                                    id: 'maritalStatus',
                                                    name: 'maritalStatus',
                                                    optionData: [
                                                        {
                                                            option: 'Single',
                                                            value: 'Single'
                                                        },
                                                        {
                                                            option: 'Married',
                                                            value: 'Married'
                                                        },
                                                        {
                                                            option: 'Living Together',
                                                            value: 'Living Together'
                                                        },
                                                        {
                                                            option: 'Engaged',
                                                            value: 'Engaged'
                                                        },
                                                        {
                                                            option: 'Common-law',
                                                            value: 'Common-law'
                                                        },
                                                        {
                                                            option: 'Prefer not to say',
                                                            value: 'Prefer not to say'
                                                        }
                                                    ]
                                                }
                                            }
                                        />
                                    </div>
                                </div>
                                <div className='d-flex gap-3 justify-content-center align-items-center mt-3'>
                                    <div className='cw-50'>
                                        <label className='form-label'>Occupation <span className='text-danger'>*</span></label>
                                        <FormFields 
                                            formField='textbox' 
                                            formFieldSettings={ 
                                                { 
                                                    class: 'form-control',
                                                    id: `occupation`,
                                                    name: `occupation`
                                                }
                                            }
                                        />
                                    </div>
                                    <div className='cw-50'>
                                        <label className='form-label'>Employer <span className='text-danger'>*</span></label>
                                        <FormFields 
                                            formField='textbox' 
                                            formFieldSettings={ 
                                                { 
                                                    class: 'form-control',
                                                    id: `employer`,
                                                    name: `employer`
                                                }
                                            }
                                        />
                                    </div>
                                </div>
                                <div className='mt-3 d-flex gap-3 justify-content-start align-items-center'>
                                    <label className='form-label mb-0'>Your client is purchasing this home <span className='text-danger'>*</span></label>
                                    <FormFields 
                                        formField='radio' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'd-flex gap-3',
                                                optionData: [
                                                    {
                                                        label: 'As an investment',
                                                        class: 'form-check-input square-radio',
                                                        id: 'purchasingTypeInvestment',
                                                        name: 'purchasingType',
                                                        onChange: this.handleChange
                                                    },
                                                    {
                                                        label: 'To live in',
                                                        class: 'form-check-input square-radio',
                                                        id: 'purchasringTypeLiveIn',
                                                        name: 'purchasingType',
                                                        onChange: this.handleChange
                                                    }
                                                ]
                                            }
                                        }
                                    />
                                </div>
                                <div className='mt-3'>
                                    <div className='alert alert-box d-flex gap-2'>
                                        <img src='/assets/warning.png' className='worksheet-img-icon img-fluid' />
                                        <span>
                                            <span className='text-decoration-underline'>Click here</span> for instructions about submiting images of government ID.
                                        </span>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <label className='form-label'>Government ID (held next to your face) <span className='text-danger'>*</span></label>
                                    <FormFields 
                                        formField='file' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control file-custom-control',
                                                id: 'governmentIdWithFace',
                                                name: 'governmentIdWithFace'
                                            }
                                        }
                                    />
                                </div>
                                <div className='mt-3'>
                                    <label className='form-label'>Government ID (front) <span className='text-danger'>*</span></label>
                                    <FormFields 
                                        formField='file' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control file-custom-control',
                                                id: 'governmentIdFront',
                                                name: 'governmentIdFront'
                                            }
                                        }
                                    />
                                </div>
                                <div className='mt-3'>
                                    <label className='form-label'>Government ID (back) <span className='text-danger'>*</span></label>
                                    <FormFields 
                                        formField='file' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control file-custom-control',
                                                id: 'governmentIdBack',
                                                name: 'governmentIdBack'
                                            }
                                        }
                                    />
                                </div>
                                <div className='mt-3'>
                                    <label className='form-label'>Notes</label>
                                    <FormFields 
                                        formField='textarea' 
                                        formFieldSettings={ 
                                            { 
                                                class: 'form-control',
                                                id: 'notes',
                                                name: 'notes'
                                            }
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='worksheet-form-footer pb-3'>
                        <div className='d-flex gap-3 justify-content-end'>
                            <button className='btn btn-back'>
                                <img src='/assets/left-arrow.png' className='back-img-icon img-fluid' />Back
                            </button>
                            <button className='btn btn-secondary'>Save</button>
                            <button className='btn btn-primary'>Save and continue</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PurchaserInformation;