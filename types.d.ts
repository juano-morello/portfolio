export interface Project {
    title: string
    description: string
    technologies?: Technology[]
    slug: string
}

export interface Technology {
    name: string
    logo: string
}