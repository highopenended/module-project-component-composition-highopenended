import React from 'react'
import styled from 'styled-components'

const StyledFigure=styled.figure`
    max-width: 300px;
    figcaption{
        font-style:italic;
    }
`

export default function Figure(props){
    const url=props.data
    const date=props.date
    console.log(url)
    return(        
        <StyledFigure>
            <img src={url}/>
            <figcaption>Picture taken on {date}</figcaption>
        </StyledFigure>
    )
}