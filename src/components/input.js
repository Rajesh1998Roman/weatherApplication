import React from 'react'
import Input from '@mui/material/Input';
import { Button } from '@mui/material';
import './Input.css'

const input = ({input,setInput,findweather}) => {
    const handleChange=(event)=>{
      setInput(event.target.value);
    };
    const handleClick =(event)=>{
        event.preventDefault();
        findweather()
    } 
    
  return (
    <div className='inputBox'>
       <div className='inputBox-field'>
        <h1>Google Weather App</h1> 
        <p>Powder by</p>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png'
        alt='logo'
        />
        <form>
        <Input placeholder='Enter the city name' onChange={handleChange} value={input}/><br/>
        <Button variant="contained" color='primary' type='submit' onClick={handleClick}>Search</Button>
        </form>
        
       </div>
    </div>
  )
}

export default input