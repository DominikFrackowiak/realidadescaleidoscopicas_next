'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import AudioIconsWrapper from '../atoms/AudioIconsWrapper'

import { Audio } from '../../../types/types'

export default function AudioPlayer({ audio }: { audio: Audio }) {
	const [isPlaying, setIsPlaying] = useState(false)
	const audioRef = useRef(null) 

	const togglePlayPause = () => {
		const sound = audioRef.current
		if (!sound) return 

		if (isPlaying) {
			sound.pause()
		} else {
			sound.play()
		}
		setIsPlaying(!isPlaying) 
	}

	return (
		<button
			className='flex flex-col items-center gap-5 py-5'
			style={{ borderBottom: '1px solid white' }}
			onClick={togglePlayPause} // Call toggle function on click
		>
			<audio ref={audioRef} src='/assets/audio/cuidados_1.mp3' />
			<AudioIconsWrapper>
				<Image
					src={
						isPlaying
							? '/assets/images/pause_blue.png'
							: '/assets/images/play_blue.png'
					}
					alt={isPlaying ? 'pause icon' : 'play icon'}
					height={90}
					width={100}
					className='absolute top-0 left-0 w-20'
					
				/>
			</AudioIconsWrapper>
			{audio.title}
		</button>
	)
}
