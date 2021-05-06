import React from 'react'
import {useFirebase, Project} from "../../../contexts/FirebaseContext"
import ProjectCard from "../../common/ProjectCard/ProjectCard"
import styles from "./projectsPage.module.scss"
interface Props {
    
}

const ProjectsPage = (props: Props) => {

    const projects: Array<Project> = useFirebase(); 

    console.log(projects, "firebase context", typeof(projects))

    const myProjects = [{name: "Stockholm student housing", id: 1}, {name: "inWinetation", id: 2}
    , {name: "newsFlash", id: 3}, {name: "SL add-on", id: 4}, {name: "Tech Portfolio", id: 5}];

    console.log(myProjects, "lokalt", typeof(myProjects))

    console.log(myProjects)
    console.log(projects)
    return (
        <div className={styles.flexContainer}>
            <div className={styles.projectCardsContainer}>
                {/* {myProjects.map((project) => <ProjectCard key={project.id} id={project.id}/>) } */}
                {/* {projects.map((project) => <ProjectCard key={project.id} id={project.name}/>) } */}
                {projects.map((project) => <ProjectCard key={project.id} id={parseInt(project.id)} project={project}/>)}
            </div>
        </div>
    )
}

export default ProjectsPage
