const Footer = (appName, companyName) => {
  return (
    <footer className='footer'>
        <p>Lab Manager</p>
        <p>nattydevs 2022</p>
    </footer>
  )
}

Footer.defaultProps = {
    appName: 'Lab Manager',
    companyName: 'nattydevs 2022'
}
export default Footer