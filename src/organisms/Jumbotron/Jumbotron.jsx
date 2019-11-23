import React from 'react';

import Intro from '../../atoms/Intro';

import classnames from 'classnames';
import styles from './Jumbotron.module.scss';

const Jumbotron = () => {
    return (
        <>
            <section
                className={classnames(
                    styles.wrapper,
                    'jumbotron',
                    'jumbotron-fluid',
                )}
            >
                <Intro />
                <div className="container h-100">
                    <div className="d-flex h-100 text-center align-items-center">
                        <div
                            className={classnames(
                                styles.textArea,
                                'w-100',
                                'text-white',
                            )}
                        >
                            <h1 className="display-3">
                                Shangye
                                <strong className={styles.orangeText}>
                                    .space
                                </strong>
                            </h1>
                            <p className="lead mb-0">
                                ALWAYS BE
                                <br />
                                YOURSELF
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Jumbotron;
