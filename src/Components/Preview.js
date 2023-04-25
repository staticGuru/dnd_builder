import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs/dist/grapes.min.js';
import '../App.css';
import './style.css';
import Editor from './Editor';
import { inArray } from 'jquery';
import { Button } from 'react-bootstrap';

const Preview = () => {
    const handleClick = (event) => {
        const ele = event.target.id;
        console.log(ele);
        let varHTMLPageLookUp = `html${ele}`.replace(" ", "")
        let varCSSPageLookUp = `css${ele}`.replace(" ", "")
        console.log(localStorage.getItem(varHTMLPageLookUp))
        console.log(localStorage.getItem(varCSSPageLookUp))
        let preview = document.getElementById('preview');
        preview.innerHTML = localStorage.getItem(varHTMLPageLookUp)
        let cssval = localStorage.getItem(varCSSPageLookUp)
        let repl_text = cssval.replace('#igxi', '#preview')
        console.log(localStorage.getItem(varHTMLPageLookUp))
        console.log(repl_text)
        let style_sheet = document.createElement('style')
        document.getElementsByTagName("head")[0].appendChild(style_sheet);
        var rules = document.createTextNode(`${repl_text}`);
        style_sheet.appendChild(rules)
    }
    var lenPages = localStorage.getItem("lenPages")
    var pageList = [];
    for (let i = 0; i < lenPages; i++) {
        pageList.push(`Page ${i}`)
    }
    let pages = pageList.map((item, index) => {
        return <li key={index}><button id={item} className='btn btn-success mb-1 btn-sm' onClick={handleClick}>{item}</button></li>
    })
    console.log(pageList)
    console.log(lenPages)

    return (
        <>
            <div className='container mt-5 shadow back p-5'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <h4 className='mt-3 vl font-header'>Preview Template</h4>
                        <p className='content'>At the define template phase it is a good practice to give a name for the template and some description</p>
                    </div>
                    <div className='col-lg-3 mt-3 offset-3'>
                        <button className='createbutton'>Save As</button>
                        <button className='savebutton m-2'> Save </button>
                        <button className='cancelbutton'>Cancel</button>
                    </div>
                </div>
                <div className='shadow'>
                    <div className='row mt-5'>
                        <div className='col-lg-9'>
                            <div className='App'>
                                <div id='preview'>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 RightSide_NavBar'>
                            <ul className='list-group-pages text-white mylist'>
                                <button>  {pages} </button>
                            </ul>
                        </div>
                        <div className='row'>
                            <div className='col-lg-3 offset-4'>
                                <button className='createbutton'> SUBMIT </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-5 p-25'>
                    <div className='col-lg-2'>
                        <div className='mt-5'>
                            <Link to="/Editor"> <button className='createbutton'> PREVIOUS </button> </Link>
                        </div>
                    </div>
                    <div className='col-lg-2 offset-7'>
                        <div className='mt-5'>
                            <Link to="/Summary"> <button className='createbutton'>NEXT</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Preview;