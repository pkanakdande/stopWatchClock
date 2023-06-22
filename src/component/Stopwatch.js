import react, { useEffect, useState } from 'react';
import '../component/stop.css'
function Stopwatch(){
   const [second,setSecond]=useState(0);
   const [minute,setMinute]=useState(0);
   const [hour,setHour]=useState(0);
   const [mili,setMili]=useState(0)
   const [stop,setStop]=useState(true)

useEffect(()=>{
       
          
       
    var time=setInterval(()=>{
        if(!stop)
        {
          setMili(mili + 1)
        }
        if(mili===59)
        {
            setSecond(second + 1)
            setMili(0)
        }
    

        //  setSecond(second + 1)

       else if(second===59)
        {
         setMinute(minute + 1)
         setSecond(0)
        }
         else if(minute===59)
         {
            setHour(hour + 1)
            setMinute(0)
         }

    },20)

return ()=>clearInterval(time)

})

 const display=()=>{
  
      let text=document.getElementById("time1")
      console.log(text)
   
       let see=document.getElementById("displayCast")
       console.log(see)
     see.innerHTML=`${hour}:${minute}:${second}:${mili}`
             
 }


const onstop=()=>{
    setStop(true)
}

const startTime=()=>{
setStop(false)
}

  
  const resetTime =()=>{
     setHour(0)
     setMili(0)
     setMinute(0)
     setSecond(0)
  }

    return(
 <div className='container'>
   
        <div className='child1'>
        <h1 id='time1'>{hour}:{minute}:{second}:{mili}</h1>
        </div>
       
        
       <div className='btn'>
        <button type='submit' id='pause' onClick={onstop}><b>Pause</b></button>
        <button type='submit' id='start' onClick={startTime} ><b>start</b></button>
        <button type='submit' id='reset' onClick={resetTime}><b>reset</b></button>
        <button type='submit' id='cast' onClick={display}><b>cast</b></button>
      
       </div>
       <div className='hi'>
       <p id='displayCast'></p>
       </div>
 </div>
    )
}
export default Stopwatch