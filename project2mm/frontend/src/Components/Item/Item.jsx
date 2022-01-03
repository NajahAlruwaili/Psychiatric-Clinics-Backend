import React, { useState,useEffect } from 'react'
import axios from 'axios';

// ==========================
export default function Item({ itemInfo }) {
    const [checked, setchecked] = useState(false)
    let { imageurl, name } = itemInfo;
    useEffect(() => {

      let  checked = async () =>{
        let response = await axios.get(`http://localhost:5000/like/${itemInfo.id}`)
           setchecked(response.data)
      }
      checked()
    }, [])


    let changeCheck =async () => {
        let response = await axios.post(`http://localhost:5000/like/${itemInfo.id}`)
        
        if (checked === false) {
            setchecked(true)
        }
        else {
            setchecked(false)
        }
    }
    
    let delCheck =async () => {
        let response = await axios.delete(`http://localhost:5000/like/${itemInfo.id}`)
        
        if (checked === false) {
            setchecked(true)
        }
        else {
            setchecked(false)
        }
    }

    return (
<>
            <div style={{backgroundColor:"white"}} className="col-md-4 mb-5 p-2">
                <div  className="main-item  ">
                <div style={{ borderRadius:"40px"}} className="m-auto border border-5 border-black pt-2 ps-2 pe-2 shadow-lg shadow-dark mb-3 text-light">
            {/* title */}
            <div className="title d-flex justify-content-between align-items-center text-dark">
                <div className="  d-flex justify-content-center align-items-center">
                    <img  className="rounded-circle mb-2 border border-4 border-light" src={itemInfo.imageurl} width="60px" height="60px"  alt="not found" />
                    <h3 className="ps-2">{ itemInfo.name}</h3>
                </div>
                </div>
                {/* image  */}
            <div  className="col-md-10 m-auto ">
                <div className="item">
                    <img style={{ height:"400px",borderRadius:"20px"}} className="w-100" src={itemInfo.imageurl}   alt="not found" />
                    <h6>{itemInfo.title}</h6>
                    </div>
                </div>
                {/* like  */}
                <div className="d-flex justify-content-around " style={{height:"50px ",borderBottomLeftRadius:"40px",borderBottomRightRadius:"40px" }}  >
                    <i className="fas fa-share fa-2x text-dark"></i>
                    <i className="fas fa-comment text-dark fa-2x"></i>
                    
                    {checked ?<i onClick={delCheck} style={{color:"red"}} className="fas fa-heart fa-2x"></i>:<i onClick={changeCheck} className="fas fa-heart text-dark fa-2x"></i>}
                        </div>
            </div>
        </div>
        </div>

            
            </>
    )
}
