import React from 'react';
import Navbar from '../includes/header/navbar';
import Footer from '../includes/footer/index';
import Worksheet from './worksheet-parts/worksheet';


const WorksheetEdit = () => {
    return (
        <div>
            <Navbar/>
            <Worksheet />
            <Footer />
        </div>
    );
}

export default WorksheetEdit;