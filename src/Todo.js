import React,{useState} from 'react';
import './Todo.css';
import { BsSearch } from 'react-icons/bs';
import {AiOutlineCloseCircle} from 'react-icons/ai';
function Todo() {
  
  const [inputlist,setinputlist]=useState("");
  const [todolist,settodolist]=useState([]);
  
  const updateInput=(event)=>{
    setinputlist(event.target.value);
  };

  const additionInput=()=>{
    var data=inputlist;
    settodolist((olditems)=>{
      return [...olditems,inputlist];
    });
   
  };

  const deletionInput=(index)=>{
  

     console.log(todolist);
    
     settodolist(todolist.filter((arraye,idx)=>{
       return index!==idx;
     }));
    };
  return (
    <div id="App">
      <div className="heading1">TODO</div>
      <div className="heading2">LIST</div>
      <div id="TODO-LIST">
      <h1>TODO LIST</h1>
      <div id="name-with-search">
        <input name="todo_name" placeholder="Add the TODO" onChange={updateInput} id="input"/>
        <div id="Search" onClick={additionInput}><BsSearch /></div>
      </div>
      <div>
        {todolist.map((item,idx)=>{
           return <div id="items">    
              <div id="delete" onClick={()=>{deletionInput(idx)}}><AiOutlineCloseCircle/></div><li key={item.uid}>{item}</li> </div>;
        })}  
      </div>

      </div>
    </div>
  );
}

export default Todo;
