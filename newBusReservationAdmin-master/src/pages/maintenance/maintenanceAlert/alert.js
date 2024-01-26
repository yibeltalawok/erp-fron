import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../pages/layout/Layout";
const MaintenaceAlert = () => {
  // dispatch
  const dispatch = useDispatch();
  return (
    <Layout>
      <div class="flex justify-center">
        <h1> this is alet pages</h1>
      </div>
    </Layout>
  );
};
export default MaintenaceAlert;
