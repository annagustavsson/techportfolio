import React from 'react'
import styles from "../imageHolder.module.scss"

interface Props {
    infoText: string
}

const InfoBox = ({ infoText }: Props) => {
    return (
        <div style={{ zIndex: 1 }} className={styles.infoBox}>
            {infoText}
        </div>
    )
}

export default InfoBox
