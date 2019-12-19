import React from 'react';
import styles from './Profile.module.scss';

const Account = () => {
    return (
        <div className="account-style">
            <div className="account-main-style">
                <br></br>
            </div>

            <div className="account-main-style">
                {' '}
                {/* FIRST Block*/}
                <div className="container account-main-style">
                    <div className="row py-1 ">
                        {/* Column 0 -blank*/}
                        <div className="col-md-2 col-sm-6"></div>

                        {/* Column 1 - Личные Данные */}
                        <div className="col-md-3 col-sm-6">
                            <ul className="list-unstyled text-center">
                                <div>
                                    <a href="#!" className="account-white">
                                        ЛИЧНЫЕ ДАННЫЕ
                                    </a>
                                </div>
                            </ul>
                        </div>

                        {/* Column 2 - Заказы*/}
                        <div className="col-md-2 col-sm-6">
                            <ul className="list-unstyled text-center">
                                <div>
                                    <a href="#!" className="account-white">
                                        ЗАКАЗЫ
                                    </a>
                                </div>
                            </ul>
                        </div>

                        {/* Column 3 - Список Желани*/}
                        <div className="col-md-3 col-sm-6">
                            <ul className="list-unstyled text-center">
                                <div>
                                    <a href="#!" className="account-white">
                                        СПИСОК ЖЕЛАНИЙ
                                    </a>
                                </div>
                            </ul>
                        </div>

                        {/* Column 0 -blank */}
                        <div className="col-md-2 col-sm-6"></div>

                        <div className="py-3"></div>
                    </div>
                </div>
            </div>

            <div className="container account-style2">
                {' '}
                {/* SECOND Block*/}
                <div className="acoount-style2 col-md-2 col-sm-6">
                    <br></br>
                </div>
                <div className="row">
                    {/* Column 0 Photo*/}
                    <div className="col-md-2 col-sm-6">
                        <h4 className=" main-color">
                            <img
                                className="img"
                                alt=""
                                src="https://i.ibb.co/NKjNb0b/Photo1.jpg"
                            ></img>
                        </h4>
                    </div>

                    {/* Column 1 Name*/}
                    <div className="col-md-4 col-sm-6">
                        <h4 className="black ">JEGOR LAPTEV</h4>
                        <ul className="list-unstyled">
                            <li className="list-unstyled">
                                <a href="#!" className="acoount-gray-thin">
                                    Edit Photo...
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2 Contacts*/}
                    <div className="col-md-5 col-sm-6">
                        <h4 className="main-color account">Contact with us</h4>
                        <ul className="list-unstyled">
                            <br></br>
                            <li className="list-unstyled">
                                <a href="#!" className="acoount-gray-thin">
                                    help@shanye.space
                                </a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" className="acoount-gray-thin">
                                    (+372) 53078808
                                </a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" className="acoount-gray-thin">
                                    skype: shangye
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr align="center" width="800" size="2" color="#E49881" />{' '}
                {/* Line */}
                <div className="acoount-bottom">
                    <br></br>
                </div>
            </div>

            <div className="container account-style2">
                {' '}
                {/* THIRD Block*/}
                <div className="row">
                    {/* Name */}
                    <div className="col-md-3 col-sm-6">
                        <h6 className="black">Full Name</h6>
                        <input
                            type="text"
                            name="fullnameMain"
                            value="Jegor Laptev"
                            className="black-s"
                        ></input>
                    </div>

                    {/* Email */}
                    <div className="col-md-3 col-sm-6">
                        <h6 className="black">Email Adress</h6>
                        <input
                            type="text"
                            name="emailMain"
                            value="j.laptev@gmail.com"
                            className="black-s"
                        ></input>
                    </div>

                    {/* Phone */}
                    <div className="col-md-3 col-sm-6">
                        <h6 className="black">Phone Number</h6>
                        <input
                            type="text"
                            name="phoneMain"
                            value="+372 53078809"
                            className="black-s"
                        ></input>
                    </div>

                    {/* Country */}
                    <div className="col-md-3 col-sm-6">
                        <h6 className="black">Country</h6>
                        <input
                            type="text"
                            name="countryMain"
                            value="Estonia"
                            className="black-s"
                        ></input>
                    </div>

                    {/* Language */}
                    <div className="col-md-3 col-sm-6">
                        <br></br>
                        <h6 className="black">Language</h6>
                        <select>
                            <option value="volvo">English</option>
                            <option value="saab">Русский</option>
                            <option value="opel">Eesti</option>
                        </select>
                    </div>
                </div>
                {/* Line */}
                <div className="acoount-style2">
                    <br></br>
                    <hr align="center" width="800" size="2" color="#E49881" />
                    <br></br>
                </div>
                {/* FOURTH Block */}
                <div className="acoount-style2">
                    <h4 className="black">Change Password</h4>
                    <br></br>
                </div>
                <div className="row">
                    {/* Column 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h6 className="black">Old Password</h6>
                        <input
                            type="text"
                            name="oldPassword"
                            value=" **********"
                            className="black-s"
                        ></input>
                    </div>

                    {/* Column 2 */}
                    <div className="col-md-3 col-sm-6">
                        <h6 className="black">New Password</h6>
                        <input
                            type="text"
                            name="newPassword"
                            value=""
                            className="black-s"
                        ></input>
                    </div>

                    {/* Column 3 */}
                    <div className="col-md-3 col-sm-6">
                        <h6 className="black">Confirm Password</h6>
                        <input
                            type="text"
                            name="confirmPassword"
                            value=""
                            className="black-s"
                        ></input>
                    </div>

                    {/* Column 4 */}
                    <div className="col-md-3 col-sm-6">
                        <h6 className="black">
                            {' '}
                            <br></br>
                        </h6>
                        <input type="submit" value="Confirm password"></input>
                    </div>
                </div>
                {/* Line */}
                <div className="acoount-style2">
                    <br></br>
                    <hr align="center" width="800" size="2" color="#E49881" />
                    <br></br>
                </div>
                {/* FIVETH Block */}
                <div className="acoount-style2">
                    <h4 className="black">Shipping Information</h4>
                    <br></br>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h6 className="black">First Name</h6>
                        <input
                            type="text"
                            name="fname"
                            value="Jegor Laptev"
                            className="black-s"
                        ></input>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h6 className="black">Last Name</h6>
                        <input
                            type="text"
                            name="fname"
                            value="j.laptev@gmail.com"
                            className="black-s"
                        ></input>
                    </div>
                    <div className="col-md-6 col-sm-6"> {/* Blank */}</div>
                    <div className="col-md-3 col-sm-6">
                        <br></br>
                        <h6 className="black">Street</h6>
                        <input
                            type="text"
                            name="street"
                            value="Moisa"
                            className="black-s"
                        ></input>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <br></br>
                        <h6 className="black">House, Flat</h6>
                        <input
                            type="text"
                            name="house"
                            value="46 - 343"
                            className="black-s"
                        ></input>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <br></br>
                        <h6 className="black">Zip</h6>
                        <input
                            type="text"
                            name="zip"
                            value="12616"
                            className="black-s"
                        ></input>
                    </div>
                    <div className="col-md-3 col-sm-6"></div> {/* Blank */}
                    <div className="col-md-3 col-sm-6">
                        <br></br>
                        <h6 className="black">Country</h6>
                        <input
                            type="text"
                            name="country"
                            value="Eesti"
                            className="black-s"
                        ></input>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <br></br>
                        <h6 className="black">State</h6>
                        <input
                            type="text"
                            name="state"
                            value="Harjumaa"
                            className="black-s"
                        ></input>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <br></br>
                        <h6 className="black">Town</h6>
                        <input
                            type="text"
                            name="town"
                            value="Tallinn"
                            className="black-s"
                        ></input>
                    </div>
                </div>
                {/* Line */}
                <div className="acoount-style2">
                    <br></br>
                    <hr align="center" width="800" size="2" color="#E49881" />
                    <br></br>
                </div>
                {/* SIXTH Block */}
                <div className="acoount-style2">
                    <h4 className="black">Diactivate Account</h4>
                    <ul className="list-unstyled">
                        <li className="list-unstyled">
                            <p className="acoount-gray-thin">
                                The monkey-rope is found in all whalers; but it
                                was only in the Pequod that the monkey and his
                                holder were ever tied together. This improvement
                                upon the original usage was introduced by no.
                            </p>
                            <a href="#!" className="acoount-gray-thin2">
                                Diactivete Your Account
                            </a>
                        </li>
                    </ul>
                    <br></br>
                </div>
            </div>
        </div>
    );
};

export default Account;
