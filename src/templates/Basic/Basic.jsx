import React from 'react';
import Footer from '../../organisms/Footer';

const Basic = ({ children }) => {
    return (
        <>
            {children}
            <Footer />
        </>
    );
};

export default Basic;
