import {useState} from 'react'
import PropTypes from 'prop-types'
import Team from './Team'
import Lion from './Lion'
let user = "name"
const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [day1, setDay1] = useState('')
    const [plate1, setPlate1] = useState('')
    const [plate2, setPlate2] = useState('')
    const [reminder, setReminder] = useState(false)
    const [location, setLocation] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()

       

        onAdd({text, day, day1, plate1, plate2, reminder, location})

        setText('')
        setPlate1('')
        setPlate2('')
        setDay(Date)
        setDay1(Date)
        setReminder(false)
        setLocation('')
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label style={{color: Lion.defaultProps.color3}}>User</label>
            
            <select value={text} onChange={(e) => setText(e.target.value)}>
            <option value={''}>Name</option>
            <option value={'Nathaniel'}>Nathaniel</option>
            <option value={'Olivier'}>Olivier</option>
            <option value={'Katherine'}>Katherine</option>
            <option value={'Sichen'}>Sichen</option>
            <option value={'Chandra'}>Chandra</option>
            <option value={'Irene'}>Irene</option>
            </select>
            
            
            

            
        </div>
        <div className='form-control'>
            <label style={{color: Lion.defaultProps.color3}}>Run Start Day & Time</label>
            <input type='datetime-local' placeholder='Run Start Date & Time'value={day} onChange={(e) => setDay(e.target.value)}></input>
        </div>
        <div className='form-control'>
            <label style={{color: Lion.defaultProps.color3}}>Run End Day & Time</label>
            <input type='datetime-local' placeholder='Run End Date & Time'value={day1} onChange={(e) => setDay1(e.target.value)}></input>
        </div>
        <div className='form-control plates'>
            <label style={{color: Lion.defaultProps.color3}}>Plate 1:</label>
            
            <select value={plate1} onChange={(e) => setPlate1(e.target.value)}>
            <option value={''}>none</option>
            <option value={'Position 1'}>Position 1</option>
            <option value={'Position 2'}>Position 2</option>
            <option value={'Position 3'}>Position 3</option>
            <option value={'Position 4'}>Position 4</option>
            <option value={'Position 5'}>Position 5</option>
            <option value={'Position 6'}>Position 6</option>
            </select>
            
            <label style={{color: Lion.defaultProps.color3}}>Plate 2:</label>
            
            <select value={plate2} onChange={(e) => setPlate2(e.target.value)}>
            <option value={''}>none</option>
            <option value={'Position 1'}>Position 1</option>
            <option value={'Position 2'}>Position 2</option>
            <option value={'Position 3'}>Position 3</option>
            <option value={'Position 4'}>Position 4</option>
            <option value={'Position 5'}>Position 5</option>
            <option value={'Position 6'}>Position 6</option>
            </select>
            

            
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