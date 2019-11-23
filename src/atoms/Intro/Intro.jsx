import React from 'react';

const Intro = () => {
    return (
        <>
            <div className="overlay"></div>
            <video
                playsInline="playsinline"
                autoPlay="autoplay"
                muted="muted"
                loop="loop"
            >
                <source src="/public/videos/bgv.mp4" type="video/mp4" />
            </video>
        </>
    );
};

export default Intro;
