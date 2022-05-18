import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Shared/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Appointment from "./pages/Appointment/Appointment";
import Review from "./pages/Review/Review";
import ContactUs from "./pages/ContactUs/ContactUs";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import RequiredAuth from "./pages/RequiredAuth/RequiredAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyAppointments from "./pages/Dashboard/MyAppointments";
import MyReview from "./pages/Dashboard/MyReview";
import MyHistory from "./pages/Dashboard/MyHistory";
import AllUsers from "./pages/Dashboard/AllUsers";
import RequiredAdmin from "./pages/RequiredAuth/RequiredAdmin";
import AddDoctor from "./pages/Dashboard/AddDoctor";
import ManageDoctors from "./pages/Dashboard/ManageDoctors";
import Payment from "./pages/Dashboard/Payment";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route
          path="appointment"
          element={
            <RequiredAuth>
              <Appointment></Appointment>
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequiredAuth>
              <Dashboard></Dashboard>
            </RequiredAuth>
          }
        >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="myReview" element={<MyReview></MyReview>}></Route>
          <Route path="myHistory" element={<MyHistory></MyHistory>}></Route>
          <Route path="payment/:appointmentId" element={<Payment></Payment>}></Route>
          <Route path="allUsers" element={<RequiredAdmin><AllUsers></AllUsers></RequiredAdmin>}></Route>
          <Route path="addDoctor" element={<RequiredAdmin><AddDoctor></AddDoctor></RequiredAdmin>}></Route>
          <Route path="manageDoctor" element={<RequiredAdmin><ManageDoctors></ManageDoctors></RequiredAdmin>}></Route>
        </Route>
        <Route path="review" element={<Review></Review>}></Route>
        <Route path="contactUs" element={<ContactUs></ContactUs>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signUp" element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
