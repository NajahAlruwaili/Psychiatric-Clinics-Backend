import React from 'react'
import Navbar from './../Navbar/Navbar';

export default function Login() {
    return (
        <>
           <Navbar/>
        <div className="vh-100 d-flex text-light justify-content-center align-items-center ">
            <div style={{ height:"450px ", borderRadius:"15px "}} className=" p-2 col-md-3 bg-dark text-center pt-3  ">
                <h4 >Email</h4>
                <input className="form-control mb-5 w-75 m-auto" />
                <h4> Password </h4>
                <input type="password" className=" m-auto mb-5 form-control w-75 m-3" />
                <button className=" btn btn-info px-5 fw-bold py-1"> log in </button>
                <p className="mt-2 mb-5"> Register </p>
                <h6> Forget password?</h6>
            </div>
        </div>
        </>
    )
}
