import React from 'react'
import ToggleButton from "./ToggleButton/ToggleButton"
import styles from "./toggleMenu.module.scss"

interface Props {
    
}

const ToggleMenu = (props: Props) => {
    return (
        <div className={styles.toggleContainer}>
            <div className={styles.active}><ToggleButton text={"About"}/></div>
            <div><ToggleButton text={"Projects"}/></div>
        </div>
    )
}

export default ToggleMenu
