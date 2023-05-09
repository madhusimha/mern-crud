import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../store/userDetailSlice';

const defaultUser = {
    name: "",
    username: "",
    email: "",
    phone: ""
}

const Createuser = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [users, setUsers] = useState(defaultUser);

    const handleOnChage = (e) => {
        setUsers({ ...users, [e.target.name] : e.target.value })
    }

    const handleClick = (e) => {

        e.preventDefault();
        dispatch(createUser(users));
        navigate("/allusers");
    }


  return (
    <div>
        <div className="container">
            <br/>
            <br/>
            <div className="row">
                <div className="col-md-3">

                </div>
                <div className="col-md-6">
                    <h2 className='my-2'>Create User</h2>
                <form>
                    <div className="mb-3 row">
                        <label htmlFor="name" className="form-label col-md-5 text-start">Name</label>
                        <input type="text" className="form-control" name="name" id="name" onChange={(e) => handleOnChage(e)}/>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="username" className="form-label col-md-5 text-start">Username</label>
                        <input type="text" className="form-control" name="username" id="username" onChange={(e) => handleOnChage(e)}/>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="exampleInputEmail1" className="form-label col-md-5 text-start">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" onChange={(e) => handleOnChage(e)}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="phone" className="form-label col-md-5 text-start">Phone</label>
                        <input type="number" className="form-control" name = "phone" id="phone" onChange={(e) => handleOnChage(e)}/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary" onClick={(e) => handleClick(e)}>Submit</button>
                </form>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Createuser