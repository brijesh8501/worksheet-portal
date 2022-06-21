import React from 'react';
import FormFields from '../../form-fields/index';

const SuiteInformation = () => {
    return (
        <div className='worksheet-form ps-4 pe-3' id='worksheetForm'>
            <div className='col-12 worksheet-suite-information' id='worksheetsuiteInformation'>
                <div className='worksheet-form-header py-3'>
                    <h2 className='h4 mb-0'>Suite Information</h2>
                </div>
                <div className='worksheet-form-body py-3'>
                    <div className='worksheet-choice position-relative' id='worksheetFirstChoice'>
                        <div className='worksheet-choice-title position-absolute'>First choice</div>
                        <div className='d-flex gap-3 justify-content-center align-items-center px-3 pt-5 pb-3'>
                            <div className='cw-33'>
                                <label htmlFor='modelType1' className='form-label'>Model <span className='text-danger'>*</span></label>
                                <FormFields 
                                    formField='drop-down' 
                                    formFieldSettings={ 
                                        { 
                                            class: 'form-select',
                                            id: 'modelType1',
                                            optionData: [
                                                {
                                                    option: 10,
                                                    value: 10
                                                },
                                                {
                                                    option: 25,
                                                    value: 25
                                                },
                                                {
                                                    option: 50,
                                                    value: 50
                                                },
                                                {
                                                    option: 100,
                                                    value: 100
                                                }
                                            ]
                                        }
                                    }
                                />
                            </div>
                            <div className='cw-33'>
                                <label htmlFor='lotType1' className='form-label'>Lot <span className='text-danger'>*</span></label>
                                <FormFields 
                                    formField='drop-down' 
                                    formFieldSettings={ 
                                        { 
                                            class: 'form-select',
                                            id: 'lotType1',
                                            optionData: [
                                                {
                                                    option: 10,
                                                    value: 10
                                                },
                                                {
                                                    option: 25,
                                                    value: 25
                                                },
                                                {
                                                    option: 50,
                                                    value: 50
                                                },
                                                {
                                                    option: 100,
                                                    value: 100
                                                }
                                            ]
                                        }
                                    }
                                />
                            </div>
                            <div className='cw-33'>
                                <label htmlFor='preference1' className='form-label'>Preference <span className='text-danger'>*</span></label>
                                <FormFields 
                                    formField='drop-down' 
                                    formFieldSettings={ 
                                        { 
                                            class: 'form-select',
                                            id: 'preference1',
                                            optionData: [
                                                {
                                                    option: 10,
                                                    value: 10
                                                },
                                                {
                                                    option: 25,
                                                    value: 25
                                                },
                                                {
                                                    option: 50,
                                                    value: 50
                                                },
                                                {
                                                    option: 100,
                                                    value: 100
                                                }
                                            ]
                                        }
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className='worksheet-choice position-relative mt-4' id='worksheetSecondChoice'>
                        <div className='worksheet-choice-title position-absolute'>Second choice</div>
                        <div className='d-flex gap-3 justify-content-center align-items-center px-3 pt-5 pb-3'>
                            <div className='cw-33'>
                                <label htmlFor='modelType2' className='form-label'>Model <span className='text-danger'>*</span></label>
                                <FormFields 
                                    formField='drop-down' 
                                    formFieldSettings={ 
                                        { 
                                            class: 'form-select',
                                            id: 'modelType2',
                                            optionData: [
                                                {
                                                    option: 10,
                                                    value: 10
                                                },
                                                {
                                                    option: 25,
                                                    value: 25
                                                },
                                                {
                                                    option: 50,
                                                    value: 50
                                                },
                                                {
                                                    option: 100,
                                                    value: 100
                                                }
                                            ]
                                        }
                                    }
                                />
                            </div>
                            <div className='cw-33'>
                                <label htmlFor='lotType2' className='form-label'>Lot <span className='text-danger'>*</span></label>
                                <FormFields 
                                    formField='drop-down' 
                                    formFieldSettings={ 
                                        { 
                                            class: 'form-select',
                                            id: 'lotType2',
                                            optionData: [
                                                {
                                                    option: 10,
                                                    value: 10
                                                },
                                                {
                                                    option: 25,
                                                    value: 25
                                                },
                                                {
                                                    option: 50,
                                                    value: 50
                                                },
                                                {
                                                    option: 100,
                                                    value: 100
                                                }
                                            ]
                                        }
                                    }
                                />
                            </div>
                            <div className='cw-33'>
                                <label htmlFor='preference2' className='form-label'>Preference <span className='text-danger'>*</span></label>
                                <FormFields 
                                    formField='drop-down' 
                                    formFieldSettings={ 
                                        { 
                                            class: 'form-select',
                                            id: 'preference2',
                                            optionData: [
                                                {
                                                    option: 10,
                                                    value: 10
                                                },
                                                {
                                                    option: 25,
                                                    value: 25
                                                },
                                                {
                                                    option: 50,
                                                    value: 50
                                                },
                                                {
                                                    option: 100,
                                                    value: 100
                                                }
                                            ]
                                        }
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className='worksheet-choice position-relative mt-4' id='worksheetThirdChoice'>
                        <div className='worksheet-choice-title position-absolute'>Third choice</div>
                        <div className='d-flex gap-3 justify-content-center align-items-center px-3 pt-5 pb-3'>
                            <div className='cw-33'>
                                <label htmlFor='modelType3' className='form-label'>Model <span className='text-danger'>*</span></label>
                                <FormFields 
                                    formField='drop-down' 
                                    formFieldSettings={ 
                                        { 
                                            class: 'form-select',
                                            id: 'modelType3',
                                            optionData: [
                                                {
                                                    option: 10,
                                                    value: 10
                                                },
                                                {
                                                    option: 25,
                                                    value: 25
                                                },
                                                {
                                                    option: 50,
                                                    value: 50
                                                },
                                                {
                                                    option: 100,
                                                    value: 100
                                                }
                                            ]
                                        }
                                    }
                                />
                            </div>
                            <div className='cw-33'>
                                <label htmlFor='lotType3' className='form-label'>Lot <span className='text-danger'>*</span></label>
                                <FormFields 
                                    formField='drop-down' 
                                    formFieldSettings={ 
                                        { 
                                            class: 'form-select',
                                            id: 'lotType3',
                                            optionData: [
                                                {
                                                    option: 10,
                                                    value: 10
                                                },
                                                {
                                                    option: 25,
                                                    value: 25
                                                },
                                                {
                                                    option: 50,
                                                    value: 50
                                                },
                                                {
                                                    option: 100,
                                                    value: 100
                                                }
                                            ]
                                        }
                                    }
                                />
                            </div>
                            <div className='cw-33'>
                                <label htmlFor='preference3' className='form-label'>Preference <span className='text-danger'>*</span></label>
                                <FormFields 
                                    formField='drop-down' 
                                    formFieldSettings={ 
                                        { 
                                            class: 'form-select',
                                            id: 'preference3',
                                            optionData: [
                                                {
                                                    option: 10,
                                                    value: 10
                                                },
                                                {
                                                    option: 25,
                                                    value: 25
                                                },
                                                {
                                                    option: 50,
                                                    value: 50
                                                },
                                                {
                                                    option: 100,
                                                    value: 100
                                                }
                                            ]
                                        }
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='worksheet-form-footer pb-3'>
                    <div className='d-flex gap-3 justify-content-end'>
                        {/* <button className='btn btn-secondary'>Save</button> */}
                        <button className='btn btn-primary'>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SuiteInformation;