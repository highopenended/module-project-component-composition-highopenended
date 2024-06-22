import React from 'react'

function Image(props){
    const [details]=props.data
    return(        
        <img src={details.url}/>
    )
}
export default Image