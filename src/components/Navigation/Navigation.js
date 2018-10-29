import React from "react";
import { NavLink } from 'react-router-dom'; 

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">List Page</NavLink>
      <NavLink to="/newRecordForm">Details Page</NavLink>
      <NavLink to="/detailsPage">New Record Form</NavLink>
    </div>
  )
};

export default Navigation;