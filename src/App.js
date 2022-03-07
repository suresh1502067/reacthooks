import React,{useEffect} from 'react'

import logo from './logo.svg';
import './App.css';
import moment from 'moment'


const tableCloumn=['id','firstname','lastname',]

const dataSource=[
  {
    id:1,
    firstname:'suresh2',
    lastname:'kumar',
    address:'63B/1',
    school:'r.c',
    city:'kvp'
  },
  {
    id:2,
    firstname:'suresh1',
    lastname:'kumar',
    address:'63B/1',
    school:'r.c',
    city:'kvp'
  },
  {
    id:3,
    firstname:'suresh3',
    lastname:'kumar',
    address:'63B/1',
    school:'r.c',
    city:'kvp'
  },
  {
    id:4,
    firstname:'sures4',
    lastname:'kumar',
    address:'63B/1',
    school:'r.c',
    city:'kvp'
  },{
    id:5,
    firstname:'sures5',
    lastname:'kumar',
    address:'63B/1',
    school:'r.c',
    city:'kvp'
  },

]

function App() {
const currentDate = moment(new Date());
alert(currentDate)
var startTime = moment("12:16:59 am", "HH:mm:ss a");
var endTime = moment("06:12:07 pm", "HH:mm:ss a");
var result = endTime.diff(startTime, 'hours') + ":" +
endTime.diff(startTime, 'minutes');

  useEffect(() => {
  //  let result= dataSource.map((data,Index)=>{
  //     return tableCloumn.map((col,i)=>{
  //     if(data[col]){
  //       return {[col]:data[col]}
  //     }
  //     })
  //   })
  //   console.log("result",result)


let fs =[]
for(var i=0;i<=10;i++){
  fs.push(function(){
    console.log("object",i)
  })
}
fs.map(data=>data())

    
  }, [])


  return (
    <div className="App">
      <h1>This my first app</h1>
      <h3>Hi everyone I am trying to learn git commands</h3>
      <p>Good Day!</p>
      <h1>
        Counter program using context
      </h1>
      <div style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <button style={{marginRight:20}}>
         sub 
        </button> 
        <button>
         Plus 
        </button> 
       <div>
         merge the content to main
       </div>
      </div>
      <h4>Table</h4>
    </div>
  );
}
export default App;
