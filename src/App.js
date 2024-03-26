import React, { useEffect, useState } from "react";


const wining=[
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
]

function App() {
  

  const [cells,setcell]=useState([
    "","","","","","","","",""
  ])

  const[go,setgo]=useState("circle")
  
  const[winingmessg,setwinigmessg]=useState("")

  useEffect(()=>{
    wining.forEach((combo)=>{
      
    const circlewin=combo.every((cell)=>cells[cell]==="circle")
    const crosswin=combo.every((cell)=>cells[cell]==="cross")

    if(circlewin){
      setwinigmessg("circl win")
      
    }
    else if(crosswin){
      
      setwinigmessg("cross win")
      
    }

    },[cells])
  })


  return (
    <div className="App">
    
    <div className="gamboard">

    {cells.map((cell,index)=>{

      const handelclick=()=>{

        const taken=!cells[index]

        if(taken){
          if(go==="circle"){
            cells[index]="circle"
            setgo("cross")
          }
          else{
            cells[index]="cross"
            setgo("circle")
          }
          }
          

        }

      return(
        <div className='square' onClick={handelclick} key={index}>
        <div className={cell}>{cell?(cell==="circle"?"O":"x"):""}</div>
        </div>
        
      )
    })}
    
    </div>
    <h1>{go} has to play</h1>
    <h1 className="winingmessege">{winingmessg}</h1>
    </div>
  );
}
export default App;
