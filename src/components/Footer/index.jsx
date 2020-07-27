/* eslint-disable import/extensions */
import React from 'react';

import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaArrowRight,
} from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { Container } from './style.jsx';

const Footer = () => {
    return (
        <footer>
            <Container>
                <div className="copy__right">
                    <div className="footer__right">
                        <div className="line1">
                            Copyright &copy; 2020
                            <Link to="/"> MoveOn Fitness</Link>
                        </div>
                    </div>
                    <div className="social__icon--container">
                        <FaFacebook className="social__icon" />
                        <FaTwitter className="social__icon" />
                        <FaInstagram className="social__icon" />
                    </div>
                </div>
                <div className="send__mail">
                    <div className="footer__title">
                        <h4>Keep in touch</h4>
                    </div>
                    <form name="" method="post" id="send__mail">
                        <div className="email">
                            <input
                                type="text"
                                title="E-mail"
                                name="user[email]"
                                className="inputbox"
                                placeholder="Your email"
                            />
                            <button
                                className="button"
                                title="Submit"
                                type="submit"
                            >
                                <FaArrowRight className="icon__email" />
                            </button>
                        </div>
                    </form>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
