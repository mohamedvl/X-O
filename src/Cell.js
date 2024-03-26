import React from 'react'

const Cell = ({go,setgo,id,cells,setcell,cell}) => {
    
    const handelclick=(e)=>{
        const nottaken=!cells[id]

        
        if(nottaken){
        if(go==="circle"){
            cells[id]="circle"
            setgo("cross")
        }
        else{
            cells[id]="cross"
            setgo("circle")
        }
        }

    }
    
  return (
    <div></div>
  )
}

export default Cell