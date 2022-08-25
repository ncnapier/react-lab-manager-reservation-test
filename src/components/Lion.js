const Lion = (team) => {
    return (
          <div className='team'>
              <h2 >{team}</h2>
          </div>
    )
  }
  Lion.defaultProps = {
      team: 'Nashville Stone Lions',
      color1: 'rgb(32, 122, 146)',
      color2: 'rgb(172, 172, 172)',
      color3: 'rgb(247, 149, 53)',
      gameLocation: 'Vanderbilt: 441 21st Ave, Nashville, TN 37216',
      logo: './sciex_logo.jpg'
  }
  
  
  export default Lion