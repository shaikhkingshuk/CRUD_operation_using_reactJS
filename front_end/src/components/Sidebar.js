import React from "react";
import "./list.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li>
          <Link to="/" className="no-underline">
            Add User
          </Link>
        </li>
        <li>
          <Link to="/search" className="no-underline">
            Search User
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
