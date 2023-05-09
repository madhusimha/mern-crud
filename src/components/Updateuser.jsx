import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../store/userDetailSlice';

const Updateuser = () => {
    const {id} = useParams();
   // console.log(id);

   const dispatch = useDispatch();
   const navigate = useNavigate();

    const {users, loading} = useSelector((state) => state.app);
    const [updateData, setUpdateData] = useState(...users);
    
    useEffect(() => {
        if(id) 
        {
            const singleUser = users.filter((ele) => ele.id === id);
            setUpdateData(singleUser[0]);
           // console.log(loading);
        }
        
        // eslint-disable-next-line
    }, [users])
    
    const handleOnChage = (e) => {
        setUpdateData({ ...updateData, [e.target.name] : e.target.value })
    }

    const handleClick = (e) => {

        e.preventDefault();
        console.log(updateData);
        dispatch(updateUser(updateData));
        navigate("/allusers");
    }
   
    if(loading) {
        return (<h2>Loading...</h2>)
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
                    <h2 className='my-2'>Update User</h2>
                <form>
                    <div className="mb-3 row">
                        <label htmlFor="name" className="form-label col-md-5 text-start">Name</label>
                        <input type="text" className="form-control" name="name" id="name" value={updateData && updateData.name}
                       onChange={(e) => handleOnChage(e)}
                        />
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="username" className="form-label col-md-5 text-start">Username</label>
                        <input type="text" className="form-control" name="username" id="username" value={updateData && updateData.username}
                        onChange={(e) => handleOnChage(e)}
                        />
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="exampleInputEmail1" className="form-label col-md-5 text-start">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" value={updateData && updateData.email} 
                        onChange={(e) => handleOnChage(e)}
                        />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="phone" className="form-label col-md-5 text-start">Phone</label>
                        <input type="number" className="form-control" name = "phone" id="phone" value={updateData && updateData.phone}
                        onChange={(e) => handleOnChage(e)}
                         />
                    </div>
                    
                    <button type="submit" className="btn btn-primary" 
                   onClick={(e) => handleClick(e)}
                    >Submit</button>
                </form>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Updateuser