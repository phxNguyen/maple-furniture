import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";

import { toast, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

const Register = ({ history }) => {
  const [email, setEmail] = useState("");

  //redirect ve home page khi user da dang nhap
  const { user } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    if (user && user.token) history.push("/");
  }, [user, history]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // khong refresh lai trang

    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL || 'http://localhost:3000/register/complete',
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, config);
    
    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration `
    );

    // save email xuong local storage, sau khi click vao link roi khoi phai nhap email dang nhap lai
    window.localStorage.setItem("emailForRegistration", email);

    // Xoa state
    setEmail("");
  };

  const registerForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control mb-2"
          value={email}
          autoFocus
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn btn-light" type="submit">
          Register
        </button>
      </form>
    );
  };

  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h3>Register</h3>

            <p>{registerForm()}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
