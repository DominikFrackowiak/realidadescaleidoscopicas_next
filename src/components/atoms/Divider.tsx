import React from 'react'

interface Props{
 classes: string
 style: any
}

export default function Divider({classes, style}: Props):  JSX.Element {
  return (
    <div className={classes} style={style}></div>
  )
}
