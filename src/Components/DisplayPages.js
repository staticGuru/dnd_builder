import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayPages = () => {
    const [display, setDisplay] = useState([])
    
    const getDisplay = () => {
        axios.get("http://localhost:1234/pages")
            .then(response => {
                setDisplay(response.data);
            })
    }
    useEffect(() => {
        getDisplay();
    }, [1])


    return (
        <div className='container mt-5 p-5'>
            <div className='row'>
                <div className='col-lg-10'>
                    {
                        display.map((value, index) => {
                            return (
                                <div className='modifypage back shadow mt-5'>
                                    <p key={index}>
                                        <h6>{value.name}</h6>
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default DisplayPages;