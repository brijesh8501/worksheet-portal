import React from 'react';

const Footer = () => {

    return (
        <footer className='px-4 py-4 bg-black text-white d-flex justify-content-center align-items-center'>
            <div>
                <p className='mb-0'>Copyright &copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    )

}

export default Footer;