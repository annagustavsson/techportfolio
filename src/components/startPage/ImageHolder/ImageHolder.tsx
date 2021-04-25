import React from 'react'

import InfoBox from "./InfoBox/InfoBox"

import styles from "./imageHolder.module.scss"



interface Props {
    
}

const ImageHolder = (props: Props) => {
    return (
        <div className={styles.imageContainer}>
             <div className={styles.infoBoxesContainer}>
                <InfoBox infoText={"Education"}/>
                <InfoBox infoText={"Proffesional experience"}/>
             </div>
        </div>
    )
}

export default ImageHolder
