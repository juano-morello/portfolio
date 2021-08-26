import json from './projects.json'

const fetchProjectById = (id: string) => {
    return json.find(project => project.slug == id)
}

export default fetchProjectById