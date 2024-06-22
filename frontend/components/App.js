import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Image from './Image'
import Details from './Details'

const nasaUrl="https://api.nasa.gov/planetary/apod"
const api_key="DEMO_KEY"
let errorCode =''

function App() {
  const [nasaData, setData]=useState(null)
  // const [spacePic, setPic]=useState(null)


  useEffect(()=>{
    axios.get(`${nasaUrl}?api_key=${api_key}`)
    .then(res=>{
      setData(res.data)
      errorCode=''
    })
    .catch(err=>{
      errorCode=err.request.status
      console.log(err)
    })
  },[])
  return (
    <>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <div></div>
      
      {errorCode=='429'
        ? 
          nasaData!==null
            ?
              <div>
                <Image data={nasaData}/>
                <Details data={nasaData}/>
                {/* <img src={nasaData.url}/> */}
              </div>
            :<h3>Loading...</h3>          
        : 
          <div>
            <br></br>
            <p style={{color:'red'}}>Too many API requests...</p>
            <p style={{color:'red'}}>Please try again later...</p>
          </div>
      }

    </>
  )
}

export default App
