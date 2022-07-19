import React from 'react';

const ReviewInformation = (props) => {
    const whichParentForm = props.form;
    return(
        <div className='step-form ps-4 pe-3' id={whichParentForm}>
            <div className='col-12' id='stepreviewInformation'>
                <div className='step-form-header py-3'>
                    <h2 className='h4 mb-0'>{props.pageTitle}</h2>
                </div>
                <div className='step-form-body py-3'>
                    
                </div>
                <div className='step-form-footer pb-3'>
                    <div className='d-flex gap-3 justify-content-end'>
                        <button 
                            className='btn btn-back'
                            onClick={
                                () => { 
                                    props.showSection(
                                        {
                                            sectionClicked:'acknowledgement'
                                        }
                                    ) 
                                } 
                            }
                        >
                            <img src='/assets/left-arrow.png' className='back-img-icon img-fluid' />Back
                        </button>
                        {/* <button className='btn btn-secondary'>Save</button> */}
                        <button className='btn btn-primary'>Submit worksheet</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewInformation;