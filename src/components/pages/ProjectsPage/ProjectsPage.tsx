import React from 'react'
import {useFirebase, Project} from "../../../contexts/FirebaseContext"
import ProjectCard from "../../common/ProjectCard/ProjectCard"
import styles from "./projectsPage.module.scss"
interface Props {
    
}

const ProjectsPage = (props: Props) => {

    const projects: Array<Project> = useFirebase(); 

    return (
        <div className={styles.flexContainer}>
            <div className={styles.projectCardsContainer}>
                {projects.map((project) => <ProjectCard key={project.id} id={parseInt(project.id)} project={project}/>)}
            </div>
        </div>
    )
}

export default ProjectsPage
