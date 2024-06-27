import React from 'react'

interface Props{
 className: string
 style: any
}

export default function Divider({className, style}): Props {
  return (
    <div className={className} style={style}></div>
  )
}
