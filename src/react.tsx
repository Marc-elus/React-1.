import './button.css'
const Button = ()=> {
    const mystyle = { 
        color: 'red',
        borderRadius: '5px',
        marginLeft: '100px',
      }
  
  return(
    <button className='Button-style' style={
        mystyle
    }>
        Click me
    </button>
) }

export default Button;