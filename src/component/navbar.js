// Navbar.js
import React, {useState} from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import ChangePasswordModal from "../page/user/change-password";
<<<<<<< HEAD
import {Modal} from "react-bootstrap";
import ProfileModal from "../page/user/profileModal";

export default function Navbar() {
    const [openModal, setOpenModal] = useState(false);
    const [repositories, setRepositories] = useState()
    const navigate = useNavigate();

    const user = localStorage.getItem("user");
    const parsedUser = JSON.parse(user);
    const handleLogout = () => {
        localStorage.removeItem('access-token');
        localStorage.removeItem('user');

        navigate('/login')
    }
=======
import {useNavigate} from "react-router-dom";


export default function Navbar() {
    const navigate = useNavigate() ;

>>>>>>> fec00ca75dff1cbeec5016a7057c164532b75c73
    return (
        <div>
            <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
                <div className="container">
                    <button
                        className="navbar-toggler collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarDefault"
                        aria-controls="navbarDefault"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <Link to="/" className="navbar-brand text-brand">
                        Estate<span className="color-b">Agency</span>
                    </Link>

                    <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink exact to="/" className="nav-link" activeClassName="active">
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link" activeClassName="active">
                                    About
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/property-grid" className="nav-link" activeClassName="active">
                                    Property
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/blog-grid" className="nav-link" activeClassName="active">
                                    Blog
                                </NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Pages
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="property-single.html">
                                        Property Single
                                    </a>
                                    <a className="dropdown-item" href="blog-single.html">
                                        Blog Single
                                    </a>
                                    <a className="dropdown-item" href="agents-grid.html">
                                        Agents Grid
                                    </a>
                                    <a className="dropdown-item" href="agent-single.html">
                                        Agent Single
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link" activeClassName="active">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <button
                        type="button"
                        className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01"
                    >
                        <i className="bi bi-search"></i>
                    </button>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle d-flex align-items-center" href="#"
                               id="navbarDropdownMenuLink"
                               role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                <div><img src= "https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg"
                                          className="rounded-circle"
                                          height="40" width="40" style={{objectFit:"cover"}} alt="Avatar"/></div>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <div>
                                        <Modal
                                            open={openModal}
                                            onClose={() => setOpenModal(false)}/>

                                        <ProfileModal/>
                                    </div>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Settings</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#" onClick={handleLogout}>Logout</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ChangePasswordModal/>
                    <div className="nav-item dropdown">
                         <a
                             className="nav-link dropdown-toggle"
                             href="#"
                             id="navbarDropdown"
                             role="button"
                             data-bs-toggle="dropdown"
                             aria-haspopup="true"
                             aria-expanded="false"
                         >
                            Info
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="property-single.html">
                                profile
                            </a>
                             <ChangePasswordModal></ChangePasswordModal>
                            <a className="dropdown-item" href="" onClick={()=>{
                                localStorage.removeItem("access-token");
                                localStorage.clear()
                                navigate("/")
                            }}>
                                Log out
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
