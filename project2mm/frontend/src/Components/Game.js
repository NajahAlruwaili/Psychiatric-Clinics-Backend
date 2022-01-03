import React , {useState} from 'react'
import "./Game.css"

export default function Game() {


    const [carts1, setCarts1] = useState([
        {id: 1 , name:"A" , img:"https://lh3.googleusercontent.com/proxy/VBrVBC-lsEwXx-eCZV2e00xE8XyTB6VtYm3yua5P8zGwKqJR3TSZB2N5NwFsLA2yFyisqjym5-yOcRtFMwpoiPgJDgRlU7oAE7D4-w" , show : false , isTrue : false} , 
        {id: 2 , name:"A" , img:"https://lh3.googleusercontent.com/proxy/VBrVBC-lsEwXx-eCZV2e00xE8XyTB6VtYm3yua5P8zGwKqJR3TSZB2N5NwFsLA2yFyisqjym5-yOcRtFMwpoiPgJDgRlU7oAE7D4-w" , show : false , isTrue : false} , 
        {id: 3 , name:"B" , img:"https://3.bp.blogspot.com/-h_23Y317drI/VtZIGsdIXbI/AAAAAAAABww/DGy9DjRzts4/s1600/snapchat-%25D8%25B5%25D9%2588%25D8%25B1.png" , show:false , isTrue : false} ,
        {id: 4 , name:"B" , img:"https://3.bp.blogspot.com/-h_23Y317drI/VtZIGsdIXbI/AAAAAAAABww/DGy9DjRzts4/s1600/snapchat-%25D8%25B5%25D9%2588%25D8%25B1.png" , show:false , isTrue : false},
    {id:5 , name:"C" , img:"https://play-lh.googleusercontent.com/jOJjgUYcT7EwtHahGDdrVwWOjztmGhzBXVEhXC2icKjKQmRw9E4HQ_Hgkr-VjGNbtw" , show:false , isTrue : false} ,  
    {id:6 , name:"C" , img:"https://play-lh.googleusercontent.com/jOJjgUYcT7EwtHahGDdrVwWOjztmGhzBXVEhXC2icKjKQmRw9E4HQ_Hgkr-VjGNbtw" , show:false , isTrue : false},
{id:7 , name:"D" , img: "https://arabiapps.net/wp-content/uploads/2021/07/instagram-logo-1.png" , show:false , isTrue : false},
{id:8 , name:"D" , img: "https://arabiapps.net/wp-content/uploads/2021/07/instagram-logo-1.png" , show:false , isTrue : false}])


   const [selct, setSelct] = useState(null) //first click obj
 
   
   

  
  
    // ======== (Event) =======
    const onClickCart = (i , obj) => {
        console.log(carts1);
       
         // يعبر عن الكرت الاول , قيمة 
         //
        if (selct === null){
            console.log("clicked 1");
            setCarts1(carts1.map((ele)=>{
                if(ele.id === obj.id){
                    return {...ele  , show:true}
                }else {
                    return ele
                }
            }))

            setSelct(obj)
        }

    

        if (selct !== null){
           
            console.log("click 2");
            setCarts1(carts1.map((ele)=>{
                if(ele.id === obj.id){
                    return {...ele  , show:true}
                }else {
                    return ele
                }
            }))

            //شرط المقارنه اذا كان متشابهين او لا
             if (selct.name == obj.name) {
                console.log("true");
               
                setTimeout(()=> {
                    setCarts1(carts1.map((eleee)=>{   
                        if(eleee.id  === obj.id || eleee.id === selct.id){
                            return {...eleee  , show:true, img:"https://www.shareicon.net/data/256x256/2016/08/20/817720_check_395x512.png" } 
                        } else {
                            return eleee
                        }
                    }))   

                } , 500)

            // اذا كان غير متشابهين
            }else {
                console.log("false");
                setTimeout(()=> {
                    setCarts1(carts1.map((ele)=>{
                        if(ele.id === obj.id || ele.id === selct.id){
                            return {...ele  , show:false } 
                        }else {
                            return ele
                        }
                    }))
                } , 1000)

            
                
            }
           
        }

        if (selct !== null) {
        setSelct(null)
        } 
    }


    

  
  

    const main = () => {
        return <div className="container">
            { carts1.map((elem , i) => {
            return elem.show === false 
            ? 
            <div id={"cart"+i} key={i} className='cart' onClick={(e) => {onClickCart(i,elem)}}>    
            </div> 
            :
            <div id={"cart"+i} key={i} className='cart' onClick={(e) => {onClickCart(i,elem)}}>  
            <img id='image' src={elem.img} width={150} height={170} alt="" />
            </div>
        }) }
        </div> 
    }

    

    // const StartGame = () => {
    //     const coop = [...carts1]
    //     coop.forEach((element,i) => {
    //         if (element.isTrue === false ){
    //             element.show = false
    //         }
    //     });

    //     setCarts1(carts)

    //     const list = [...carts1]
    //    const arrRnd =  list.sort(() => Math.random() - 0.5)
    //    console.log(carts1);
       
    //    setCarts1(arrRnd)

    // }

    
    return (
        
        <div className='main'>
            
            {/* <button onClick={()=> {StartGame()}}>Start Game</button> */}
            {main()}
            
        </div>
    
    )
}
// if (copyCarts[i] == "A") {
    //     copyCarts[i] = "B"
    //     setCarts(copyCarts)
    //     // e.target.style.background = "red"
    //     if (selectCart1[0] == false) {
    //         setSelectCart1(true , i , e)
    //     }else if (selectCart1[0] == true && selectCart2[0] == false){
    //         setSelectCart2(true , i , e)
    //     }
    // }else{
    //     copyCarts[i] = "A"
    //     setCarts(copyCarts)
    //     e.target.style.background = "white"
    // }