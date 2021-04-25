import React from 'react'
import ProfilePic from "../../../resources/icons/oval.svg"
import styles from "./imageHolder.module.scss"

interface Props {
    
}

const ImageHolder = (props: Props) => {
    return (
        <div className={styles.imageContainer}>
             <img className={styles.image} src={ProfilePic} />
        </div>
    )
}

export default ImageHolder
