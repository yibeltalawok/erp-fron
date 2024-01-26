import React from "react";
function Register(props) {
  return (
    <>
      <button className=" md:w-2/3 focus:outline-none mr-4 bg-blue-400 hover:bg-indigo-500 text-white font-bold xl:text-base md:text-base border border-gray-300 w-full text-sm py-2.5 outline-blue-500 rounded">
      {props.btnName}
      </button>
    </>
  );
}
export default Register;
