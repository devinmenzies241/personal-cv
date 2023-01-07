const Button = (props) => {
  return (
    <button className='pushable'onClick={props.clickFunction}>
    <span className='shadow'></span>
    <span className='edge'></span>
    <span className='front'>{props.text}</span>
  </button>
  )
}

export default Button; 