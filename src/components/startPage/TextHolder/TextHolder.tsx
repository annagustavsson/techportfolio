import React from 'react'
//import styles from "./textHolder.module.scss"
import styles from "../startPage.module.scss"

interface Props {
    header : string,
    text : string,
}

const TextHolder = ({header, text}: Props) => {
    return (
        <div>
            <div className={styles.heading}>{header}</div>
            <div>{text}</div>
        </div>
    )
}

export default TextHolder
