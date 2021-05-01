import React from 'react'
import styles from "../toggleMenu.module.scss"

interface Props {
    //handler : () => void,
    text : string,
    //hovered: boolean,
    //active: boolean
    onClick: () => void
}

//className={!isClicked? classes.container : [classes.container, classes.clicked].join(" ")}

const ToggleButton = ({text, onClick}: Props) => {

    return (
        <div onClick={onClick}>
            {text}
        </div>
    )
}

export default ToggleButton
