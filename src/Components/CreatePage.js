import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  { Link} from 'react-router-dom';

const CreatePage = () => {
    const [createpage, setCreatePage] = useState([]);

    const getDisplay = () => {
        axios.get("http://localhost:1234/pages")
            .then(response => {
                setCreatePage(response.data);
            })
    }
    useEffect(() => {
        getDisplay();
    })

    const [name, setName] = useState();
    const Save = () => {
        var url = "http://localhost:1234/pages";
        var saveData = {
            "name": name
        }
        axios.post(url, saveData)
            .then(response => {
                alert("created page");
            })
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 offset-3'>
                
                    <h1 className='mt-5'> Create Page </h1>
                    <form>
                        <label>Name</label>
                        <input type="text" placeholder="Page Name" className='form-control'
                            onChange={obj => setName(obj.target.value)} />
                    </form>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-lg-3 offset-7'>
                    <button className='btn btn-success' onClick={Save}>SAVE</button>
                    <button className='btn btn-warning m-1'>CLEAR</button>
                </div>
            </div>

            <div className='row offset-4'>
                <div className='col-lg-6'>
                    <table className=' table table-bordered shadow mt-5'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                createpage.map((value,index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{value.id}</td>
                                            <td>{value.name}</td>
                                            <td><Link to="/editor">Edit </Link></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    )
}

export default CreatePage;