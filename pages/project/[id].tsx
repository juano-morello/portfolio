import React from "react";
import fetchProjects from "../../code/fetchProjects";
import {Project} from "../../types";
import fetchProjectById from "../../code/fetchProjectById";
import {Params} from "next/dist/server/router";
import Link from "next/link";

interface ProjectPageProps {
    project: Project
}

const ProjectPage: React.FC<ProjectPageProps> = ({project}: ProjectPageProps) => {
    return (
        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">{project.title}</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">{project.description}</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Link href={'/projects'}>
                        <a className="btn btn-secondary btn-lg">Go back</a>
                    </Link>
                </div>
            </div>
        </div>)
}

export async function getStaticPaths() {
    const projects = fetchProjects()
    const paths = projects.map((project) => ({
        params: {id: project.slug},
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}: Params) {
    const project = fetchProjectById(params.id) as Project

    return {
        props: {project}
    }
}

export default ProjectPage