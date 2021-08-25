import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#!">IIT(BHU)CyberSec</a>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav mr-auto mt-2 mt-md-0">
                        <li class="nav-item active">
                            <Link className="nav-link" to="/">Home
                                <span class="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to='/about'>About Us</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs">Blogs</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search" />
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
