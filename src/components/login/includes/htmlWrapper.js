import React, { useState } from 'react';
import Footer from '../../includes/footer';

const HtmlWrapper = (props) => {

    return(
        <div className='login-wrapper'>
            <div className='login-inner-wrapper d-flex flex-column justify-content-center align-items-center py-5 px-3'>
                <div className='login-logo-wrapper'>
                    <img src='/assets/The-Valley-white-logo.png' className='login-logo img-fluid'/>
                </div>
                <div className='login-body mt-5'>
                    {props.children}
                </div>
            </div>
            <Footer/>
        </div>
    );

}

export default HtmlWrapper;