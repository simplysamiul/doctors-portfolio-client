import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link ms-5 active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5 active" aria-current="page" href="/about">About</a>
                        </li><li class="nav-item">
                            <a class="nav-link ms-5 active" aria-current="page" href="services">Dental Services</a>
                        </li><li class="nav-item">
                            <a class="nav-link ms-5 active text-white" aria-current="page" href="reviews">Reviews</a>
                        </li><li class="nav-item">
                            <a class="nav-link ms-5 active text-white" aria-current="page" href="blogs">Blogs</a>
                        </li><li class="nav-item">
                            <a class="nav-link ms-5 active text-white" aria-current="page" href="contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;