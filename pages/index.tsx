import React from 'react'

const Home: React.FC = () => {
    return (
        <div className="px-4 py-5 my-5 text-center hero">
            <h1 className="display-5 fw-bold">{`Hello there! My name is Juano Morello`}</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">{`I'm an full stack software developer and a Java, NodeJS and React.JS specialist. I invite you to take a look into the projects I've been working on`}</p>
            </div>
        </div>
    )
}

export default Home
