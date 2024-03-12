import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
  let [todolist, setTodolist] = useState([]);

  let savaToDoList = (event)=> {
    let toname = event.target.toname.value;

    if(!todolist.includes(toname)){
      let finaltodolist =[...todolist, toname]
      setTodolist(finaltodolist)
    }else{
      alert('ToDo Name Already exists...');
    }

    event.preventDefault();
  }

  let list = todolist.map((value, index)=>{
    return(
      <ToDoListItems value={value} key={index} indexNumber={index}  
      todolist={todolist} 
      setTodolist={setTodolist}
      />
    )
  })
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={savaToDoList}>
        <input type= "text" name="toname" /> <button>Save</button>
      </form>

      <div className="outerDiv">
        <ul>
          {list}
        
        </ul>
      </div>
    </div>
  )
}

export default App

function ToDoListItems({value, indexNumber, todolist, setTodolist}){

  let deleteRow = ()=>{
    let finalData = todolist.filter((v, i)=>i!=indexNumber)
    setTodolist(finalData)
  }


  return(
    <li>  {value} <span onClick={deleteRow}>&times;</span></li>
  )
}