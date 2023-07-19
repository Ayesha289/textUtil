import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props){
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode==='light'?'light':'dark'} bg-${props.mode==='light'?'light':'dark'}}`} style={{backgroundColor: `${props.mode==='light'?'white':props.mode==='blue'?'#1a284f':props.mode==='grey'?'#27374D':'#03070b'}`}}>
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                </ul>
                {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" onClick={props.blueToggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Blue Dark Mode</label>
                </div>
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" onClick={props.greyToggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Grey Dark Mode</label>
                </div> */}
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                </div>
            </div>
            </div>
        </nav>
        </>
    );
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here'
}