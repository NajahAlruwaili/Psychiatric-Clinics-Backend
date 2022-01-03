import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(props) {

    
    return (
    <div>
  <nav style={{boxShadow:"1px -5px 10px black"}} className="navbar navbar-expand-md navbar-light bg-light ">
    <div className="container">
      <a style={{fontSize:"30px",color:"brown"}} className="navbar-brand fw-bold  " to="#">Corner coffee</a>
      <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item mx-4 active">
            <NavLink className="nav-link" to="/home"> <i className="fa fa-home fa-2x text-info"></i> <span className="visually-hidden">(current)</span></NavLink>
          </li>
        
          <li className="nav-item mx-4 active">
            <NavLink className="nav-link" to="/notification"> <i class="fas fa-bell fa-2x text-info"></i></NavLink>
          </li>
          <li className="nav-item mx-4 active">
            <NavLink className="nav-link" to="/videos"><i class="fas fa-play fa-2x  text-info"></i> </NavLink>
          </li>
          <li className="nav-item mx-4 active">
            <NavLink className="nav-link" to="/setting"><i class="fas fa-cog fa-2x text-info"></i> </NavLink>
          </li>
          
        </ul>
        <div  className="d-flex my-2 my-lg-0">
        <input onChange={props.myFunction} className="form-control me-sm-2" type="text" placeholder="Search" />
        <button  className="btn btn-outline-success my-2 my-sm-0" >Search</button>
        </div>
            <NavLink className="nav-link text-light fs-5 fw-bold  ms-4 text-dark" to="/login"> Log in <i class="fas fa-user-check text-dark"></i> </NavLink>
    </div>
    </div>
</nav>
</div>

    )
}
