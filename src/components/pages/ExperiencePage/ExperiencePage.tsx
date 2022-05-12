import React from 'react'
import styles from "./experiencePage.module.scss";
import { ExperienceCard } from '../../common/ProjectCard/ExperienceCard/ExperienceCard';

const ExperiencePage = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.flexBox}>
                <span className={styles.heading}>Industry experiences</span>
                <ExperienceCard title="Master thesis" company='Hejare' description='Master thesis spring 2022' />
                <ExperienceCard title="Web developer" company="We Know IT" description="Worked as a front-end developer at a start-up helping to build the mobile application. 
Technologies: TypeScript | React | Ionic" />
                <ExperienceCard title="Web Developer" company="THS Armada" description='Technologies: React.js | JavaScript | Gatsby | SCSS' />
                <ExperienceCard title="Software Engineer Intern" company="Spotify" description="Implemented a full-stack solution for communicating with Github Rest API, where I used TypeScript and React.js in the frontend and Java and gRPC in the backend. As a part of the project, I also contributed to an open-source library written in Java. " />
                <ExperienceCard title="Software Engineer Intern" company="Epiroc" description="Built a Grafana plugin visualizing real-time data from influxDB in Grafana, making the data more secure and the visualizing process more dynamic - by allowing users to view data without needing to query on influxDB. Some of the used languages and technologies: Go, TypeScript, React.js, Grafana, gRPC. " />
            </div>
            {/* <div className={styles.flexBox}>
                <span className={styles.heading}>Blabla</span>
            </div> */}
        </div>

    )
}

export default ExperiencePage
