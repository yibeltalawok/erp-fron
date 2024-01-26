import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import {
  viewFeedBack,
  deleteFeedBack,
} from "../../states/actions/feedbackAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "../../pages/layout/Layout";
const AllFeedBack = () => {
  // dispatch
  const dispatch = useDispatch();
  // hooks
  const feedback = useSelector((state) => state.feedback);
  // use effect
  useEffect(() => {
    dispatch(viewFeedBack());
  }, []);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const navigate = useNavigate();

  const handleUpdateFeedBack = (feedbackId) => {
    navigate("/feedBack/" + feedbackId);
  };
  function handleRemoveFeedBack(feedbackId) {
    if (
      window.confirm(
        "Data deleted permantly. Are you sure to delete completely!"
      )
    ) {
      dispatch(deleteFeedBack(feedbackId));
    }
    if (feedback?.success == false) {
      setTimeout(function () {
        window.location.reload();
      }, 500);
    }
  }
  return (
    <Layout>
      <Box sx={{ pt: "80px", pb: "20px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "16px",
          }}
        >
          <Typography variant="h6">Passenger Feedbacks </Typography>
        </Box>
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between mt-5">
          <div className="w-full lg:w-[70%] lgl:w-[60%] h-full py-10  flex flex-col gap-8 p-1 md:p-8 lg:p-12 lgl:p-14 lg:ml-12 lgl:ml-12 rounded-lg bg-white items-center">
            {feedback?.feedback?.length > 0
              ? feedback?.feedback?.map((feedbacks, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        class="bg-white border-t-2 w-full  border-slate-300 rounded-b text-teal-900 md:px-2 px-0 py-5 shadow-md"
                        role="alert"
                      >
                        <div
                          className="hoverable-div"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className=" float-right text-sky-500 pl-7 md:-mt-4 -m-2  rounded flex flex-row">
                            <button
                              onClick={() =>
                                handleUpdateFeedBack(feedbacks.feedbackId)
                              }
                              className="m-2 -mt-1 "
                            >
                              Change
                            </button>
                            <button
                              onClick={() =>
                                handleRemoveFeedBack(feedbacks.feedbackId)
                              }
                              className=" m-2 -mt-1"
                            >
                              Delete
                            </button>
                          </div>
                          <div class="flex flex-row md:pt-0 pt-3">
                            <div class="py-1">
                              <svg
                                class="fill-current h-6 w-6 border-slate-300 mr-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                              </svg>
                            </div>
                            <div>
                              <p
                                class=" md:px-1 text-sm py-1 px-1 xl:flex xl:flex-row lg:flex lg:flex-row md:flex md:flex-row
         block"
                              >
                                <p className="font-bold mr-1">Name:</p>
                                <p>{feedbacks.name}</p>
                              </p>
                              <p
                                class="text-sm py-1 px-1 xl:flex xl:flex-row lg:flex lg:flex-row md:flex md:flex-row
         block
         "
                              >
                                <p className="font-semibold mr-1">Comment:</p>
                                <p>{feedbacks.comment}</p>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              : ""}
          </div>
        </div>
      </Box>
      <ToastContainer />
    </Layout>
  );
};
export default AllFeedBack;
