import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdminUser from "../../hooks/useAdminUser";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdminUser(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        {/* <!-- Page content here --> */}
        <h2 className="text-2xl ml-8 my-4 font-semibold text-purple-700">
          Welcome to your Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content gap-2">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Appointments</Link>
          </li>
          <li>
            <Link to="/dashboard/myReview">My Review</Link>
          </li>
          <li>
            <Link to="/dashboard/myHistory">My History</Link>
          </li>
          { admin &&
            <li>
              <Link to="/dashboard/allUsers">All Users</Link>
              <Link to="/dashboard/addDoctor">Add Doctor</Link>
              <Link to="/dashboard/manageDoctor">Manage Doctors</Link>
            </li>
          }
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
