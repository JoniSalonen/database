import './App.css';
import{ useEffect, useState} from 'react';
import axios from 'axios';

const URL = 'http://localhost:3001/'


function App() {
  const [task,setTask] = useState([])

  useEffect(() => {
    axios.get(URL)
    .then((response)=> {
      setTask(response.data)
    }).catch (error => {
      alert(error.response.data.error)
    })
  }, [])
  
  return (
    <di>
      <h3>My task</h3>
      <ol>
        {task.map(task => (
          <li key = {task.id}>{task.description}</li>
        ))}
      </ol>

    </di>
  );
}

export default App;
