import React, { useState } from "react";
import "./CarStatus.css";
import { Navigate } from "react-router-dom";
export default function CarStatus() {
  let [CarStat, SetCarStat] = useState({
    car_name: "BMW 3 Series",
    car_image:
      "https://static.toiimg.com/thumb/msid-79851401,width-1280,height-720,resizemode-4/.jpg",
    car_fuel: "petrol",
    car_Seating: "5",
    car_rent_total: 1200,
    from: "2023-03-14T05-11",
    to: "2023-03-14T18-11",
  });
  let STdate = CarStat.from.split("T");
  let ETdate = CarStat.to.split("T");
  return (
    <div
      className="body"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        class="card"
        style={{
          width: "320px",
          boxShadow: "0px 4px 8px 0px black",
          border: "none",
        }}
      >
        <img src={CarStat.car_image} class="card-img-top" alt="car Image" />
        <div class="card-body" style={{ padding: "7px" }}>
          <h5 class="card-title">{CarStat.car_name}</h5>
          <p class="card-text"></p>
          <p>
            <button
              class="btn btn-primary btn-sm"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Show Status
            </button>
            <button
              class="btn btn-primary btn-sm"
              type="button"
              style={{ marginLeft: "6px" }}
            >
              Change Status
            </button>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body" style={{ padding: "4px" }}>
              <table>
                <tr>
                  <td>From Time</td>
                  <td className="cen">:</td>
                  <td>
                    {STdate[0]} ({STdate[1]})
                  </td>
                </tr>
                <tr>
                  <td>To Time</td>
                  <td className="cen">:</td>
                  <td>
                    {ETdate[0]} ({ETdate[1]})
                  </td>
                </tr>
                <tr>
                  <td>Total Rent</td>
                  <td className="cen">:</td>
                  <td>{CarStat.car_rent_total}/-</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
