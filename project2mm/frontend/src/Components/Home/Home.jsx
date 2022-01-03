import React, { useEffect, useState } from 'react'
import axios from "axios"
import Item from './../Item/Item';
import Navbar from './../Navbar/Navbar';
import { NavLink } from 'react-router-dom';
import style from "./Home.module.css"

export default function Home() {

const [profileImg, setprofileImg] = useState('')
const [imagesArr, setimagesArr] = useState([])

    async function getImagesUrl() {
    let response =await axios.get(`http://localhost:5000/`)
        setimagesArr(response.data)
        console.log(response.data)
}

useEffect(() => {
    getImagesUrl();
}, [])

    function serch(e) {
        let x = e.target.value; //اسم القهوة
        let newArr = imagesArr.filter((item)=>item.name ==x );
        setimagesArr(newArr)
    }

    let imageHandler = (e) => {// event 
        let reader = new FileReader(); //path ( place of my image )

    reader.onload = () =>{
        if (reader.readyState === 2) {// check image found or not in my computer
            console.log(reader.result)
            setprofileImg(reader.result) // result carry path of my image 
            let newImgs = [...imagesArr] // carry 8 photos 
            newImgs.push({ name: "new ", imageurl: reader.result })// newImgs carry 9 photos 
            setimagesArr(newImgs)
    }
}
                    //=========     token 
        reader.readAsDataURL(e.target.files[0]) // e.target = my input , e.target.files ==> array carry current photo ...files[0]==> cuurent photo >> e.terget.filees[0]==> my token
    };
    
    return (
        
        <>
            <Navbar myFunction={serch} />
            <div  className={style.test}>
            <div className=" w-100 text-center fw-bold"><h1 className="fw-bold">Welcome </h1> </div>
            <button className="btn btn-danger px-5 fw-bold"><NavLink className="nav-link" to="/videos"><i class="fas fa-play   text-info"></i> </NavLink></button>
            </div>

            <div className="wrapperForCards"> 
            <div className="container">
                <div className="row mt-5">
                {/* <div class="col-md-5 col-md-offset-2"></div> */}

                {imagesArr.map((item, index) =>  <Item  key={index} itemInfo={imagesArr[index]} />)}
            </div>
            </div>
            </div>
                <div className="">
                            <div className=" ">
                                <input className={style.shatha} type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
                                <div className="label">
                            </div>
                    </div>
            </div>
        </>
    )
}
