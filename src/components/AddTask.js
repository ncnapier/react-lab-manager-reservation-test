import {useState} from 'react'
import PropTypes from 'prop-types'
import Team from './Team'
import Lion from './Lion'
let user = "name"
const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const [location, setLocation] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()

       

        onAdd({text, day, reminder, location})

        setText('')
        setDay(Date)
        setReminder(false)
        setLocation('')
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label style={{color: Lion.defaultProps.color3}}>User</label>
            <select>
            <option value={text}>Nathaniel</option>
            <option value={text}>Olivier</option>
            <option value={text}>Katherine</option>
            <option value={text}>Sichen</option>
            <option value={text}>Chandra</option>
            <option value={text}>Irene</option>
            </select>
            
            

            
        </div>
        <div className='form-control'>
            <label style={{color: Lion.defaultProps.color3}}>Run Start Day & Time</label>
            <input type='datetime-local' placeholder='Run Start Date & Time'value={day} onChange={(e) => setDay(e.target.value)}></input>
        </div>
        <div className='form-control'>
            <label style={{color: Lion.defaultProps.color3}}>Run End Day & Time</label>
            <input type='datetime-local' placeholder='Run End Date & Time'value={day} onChange={(e) => setDay(e.target.value)}></input>
        </div>
        
        <div className='form-control form-control-check'>
            <label style={{color: Lion.defaultProps.color3}}>Leave Plates</label>
            <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
        </div>
        
        <input type='submit' value='Submit Run' className='btn btn-block' style={{backgroundColor: Lion.defaultProps.color1}}/>
    </form>
  )
}

export default AddTask