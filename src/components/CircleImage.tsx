import React from 'react'

type Props = {
  diameter: string;
  url: string;
  injectClass?: string;
}

const CircleImage = ({diameter, url, injectClass}: Props) => 
    (<img className={injectClass} style={
      {
        width: diameter,
        height: diameter,
        borderRadius: "50%",
        border: "2px solid white",
      }} src={url}/>)
  

export default CircleImage;