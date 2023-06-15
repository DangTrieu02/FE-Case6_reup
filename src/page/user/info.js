// ChangePasswordModal.js
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export default function ProfileModal() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = React.useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = (e) => {
        e.preventDefault()
        setShowModal(true)
    };

    const dispatch = useDispatch();
    const user = localStorage.getItem("user");


    const parsedUser = useSelector((users) =>{
        return users.user.currentUser;
    })
    return (
        <div>
            {console.log(parsedUser)}
            <a className='modalButton dropdown-item' onClick={handleShow}>
                Show Profile
            </a>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>PROFILE</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <main id="main">
                        <section className="agent-single">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="agent-avatar-box"  >
                                                    <img
                                                        style={{objectFit:"cover" , width:"100px", height:"100px" , borderRadius:"50%"   }}
                                                        src={parsedUser &&  parsedUser.avatar}
                                                        alt=''
                                                        className="agent-avatar img-fluid"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-8 section-md-t3">
                                                <div className="agent-info-box">
                                                    <div className="agent-title">
                                                        <div className="title-box-d">
                                                            <h4 className="title-d">
                                                                {parsedUser && parsedUser.fullName}
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="agent-content mb-3">
                                                        <div className="info-agents color-a">
                                                            <p>
                                                                <strong>Username: </strong>
                                                                <span className="color-text-a"> { parsedUser && parsedUser.username} </span>
                                                            </p>
                                                            <p>
                                                                <strong>Role: </strong>
                                                                <span className="color-text-a"> { parsedUser && parsedUser.role} </span>
                                                            </p>
                                                            <p>
                                                                <strong>Phone: </strong>
                                                                <span className="color-text-a"> { parsedUser && parsedUser.phoneNumber} </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="socials-footer">
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item">
                                                                <a href="https://www.facebook.com/" className="link-one">
                                                                    <i className="bi bi-facebook" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a href="https://www.facebook.com/" className="link-one">
                                                                    <i className="bi bi-twitter" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a href="https://www.instagram.com/" className="link-one">
                                                                    <i className="bi bi-instagram" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a href="#" className="link-one">
                                                                    <i className="bi bi-linkedin" aria-hidden="true" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <Button variant="contained" onClick={handleClose}>Cancel</Button>
                                                <Button variant="contained">Update</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row property-grid grid">
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* End Agent Single */}
                    </main>
                </Modal.Body>
            </Modal>
        </div>
    );
}