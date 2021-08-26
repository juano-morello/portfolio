import React from "react"
import Link from 'next/link'

interface CardProps {
    title: string
    description: string
    slug: string
}

const Card: React.FC<CardProps> = ({title, description, slug}: CardProps) => {
    return (
        <div className={"card mb-3"}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <Link href={'/project/' + slug}>
                    <a className="btn btn-primary">See details</a>
                </Link>
            </div>
        </div>
    )
}

export default Card