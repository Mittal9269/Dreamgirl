import React from "react";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>

      <hr/>
      <div className="footer-pop">
      <div className="container-fluid mb-1 container-footer ">
        <div className="row">
          <div className="clo-12 mx-auto">
            <div className="row">
              <div className="col-12 mx-auto">
                <div className="row">

                  <div className=" div-card">
                    <div className="card-change">
                      <NavLink to="..." className="nav">
                        <div className="card-body">
                        <a className="set"><i class="fa fa-info-circle"></i></a>
                          <h5 className="card-title footer-card"><span className="footer-css">Need Help</span></h5>
                          <p className="card-text footer-card">
                          <span className="footer-css">View our Help page for help</span>
                        </p>
                        </div>
                      </NavLink>
                    </div>
                  </div>

                  <div className=" div-card" >
                    <div className="card-change">
                      <NavLink to="..." className="nav">
                        <div className="card-body">
                        <a className="set"><i className="fa fa-envelope"></i></a>
                          <h5 className="card-title footer-card"><span className="footer-css">Mail Us</span></h5>
                          <p className="card-text footer-card">
                          <span className="footer-css">shubhamveriaty@gmail.com</span>
                        </p>
                        </div>
                      </NavLink>
                    </div>
                  </div>

                  <div className=" div-card">
                    <div className="card-change">
                      <NavLink to="..." className="nav">
                        <div className="card-body">
                        <a className="set"><i class="fa fa-address-card"></i></a>
                          <h5 className="card-title footer-card"><span className="footer-css">About Us</span></h5>
                          <p className="card-text footer-card">
                          <span className="footer-css">Know us more</span>
                        </p>
                        </div>
                      </NavLink>
                    </div>
                  </div>

                  <div className=" div-card">
                    <div className="card-change">
                      <NavLink to="..." className="nav">
                        <div className="card-body">
                          <h5 className="card-title footer-card"><span className="footer-css">Follow Us</span></h5>
                          <div style={{margin: "12px 0"}} className="social">
                            <a className="socialmediaLink" href="#"><i class="fa fa-instagram"></i></a>
                            <a className="socialmediaLink" href="#"><i class="fa fa-twitter"></i></a>
                            <a className="socialmediaLink" href="#"><i class="fa fa-linkedin"></i></a>
                            <a className="socialmediaLink" href="#"><i class="fa fa-facebook"></i></a>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <footer className=" d-flex justify-content-between footer-css">
        <div>
          <span className="footer-css other__footer">GopalTredars About Us . More .</span>
        </div>
        <div>
          <p className="text-footer mr-5"><span className="footer-css check__footer">© 2021 GopalTredars. All rights Reserved.</span> </p>
        </div>
      </footer>
      </div>
    </>
  )
}