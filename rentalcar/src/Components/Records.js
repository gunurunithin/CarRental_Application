import React from "react";
import {useEffect,useState} from 'react';
import axios from 'axios';
import './Records.css';
function Records() {

        const [houses, sethouses] = useState([])
        useEffect(() => {
            axios.get('http://localhost:4000/bookingsdata')
                .then((res) => sethouses(res.data))
        })
        return (
            <div className="container" id="rec">
                <div className="row">
                    <p id="rectext" style={{color:"white"}}><center>Previous Bookings</center></p>
                </div>
                <div className="row">
                    <div className="col-md-12" >
                      <center>
                        <table id="rec2">
                            <tr id="trhe">
                                {/* <th>Car</th> */}
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>Address</th>
                                <th>Date In</th>
                                <th>Date Out</th>
                            </tr>
                            {
                                houses.map((val, key) => {
                                    return (
                                        <tr key={key} id="trhov">

                                            {/* <td>{val.car_name}</td> */}
                                            <td>{val.name}</td>
                                            <td>{val.mobil}</td>
                                            <td>{val.address}</td>
                                            <td>{val.StartTime}</td>
                                            <td>{val.EndTime}</td>
            
                                        </tr>
                                    )
                                })
                            }
                        </table>
                        </center>
                    </div>
                </div>
            </div>
        )
    }
    export default Records;