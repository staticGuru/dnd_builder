import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CreateNewCategory from '../Components/CreateNewCategory';
import CreateNewTemplate from './CreateNewTemplate';

const Define = () => {
    const [define, setDefine] = useState([]);
    const [category, setCategory] = useState([]);
    const [template, setTemplate] = useState([]);
    const [create, setCreate] = useState(false);
    const close = () => setDefine(false);

    const getQuestion = () => {
        axios.get("http://localhost:1234/category")
            .then(response => {
                setCategory(response.data);
            })
    }
    useEffect(() => {
        getQuestion();
    }, [])

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [que, setQue] = useState("");
    const [description, setDescription] = useState("");

    const saveTemplate = () => {
        var url = "http://localhost:1234/template";
        var templateData = {
            "name": name,
            "type": type,
            "que": que,
            "description": description,
        };
        axios.post(url, templateData)
            .then(response => {
                alert("Your Template Saved Successfully");
            })
    }
    return (
        <div>
            <div className='container mt-5 shadow back p-5'>
                <div className='row'>
                    <div className='col-lg-5'>
                        <h4 className='mt-3 vl font-header'>Define Template</h4>
                        <p className='content'>At the define template phase is a good practice to give a name for the template and some description</p>
                    </div>
                    <div className='col-lg-3 mt-3 offset-4'>
                        <button className='createbutton'>Save As</button>
                        <button className='savebutton m-2' onClick={saveTemplate}>Save</button>
                        <button className='cancelbutton' onClick={close}>Cancel</button>
                    </div>
                </div>
                <form>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <div className='mt-4'>
                                <label>Template Name</label>
                                <input type="text" className='form-control form' placeholder="Survey"
                                    onChange={obj => setName(obj.target.value)} />
                            </div>
                            <div className='mt-4'>
                                <label>Template Type</label>
                                <input type="text" className='form-control form' placeholder="Questionanaire"
                                    onChange={obj => setType(obj.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-lg-3 mt-5">
                            <div className="input-group">
                                <select className="form-select form" placeholder="Q & A" onChange={obj => setQue(obj.target.value)} >
                                    <option> Q & A </option>
                                    {
                                        category.map((value, index) => {
                                            return (
                                                <option key={index}>{value.name}</option>
                                            )
                                        })
                                    }
                                </select>
                                <button className="btn btn-success">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='mt-4'>
                                {<button className="createbutton mt-4" onClick={() => setCreate(true)}>CREATE</button>}
                                {create && <CreateNewCategory />}
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-7'>
                            <div className='mt-4'>
                                <label>Description</label><br />
                                <textarea rows="4" cols="50" className='form-control form'
                                    onChange={obj => setDescription(obj.target.value)} >
                                </textarea>
                            </div>
                        </div>
                    </div>
                </form >
                <div className='row mt-5'>
                    <div className='col-lg-12 offset-11'>
                        <Link to="/Editor"><button className='createbutton'> NEXT</button></Link>
                    </div>
                </div>
                <div className='row'>
                    <div className='row'>
                        <div className='col-lg-3'></div>
                    </div>
                </div>
            </div >
        </div >
    )
}
export default Define;