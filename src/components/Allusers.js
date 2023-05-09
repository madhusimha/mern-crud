import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser, getUsers } from '../store/userDetailSlice';
import CustomModal from './CustomModal.jsx';

const Allusers = () => {
    const dispatch = useDispatch();

    const {users, loading, searchData} = useSelector((state) => state.app)
    const [id, setId] = useState();

    useEffect(() => {
        dispatch(getUsers());
        // eslint-disable-next-line
    },[]);

    if(loading) {
        return (<h2>Loading...</h2>)
    }

  return (
    <div>
        <br></br>
        <br></br>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
        {id && <CustomModal id={id}/>}
        </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <a href={`/edituser/${id}`}><button type="button" className="btn btn-primary">Edit</button></a>
            </div>
            </div>
        </div>
        </div>
        <h2 className='my-10'> All Users</h2>
        <div>
            {
              (users.length > 0) && 

              users.filter((ele) => {
                if(searchData.length === 0) {
                    return ele;
                } else {
                    return ele.name.toLowerCase().includes(searchData.toLowerCase());
                }
              }).map((user) => {
                return(
                <div className="card" key={user.id} style={{width : "18rem", margin: "10px", float: "left"}}>
                    <div>{user.id}</div>
                    <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">{user.phone}</h6>
                        
                        <button type="button" onClick={() => setId(user.id)} className="btn btn-primary mx-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        View
                        </button>
                       <Link to={`/edituser/${user.id}`}><button type="button" className="btn btn-primary mx-1"> Edit </button></Link> 
                        <button type="button" onClick={() => dispatch(deleteUser(user.id))} className="btn btn-danger mx-1"> Delete </button>
                    </div>
                </div>
              )})  
            }
        
        </div>
    </div>
  )
}

export default Allusers