import React from 'react'
//import styles from "./textHolder.module.scss"
import styles from "../startPage.module.scss"

interface Props {
    header : string,
    text : string,
}

const TextHolder = ({header, text}: Props) => {

    const fastAnimation = [styles.heading, styles.fastAnimation].join(" ")
    const slowAnimation = [styles.heading, styles.slowAnimation].join(" ")

    return (
        <div>
            <div className={header === "Hi there." ? fastAnimation : slowAnimation}>{header}</div>
            <div>{text}</div>
        </div>
    )
}

export default TextHolder
