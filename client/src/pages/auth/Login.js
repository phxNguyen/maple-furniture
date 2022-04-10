import React, { useState, useEffect } from "react";
import { auth, googleAuthProvider } from "../../firebase";
import { toast } from "react-toastify";
import { Button } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Login = ({ history }) => {
  const [email, setEmail] = useState("phuoc01478520@gmail.com");
  const [password, setPassword] = useState("123456");
  const [loading, setLoading] = useState(false);

  //redirect ve home page khi user da dang nhap
  const { user } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    if (user && user.token) history.push("/");
  }, [user]);

  let dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault(); // khong refresh lai trang
    console.log(email, password);
    setLoading(true);

    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();

      dispatch({
        type: "LOGGED_IN_USER",
        payload: {
          email: user.email,
          token: idTokenResult.token,
        },
      });
      history.push("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  };
  const googleLogin = async () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            token: idTokenResult.token,
          },
        });
        history.push("/");
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
      });
  };
  const loginForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            className="form-control mb-2"
            placeholder="Email"
            value={email}
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-2"
            placeholder="Password"
            value={password}
            autoFocus
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary mt-1"
            disabled={!email || password.length < 6}
          >
            {" "}
            Login with email
          </button>
        </div>
      </form>
    );
  };

  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            {loading ? (
              <h4 className="text-danger">Loading...</h4>
            ) : (
              <h4>Login</h4>
            )}
            <p>{loginForm()}</p>

            <button
              type="submit"
              onClick={googleLogin}
              className="block btn btn-danger mt-1 "
            >
              Login with Google
            </button>
            <Link to="/forgot/password" className="block float-end ">
              Forgot password
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
