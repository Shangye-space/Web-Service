import React from 'react';
import classnames from 'classnames';
import styles from './Header.module.scss';

import UserBar from '../../molecules/UserBar';

const Header = () => {
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
                    <a className="navbar-brand" href="#">
                        <strong className={styles.orangeText}>Shangye</strong>
                        .space
                    </a>
                    <ul
                        className={classnames(
                            styles.list,
                            'navbar-nav',
                            'mt-2 mt-lg-0',
                        )}
                    >
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                Home <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Shop collection
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Our Story
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contacts
                            </a>
                        </li>
                    </ul>
                    {/* <form
                        className={classnames(
                            styles.acc_bar,
                            'form-inline',
                            'my-2 my-lg-0',
                        )}
                    >
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            className="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                        >
                            Search
                        </button>
                    </form> */}
                    <UserBar className={styles.acc_bar} />
                </div>
            </nav>
        </>
    );
};

export default Header;
