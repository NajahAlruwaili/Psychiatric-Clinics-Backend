import React, { useState } from 'react'
import Navbar from './../Navbar/Navbar';
import video from "./WhatsApp Video 2021-11-16 at 11.49.11 PM.mp4"
import videotow from "./WhatsApp Video 2021-11-16 at 11.49.20 PM.mp4"
import photo from "../images/new.jpg"



export default function Videos() {
        const [checked, setchecked] = useState(false)
        const [secondCheck, setsecondCheck] = useState(false)
    

    let changeCheck = () => {
        if (checked === false) {
            setchecked(true)
        }
        else {
            setchecked(false)
        }
        
    }
    let changeCheck2 = () => {
        if (secondCheck === false) {
            setsecondCheck(true)
        }
        else {
            setsecondCheck(false)
        }
        
    }
    return (
        <div>
            <Navbar />
        <div className=" my-5">
                <div className="row justify-content-around">
                    {/* div */}
                    <div  className="col-md-6 p-4">
                        <div style={{borderRadius:"20px",boxShadow:"1px 1px 20px teal"}} className="App bg-dark ">
                            {/* title */}
                            <div className="title d-flex justify-content-between align-items-center text-dark px-3 pt-2">
                                    <div className="  d-flex justify-content-center align-items-center">
                                        <img  className="rounded-circle mb-1 border border-4 border-light" src={photo} width="60px" height="60px"  alt="not found" />
                                        <h3 className="ps-2 text-light">shatha</h3>
                                    </div>
                            </div>
                            {/* title */}
                            {/* video */}
                                <p className="bg-dark text-light px-4 ">Learn how to make v60 coffee ..</p>
                                <video style={{backgroundColor:"#ffd"}} className="App" width="100%" height="500px" controls autoplay >
                                    <source src={video} type="video/mp4"/>
                                    not found
                            </video>
                            {/*end  video */}
                            {/* like */}
                            <div className="d-flex justify-content-around " style={{height:"50px ",borderBottomLeftRadius:"40px",borderBottomRightRadius:"40px" }}  >
                                <i className="fas fa-share fa-2x text-light"></i>
                                <i className="fas fa-comment  text-light fa-2x"></i>
                                
                                {checked ?<i onClick={changeCheck} style={{color:"red"}} className="fas fa-heart fa-2x"></i>:<i onClick={changeCheck}  className="fas fa-heart  text-light fa-2x"></i>}
                            </div>
                            {/* end like */}
                        </div>
                    </div>
                    <div  className="col-md-6 p-4">
                        <div style={{borderRadius:"20px",boxShadow:"1px 1px 20px teal"}} className="App bg-dark ">
                            {/* title */}
                            <div className="title d-flex justify-content-between align-items-center text-dark px-3 pt-2">
                                    <div className="  d-flex justify-content-center align-items-center">
                                        <img  className="rounded-circle mb-2 border border-4 border-light" src={photo} width="60px" height="60px"  alt="not found" />
                                        <h3 className="ps-2 text-light">shatha</h3>
                                    </div>
                            </div>
                            {/* title */}
                            {/* video */}
                                <p className="bg-dark text-light px-4 ">Learn how to make flat white coffee</p>
                                <video style={{backgroundColor:"#ffd"}} className="App" width="100%" height="500px" controls autoplay >
                                    <source src={videotow} type="video/mp4"/>
                                    not found
                            </video>
                            {/*end  video */}
                            {/* like */}
                            <div className="d-flex justify-content-around " style={{height:"50px ",borderBottomLeftRadius:"40px",borderBottomRightRadius:"40px" }}  >
                                <i className="fas fa-share fa-2x text-light"></i>
                                <i className="fas fa-comment  text-light fa-2x"></i>
                                
                                {secondCheck ?<i onClick={changeCheck2} style={{color:"red"}} className="fas fa-heart fa-2x"></i>:<i onClick={changeCheck2}  className="fas fa-heart  text-light fa-2x"></i>}
                            </div>
                            {/* end like */}
                        </div>
                    </div>
                    
                </div>
                </div>
        </div>
        
    )
}
 