import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({deleteDoctor, setDeleteDoctor, refetch}) => {
    const {email, name} = deleteDoctor;
    const handleDelete = () => {
        fetch(`http://localhost:5000/doctor/${email}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              toast.success(`Doctor ${name} is deleted`);
              setDeleteDoctor(null)
              refetch();
            }
          });
      };
  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are You Sure You Want To Delete Doctor {name}
          </h3>
          <p class="py-4">
            If you delete the doctor that will remove for forever...
          </p>
          <div class="modal-action">
          <button
          onClick={()=>handleDelete()}
          class="btn btn-error"
        >
          Delete
        </button>
            <label for="delete-confirm-modal" class="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
