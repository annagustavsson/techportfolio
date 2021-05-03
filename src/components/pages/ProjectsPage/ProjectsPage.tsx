import React from 'react'
import ProjectCard from "../../common/ProjectCard/ProjectCard"
import styles from "./projectsPage.module.scss"

interface Props {
    
}

const ProjectsPage = (props: Props) => {

    const projects = [{name: "Stockholm student housing", id: 1}, {name: "inWinetation", id: 2}
, {name: "newsFlash", id: 3}, {name: "SL add-on", id: 4}, {name: "Tech Portfolio", id: 5}];


    return (
        <div className={styles.flexContainer}>
            <div className={styles.projectCardContainer}>

                {projects.map((project) => <ProjectCard key={project.id} id={project.id}/>) }

            </div>
        </div>
    )
}

export default ProjectsPage
