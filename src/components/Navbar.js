import {Link} from "react-router-dom";

export default function NavBar(){
    return(
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-white">
            <div class="container-fluid">
                <a class="navbar-brand text-primary" href="/">
                    <strong>Ardana</strong> Rahadiyan Darojat
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class ="nav me-3 ms-3 d-flex justify-content-center">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class ="nav me-3 ms-3 d-flex justify-content-center">
                            <a class="nav-link" href="/about">About Me</a>
                        </li>
                        <li class ="nav me-3 ms-3 d-flex justify-content-center">
                            <a class="nav-link" href="/experience">Experience</a>
                        </li>
                        <li class ="nav me-3 ms-3 d-flex justify-content-center">
                            <a class="nav-link" href="/skills">Skills</a>
                        </li>
                        <li class ="nav me-3 ms-3 d-flex justify-content-center">
                            <a class="nav-link" href="/interest">Interest</a>
                        </li>
                        <li class ="nav me-3 ms-3 d-flex justify-content-center">
                            <a class="nav-link" href="/awards">Awards</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}