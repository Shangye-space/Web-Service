import React from 'react';
import './Auth.scss';
import axios from 'axios';
import jwt from 'jsonwebtoken';

const Auth = ({ isVisible }) => {
    function sign_up() {
        var inputs = document.querySelectorAll('.input_form_sign');
        document.querySelectorAll('.ul_tabs > li')[0].className = '';
        document.querySelectorAll('.ul_tabs > li')[1].className = 'active';

        for (var i = 0; i < inputs.length; i++) {
            // eslint-disable-next-line no-empty
            if (i === 2) {
            } else {
                document.querySelectorAll('.input_form_sign')[i].className =
                    'input_form_sign d_block';
            }
        }

        setTimeout(function() {
            for (var d = 0; d < inputs.length; d++) {
                document.querySelectorAll('.input_form_sign')[d].className =
                    'input_form_sign d_block active_inp';
            }
        }, 100);
        document.querySelector('.link_forgot_pass').style.opacity = '0';
        document.querySelector('.link_forgot_pass').style.top = '-5px';
        document.querySelector('.btn_sign').innerHTML = 'SIGN UP';
        setTimeout(function() {
            document.querySelector('.terms_and_cons').style.opacity = '1';
            document.querySelector('.terms_and_cons').style.top = '5px';
        }, 500);
        setTimeout(function() {
            document.querySelector('.link_forgot_pass').className =
                'link_forgot_pass d_none';
            document.querySelector('.terms_and_cons').className =
                'terms_and_cons d_block';
        }, 450);
    }

    function sign_in() {
        var inputs = document.querySelectorAll('.input_form_sign');
        document.querySelectorAll('.ul_tabs > li')[0].className = 'active';
        document.querySelectorAll('.ul_tabs > li')[1].className = '';

        for (var i = 0; i < inputs.length; i++) {
            switch (i) {
                case 1:
                    // console.log(inputs[i].name);
                    break;
                case 2:
                // console.log(inputs[i].name);
                // eslint-disable-next-line no-fallthrough
                default:
                    document.querySelectorAll('.input_form_sign')[i].className =
                        'input_form_sign d_block';
            }
        }

        setTimeout(function() {
            for (var d = 0; d < inputs.length; d++) {
                switch (d) {
                    case 1:
                        console.log(inputs[d].name);
                        break;
                    case 2:
                        console.log(inputs[d].name);

                    // eslint-disable-next-line no-fallthrough
                    default:
                        document.querySelectorAll('.input_form_sign')[
                            d
                        ].className = 'input_form_sign d_block';
                        document.querySelectorAll(
                            '.input_form_sign',
                        )[2].className = 'input_form_sign d_block active_inp';
                }
            }
        }, 100);

        document.querySelector('.terms_and_cons').style.opacity = '0';
        document.querySelector('.terms_and_cons').style.top = '-5px';

        setTimeout(function() {
            document.querySelector('.terms_and_cons').className =
                'terms_and_cons d_none';
            document.querySelector('.link_forgot_pass').className =
                'link_forgot_pass d_block';
        }, 500);

        setTimeout(function() {
            document.querySelector('.link_forgot_pass').style.opacity = '1';
            document.querySelector('.link_forgot_pass').style.top = '5px';

            for (var d = 0; d < inputs.length; d++) {
                switch (d) {
                    case 1:
                        console.log(inputs[d].name);
                        break;
                    case 2:
                        console.log(inputs[d].name);

                        break;
                    default:
                        document.querySelectorAll('.input_form_sign')[
                            d
                        ].className = 'input_form_sign';
                }
            }
        }, 1500);
        document.querySelector('.btn_sign').innerHTML = 'SIGN IN';
    }

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        const expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    }

    function getCookie(cname) {
        const name = cname + '=';
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    }

    function submit(e) {
        e.preventDefault();
        if (document.querySelector('.btn_sign').innerHTML === 'SIGN IN') {
            const email = document.querySelector('input[name="emauil_us"]')
                .value;
            const password = document.querySelector('input[name="pass_us"]')
                .value;

            axios
                .post('http://localhost:3000/api/private/auth', {
                    email,
                    password,
                })
                .then(res => {
                    console.log(res);
                    setCookie('auth_token', res.data.token, 7);
                })
                .catch(err => console.log(err));
        } else if (
            document.querySelector('.btn_sign').innerHTML === 'SIGN UP'
        ) {
            const name = document.querySelector('input[name="name_us"]').value;
            const email = document.querySelector('input[name="emauil_us"]')
                .value;
            const password = document.querySelector('input[name="pass_us"]')
                .value;
            const password_c = document.querySelector(
                'input[name="conf_pass_us"]',
            ).value;

            axios
                .post('http://localhost:3000/api/private/account/create/', {
                    name,
                    email,
                    password,
                    password_c,
                })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
    }

    return (
        <>
            {isVisible ? (
                <div className="authWrapper">
                    <div className="cont_centrar">
                        <div className="cont_login">
                            <form action="true" onSubmit={submit}>
                                <div className="cont_tabs_login">
                                    <ul
                                        className="ul_tabs"
                                        style={{ paddingLeft: 0 }}
                                    >
                                        <li className="active">
                                            <a
                                                href="#"
                                                onClick={() => sign_in()}
                                            >
                                                SIGN IN
                                            </a>
                                            <span className="linea_bajo_nom" />
                                        </li>
                                        <li>
                                            <a
                                                href="#up"
                                                onClick={() => sign_up()}
                                            >
                                                SIGN UP
                                            </a>
                                            <span className="linea_bajo_nom" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="cont_text_inputs">
                                    <input
                                        type="text"
                                        className="input_form_sign "
                                        placeholder="NAME"
                                        name="name_us"
                                    />
                                    <input
                                        type="text"
                                        className="input_form_sign d_block active_inp"
                                        placeholder="EMAIL"
                                        name="emauil_us"
                                    />
                                    <input
                                        type="password"
                                        className="input_form_sign d_block  active_inp"
                                        placeholder="PASSWORD"
                                        name="pass_us"
                                    />
                                    <input
                                        type="password"
                                        className="input_form_sign"
                                        placeholder="CONFIRM PASSWORD"
                                        name="conf_pass_us"
                                    />
                                    <a
                                        href="#"
                                        className="link_forgot_pass d_block"
                                    >
                                        Forgot Password ?
                                    </a>
                                    <div className="terms_and_cons d_none">
                                        <p>
                                            <input
                                                type="checkbox"
                                                name="terms_and_cons"
                                            />{' '}
                                            <label htmlFor="terms_and_cons">
                                                Accept Terms and Conditions.
                                            </label>
                                        </p>
                                    </div>
                                </div>
                                <div className="cont_btn">
                                    <button className="btn_sign" type="submit">
                                        SIGN IN
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export default Auth;
