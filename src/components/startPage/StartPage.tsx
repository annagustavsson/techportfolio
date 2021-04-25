import React from 'react'
import ToggleMenu from "../ToggleMenu/ToggleMenu"
import ImageHolder from "./ImageHolder/ImageHolder"
import TextHolder from "./TextHolder/TextHolder"
import styles from "./startPage.module.scss"



interface Props {
    
}

const StartPage = (props: Props) => {

    const helloHeading: string = "Hello there.";
    const helloText: string = "My name is Anna. I’m a Stockholm based developer with a passion for good design and creating unforgettable experiences. ";
    const skillsHeading: string = "Top skills"
    const skillsText: string = "JavaScript Python React.js CSS"
    
    return (    
        <div className={styles.flexContainer}>
            <div className={styles.toggleContainer}>
                <ToggleMenu text="About"/>
                <ToggleMenu text="Projects"/>
            </div>
            <div className={styles.halfContainer}>
                <div className={styles.textContainer}>
                    <TextHolder header={helloHeading} text={helloText}/>
                    <TextHolder header={skillsHeading} text={skillsText}/></div>
                </div>
            <div className={styles.halfContainer}>
                <ImageHolder/>
            </div>
            
        </div>
    )
}

export default StartPage
