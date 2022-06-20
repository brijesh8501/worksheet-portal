import React from 'react';
import Navbar from '../includes/header/navbar';
import Footer from '../includes/footer/index';

const body = () => {
    return (
        <section className='my-5 py-5 container body-section'>
            <div className='body-section-wrapper'>
                <div className='alert alert-info'>
                    Welcome to the portal!
                </div>
            </div>
        </section>
    )
}

const Home = () => {
    return (
        <div>
            <Navbar/>
                {body()}
            <Footer />
       </div>
    );
}

export default Home;