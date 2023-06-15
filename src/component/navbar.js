// Navbar.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ChangePasswordModal from "../page/user/change-password";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import ProfileModal from "../page/user/info";
import {useState} from 'react';
import {Modal} from "react-bootstrap"
export default function Navbar() {


    const navigate = useNavigate() ;
    const user = useSelector((users)=> users.user.currentUser)
    const [openModal, setOpenModal] = useState(false);
    const [repositories, setRepositories] = useState()

    return (
        <div>
            {console.log(user)}
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

                        {/*<ChangePasswordModal></ChangePasswordModal>*/}

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
                             {user.fullName}
                            <img src= {user.avatar}
                                       className="rounded-circle"
                                       height="40" width="40" style={{objectFit:"cover"}} alt="Avatar"/>
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item">
                                <li>
                                    <div>
                                        <Modal
                                            open={openModal}
                                            onClose={() => setOpenModal(false)}/>
                                        <ProfileModal/>
                                    </div>
                                </li>
                            </a>
                             <ChangePasswordModal></ChangePasswordModal>

                            <a className="dropdown-item" href="" onClick={()=>{
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
