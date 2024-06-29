import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <>
        {/* Start Footer Area */}
        <footer className="footer-area">
          <div className="container-fluid">
            {/* Start Subscribe Area */}
            {/* <section className="subscribe-area">
        <div className="container">
          <div className="subscribe-content">
            <h2>Subscribe to our newsleter</h2>
            <form className="newsletter-form" data-bs-toggle="validator">
              <div className="form-group">
                <input
                  type="text"
                  className="input-newsletter"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="input-newsletter"
                  placeholder="Last Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="input-newsletter"
                  placeholder="Email Address*"
                  name="EMAIL"
                  required=""
                  autoComplete="off"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit <i className="icofont-arrow-right" />
              </button>
              <div id="validator-newsletter" className="form-result" />
            </form>
          </div>
        </div>
        <div className="horse-box5">
          <img src="assets/img/2.png" alt="horse" />
        </div>
        <div className="horse-box6">
          <img src="assets/img/3.png" alt="horse" />
        </div>
      </section> */}
            {/* End Subscribe Area */}
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-widget">
                  <div className="logo">
                    <Link to="#">
                      <img src="assets/img/f-white-trans.png" style={{ width: "100px", marginLeft: "100px" }} alt="logo" />
                    </Link>
                  </div>
                  <p style={{ textAlign: "center" }}>
                    Look deep into nature, and then you will understand
                    everything better.
                  </p>
                  <ul className="social" style={{ display: "flex", justifyContent: "space-between", marginLeft: "50px", width: "200px" }}>
                    <li>
                      <Link to="https://www.facebook.com/profile.php?id=100090367631523&mibextid=ZbWKwL" target="_blank">
                        <i className="icofont-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://twitter.com/moodswinger5?t=M0YkE6zLlenXRXBCGVIWeA&s=09" target="_blank">
                        <i className="icofont-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://instagram.com/animalll.in?igshid=YmMyMTA2M2Y=" target="_blank">
                        <i className="icofont-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://youtube.com/@jetalsavani1145" target="_blank">
                        <i className="icofont-youtube" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-widget">
                  <h3>Services</h3>
                  <ul className="services-list">
                    <li>
                      <Link to="/transportation">Transportation</Link>
                    </li>
                    <li>
                      <Link to="/veterinary">Veterinary</Link>
                    </li>
                    <li>
                      <Link to="insurance">Insurance</Link>
                    </li>
                    <li>
                      <Link to="/animalaccessories">Animal Accessories</Link>
                    </li>

                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-widget">
                  <h3>Contacts</h3>
                  <ul className="contact-info">
                    <li>
                      <span>Address:</span> Sutex Bank of Computer Applications And Science
                    </li>
                    <li>
                      <span>Email:</span>{" "}
                      <Link to="mailto: animalll134@gmail.com?subject=hello">
                        <span
                          className="__cf_email__"
                          data-cfemail="b4c7d1d9d1dac0d5d8f4d3d9d5ddd89ad7dbd9"
                        >
                          animalll134@gmail.com
                        </span>
                      </Link>
                    </li>
                    <li>
                      <span>Phone:</span> <Link to="tel:8200859090">+91 8200859090</Link>
                    </li>
                    <li className="services-list">
                      <Link to="/contact">Contact Our Team</Link>
                    </li>

                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-widget">
                  <h3>Working Hours</h3>
                  <ul className="working-hours">
                    <li>
                      <span>Always Open</span> &nbsp; 
                    </li>
                    {/* <li>
                <span>Tuesday:</span> 8AM - 6AM
              </li>
              <li>
                <span>Wednesday:</span> 8AM - 6AM
              </li>
              <li>
                <span>Thursday - Friday:</span> 8AM - 6AM
              </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <p>
                    <i className="icofont-copyright" /> Copyright Animalll. All Rights
                    Reserved
                  </p>
                </div>
                <div className="col-lg-6 col-md-6">
                  <ul>
                    <li>
                      <Link to="/policy"> Privacy Policy </Link>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* End Footer Area */}
      </>




    </div>
  )
}
