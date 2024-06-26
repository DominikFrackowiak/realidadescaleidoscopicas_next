'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AudioIconsWrapper from '../atoms/AudioIconsWrapper'
import Divider from '../atoms/Divider'

import { Audio } from '../../../types/types'

interface Props {
	textColor: string
	borderColor: string
	iconPlay: string
	iconPause: string

	audio: Audio
}

export default function AudioPlayer({
	audio,
	textColor,
	borderColor,
	iconPlay,
	iconPause,
}: Props) {
	const [isPlaying, setIsPlaying] = useState(false)
	const audioRef = useRef<HTMLAudioElement>(null)

	const togglePlayPause = () => {
		const sound = audioRef.current
		if (!sound) return

		if (isPlaying) {
			sound.pause()
		} else {
			sound.play().catch(e => console.error('Error playing audio:', e))
		}
		setIsPlaying(!isPlaying)
	}

	return (
		<div className='flex flex-col'>
			<button
				className='flex flex-col items-center gap-5 py-5'
				onClick={togglePlayPause}
			>
				<audio ref={audioRef} src={audio.audioSrc} />
				<AudioIconsWrapper>
					<Image
						src={isPlaying ? `${iconPause}` : `${iconPlay}`}
						alt={isPlaying ? 'pause icon' : 'play icon'}
						height={90}
						width={100}
						className='absolute top-0 left-0 w-16'
					/>
				</AudioIconsWrapper>
				<span className='text-2xl' style={{ color: textColor }}>
					{audio.title}
				</span>
				<Divider
					classes='w-32 h-[1px]'
					style={{ color: `${borderColor}`, backgroundColor: `${borderColor}` }}
				/>
			</button>

			<button
				className='flex flex-col items-center'
				style={{ color: textColor }}
			>
				<Link
					href={`/transcripts/${audio.category}/${audio.id}`}
					className='flex flex-col items-center'
				>
					<span>más info</span>
					<span>+++</span>
				</Link>
			</button>
		</div>
	)
}
