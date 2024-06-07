import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";

let Toggler = (props) => {
    const text = ["Выключено", "Включено"];
    const icons = [faToggleOff, faToggleOn];

    const [current_index, setCurrentIndex] = useState(0);
    const changeState = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    };

    return (
        <div>
            <button>{text[current_index]}</button>
            <FontAwesomeIcon
                onClick={changeState}
                icon={icons[current_index]}
            />
        </div>
    );
};

export default Toggler;
