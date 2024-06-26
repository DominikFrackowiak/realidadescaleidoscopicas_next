'use client'

import React, { useState } from 'react'



interface Props {
	children: React.ReactNode
 bgColor: string
 bgColorOnHover: string
}

export default function ButtonParticipate({ children, bgColor, bgColorOnHover }: Props) : JSX.Element{
const [hover, setHover] = useState(false)

	return (
		<button
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			className={`text-white font-tavares text-2xl w-1/3 self-center py-2 px-1 duration-300`}
			style={{ backgroundColor: hover ? bgColorOnHover : bgColor }}
		>
			{children}
		</button>
	)
}
