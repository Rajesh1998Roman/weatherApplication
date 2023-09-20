import React from 'react'
import './Result.css'
import { Button } from '@mui/material'


const Result = ({temps,des,iconss,settemp }) => {
  return <div className='result'>
    <div className='result_box'>
        <h1>temp :{temps}</h1>
        <p>{des}</p>
        <img src={iconss} alt='logo' /> <br/>
        <Button variant='contained' color='primary' onClick={()=>{settemp("");}}>
            back
        </Button>
          
       

    </div>
  </div>
  
}

export default Result