import PropTypes from 'prop-types'
import Button from './Button'
import Team from './Team'
import Lion from './Lion'
import App from '../App'
import Tasks from './Tasks'

const Header = ({title, onAdd, showAdd}) =>{

//prev next buttons


// const elements = [
//     <div key={0} className="element">Element 1</div>,
//     <div key={1} className="element">Element 2</div>,
//     <div key={2} className="element">Element 3</div>,
//   ];
  
//   const handlePrevClick = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? elements.length -1 : prevIndex - 1));
//   };
//   const handleNextClick = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === elements.length -1 ? 0 : prevIndex +1));
//   };
//   const [currentIndex, setCurrentIndex] = App[Tasks];
  


    return (
        <header className='header'>
            <img src={Lion.defaultProps.logo} alt="logo" style={{width:50}} /><h1 style={{color: Lion.defaultProps.color3}}>{title}</h1>
            <Button color={showAdd ? Lion.defaultProps.color1:Lion.defaultProps.color3} text={showAdd  ? 'Close' : 'Add' } onClick={onAdd}/>
            {/* <div className='element'>{elements[currentIndex]}</div> */}
     {/* <button onClick={handlePrevClick}>&#8249;</button>
     <button onClick= {handleNextClick}>&#8250;</button> */}
        </header>
    )
}

Header.defaultProps = {
    title: '4500',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {

// }

export default Header