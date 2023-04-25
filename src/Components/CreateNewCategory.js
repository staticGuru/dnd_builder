import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

const CreateNewCategory = () => {
    const [create, setCreate] = useState(false);
    const [show, setShow] = useState(true);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [name, setName] = useState('');

    const saveCategory = () => {
        var url = "http://localhost:1234/category";
        var save = {
            "name": name,
        }
        axios.post(url, save)
            .then(response => {
                alert("Q & A Created Successfully");
            })
    }

    return (
        <div className='mt-5 h-100'>
            <Modal show={show} className="mt-5">
                <Modal.Header>
                    <h4 className='text-success offset-3 p-4'> Create Category </h4>
                </Modal.Header>
                <Modal.Body>
                    <div className='card-body offset-3'>
                        <div className='mt-1'>
                            <label> Category Name </label><br />
                            <input type="text" className="mt-2" placeholder='Survey'
                                onChange={obj => setName(obj.target.value)} />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className='card-footer'>
                        <div className='mt-3'>
                            <div className=''>
                                <button className='createbutton' onClick={saveCategory}>CREATE</button>
                                <button className='createbutton m-2' onClick={handleClose}>CANCEL</button>
                            </div>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default CreateNewCategory;