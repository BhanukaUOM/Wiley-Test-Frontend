import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <footer footer className="site-footer" >
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p className="text-justify">One of the largest and most authoritative collections of online journals, books, and research resources, covering life, health, social, and physical sciences.
</p>
                    </div>
                    <div className="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul className="footer-links">
                            <li><a href="#">C</a></li>
                            <li><a href="#">UI Design</a></li>
                            <li><a href="#">PHP</a></li>
                            <li><a href="#">Java</a></li>
                            <li><a href="#">Android</a></li>
                            <li><a href="#">Templates</a></li>
                        </ul>
                    </div>
                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Contribute</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Sitemap</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright © 2021 All Rights Reserved by
              <a target="blank" href="https://www.linkedin.com/in/sadheera-mahanama/" className="footer-author">{`Sadheera Mahanama`}</a>.
            </p>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a className="dribbble" href="#"><i className="fa fa-dribbble" /></a></li>
                            <li><a className="linkedin" href="#"><i className="fa fa-linkedin" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer
