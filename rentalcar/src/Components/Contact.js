import React  from "react";
import './contactus.css'
function Contact() {
      return (
          <div style={{marginLeft:"200px"}}>
            <div className="container" id="fill"  >
            <br/>
            <p id="h1"><b>FEEDBACK</b></p>
            <div className="row">
              <div className="col-md-6" id="col1">
                <h2 className="title">Get In Touch:</h2>
                <hr />
                <div className="nameclass"><span id="nameid"><i className="fa fa-user" aria-hidden="true" id="fafauser" /></span> <b>Name:</b></div>
                <br />
                <p className="p1">Rental Cars</p>
                <div className="nameclass"><span id="mailid"><i className="fa fa-envelope" aria-hidden="true" id="fafaenv" /></span> <b>Email:</b></div>
                <br />
                <p className="p1">RentalCars@gmail.com</p>
                <div className="nameclass"><span id="phoneid"><i className="fa fa-phone" aria-hidden="true" id="fafaphone" /></span> <b>Phone:</b></div>
                <br />
                <p className="p1">1234567809</p>
                <div className="nameclass"><span id="addressid"><i className="fa fa-map-marker" aria-hidden="true" id="fafamap" /></span><b> Address:</b></div>
                <br />
                <p className="p1">RentalCars,Surampalem,East Godavari District,Andhra Pradesh,India.</p>
                <br />
                <br />
              </div>
              <div className="col-md-6 " id="col2" style={{background:"white"}}>
                <h2 className="title2">Queries</h2>
                <hr />
                <form>
                  <div className="form-group">
                    <label><b>Full Name:</b></label>
                    <input type="text" className="form-control" placeholder="Enter Your Name" />
                  </div>
                  <br/>
                  <div className="form-group">
                    <label><b>Email:</b></label>
                    <input type="email" className="form-control" placeholder="Enter Your Email" />
                  </div>
                  <br/>
                  <div className="form-group">
                    <label><b>Contact Number:</b></label>
                    <input type="number" className="form-control" placeholder="Enter Your Number" />
                  </div>
                  <br/>
                  <div className="form-group">
                    <label><b>Message:</b></label>
                    <input type="textarea" className="form-control" placeholder="Enter Your Query" />
                  </div>
                  <br/>
                  <input type="submit" className="btn btn-success btn-block" />
                </form>
              </div>
            </div>
          </div>
          </div>
      );
    } 
    export default Contact;