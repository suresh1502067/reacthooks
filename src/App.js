import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        Counter program using context
      </h1>
      <pre>I wanna coding</pre>
      <div style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <button style={{marginRight:20}}>
         sub counter
        </button> 
        <button>
         Plus 
        </button> 
      </div>
    </div>
  );
}

export default App;
