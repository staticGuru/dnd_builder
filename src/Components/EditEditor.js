// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const EditEditor = () => {
//     const { id } = useParams();
//     const [name, setName] = useState('');
//     const [msg, updateMsg] = useState('');

//     const getpage = () => {
//         var url = "http://localhost:1234/pages/" + id;
//         axios.get(url)
//             .then(response => {
//                 setName(response.data.name);
//             })
//     }
//     useEffect(() => {
//         getpage();
//     }, [1])

//     const updateEdit = () => {
//         var pageinfo = {
//             "name": name
//         };
//         const url = "http://localhost:1234/pages/" + id;
//         axios.put(url, pageinfo).then(response => {
//             updateMsg(name + "Updated Successfully ");
//         })
//     }
//     return (
//         <div className='container shadow back mt-5 p-5'>
//             <div className='row'>
//                 <div className='col-lg-4 offset-4 mt-5'>
//                     <h3 className='text-center font-header'> Edit page </h3>
//                     <p className='text-danger text-center'> {msg}</p>
//                     <div className='mt-5'>
//                         <label>Name</label>
//                         <input type="text" className='form-control'
//                         onChange={obj => setName(obj.target.value)} />
//                     </div>
//                     <div className='mt-5'>
//                         <button className='btn btn-success offset-4'
//                          onClick={updateEdit}> Update </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default EditEditor;