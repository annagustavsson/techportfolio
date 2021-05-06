import React from 'react'
import {Project} from "../../../contexts/FirebaseContext"
//import { createAdd } from 'typescript'

import styles from "./projectCard.module.scss"

interface Props {
    id: number
    project: Project
}

const ProjectCard = ({id, project}: Props) => {

    const styling = [{styleId: 1, styleName: styles.ivis},{styleId: 2, styleName: styles.inWinetation}, {styleId: 3, styleName: styles.newsFlash},
    {styleId: 4, styleName: styles.interactionDesign}, {styleId: 5, styleName: styles.techPortfolio} ]

    
    let currentStyle = ""
    styling.forEach((card) => {if(id === card.styleId) {currentStyle = card.styleName}})

    return (
        <div className={styles.cardContainer}>
            <div className={[styles.outerBorder, currentStyle].join(" ")}>
                <div className={styles.topWindow}>
                    <div className={styles.circleBox}>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                    </div>
                    {/* Project logo from context(?) */}
                </div>
            </div>
            <div className={styles.headingText}>{project.name}</div>
        </div>
    )
}

export default ProjectCard
