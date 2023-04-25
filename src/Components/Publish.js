import React from 'react';
import { Link } from 'react-router-dom';

const Publish = () => {
    return (
        <div className='container mt-5 shadow back p-5'>
            <div className='row'>
                <div className='col-lg-4'>
                    <h4 className='text-dark vl font-header'>Publish</h4>
                    <p className='content'>Publish your template </p>
                </div>
                <div className='col-lg-3 offset-5'>
                    <button className='createbutton'>Save As</button>
                    <button className='savebutton m-2'>Save</button>
                </div>
            </div>
            <div className='row p-5 mt-5'>
                <div className='col-lg-12'>
                    <h5 className='text-center text-success mt-5'> Would you like to publish ? </h5>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-lg-10'>
                    <div className='text-center'>
                        <button className='createbutton offset-2'>Publish</button>
                        <button className='createbutton offset-1'>Cancel</button>
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-lg-2'>
                    <Link to="/Summary"><button className='createbutton mt-5'> Previous </button></Link>
                </div>
            </div>
        </div>
    )
}

export default Publish;