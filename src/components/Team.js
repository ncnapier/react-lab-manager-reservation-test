const Team = (team) => {
  return (
        <div className='team'>
            <h2 >{team}</h2>
        </div>
  )
}
Team.defaultProps = {
    team: 'Nashville Grizzlies',
    color1: 'Maroon',
    color2: 'Gold',
    color3: 'MidnightBlue',
    gameLocation: 'Vanderbilt: 441 21st Ave, Nashville, TN 37216',
    logo: "./logo192.png.webp"
}


export default Team