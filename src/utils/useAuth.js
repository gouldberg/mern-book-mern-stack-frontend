// ------------------------------------------------------------------------------
// p.92
// ------------------------------------------------------------------------------
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import jwt_decode from "jwt-decode";

// const useAuth = () => {
//   const [loginUser, setLoginUser] = useState("");

//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   if (!token) {
//     navigate("/user/login");
//   }

//   try {
//     // data storaged in token (mail address inlucded here) is now in 'decoded'
//     const decoded = jwt_decode(token);
//     setLoginUser(decoded.email);
//   } catch (error) {
//     navigate("/user/login");
//   }
// };

// export default useAuth;

// ------------------------------------------------------------------------------
// final
// ------------------------------------------------------------------------------
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const useAuth = () => {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/user/login");
    }

    try {
      const decoded = jwt_decode(token);
      setLoginUser(decoded.email);
    } catch (error) {
      navigate("/user/login");
    }
  }, [navigate]);

  return loginUser;
};

export default useAuth;
