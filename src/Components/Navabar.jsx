import React from 'react'
import { Link } from 'react-router-dom'

function Navabar() {
  return (
<div>
<nav className="navbar navbar-expand-md navbar-dark navbar-dark-custom p-3">
    <div className="container-fluid">
        <Link className="navbar-brand" to="/home">Home</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">  
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/business">Business</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
</div>
  )
}

export default Navabar