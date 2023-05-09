import React from 'react'
import { useSelector } from 'react-redux';

const CustomModal = ({id}) => {
    const allusers = useSelector((state) => state.app.users);
   // console.log(allusers);
    const singleUser = allusers.filter((ele) => ele.id === id);
  return (
    <div>
        
        
        
            {id && <table className="table table-striped">

                <tbody>
                    <tr>
                    <td>#</td><td>{singleUser[0].id}</td>
                    </tr>
                    <tr>
                    <td>Name</td><td>{singleUser[0].name}</td>
                    </tr>
                    <tr>
                    <td>Username</td><td>{singleUser[0].username}</td>
                    </tr>
                    <tr>
                    <td>Email</td><td>{singleUser[0].email}</td>
                    </tr>
                    <tr>
                    <td>Phone</td><td>{singleUser[0].phone}</td>
                    </tr>
                    
                    
                </tbody>
                </table>}
            
        
    </div>
  )
}

export default CustomModal