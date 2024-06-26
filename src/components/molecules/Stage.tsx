import React from 'react'

import { StageProps } from '../../../types/types'

import Image from 'next/image'
import Heading from '../atoms/Heading'

import Description from '../atoms/Description'
import Wrapper from '../atoms/Wrapper'
import ButtonParticipate from '../atoms/ButtonParticipate'
import AudioWrapper from '../atoms/AudioWrapper'
import AudioPlayer from './AudioPlayer'

export default function Stage({ stage }: { stage: StageProps }) {
	return (
		<article
			className='flex flex-col min-h-screen justify-center items-center'
			style={{ width: '100vw', backgroundColor: stage.backgroundColor }}
		>
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
						<AudioPlayer key={audio.id} audio={audio} />
					))}
				</AudioWrapper>
			</Wrapper>
		</article>
	)
}
