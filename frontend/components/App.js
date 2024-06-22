import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'
// import Image from './Image'
// import Details from './Details'

const nasaUrl="https://api.nasa.gov/planetary/apod"
const api_key="DEMO_KEY"
let errorCode =''

function App() {
  const [nasaData, setData]=useState()
  
  useEffect(()=>{
    function fetchPhoto(){
      axios.get(`${nasaUrl}?api_key=${api_key}`)
      .then(res=>{
        setData(res.data)
        errorCode=''
      })
      .catch(err=>{
        console.log(err.message)
        errorCode=err.request.status
      })
    }
    // fetchPhoto()

    // Cheating for now to avoid using up requests
    setData(
      {
        "copyright": "Long Xin",
        "date": "2024-06-22",
        "explanation": "Stars are forming in Lynds Dark Nebula (LDN) 1251. About 1,000 light-years away and drifting above the plane of our Milky Way galaxy, LDN 1251 is also less appetizingly known as \"The Rotten Fish Nebula.\" The dusty molecular cloud is part of a complex of dark nebulae mapped toward the Cepheus flare region. Across the spectrum, astronomical explorations of the obscuring interstellar clouds reveal energetic shocks and outflows associated with newborn stars, including the telltale reddish glow from ...",
        "hdurl": "https://apod.nasa.gov/apod/image/2406/LDN1251_2048.png",
        "media_type": "image",
        "service_version": "v1",
        "title": "Lynds Dark Nebula 1251",
        "url": "https://apod.nasa.gov/apod/image/2406/LDN1251_1098c.png"
      }
    )

  },[])

  // Loading text
  if(!nasaData){return 'Fetching Photo of the Day'}

  // Max Requests Error
  if(errorCode=='429'){maxRequestsReached()}

  return (
    <div>
      <section>
        <Card 
          title={nasaData.title} 
          text={nasaData.explanation} 
          imageURL={nasaData.url} 
          date={nasaData.date}
        />
      </section>
      <p>Copyright: {nasaData.copyright}</p>
    </div>
  )
}

function maxRequestsReached(){
  return(
    <div>
      <br></br>
      <p style={{color:'red'}}>Too many API requests...</p>
      <p style={{color:'red'}}>Please try again later...</p>
    </div>
  )
}
export default App