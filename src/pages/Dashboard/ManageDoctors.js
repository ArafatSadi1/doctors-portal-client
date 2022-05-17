import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import DoctorsRow from "./DoctorsRow";

const ManageDoctors = () => {
    const [deleteDoctor, setDeleteDoctor] = useState(null)
  const { data: doctors, isLoading, refetch } = useQuery("doctor", () =>
    fetch("http://localhost:5000/doctor", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-2xl text-center">Manage Doctors: {doctors.length}</h2>
      <div class="overflow-x-auto mx-4">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
              {
                  doctors.map((doctor, index) => <DoctorsRow
                    key={doctor._id}
                    doctor={doctor}
                    index={index}
                    setDeleteDoctor={setDeleteDoctor}
                  ></DoctorsRow>)
              }
          </tbody>
        </table>
      </div>
      {
          deleteDoctor && <DeleteConfirmModal
          deleteDoctor={deleteDoctor}
          setDeleteDoctor={setDeleteDoctor}
          refetch={refetch}
          ></DeleteConfirmModal>
      }
    </div>
  );
};

export default ManageDoctors;
