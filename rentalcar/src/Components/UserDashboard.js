import React from "react";
import { useState } from "react";
import "./UserDashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";
import Popper from "popper.js";
import { Link, useNavigate } from "react-router-dom";
export default function UserDashboard() {
  const navigate = useNavigate();
  let [CarsDetails, setCarsDetails] = useState([
    {
      id: "1",
      car_image:
        "https://www.motorbeam.com/wp-content/uploads/Mahindra-XUV700-Bookings-1200x900.jpg",
      car_name: "Mahindra Xuv700",
      car_fuel: "diesel",
      car_seating: "7",
      car_rent: 1200,
    },
    {
      id: "2",
      car_image:
        "https://images.livemint.com/img/2020/02/20/1600x900/hyundai-i20-2021---fotos-vazadas_(3)_1582018912930_1582181092871.jpg",
      car_name: "Hyundai I20",
      car_fuel: "petrol",
      car_seating: "5",
      car_rent: 1000,
    },
    {
      id: "3",
      car_image:
        "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220908045419_01_BMW_X4_50_years_of_M.jpg",
      car_name: "BMW X4",
      car_fuel: "diesel",
      car_seating: "4",
      car_rent: 2500,
    },
    {
      id: "4",
      car_image:
        "https://static.toiimg.com/thumb/msid-79851401,width-1280,height-720,resizemode-4/.jpg",
      car_name: "BMW 3 Series",
      car_fuel: "petrol",
      car_seating: "5",
      car_rent: 2200,
    },
    {
      id: "5",
      car_image:
        "https://mediapool.bmwgroup.com/cache/P9/202110/P90441182/P90441182-bmw-530i-m-sport-carbon-edition-10-2021-2667px.jpg",
      car_name: "BMW 5 Series",
      car_fuel: "petrol",
      car_seating: "5",
      car_rent: 3000,
    },
    {
      id: "6",
      car_image:
        "https://images.hindustantimes.com/auto/img/2022/05/31/600x338/22C0210_001_1653988100942_1653988118491.jpg",
      car_name: "Mercedes-Benz AMG E-class",
      car_fuel: "petrol",
      car_seating: "4",
      car_rent: 3500,
    },
    {
      id: "7",
      car_image:
        "https://www.hyundai.com/content/dam/hyundai/ww/en/images/find-a-car/pip/suv/creta-su2/creta-su2-highlights-social-original.jpg",
      car_name: "Hyundai Creata",
      car_fuel: "diesel",
      car_seating: "5",
      car_rent: 2000,
    },
    {
      id: "8",
      car_image:
        "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_675,q_auto:best,w_1200/cms/uploads/wbpljlgthbxu6rkpcf1d",
      car_name: "Volkswagen Polo GTI",
      car_fuel: "petrol",
      car_seating: "5",
      car_rent: 1800,
    },
  ]);
  const toComponentB = (id) => {
    const list = CarsDetails;
    const employee = list.filter((incar) => incar.id == id);
    navigate("/single", { state: employee[0] });
  };
  return (
    <div>
      <div className="AvailableCars">
        {CarsDetails.map((car) => {
          return (
            <>
              <div className="carInfo">
                <img className="image" src={car.car_image} />
                <div className="carPricing">
                  <article>
                    <h5>{car.car_name}</h5>
                    <h6>
                      <b style={{ fontWeight: "500" }}>Rent Price </b> :{" "}
                      {car.car_rent}
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => {
                          toComponentB(car.id);
                        }}
                      >
                        More Info
                      </button>
                    </h6>
                  </article>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
