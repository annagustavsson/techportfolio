import React from 'react'
import { createAdd } from 'typescript'
import styles from "./projectCard.module.scss"

interface Props {
    id: number
}

const ProjectCard = ({id}: Props) => {

    const styling = [{styleId: 1, styleName: styles.ivis},{styleId: 2, styleName: styles.inWinetation}, {styleId: 3, styleName: styles.newsFlash},
    {styleId: 4, styleName: styles.interactionDesign}, {styleId: 5, styleName: styles.techPortfolio} ]

    
    let currentStyle = ""
    styling.forEach((card) => {if(id === card.styleId) {currentStyle = card.styleName}})

    return (
        <div>
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
            {/* name should be from context */}
            <div>Project name</div>
        </div>
    )
}

export default ProjectCard