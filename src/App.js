import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Team from './components/Team'
import Footer from './components/Footer'
import Lion from './components/Lion'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    
])

//add tasks
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000 + 1)
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

//Delete Task by clicking fatimes icon:
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !==id))
}

//toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div>
    < section className="container">
     <Header onAdd={()=>setShowAddTask (!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask}/>}
     <h2 style={{color: Lion.defaultProps.color3, alignItems: 'center', textAlign: 'center'}}>Scheduled Runs</h2>
     {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> :
     'No Runs To Show'}
     
    </section>
    <Footer />
    </div>
  );
}

export default App;
