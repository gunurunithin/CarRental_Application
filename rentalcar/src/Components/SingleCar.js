import React from "react";
import "./singleCar.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";
import Popper from "popper.js";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { TextField } from "@mui/material";
import { useState } from "react";
import axios from 'axios';
export default function SingleCar() {
  const location = useLocation();
  let [BookingDetails, SetBookingDetails] = useState({
    // car_id: location.state._id,
    // car_name: location.state.car_name,
    // car_image: location.state.car_image,
    // car_rent: location.state.car_rent,
    // car_fuel: location.state.car_fuel,
    // car_seating: location.state.car_seating,
    // car_number: location.state.car_number,
    name: "",
    mobil: "",
    address: "",
    StartTime: "",
    EndTime: "",
  });
  const HandleForm = (e) => {
    SetBookingDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const PostData = () => {
    axios.post('http://localhost:4000/PostData', { BookingDetails })
    console.log(BookingDetails);
    // alert(BookingDetails);
  };
  let FormData = (
    <div>
      <form>
        <TextField
          className="IN"
          id="outlined-basic"
          label="Name"
          name="name"
          variant="outlined"
          onChange={HandleForm}
        />
        <br />
        <br />
        <TextField
          className="IN"
          name="mobil"
          id="outlined-basic"
          label="Mobile Number"
          variant="outlined"
          onChange={HandleForm}
        />
        <br />
        <br />
        <TextField
          name="address"
          className="IN"
          id="outlined-textarea"
          label="Address"
          placeholder="Placeholder"
          onChange={HandleForm}
          multiline
        />
        <br />
        <br />
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <label htmlFor="StDate">From Date</label>
          <input
            name="StartTime"
            id="StDate"
            type="datetime-local"
            onChange={HandleForm}
            style={{
              width: "100%",
              border: "1.5px solid lightgrey",
              margin: "3px 0px 0px 0px",
              padding: "5px",
            }}
          />
          <label htmlFor="StDate">To Date</label>
          <input
            name="EndTime"
            id="StDate"
            type="datetime-local"
            onChange={HandleForm}
            style={{
              width: "100%",
              border: "1.5px solid lightgrey",
              margin: "3px 0px 0px 0px",
              padding: "5px",
            }}
          />
        </div>
        <br />
        <br />
      </form>
    </div>
  );

  return (
    <>
      <div className="singlecarmain">
        <div className="carbooking">
          <div className="carimg">
            <div className="card text-bg-dark mb-3">
              <div className="card-header ">Car Rentals</div>
              <div className="card-body">
                <div className="card mb-3 bg-dark">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={location.state.car_image}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body bg-dark">
                        <h3 className="card-title">
                          {location.state.car_name}
                        </h3>
                        <hr />
                        <p className="card-text">
                          <small className="text-body-secondary">
                            {location.state.car_rent} Rent Per hour /-
                          </small>
                          <br />
                          <small className="text-body-secondary">
                            Fuel Type : {location.state.car_fuel}
                          </small>
                          <br />
                          <small className="text-body-secondary">
                            Max Persons : {location.state.car_seating}
                          </small>
                          <br />
                          <hr />
                          <small className="text-body-secondary">
                            <button
                              type="button"
                              className="btn btn-outline-primary btn-outline-1"
                              data-bs-target="#exampleModalToggle"
                              data-bs-toggle="modal"
                            >
                              Book Car
                            </button>
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -----------------------------Modal */}
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div
          className="modal-dialog modal-dialog-centered "
          style={{
            width: "auto",
            maxWidth: "500px",
            minWidth: "310px",
          }}
        >
          <div className="modal-content">
            <div className="modal-header bg-dark text-white">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                Enter Your Details
              </h1>
              <button
                type="button"
                className="btn-close bg-light "
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="modal-body"
              style={{
                padding: "30px",
              }}
            >
              {FormData}
              <button
                style={{
                  marginBlockStart: "1%",
                  marginInlineStart: "0%",
                }}
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
                onClick={PostData}
              >
                Go to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                Payment Details
              </h1>
              <button
                type="button"
                className="btn-close bg-light"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <TextField
              className="INO"
              id="outlined-basic"
              label="Enter your Card Number"
              name="name"
              variant="outlined"
              style={{width:"400px" , marginLeft:"50px", marginTop:"20px"}}
            />
            <TextField
              className="INO"
              id="outlined-basic"
              label="CVV"
              name="name"
              variant="outlined"
              style={{width:"400px" , marginLeft:"50px", marginTop:"20px"}}
            />
            <TextField
              className="INO"
              id="outlined-basic"
              label="PIN"
              name="name"
              variant="outlined"
              style={{width:"400px" , marginLeft:"50px", marginTop:"20px"}}
            />
            <div className="modal-footer">
              <button onClick={() => {alert("Payment Successful")}} className="btn btn-primary" data-bs-dismiss="modal">
                Proceed to payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div
              className="alert alert-warning alert-dismissible fade show"
              role="alert"

            >
              <strong>Payment Successful !</strong> You wil get your car soon
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div> */
}
