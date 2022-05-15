import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import "./App.css";
import Feed from "./components/Feed/Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./Firebase";

function App() {

const user = useSelector(selectUser);
const dispatch = useDispatch();

useEffect(()=> {
  auth.onAuthStateChanged(
    userAuth => {
      if (userAuth) {
//user is loged in
dispatch(login(
  {
     email: userAuth.email,
     uid: userAuth.uid,
     displayName: userAuth.displayName,
     photoUrl: userAuth.photoURL,

  }
))
      }else {
//user is loged Out
dispatch(logout());
      }
    }
  )
}

)

  return (
    <div className="app">
      <Header />
 
     {!user ? ( 
     <Login/>
     ) : 
     (
      <div className="app__body">
      {/* sidebar */}
      <SideBar />

      {/* feed */}
      <Feed />

      {/* Widgets */}
    </div>
     ) 
     
     }
     
    </div>
  );
}

export default App;
