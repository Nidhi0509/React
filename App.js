import React from "react";
//import Student from "./Student";
import Employee from "./Employee";
function App(){
  return(
    <>
    {/*<Student name='Nidhi Arora' age='21' course='MBA'/>
    <Student name='Meenal' age='21' course='MBA'/>*/ }
    <Employee Name='Pankaj' Id='100' Department='IT' Basic='10000' HRA='2000' MiscAllowance='1000'/>
    </>
  )
}export default App;
/*import './App.css';

function App(){
const emp=[
  {id:1,Name:'Nidhi Arora',City:'Delhi'},
  {id:1,Name:'Meenal Singh',City:'UP'}

]
emp.map(({id,Name, City})=>{ 

  console.log(`${id} ${Name} ${City}`)

});
return(
  <div className="App">
    <h1>List of employees</h1>
   

 

  </div>
)
}*/



