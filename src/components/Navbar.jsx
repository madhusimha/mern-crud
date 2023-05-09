import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUsers, searchUser } from '../store/userDetailSlice';

const Navbar = () => {
    const allusersCount = useSelector((state) => state.app.users);

    const dispatch = useDispatch();

    const [searchData, setsearchUser] = useState("");
    useEffect(() => {
    //   console.log(searchUser);
    dispatch(searchUser(searchData));
    
    // eslint-disable-next-line
    }, [searchData]);

    useEffect(() => {
        dispatch(getUsers());
        // eslint-disable-next-line
    },[])
    
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Create User</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/allusers">All Users ({allusersCount.length})</Link>
                    </li>
                    
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" value={searchData} onChange={(e) => setsearchUser(e.target.value)} placeholder="Search" aria-label="Search"/>
                </form>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar