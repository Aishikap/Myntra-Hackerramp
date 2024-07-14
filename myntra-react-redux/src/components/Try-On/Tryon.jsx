import React, { useState } from 'react';
import WebcamOverlay from '../../Webcam/WebcamOverlay'; // Corrected path
import './TryOn.css';

const TryOn = () => {
    const [showWebcam, setShowWebcam] = useState(false);

    const handleTryOnClick = () => {
        setShowWebcam(!showWebcam);
    };

    return (
        <div className="tryon-container">
            <button onClick={handleTryOnClick} className="try-on-button">
                {showWebcam ? "Hide Try-On" : "Show Try-On"}
            </button>
            {showWebcam && <WebcamOverlay />}
        </div>
    );
};

export default TryOn;
