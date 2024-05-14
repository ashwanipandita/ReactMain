import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SellerProtected = ({ children }) => {
  const router = useNavigate();
  const { state } = useContext(AuthContext);

  useEffect(() => {
  
    if (state?.user && state?.user?.role !== "seller") {
      toast.error("You are not allow to access this page.");
     return router("/login");
    }
  }, [state]);
};
export default SellerProtected;