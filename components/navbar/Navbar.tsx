import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

interface NavbarLink {
    name: string
    page: string
}

const pageLinks: NavbarLink[] = [
    {name: 'Home', page: '/'},
    {name: 'Projects', page: '/projects'},
    {name: 'Contact me', page: '/contact'},
]

const Navbar: React.FC = () => {
    const router = useRouter()

    function isActive(link: NavbarLink) {
        return link.page == router.pathname
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link href={'/'}>
                        <a className="navbar-brand">Juano Morello</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                pageLinks.map((link, index) => {
                                    return <Link key={index} href={link.page}>
                                        <a className={'nav-link ' + (isActive(link) ? 'active' : '')}>{link.name}</a>
                                    </Link>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar