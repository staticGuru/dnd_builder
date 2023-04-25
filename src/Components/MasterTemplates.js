import React from 'react'

const MasterTemplates = () => {
  return (
    <div className='container mt-5'>
            <div className='col-lg-6 mt-5'>
                <h6 className='mt-5 p-5'> Master Templates </h6>
            </div>
            <div className='row'>
            <div className='col-lg-2 offset-1 border rounded shadow'>
                <h6>CreateTemplate</h6>
                <i className='fa fa-file fa-3x mt-3 offset-3 text-dark'></i>
                <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className='col-lg-2 offset-1 border rounded shadow'>
                <h6>Import </h6>
                <i className='fa fa-download fa-3x mt-3 offset-3 text-dark'></i>
                <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            </div>
        <div className='row mt-5'>
            <div className='col-lg-2 offset-1 border rounded shadow'>
                <h6>Enterprise</h6>
                <i className='fa fa-book fa-3x mt-3 offset-3 text-dar'></i>
                <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className='col-lg-2 offset-1 border rounded shadow'>
                <h6>Department</h6>
                <i className='fa fa-vcard mt-3 offset-3 text-danger fa-3x'></i>
                <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className='col-lg-2 offset-1 border rounded shadow'>
                <h6>User</h6>
                <i className="fa fa-envelope mt-3 offset-3 text-secondary fa-3x"></i>
                <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className='col-lg-2 offset-1 border rounded shadow'>
                <h6>Organisation</h6>
                <i className='fa fa-users mt-3 offset-3 text-success fa-3x'></i>
                <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
        </div>

        <hr className='mt-5 height-30px'/>

        <div className='row mt-5'>
            <div className='col-lg-2 offset-1 border rounded shadow'>
                <h6>Enterprise</h6>
                <i className='fa fa-building fa-3x mt-3 offset-3 text-info'></i>
                <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className='col-lg-2 offset-1 border rounded shadow'>
                <h6>Department</h6>
                <i className='fa fa-address-book mt-3 offset-3 text-primary fa-3x'></i>
                <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className='col-lg-2 offset-1 border rounded shadow'>
                <h6>User</h6>
                <i className="fa fa-home mt-3 offset-3 text-dark fa-3x"></i>
                <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className='col-lg-2 offset-1 border rounded shadow'>
                <h6>Organisation</h6>
                <i className='fa fa-users mt-3 offset-3 text-success fa-3x'></i>
                <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
        </div>
        
    </div>
  )
}

export default MasterTemplates;