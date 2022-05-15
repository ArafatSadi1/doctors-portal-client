import React from 'react';
import { toast } from 'react-toastify';

const AllUsersRow = ({user, refetch}) => {
    const {email, role} = user;
    const makeAdmin = () =>{
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
        .then(res => {
            if(res.status === 403){
                toast.error('Failed to Add New Admin')
            }
            return res.json()})
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make Admin successfully')
                refetch()    
            }
        })
    }
    return (
        <tr>
        <th>1</th>
        <td>{email}</td>
        <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
        <td><button class="btn btn-xs">Remove Admin</button></td>
      </tr>
    );
};

export default AllUsersRow;