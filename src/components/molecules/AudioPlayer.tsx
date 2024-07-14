'use client'

import { useState, useRef, useEffect } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import AudioIconsWrapper from '../atoms/AudioIconsWrapper'
import Divider from '../atoms/Divider'

import scrollToStage from '../../../utils/scrollToStage'

import { Audio } from '../../../types/types'

interface Props {
	textColor: string
	borderColor: string
	iconPlay: string
	iconPause: string
	category: string
	isPlaying: boolean
	setCurrentlyPlayingAudioId: React.Dispatch<
		React.SetStateAction<number | null>
	>
	audio: Audio
}

export default function AudioPlayer({
	audio,
	textColor,
	borderColor,
	iconPlay,
	iconPause,
	category,
	isPlaying,
	setCurrentlyPlayingAudioId,
}: Props) {
	const audioRef = useRef<HTMLAudioElement>(null)
	useEffect(() => {
		if (isPlaying) {
			audioRef.current?.play()
		} else {
			audioRef.current?.pause()
		}
	}, [isPlaying])

	const togglePlayPause = () => {
		scrollToStage(category)
		if (isPlaying) {
			setCurrentlyPlayingAudioId(null)
		} else {
			setCurrentlyPlayingAudioId(audio.id)
		}
	}

	return (
		<div className='flex flex-col'>
			<Link href='/'>
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
						style={{
							color: `${borderColor}`,
							backgroundColor: `${borderColor}`,
						}}
					/>
				</button>
			</Link>

			<button
				className='flex flex-col items-center'
				style={{ color: textColor }}
				onClick={() => scrollToStage(category)}
			>
				<Link
					href={`/?category=${audio.category}&id=${audio.id}`}
					className='flex flex-col items-center'
				>
					<span>más info</span>
					<span>+++</span>
				</Link>
			</button>
		</div>
	)
}
