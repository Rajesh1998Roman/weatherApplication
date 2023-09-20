
import './App.css';
import Inputpage from './components/input'
import React,{useState} from 'react';
import axios from 'axios';
import Result from './components/Result';

function App() {
  const [input,setInput]=useState("")
  const [tem,setTem]=useState("")
  const [description,setDescription] =useState("")
  const [icons,setIcons] =useState("");


   const findWeather = async ()=>{
    const apiKey = "4f3d430334be744bc02a75d0e993793a";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+input +"&appid="+apiKey +"&units="+unit;
    const respones = await axios.get(url);  
    const temp =await respones.data.main.temp;
    const desc= await respones.data.weather[0].description;
    const icons= await respones.data.weather[0].icon;
    const imageURL= 'http://openweathermap.org/img/wn/'+icons+'@2x.png';
    
    setTem(temp);
    setDescription(desc);
    setIcons(imageURL);
    setInput("");
   
  }
  return (
    <div className="App">
      { tem ===''?(
         <Inputpage input={input} setInput={setInput} findweather={findWeather}/>):(
         <Result temps={tem} des={description} iconss={icons} settemp={setTem}/> )
      }
  
    </div>
  );
}

export default App;
