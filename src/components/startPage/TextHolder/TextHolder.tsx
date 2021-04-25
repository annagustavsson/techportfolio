import React from 'react'
import styles from "./textHolder.module.scss"

interface Props {
    header : string,
    text : string
    
}

const TextHolder = ({header, text}: Props) => {
    return (
        <div className={styles.textCard}>
            <div className={styles.heading}>{header}</div>
            <div>{text}</div>
        </div>
    )
}

export default TextHolder
