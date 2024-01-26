import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { updateDriver, singleDriver } from "../../states/actions/driverAction";
import { ToastContainer } from "react-toastify";
import Pdf from "../../assets/images/avatars/pdfIcon.jpg";
import Layout from "../../pages/layout/Layout";
// add new Employee
const NewDriver = () => {
  // use form
  const dispatch = useDispatch();
  const { id } = useParams();
  // use form
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  // use effect
  useEffect(() => {
    onReset();
  }, []);

  const onReset = async () => {
    const result = await dispatch(singleDriver(id));
    console.log(result);
    reset(result.payload);
  };

  const [picture, setPicture] = useState(null);
  const [getImg, setImg] = useState(null);
  const [getFile, setFile] = useState(null);
  // when image is uploaded
  const onImageUpload = (e) => {
    e.persist();
    setPicture(URL.createObjectURL(e.target.files[0]));
    setImg(e.target.files[0]);
  };

  const onSubmit = (data) => {
    data.photo = getImg;
    data.licenseDocument = getFile;

    const formData = new FormData();
    Object?.entries(data).map((entry) => {
      const [key, value] = entry;
      formData.append(key, value);
    });
    // dispatch
    dispatch(updateDriver(data));
    // window.location.reload();
  };
  return (
    <Layout>
      <section class="py-24 bg-gray-100  bg-opacity-50 h-screen">
        <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
          <div class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
            <div class="max-w-sm mx-auto md:w-full md:mx-0">
              <div class="inline-flex items-center space-x-4">
                <h1 class="text-gray-600">Update Driver</h1>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="bg-white space-y-2">
              <hr />
              <div class="md:inline-flex w-full md:space-y-0 p-2 text-gray-500 items-center">
                <h2 class="md:w-4/12 max-w-sm mx-auto">Full Name</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <input
                        name="name"
                        type="text"
                        {...register(`name`, {
                          maxLength: 100,
                          pattern: /[a-zA-Z]+$/,
                        })}
                        class="bg-gray-50 border border-gray-300 w-full text-sm px-4 py-2.5 outline-blue-500"
                        placeholder="Abebe"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="md:inline-flex w-full space-y-3 md:space-y-0 p-2 text-gray-500 items-center">
                <h2 class="md:w-4/12 max-w-sm mx-auto">License Number</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <input
                        name="name"
                        type="text"
                        {...register(`licenseNumber`, {
                          maxLength: 100,
                          // pattern: /^[a-zA-Z]+$/,
                        })}
                        class="bg-gray-50 border border-gray-300 w-full text-sm px-4 py-2.5 outline-blue-500"
                        placeholder="Abebe"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="md:inline-flex  space-y-3 md:space-y-0  w-full p-2 text-gray-500 items-center">
                <h2 class="md:w-4/12 mx-auto max-w-sm">Contact Number</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <input
                        type="text"
                        {...register("contactNumber", {
                          maxLength: 100,
                        })}
                        class="bg-gray-50 border border-gray-300 w-full text-sm px-4 py-2.5 outline-blue-500"
                        placeholder="Bahir dar"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="md:inline-flex w-full space-y-3 md:space-y-0 p-2 text-gray-500 items-center">
                <h2 class="md:w-4/12 max-w-sm mx-auto">Email</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <div class="pt-2 w-1/12 bg-gray-100">
                        <svg
                          fill="none"
                          class="w-6 text-gray-400 mx-auto"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        {...register("email", {
                          maxLength: 100,
                        })}
                        class="bg-gray-50 border border-gray-300 w-full text-sm px-4 py-2.5 outline-blue-500"
                        placeholder="+251999999999"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="md:inline-flex  space-y-2 md:space-y-0  w-full p-1 text-gray-500 items-center">
                <h2 class="md:w-4/12 mx-auto max-w-sm">Photo</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="shrink-0">
                      {getImg ? (
                        <img
                          class="h-16 w-16 object-cover rounded-full"
                          src={picture}
                          alt="ፎቶ"
                        />
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-16 h-16 text-yellow-600 group-hover:text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                          />
                        </svg>
                      )}
                    </div>
                    <label class="block">
                      <span className="text-lg text-gray-600">image</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={onImageUpload}
                        class="block w-full text-slate-500 file:mx-4 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <hr />
              <div class="md:inline-flex  space-y-2 md:space-y-0  w-full p-1 text-gray-500 items-center">
                <h2 class="md:w-4/12 mx-auto max-w-sm">License Document</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-2">
                  <div>
                    <div class="shrink-0">
                      {getFile ? (
                        <img
                          class="h-16 w-16 object-cover rounded-full"
                          src={Pdf}
                          alt="file"
                        />
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-16 h-16 text-yellow-600 group-hover:text-gray-600"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                          />
                        </svg>
                      )}
                    </div>
                    <label class="block">
                      <span className="text-lg text-gray-600">file</span>
                      <input
                        type="file"
                        accept=".pdf"
                        {...register("file")}
                        onChange={(event) => {
                          setFile(event.target.files[0]);
                        }}
                        class="block w-full text-slate-500 file:mx-4  file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <hr />
              <div class="w-full pb-2 text-right text-gray-500">
                <button className="w-full md:w-2/3 focus:outline-none mr-4 bg-blue-400 hover:bg-indigo-500 text-white font-bold xl:text-base md:text-base border border-gray-300 w-full text-sm py-2.5 outline-blue-500 rounded">
                  Save Change
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer />
    </Layout>
  );
};
export default NewDriver;
