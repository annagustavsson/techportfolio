import React from 'react'
import ToggleMenu from "../ToggleMenu/ToggleMenu"
import ImageHolder from "./ImageHolder/ImageHolder"
import TextHolder from "./TextHolder/TextHolder"
import styles from "./startPage.module.scss"


interface Props {
    
}

const StartPage = (props: Props) => {
    return (    
        <div className={styles.flexContainer}>
            <div className={styles.toggleContainer}>
                <ToggleMenu text="About"/>
                <ToggleMenu text="Projects"/>
            </div>
            <div className={styles.halfContainer}>
                <div className={styles.textContainer}>
                    <TextHolder header={"hej"} text={"hehjeh"}/>
                    <TextHolder header={"hej2"} text={"hehj3eh"}/></div>
                </div>
            <div className={styles.halfContainer}>
                <ImageHolder/>
            </div>
            
        </div>
    )
}

export default StartPage
