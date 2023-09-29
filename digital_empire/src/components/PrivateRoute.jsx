import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((store) => store.reducer.isAuth);
  const location = useLocation();
  return isAuth ? children : <Navigate state={location.pathname} to={"/login"} />
}

export default PrivateRoute