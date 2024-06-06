import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { userInfo } = useSelector((state) => state.auth);

  const userRoles = userInfo?.roles || [];
  const hasPermission = allowedRoles.some(role => userRoles.includes(role));

  return hasPermission ? children : <Navigate to="/" />;
};

export default ProtectedRoute;