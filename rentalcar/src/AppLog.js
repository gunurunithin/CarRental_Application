import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import UserDashboard from "./Components/UserDashboard";
import SingleCar from "./Components/SingleCar";
import CarStatus from "./Components/CarStatus";
// import ModifyStatus from "./Components/ModifyStatus";
import Records from "./Components/Records";
import Contact from "./Components/Contact";
export default function AppLog() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div style={{ marginTop: "60px" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" index element={<UserDashboard />} />
            <Route path="/userdashboard" index element={<UserDashboard />} />
            <Route path="/Records" index element={<Records />} />
            <Route path="/single" index element={<SingleCar />} />
            <Route path="/status" index element={<CarStatus />} />
            <Route path="/Feedback" index element={<Contact/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
