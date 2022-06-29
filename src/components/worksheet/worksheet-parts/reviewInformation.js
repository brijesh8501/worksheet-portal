import React from 'react';

const ReviewInformation = (props) => {
  return(
    <div className='worksheet-form ps-4 pe-3' id='worksheetForm'>
        <div className='col-12 worksheet-suite-information' id='worksheetreviewInformation'>
            <div className='worksheet-form-header py-3'>
                <h2 className='h4 mb-0'>{props.pageTitle}</h2>
            </div>
            <div className='worksheet-form-body py-3'>
                
            </div>
            <div className='worksheet-form-footer pb-3'>
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