'use client'

import React, { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import { StageProps } from '../../../types/types'

import Image from 'next/image'
import Heading from '../atoms/Heading'
import Description from '../atoms/Description'
import Wrapper from '../atoms/Wrapper'
import ButtonParticipate from '../atoms/ButtonParticipate'
import AudioWrapper from '../atoms/AudioWrapper'
import AudioPlayer from './AudioPlayer'
import TranscriptContainer from './transcript/TranscriptContainer'

export default function Stage({ stage }: { stage: StageProps }) {
	const [currentlyPlayingAudioId, setCurrentlyPlayingAudioId] = useState<
		number | null
	>(null)
	const searchParams = useSearchParams()
	const cat = searchParams.get('category') === stage.category
	// console.log(stage)
	return (
		<Suspense>
			<article
				className='flex flex-col min-h-screen justify-around items-center'
				style={{ backgroundColor: stage.backgroundColor }}
				id={stage.category}
			>
				{cat ? (
					<TranscriptContainer />
				) : (
					<Wrapper>
						<Heading
							headingType={'h2'}
							className='flex gap-5 items-center font-tavares text-4xl'
						>
							<Image
								src={`${stage.icon}`}
								alt='section icon'
								width={150}
								height={150}
								className='w-[50px] h-[50px]'
							/>
							<span style={{ color: stage.titleColor }}>{stage.title}</span>
						</Heading>
						<Description
							text={stage.description}
							className={'text-xl'}
							color={stage.descriptionColor}
						/>
						<ButtonParticipate
							bgColor={stage.buttonBgColor}
							bgColorOnHover={stage.buttonBgColorOnHover}
						>
							Participa en Yincana
						</ButtonParticipate>

						<AudioWrapper>
							{stage.audios.map(audio => (
								<AudioPlayer
									key={audio.id}
									audio={audio}
									textColor={stage.audioTextColor}
									borderColor={stage.borderColor}
									iconPlay={stage.iconPlay}
									iconPause={stage.iconPause}
									category={stage.category}
									isPlaying={currentlyPlayingAudioId === audio.id}
									setCurrentlyPlayingAudioId={setCurrentlyPlayingAudioId}
								/>
							))}
						</AudioWrapper>
					</Wrapper>
				)}
			</article>
		</Suspense>
	)
}
