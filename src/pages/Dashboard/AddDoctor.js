import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
    const [submitLoading, setSubmitLoading] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/services").then((res) => res.json())
  );

  /**
   * 3 ways to store image:
   * 1. Third party storage //Free open public storage is ok for practice project
   * 2. Your own storage in your own server (file system)
   * 3. Database: mongodb
   * YUP: to validate file: Search: YUP file validation for react hook form
   */

  const imageStorageKey = "01c5f0cbdef5547fd5171cf1120bc83b";

  const onSubmit = async (data) => {
    setSubmitLoading(true)
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData
    })
      .then((res) => res.json())
      .then((result) => {
          const imageUrl = result.data.url;
          const doctor = {
              name: data.name,
              email: data.email,
              specialty: data.specialty,
              image: imageUrl
          }
          fetch('http://localhost:5000/doctor', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json',
                  authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify(doctor)
          })
          .then(res => res.json())
          .then(inserted => {
              if(inserted.insertedId){
                setSubmitLoading(false)
                toast.success('Doctor added successfully')
                reset()
              }
              else{
                setSubmitLoading(false)
                  toast.error('Doctor added failed')
              }
          })
      });
  };

  if (isLoading || submitLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-2xl text-center">Add New doctor</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-control w-1/2 mx-auto"
      >
        <label className="label">
          <span className="label-text">Your name</span>
        </label>
        <input
          type="text"
          className="input input-bordered"
          {...register("name", {
            required: {
              value: true,
              message: "Name is Required",
            },
          })}
        />
        <label className="label">
          {errors.name?.type === "required" && (
            <span className="label-text-alt text-red-500">
              {errors.name.message}
            </span>
          )}
        </label>

        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          className="input input-bordered"
          {...register("email", {
            required: {
              value: true,
              message: "Email is Required",
            },
            pattern: {
              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
              message: "Provide a valid Email",
            },
          })}
        />
        <label className="label">
          {errors.email?.type === "required" && (
            <span className="label-text-alt text-red-500">
              {errors.email.message}
            </span>
          )}
          {errors.email?.type === "pattern" && (
            <span className="label-text-alt text-red-500">
              {errors.email.message}
            </span>
          )}
        </label>

        <label className="label">
          <span className="label-text">Specialty</span>
        </label>
        <select {...register("specialty")} class="select select-bordered">
          {services.map((service) => (
            <option key={service._id} value={service.name}>
              {service.name}
            </option>
          ))}
        </select>

        <label className="label">
          <span className="label-text">Your Image</span>
        </label>
        <input
          type="file"
          className="input input-bordered"
          {...register("image", {
            required: {
              value: true,
              message: "Name is Required",
            },
          })}
        />
        <label className="label">
          {errors.image?.type === "required" && (
            <span className="label-text-alt text-red-500">
              {errors.image?.message}
            </span>
          )}
        </label>

        <input
          type="submit"
          className="btn btn-accent text-white font-semibold mt-4"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
