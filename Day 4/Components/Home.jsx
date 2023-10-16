import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../Redux/userSlice";

const Home = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // Check if user is not null before accessing its properties
  const username = user ? user.username : "Guest";
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <h1>Welcome, {username}</h1>
      
    </div>
  );
};

export default Home;