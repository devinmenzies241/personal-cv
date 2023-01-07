const Navbar = (props) => {
  return (
    <div className='sideNav' style={{height: props.height, visibility: props.visibility}}>
      <button onClick={props.closeNav}>X</button>
      <a href=''>About me</a>
      <a href=''>Portfolio</a>
      <a href=''>Contact</a>
    </div>
    );
};
export default Navbar;