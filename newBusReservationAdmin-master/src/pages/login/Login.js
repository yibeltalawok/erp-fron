// react
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// images
import wave from "../../assets/images/authentication/wave.png";
import unlock from "../../assets/images/authentication/unlock.svg";
import avatar from "../../assets/images/authentication/avatar.svg";
import { loginUser } from "../../states/actions/employeeAction";
import Layout from "../../pages/layout/Layout";
// login function
const Login = () => {
  // dispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // use form
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  // use selector
  const { employee, loading } = useSelector((state) => state.employee);
  // on submit
  const onSubmit = (data) => {
    // dispatch
    dispatch(loginUser(data));
  };

  // if authenticated
  // if (userInfo !== null) {
  //   navigate("/");
  // }
  if (userInfo !== null) {
    setTimeout(function () {
      window.location.reload();
    }, 500);
  }
  // return
  return (
    <>
      <div>
        <img
          src={wave}
          alt="wave"
          className="fixed hidden lg:block inset-0 h-full"
          style={{ zIndex: "-1" }}
        />
        <div className="w-screen h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2">
          <img
            src={unlock}
            alt="unlock img"
            className="hidden lg:block w-1/2 hover:scale-150 transition-all duration-500 transform mx-auto"
          />

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="font-display flex flex-col justify-center items-center xl:w-1/2 mx-1 xl:mx-1">
              <img src={avatar} alt="avatar img" className="w-32" />
              <h2 className="my-8  font-bold text-secondary text-4xl text-gray-700 text-center">
                DTLS
              </h2>
              <div className="mb-4 w-full">
                <span className="block text-lg font-display text-inputColor">
                  Email
                </span>
                <input
                  type="text"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                  className="form-control block w-full px-4 py-2 text-base text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:outline-none"
                />
                {errors.email && (
                  <p className="text-red-500">email is required</p>
                )}
              </div>
              <div className="mb-2 w-full">
                <span className="block text-lg font-display text-inputColor">
                  password
                </span>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    maxLength: 150,
                  })}
                  className="form-control block w-full px-4 py-2 text-base text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
                />
                {errors.password && (
                  <p className="text-red-500">password error</p>
                )}
              </div>
              {/* <a href="#" className="self-end text-inputColor font-bold">
                password is required
              </a> */}
              {loading ? (
                <button
                  disabled
                  className="inline-block px-2 xl:py-2 py-2 mt-6 bg-primary text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-primary hover:shadow-lg focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    class="inline w-4 h-4 mr-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  loading...
                </button>
              ) : (
                <button
                  type="submit"
                  className="inline-block px-2 py-1 mt-6 bg-primary text-white font-medium text-lg leading-snug uppercase rounded shadow-md hover:bg-primary hover:shadow-lg focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Login
                </button>
              )}
              <div className="text-center text-textColor font-display mt-3">
                create account
                <a
                  className="text-yellow-600 hover:underline hover:text-primary pl-2"
                  href="/newEmployee"
                >
                  Register
                </a>
              </div>
            </div>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
