import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../includes/header/navbar';
import Footer from '../includes/footer/index';
import FormFields from '../form-fields/index';

const WorksheetList = () => {
    return (
        <div>
            <Navbar/>
                <section className='my-5 py-5 container body-section'>
                    <div className='page-body body-section-wrapper'>
                        <h1 className='text-center mb-5'>Worksheets</h1>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='px-0 px-sm-3'>
                                <Link to='/worksheet/create/' className='btn btn-primary'>Submit my worksheet</Link>
                            </div>
                        </div>
                        <hr className='mx-0 mx-sm-3'/>
                        <div className='d-flex gap-3 flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-3'>
                            <div className='px-0 px-sm-3 d-flex justify-content-center align-items-center'>
                                <span>Show</span>
                                <FormFields 
                                    formField='drop-down' 
                                    formFieldSettings={ 
                                        { 
                                            class: 'form-select mx-2',
                                            id: 'listNoOfEntry',
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
                                <span>entries</span> 
                            </div>
                            <div className='px-0 px-sm-3'>
                                <FormFields 
                                    formField='textbox' 
                                    formFieldSettings={ 
                                        { 
                                            class: 'form-control list-search',
                                            id: 'listSearch',
                                        }
                                    }
                                />
                            </div>
                        </div>
                        <div className='position-relative'>
                            <div className='table-responsive'>
                                <table className='table table-bordered table-striped list-table mx-auto' id='worksheet-list-table'>
                                    <thead>
                                        <tr>
                                            <th width='15%' className='column-headtitle column-sort-asc'><span className='position-absolute' id='list-head-tag'>Primary Purchaser</span>First name</th>
                                            <th width='15%' className='column-headtitle column-unsort'>Last name</th>
                                            <th width='15%' className='column-headtitle column-unsort'>Email address</th>
                                            <th width='15%' className='column-headtitle column-unsort'>Contact number</th>
                                            <th width='20%' className='column-headtitle column-unsort'>#Choice</th>
                                            <th width='10%' className='column-headtitle column-sort-desc'>Date submitted</th>
                                            <th width='10%'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Data 1</td>
                                            <td>Data 2</td>
                                            <td>Data 3</td>
                                            <td>Data 4</td>
                                            <td>
                                                <ol className='ps-3'>
                                                    <li>lot - model - elevation</li>
                                                    <li>lot - model - elevation</li>
                                                    <li>lot - model - elevation</li>
                                                </ol>
                                            </td>
                                            <td>Data 6</td>
                                            <td>
                                                <div className='d-flex flex-wrap justify-content-center px-4'>
                                                    <Link to='/worksheet/edit/1/' className='list-icon-link'>
                                                        <img src='/assets/edit-icon.png' className='img-fluid' />
                                                    </Link>
                                                    <Link to='/worksheet/delete/1/' className='list-icon-link'>
                                                        <img src='/assets/delete-icon.png' className='img-fluid' />
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Data 1</td>
                                            <td>Data 2</td>
                                            <td>Data 3</td>
                                            <td>Data 4</td>
                                            <td>
                                                <ol className='ps-3'>
                                                    <li>lot - model - elevation</li>
                                                    <li>lot - model - elevation</li>
                                                    <li>lot - model - elevation</li>
                                                </ol>
                                            </td>
                                            <td>Data 6</td>
                                            <td>
                                                <div className='d-flex flex-wrap justify-content-center px-4'>
                                                    <Link to='/worksheet/edit/1/' className='list-icon-link'>
                                                        <img src='/assets/edit-icon.png' className='img-fluid' />
                                                    </Link>
                                                    <Link to='/worksheet/delete/1/' className='list-icon-link'>
                                                        <img src='/assets/delete-icon.png' className='img-fluid' />
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Data 1</td>
                                            <td>Data 2</td>
                                            <td>Data 3</td>
                                            <td>Data 4</td>
                                            <td>
                                                <ol className='ps-3'>
                                                    <li>lot - model - elevation</li>
                                                    <li>lot - model - elevation</li>
                                                    <li>lot - model - elevation</li>
                                                </ol>
                                            </td>
                                            <td>Data 6</td>
                                            <td>
                                                <div className='d-flex flex-wrap justify-content-center px-4'>
                                                    <Link to='/worksheet/edit/1/' className='list-icon-link'>
                                                        <img src='/assets/edit-icon.png' className='img-fluid' />
                                                    </Link>
                                                    <Link to='/worksheet/delete/1/' className='list-icon-link'>
                                                        <img src='/assets/delete-icon.png' className='img-fluid' />
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Data 1</td>
                                            <td>Data 2</td>
                                            <td>Data 3</td>
                                            <td>Data 4</td>
                                            <td>
                                                <ol className='ps-3'>
                                                    <li>lot - model - elevation</li>
                                                    <li>lot - model - elevation</li>
                                                    <li>lot - model - elevation</li>
                                                </ol>
                                            </td>
                                            <td>Data 6</td>
                                            <td>
                                                <div className='d-flex flex-wrap justify-content-center px-4'>
                                                    <Link to='/worksheet/edit/1/' className='list-icon-link'>
                                                        <img src='/assets/edit-icon.png' className='img-fluid' />
                                                    </Link>
                                                    <Link to='/worksheet/delete/1/' className='list-icon-link'>
                                                        <img src='/assets/delete-icon.png' className='img-fluid' />
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan='7'>
                                                <div className='d-flex gap-2 flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center'>
                                                    <div className='listTotalEntry'>
                                                        Showing
                                                        <span className='px-1'>0</span>
                                                        to
                                                        <span className='px-1'>0</span>
                                                        of
                                                        <span className='px-1'>0</span>
                                                        entries
                                                    </div>
                                                    <div className='list-paginate-wrapper d-flex justify-content-end'>
                                                        <ul className='list-group list-group-horizontal'>
                                                            <li className='list-group-item' id='listPrevious'>Previous</li>
                                                            <li className='list-group-item' id='listNumber1'>1</li>
                                                            <li className='list-group-item' id='listNumber2'>2</li>
                                                            <li className='list-group-item' id='listNumber3'>3</li>
                                                            <li className='list-group-item' id='listNext'>Next</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer />
        </div>
    );
}

export default WorksheetList;