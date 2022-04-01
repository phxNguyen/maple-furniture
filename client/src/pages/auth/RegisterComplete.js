import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Lay email tu local storage gan' vao o email
  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // khong refresh lai trang
    // validation
    if(!email || !password){
      return toast.error('Email and password is required');
      
    }
    if(password.length < 6){
      return toast.error('password must be at least 6 characters');
    }
    try {
      const result = await auth.signInWithEmailLink( email, window.location.href);
      //console.log(result);

      if(result.user.emailVerified){

        // xoa user email ra khoi local storage
        window.localStorage.removeItem('emailForRegistration');
        // get user.id.token
        let user = auth.currentUser
        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult();
        //redux store

          console.log('user', user, ' idToken', idTokenResult);
        //redirect
        history.push('/')
      }
    } catch (error) {
      console.error(error);
      toast.error('Error at RegisterComplete.js');
      
    }


  };

  const compleRegistrationForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control mb-2"
          value={email}
          
          
        />

        <input
          type="password"
          className="form-control mb-2"
          value={password}
          autoFocus
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <button type="submit" className="btn btn-primary mt-1">
          {" "}
          Complete Register
        </button>
      </form>
    );
  };

  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 offset-md-6">
            <h3>Register Complete</h3>

            <p>{compleRegistrationForm()}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterComplete;
