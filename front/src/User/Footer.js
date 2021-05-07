import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Footer(){
    return (
        <>
           
<footer className="temp page-footer font-small unique-color-dark">


  <div className="container text-center text-md-left mt-5 temp">
    <div className="row mt-3">
      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">  
        <h6 className="text-uppercase font-weight-bold mt-3">Company name</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
        <p>DreamGirl is the Company which give a best service</p>
      </div> 
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">  
        <h6 className="text-uppercase font-weight-bold mt-3">Products</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
        <p>
          <a href="#!">MDBootstrap</a>
        </p>
        <p>
          <a href="#!">MDWordPress</a>
        </p>
        <p>
          <a href="#!">BrandFlow</a>
        </p>
        <p>
          <a href="#!">Bootstrap Angular</a>
        </p>
      </div>
      
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 className="text-uppercase font-weight-bold mt-3">Follow Us</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
        <p>
          <a href="#!">Instagram</a>
        </p>
        <p>
          <a href="#!">Facebook</a>
        </p>
        <p>
          <a href="#!">Twitter</a>
        </p>
        <p>
          <a href="#!">Linkedin</a>
        </p>

      </div>

      
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

        
        <h6 className="text-uppercase font-weight-bold mt-3">Contact</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
        <p>
          <i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
        <p>
          <i className="fas fa-envelope mr-3"></i> info@example.com</p>
        <p>
          <i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
        <p>
          <i className="fas fa-print mr-3"></i> + 01 234 567 89</p>

      </div>
      

    </div>
    

  </div>
  

  
  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
  </div>
  

</footer>

        </>
    )
}