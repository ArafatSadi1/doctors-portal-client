import React from "react";

const DoctorsRow = ({ doctor, index, setDeleteDoctor }) => {
  const { image, name, email, specialty } = doctor;
  
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-8 rounded">
            <img src={image} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{specialty}</td>
      <td>
      <label onClick={()=>setDeleteDoctor(doctor)} for="delete-confirm-modal" class="btn btn-xs btn-error">
        Delete
      </label>
      </td>
    </tr>
  );
};

export default DoctorsRow;
