import React from 'react';
import "./Footer.css";
import "../../Global.css";

import {} from "react-icons/fa";


import { FaFacebook, FaTwitter, FaInstagram, FaArrowRight } from "react-icons/fa"

function Footer(){
    return(
        <footer>
            <div className="container">
                <div className="copy__right">
                    <div className="footer__right">
                        <div className="line1">Copyright &copy; 2020 <a href="#"> MoveOn Fitness</a></div>
                    </div>
                    <div className="social__icon">
                        <a href="#"><FaFacebook/></a>
                        <a href="#"><FaTwitter/></a>
                        <a href="#"><FaInstagram/></a>
                    </div>
                </div>
                <div className="footer__infos">							
                    <div className="footer__title">
                        <h4>Our location</h4>			
                    </div>
                    <div className="address">
                        <p>Room 1214&nbsp; #187 Tay Son Building, Dong Da Distr</p>
                        <p>Ha Noi, Vietnam Phone : +84 4 22414757</p>
                        <p>Email : inwavethemes@gmail.com </p>
                    </div>
                </div>
                <div className="send__mail">							
                    <div className="footer__title">
                        <h4>Keep in touch</h4>			
                    </div>
                <form name="" method="post"  id="send__mail">												
                    <div className="info">Lorem ipsum dolor sit amet, consectetur adi sollicitud ante tellus ornare mi, et mollis</div>						
                    <div className="email">
                        <input type="text" title="E-mail" name="user[email]" className="inputbox" placeholder="Your email" />
                        <button className="button" title="Submit" type="submit"><FaArrowRight className="icon__email"/></button>
                    </div>
                </form>
                </div>
			</div>						
        </footer>
    )
}

export default Footer;