import React from "react";
import PropTypes from "prop-types";

const SecondsCounterWrapper = ({ seconds }) => {
    const paddedSeconds = String(seconds).padStart(6, "0").split("");

    return (
        <div className="counter">
            <div className="digit icon"><i class="fa-regular fa-clock"></i></div>
            {paddedSeconds.map((digit, index) => (
                <div key={index} className="digit">{digit}</div>
            ))}
        </div>
    );
};

SecondsCounterWrapper.propTypes = {
    seconds: PropTypes.number.isRequired
};

export default SecondsCounterWrapper;