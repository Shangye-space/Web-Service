import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer-style">
            <hr align="center" size="2" color="white" />

            <div className="container">
                <div className="row py-4 ">
                    {/* Column 0 -blank*/}
                    <div className="col-md-2 col-sm-6"></div>

                    {/* Column 1 - Phone */}
                    <div className="col-md-3 col-sm-6">
                        <h4 className="text-center main-color">
                            <img
                                className="image"
                                alt=""
                                src="https://static.wixstatic.com/media/035244_7ab29c72994f4040bafcacadad3a166c~mv2.png/v1/fill/w_124,h_124,al_c,q_80,usm_0.66_1.00_0.01/035244_7ab29c72994f4040bafcacadad3a166c~mv2.webp"
                            ></img>
                        </h4>
                        <ul className="list-unstyled text-center">
                            <li className="list-unstyled">
                                <p className="footer-white-thin py-2">
                                    (+372) 53078808
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2 - mail*/}
                    <div className="col-md-2 col-sm-6">
                        <h4 className="text-center main-color">
                            <img
                                className="image"
                                alt=""
                                src="https://static.wixstatic.com/media/035244_0ffd26364b1841ca8b891a68587a8769~mv2.png/v1/fill/w_124,h_124,al_c,q_80,usm_0.66_1.00_0.01/035244_0ffd26364b1841ca8b891a68587a8769~mv2.webp"
                            ></img>
                        </h4>
                        <ul className="list-unstyled text-center">
                            <div
                                data-packed="true"
                                className="txtNew"
                                id="comp-k2aojfer"
                            >
                                <h6 className="font_6 py-2">
                                    <span className="color_11">
                                        <object height="0">
                                            <a
                                                className="auto-generated-link footer-white-thin"
                                                data-auto-recognition="true"
                                                data-content="help@shangye.space"
                                                href="mailto:help@shangye.space"
                                                data-type="mail"
                                            >
                                                help@shangye.space
                                            </a>
                                        </object>
                                    </span>
                                </h6>
                            </div>
                        </ul>
                    </div>

                    {/* Column 3 - adress*/}
                    <div className="col-md-3 col-sm-6">
                        <h4 className="text-center main-color">
                            <img
                                className="image"
                                alt=""
                                src="https://static.wixstatic.com/media/035244_0e1bb186604048af82e5dce8c833d568~mv2.png/v1/fill/w_124,h_124,al_c,q_80,usm_0.66_1.00_0.01/035244_0e1bb186604048af82e5dce8c833d568~mv2.webp"
                            ></img>
                        </h4>
                        <ul className="list-unstyled text-center">
                            <li className="list-unstyled">
                                <p className="footer-white-thin py-2">
                                    Moisa 12, Ida- Virumaa, Eesti
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Column 0 -blank */}
                    <div className="col-md-2 col-sm-6"></div>

                    <div className="py-3"></div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {/* Column 0 */}
                    <div className="col-md-2 col-sm-6"></div>

                    {/* Column 1 */}
                    <div className="col-md-2 col-sm-6">
                        <h4 className="main-color footer">Company</h4>
                        <ul className="list-unstyled">
                            <li className="list-unstyled">
                                <a href="#!" className="footer-white-thin">
                                    Shipping & Returns
                                </a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" className="footer-white-thin">
                                    Store Policy
                                </a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" className="footer-white-thin">
                                    Payment Methods
                                </a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" className="footer-white-thin">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="col-md-2 col-sm-6">
                        <h4 className="main-color footer">About</h4>
                        <ul className="list-unstyled">
                            <li className="list-unstyled">
                                <a href="#!" className="footer-white-thin">
                                    Shop Collection
                                </a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" className="footer-white-thin">
                                    Our Story
                                </a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" className="footer-white-thin">
                                    Contsct
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 - MAPS */}
                    <div className="col-md-4 col-sm-6">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031.3240794884045!2d24.668061116197247!3d59.39430541285304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46929571602ab779%3A0xbc2ba7357f40e17e!2sTaltech!5e0!3m2!1sen!2see!4v1576334683265!5m2!1sen!2see"
                            width="600"
                            height="450"
                            frameBorder="0"
                            style={{
                                border: 0,
                                maxHeight: '146px',
                                maxWidth: '100%',
                            }}
                            allowFullScreen=""
                        ></iframe>
                    </div>

                    {/* Column 0 */}
                    <div className="col-md-2 col-sm-6"></div>
                </div>

                <hr
                    align="center"
                    size="2"
                    color="#E49881"
                    style={{ width: '100%' }}
                />

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="text-center main-color">
                        &copy;{new Date().getFullYear()}-2020 Shangye.space .
                        All Rights Reserved
                    </p>
                    <br></br>
                </div>
            </div>
        </div>
    );
};

export default Footer;
