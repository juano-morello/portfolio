import React from 'react'
import Card from '../components/card/Card'

const projects: {
    title: string
    description: string
    slug: string
}[] = [
    {title: 'Dingo.io',         description: 'Fullstack web development based on a Next.JS with Next.JS API serverless architecture', slug: 'ckskr5dgd000008mk7w5h5v2w'},
    {title: 'Moody',            description: 'Frontend web development with React.JS and Typescript, and working on an integration with a Ruby on Rails API', slug: 'ckskr5jg8000108mk9aza60v7'},
    {title: 'FutbolSites',      description: 'Backend API development with Kotlin and Spring Framework for a mobile APP', slug: 'ckskr5nk4000208mk06krafbx'},
    {title: 'DemandCloud',      description: 'Fullstack microservices development based on Java with Spring Cloud and React.JS with Typescript', slug: 'ckskr5stk000308mkgdbw30o5'},
    {title: 'Enerminds',        description: 'Several backend/fullstack solutions, ranging from .NET and Java microservices', slug: 'ckskr5xha000408mk6cixaqt4'},
    {title: 'Banco Saenz',      description: 'Backend microservices development with Java and Spring Cloud', slug: 'ckskr61yc000508mkfiyxcq1y'},
    {title: 'MisExpensasWeb',   description: 'Fullstack solution with Spring Framework and VueJS', slug: 'ckskr67zx000608mkha5i277c'},
]

const Projects: React.FC = () => {
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

export default Projects