import {FaTimes} from 'react-icons/fa'
import Team from './Team'
import AddTask from './AddTask'
import Lion from './Lion'




const Task = ({task, onDelete, onToggle}) => {
  const month = task.day.split('').splice(5,2).join('') 
  const year = task.day.split('').splice(0,4).join('')
  const day = task.day.split('').splice(8,2).join('')
  const time = task.day.split('').splice(11,5).join('')
  return (
    <div style={{backgroundColor: Lion.defaultProps.color2, transparency: 20}}className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3 style={{color: "white"}}>{task.reminder ? `${task.text} @ ${Lion.defaultProps.team}` : `${Lion.defaultProps.team} @ ${task.text}`} <FaTimes style={{color: 'red', cursor: 'pointer'}} 
        onClick={() => onDelete(task.id)}/></h3>
        <p style={{color: "white"}}>{month + '/'+ day +'/'+ year + ' @ ' + time}</p>
        <p style={{color: "white"}}>{task.location}</p>
    </div>
  )
}

export default Task