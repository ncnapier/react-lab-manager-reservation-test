import {FaTimes} from 'react-icons/fa'
import Team from './Team'
import AddTask from './AddTask'
import Lion from './Lion'




const Task = ({task, onDelete, onToggle}) => {
  const month = task.day.split('').splice(5,2).join('') 
  const year = task.day.split('').splice(0,4).join('')
  const day = task.day.split('').splice(8,2).join('')
  const time = task.day.split('').splice(11,5).join('')

  const month1 = task.day1.split('').splice(5,2).join('') 
  const year1 = task.day1.split('').splice(0,4).join('')
  const day1 = task.day1.split('').splice(8,2).join('')
  const time1 = task.day1.split('').splice(11,5).join('')
  console.log(task)
  const text = task.text
  const plate1 = task.plate1
  const plate2 = task.plate2
  return (
    <div style={{backgroundColor: Lion.defaultProps.color2, transparency: 20}}className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3 style={{color: "white"}}> { text + " is running plates in: " }<br></br>{ plate1 + " and " + plate2 + " from: "  } <FaTimes style={{color: 'rgb(32, 122, 146)', cursor: 'pointer'}} 
        onClick={() => onDelete(task.id)}/></h3>
        <p style={{color: "white"}}>{month + '/'+ day +'/'+ year +'(' + time + ')  ' + '- '+ month1 + '/'+ day1 +'/'+ year1 +'(' + time1 + ')'}</p>
        <p style={{color: "white"}}>{task.location}</p>
    </div>
  )
}

export default Task