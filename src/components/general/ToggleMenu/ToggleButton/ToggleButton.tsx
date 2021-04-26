import React from 'react'
import styles from "../toggleMenu.module.scss"

interface Props {
    text : string,
    //color: string
    //active: boolean
}

const ToggleButton = ({text}: Props) => {
    return (
        <div className={styles.toggleButton}>
            {text}
        </div>
    )
}

export default ToggleButton
