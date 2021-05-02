import React from 'react'
import {useHistory, useLocation} from "react-router-dom";
import ToggleButton from "./ToggleButton/ToggleButton"
import styles from "./toggleMenu.module.scss"

interface Props {
    //hovered: boolean,
    //active: boolean
}

const ToggleMenu = (props: Props) => {
    let history = useHistory()
    let location = useLocation()

    let aboutActivated = true
    let projectsActivated = false


    const activeStyles = [styles.active, styles.toggleButton].join(" ")
    const unActiveStyle = styles.toggleButton


    return (
        <div className={styles.toggleContainer}>
            <div className={location.pathname === "/" ? activeStyles : unActiveStyle}><ToggleButton  onClick={() => history.push("/")} text={"About"}/></div>
            <div className={location.pathname === "/projects" ? activeStyles : unActiveStyle}><ToggleButton  onClick={() => history.push("/projects")} text={"Projects"} /></div>
        </div>
    )
}

export default ToggleMenu
