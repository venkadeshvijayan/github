import React, { useState } from 'react'

const Content = () => {
    const[todo,settodo]=useState([]);
    const [savetodo,setsavetodo]=useState();
    
    function texts(event){
        setsavetodo(event.target.value);
    }

    function save(){
        if(savetodo){
            settodo([...todo,savetodo]);
            setsavetodo('');
        }
    }
 function deleted(index){
         const deletetodo=[...todo];
         deletetodo.splice(index,1);
         settodo(deletetodo);
 }
 
  return (
    <div className='contentbox'>
        <input type="text" onChange={texts} value={savetodo}/>
        <button onClick={save}>Addtodo</button>
        <ul>
            {todo.map((item,index)=>(
                <div className='licontent'>
                <li key={index}>{item}</li>
                <button onClick={()=>(deleted(index))}>Delete</button>

                </div>
            ))}
        </ul>
    </div>
  )

}

export default Content