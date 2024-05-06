import {useEffect, useState} from 'react'
export default function Count (){

    const [value , setValue] = useState(0)

    useEffect(()=>{
        fetch('http://localhost:3500/').then(
         res => res.json()
    ).then((data)=> {
        console.log(data)
        setValue(data.value)
    }).catch((error)=>{
        console.log(error);
    })
    }
    ,[]
    )
    const handlePlus = async () => {
          const res = await fetch("http://localhost:3500/plus");
          const data = await res.json();
          console.log("sssss");
          setValue(data.value);
      };
    const handleMins = async () => {
          const res = await fetch("http://localhost:3500/mins");
          const data = await res.json();
          console.log("sssss");
          setValue(data.value);
      };
    // const handleZero = async () => {
    //       const res = await fetch("http://localhost:3500/zero");
    //       const data = await res.json();
    //       console.log("sssss");
    //       setValue(data.value);
    //   };
    return(
        <>
        <h1 >we are back baby</h1>
        <button  onClick={handlePlus}><h1>+</h1></button>
        <button style={{ backgroundColor:'purple', width:'80px',heigth:'40px',margin:'20px',borderRadius:'15%'}} onClick={handleMins}><h1>-</h1></button>
        {/* <button style={{backgroundColor:'purple', width:'100px',heigth:'40px',margin:'20px',borderRadius:'15%'}} onClick={handleZero}><h1>retsart</h1></button> */}
        {/* <p style={{background :"purple" ,width : "100px" , }}></p> */}
        <h1 style={{background :"purple" ,width : "80px" , margin : 'auto',borderRadius:'10%'}}>{value}</h1>

        </>    
    )
}