// import Button from './Button.jsx'; 

const Navbar = (props) => {
  return (
    <div className='sideNav' onScroll={props.clickFunction} style={{height: props.height, visibility: props.visibility}}>
      <button className='close-btn' onClick={props.clickFunction}>X</button>
      <a href=''>About me</a>
      <a href=''>Portfolio</a>
      <a href=''>Contact</a> 
      {/* <Button text={props.text} clickFunction={closeSidenav} /> */}
    </div>
    );
};
export default Navbar;