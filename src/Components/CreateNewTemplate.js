import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Summary from './Summary';
import Preview from './Preview';
import Define from "./Define";
import Publish from './Publish';
import Editor from './Editor';
import MasterTemplates from './MasterTemplates';
import DisplayPages from './DisplayPages';
import Page1 from './Page1';
import Page2 from './Page2';

const CreateNewTemplate = () => {
    return (
        <div className='container mt-1'>
            <div className='row'>
                <div className='col-lg-2 Box'></div>
                <div className='col-lg-10'>
                    <Navbar />
                    <ul className='step-menu mt-4'>
                        <li className='complete'>
                            <Link className="nav-link active text-dark arrow-pointer" aria-current="page" to="/Define">
                                Define
                            </Link>
                        </li>
                        <li className='current'>
                            <Link className="nav-link active text-dark build arrow-pointer" aria-current="page" to="/Editor">
                                Build
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link active text-dark arrow-pointer" aria-current="page" to="/Preview">
                                Preview
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link active text-dark arrow-pointer" aria-current="page" to="/Summary">
                                Summary
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link active text-dark arrow-pointer" aria-current="page" to="/Publish">
                                Publish
                            </Link>
                        </li>

                    </ul>

                    <Routes>
                        <Route exact path="/Editor" element={<Editor />} />
                        <Route exact path="/Preview" element={<Preview />} />
                        <Route exact path="/Define" element={<Define />} />
                        <Route exact path="/Summary" element={<Summary />} />
                        <Route exact path="/Publish" element={<Publish />} />
                        <Route exact path="/MasterTemplates" element={<MasterTemplates />} />
                        <Route exact path="/DisplayPages" element={<DisplayPages />} />
                        <Route exact path="/Page1" element={<Page1 />} />
                        <Route exact path="/Page2" element={<Page2 />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default CreateNewTemplate;