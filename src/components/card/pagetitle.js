import React from 'react';
import styled from 'styled-components'


function Title(props){
    return (
        <TitleTag>
            <p>{props.Tag}</p>
        </TitleTag>
    )
}

const TitleTag = styled.div`
margin: 10px;
padding-top: 8%;
padding-left: 5%;
font-size: 30px;
text-transform: uppercase;
font-weight: bold;
font-family: "Muli", sans-serif;
`

export default Title;