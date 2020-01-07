import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classnames from 'classnames';
import styles from './Header.module.scss';

import UserBar from '../../molecules/UserBar';

const Header = ({ userData }) => {
    return (
        <>
            <nav
                className={classnames(
                    'navbar',
                    'navbar-expand-lg',
                    'navbar-dark',
                    styles.nav,
                )}
            >
                <button
                    className={classnames(
                        'navbar-toggler',
                        styles.toggleButton,
                    )}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={classnames(
                        'collapse',
                        'navbar-collapse',
                        styles.nav_wrapper,
                    )}
                    id="navbarTogglerDemo01"
                >
                    <Link className="navbar-brand" to="/">
                        <strong className={styles.orangeText}>Shangye</strong>
                        .space
                    </Link>
                    <ul
                        className={classnames(
                            styles.list,
                            'navbar-nav',
                            'mt-2 mt-lg-0',
                        )}
                    >
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" exact>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/shop">
                                Shop collection
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/story">
                                Our Story
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contacts">
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                    <UserBar className={styles.acc_bar} userData={userData} />
                </div>
            </nav>
        </>
    );
};

export default Header;
