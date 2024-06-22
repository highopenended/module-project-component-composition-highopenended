import React from 'react'

export default function Image(props){
    // const [details]=props.data
    const url=props.data
    const date=props.date
    console.log(url)
    return(        
        <figure>
            <img src={url}/>
            <figcaption>Picture taken on {date}</figcaption>
        </figure>
        // <p>Holder</p>
    )
}