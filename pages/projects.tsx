import React from 'react'
import Card from '../components/card/Card'
import {Project} from "../types";
import {NextPageContext} from "next";
import fetchProjects from "../code/fetchProjects";

interface ProjectPageProps {
    projects: Project[]
}

const Projects: React.FC<ProjectPageProps> = ({projects}: ProjectPageProps) => {
    return (
        <div>
            <h1>Projects</h1>
            {projects.map((project, index) => {
                return (
                    <div key={index} className="row">
                        <div className={''}>
                            <Card title={project.title} description={project.description} slug={project.slug} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export async function getStaticProps(context: NextPageContext) {
    const projects = fetchProjects()

    return {
        props: {projects}
    }
}

export default Projects