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



//prev next buttons

const elements = [
  <div key={0} className="element">Element 1</div>,
  <div key={1} className="element">Element 2</div>,
  <div key={2} className="element">Element 3</div>,
];

const handlePrevClick = () => {
  setCurrentIndex((prevIndex) => (prevIndex === 0 ? elements.length -1 : prevIndex - 1));
};
const handleNextClick = () => {
  setCurrentIndex((prevIndex) => (prevIndex === elements.length -1 ? 0 : prevIndex +1));
};
const [currentIndex, setCurrentIndex] = useState(0);


//toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <section>
    <div>
    < section className="container" id="4500">
     <Header onAdd={()=>setShowAddTask (!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask}/>}
     <h2 style={{color: Lion.defaultProps.color3, alignItems: 'center', textAlign: 'center'}}>Scheduled Runs</h2>
     {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> :
     'No Runs To Show'}
     <div className='element'>{elements[currentIndex]}</div>
     <button onClick={handlePrevClick}>&#8249;</button>
     <button onClick= {handleNextClick}>&#8250;</button>
    </section>
    <Footer />
    </div>
    
    <div className='hide'>
    < section className="container" id="5500">
     <Header onAdd={()=>setShowAddTask (!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask}/>}
     <h2 style={{color: Lion.defaultProps.color3, alignItems: 'center', textAlign: 'center'}}>Scheduled Runs</h2>
     {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> :
     'No Runs To Show'}
     
    </section>
    <Footer />
    </div>
    </section>
    
  );
}
App.defaultProps = {
  header1: "4500",
  header2: "5500",
  
}
export default App;
