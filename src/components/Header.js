import PropTypes from 'prop-types'
import Button from './Button'
import Team from './Team'
import Lion from './Lion'

const Header = ({title, onAdd, showAdd}) =>{

    return (
        <header className='header'>
            <img src={Lion.defaultProps.logo} alt="logo" style={{width:50}} /><h1 style={{color: Lion.defaultProps.color3}}>{title}</h1>
            <Button color={showAdd ? Lion.defaultProps.color1:Lion.defaultProps.color3} text={showAdd  ? 'Close' : 'Add' } onClick={onAdd}/>
            
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