import React from "react";
import {useRouter} from "next/router";

const Project: React.FC = () => {
    const router = useRouter()

    const projectSlug = router.query.slug?.at(0)
    return (<div>
        <h1>Project: {projectSlug}</h1>
    </div>)
}

export default Project