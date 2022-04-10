import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";

import { auth } from "./firebase";

// Import toast notify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import sth
import { useDispatch } from "react-redux";

// Import Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import RegisterComplete from "./pages/auth/RegisterComplete";
import ForgotPassword  from "./pages/auth/ForgotPassword";

// Import Conponents
import Header from "./components/nav/Header";


const App = () => {

  const dispatch = useDispatch();

  // check auth state
  useEffect(() =>{
    const unsubcribe = auth.onAuthStateChanged( async (user) =>{
      if(user){
        const idTokenResult = await user.getIdTokenResult ()
        console.log(user)
        dispatch({
          type: 'LOGGED_IN_USER',
          payload: {
            email: user.email,
            token: idTokenResult.token
          }
        });
      }

    });
    //clean up
    return () =>unsubcribe();
  },[])
  return (
    <>
      <Header />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/complete" component={RegisterComplete} />
        <Route exact path="/forgot/password" component={ForgotPassword} />
      </Switch>
    </>
  );
};

export default App;
