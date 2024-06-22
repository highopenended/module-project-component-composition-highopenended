import React from 'react'

function Details(props){
    console.log(props.data)
    const [details]=props.data
    return(
        <div>
            <p>Date: {details.date}</p>
            <p>Copyright: {details.copyright}</p>
            <p>explanation: {details.explanation}</p>
        </div>
    )
}

// Copyright
// date
// explanation
// hdurl
// media_type
// service_version
// title
// url

export default Details
