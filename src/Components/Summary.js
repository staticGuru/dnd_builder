import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DndState } from '../context/DndProvider';
import { PreviewTemplate } from './DndPreviewer/PreviewTemplate';

const Summary = () => {
    const {templateData,exportedQuestionaire}=DndState()
  
    return (
        <div className='container mt-5 shadow back p-5'>
            <div className='row'>
                <div className='col-lg-4'>
                    <h4 className='text-dark mt-2 vl font-header'>Summary</h4>
                    <p className='content'>A summary of the template you created</p>
                </div>
                <div className='col-lg-3 offset-4 mt-2'>
                    <button className='createbutton'>Save As</button>
                    <button className='savebutton m-1'>Save</button>
                    <button className='cancelbutton'>Delete</button>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-3'>
                    <div className='mt-4'>
                        <label>Template Name</label>
                        <input disabled value={templateData?.name ?? ""} type="text" placeholder="Survey" className="form-control form" />
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div className='mt-4 offset-2'>
                        <label>Template Type</label>
                        <input disabled value={templateData?.type ?? ""} type="text" placeholder="Questionanaire" className="form-control form" />
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div className='mt-4 offset-2'>
                        <label>Category</label>
                        <input disabled value={templateData?.que ?? ""} type="text" placeholder="Q & A" className="form-control form" />
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-lg-7'>
                    <div className='mt-4'>
                        <label> Description </label>
                        <textarea disabled value={templateData?.description ?? ""} className='form-control form'></textarea>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='mt-4 bg-gray-200 h-44 border-2 border-gray-300 rounded-md overflow-hidden px-3 py-2 flex '>
                        {exportedQuestionaire.map((item,index)=>(<PreviewTemplate item={item} index={index}/>))}
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-lg-2'>
                    <div className='mt-5'>
                        <Link to='/Preview'><button className='createbutton'>PREVIOUS</button></Link>
                    </div>
                </div>

                <div className='col-lg-2 offset-7'>
                    <div className='mt-5'>
                        <Link to='/Publish'><button className='createbutton'>NEXT</button></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Summary;