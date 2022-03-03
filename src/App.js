import logo from './logo.svg';
import './App.css';
import moment from 'moment'

function App() {
const currentDate = moment(new Date());
alert(currentDate)
var startTime = moment("12:16:59 am", "HH:mm:ss a");
var endTime = moment("06:12:07 pm", "HH:mm:ss a");
var result = endTime.diff(startTime, 'hours') + ":" +
endTime.diff(startTime, 'minutes');
  return (
    <div className="App">
      <h1>This my first app</h1>
      <h3>Hi everyone I am trying to learn git commands</h3>
      <p>Good Day!</p>
    </div>
  );
}
export default App;
