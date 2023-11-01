import React,{useState} from 'react'
import './Button.css'
const Button = (props) => {
  const [theme,setTheme] = useState("lightTheme")
  const changeThemeHandler=()=>{
    if(theme==="lightTheme") setTheme("darkTheme")
    if(theme==="darkTheme") setTheme("lightTheme")  
  }
  props.themeHandler(theme);
  return (
    <label className='switch' >
        <input type="checkbox" />
        <span className='slider' onClick={changeThemeHandler}/>
    </label>
  )
}

export default Button