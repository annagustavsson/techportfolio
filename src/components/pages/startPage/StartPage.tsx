import React from 'react'
import { useHistory } from "react-router-dom";
import ToggleMenu from "../../ToggleMenu/ToggleMenu"
import ImageHolder from "./ImageHolder/ImageHolder"
import TextHolder from "./TextHolder/TextHolder"
import styles from "./startPage.module.scss"
import arrowIcon from "../../../resources/icons/arrow.svg"


interface Props {

}

const StartPage = (props: Props) => {

    let history = useHistory()


    // how this is implemented could could be improved
    const helloHeading: string = "Hi there.";
    const helloText: string = "My name is Anna. I’m a Stockholm-based software developer with a passion good design and creating unforgettable experiences.";
    const skillsHeading: string = "Top skills"
    const skillsText: string = "TypeScript JavaScript Python React.js CSS"

    return (
        <div className={styles.flexContainer}>
            <div className={styles.halfContainer}>
                <div className={styles.textContainer}>
                    <div><TextHolder header={helloHeading} text={helloText} /></div>
                    <div><TextHolder header={skillsHeading} text={skillsText} /></div>
                </div>
            </div>
            <div className={styles.halfContainer}>
                <ImageHolder />
                {/* <img onClick={() => history.push("/projects")} className={styles.arrow} src={arrowIcon} /> */}
            </div>

        </div>
    )
}

export default StartPage
