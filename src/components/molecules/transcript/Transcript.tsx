import { Audio, StageProps } from '../../../../types/types'

interface Props {
	audioData: Audio
	categoryData: StageProps
}

import { useRef } from 'react'

import Link from 'next/link'

import Wrapper from '../../atoms/Wrapper'
import Heading from '../../atoms/Heading'

export default function Transcript({ audioData, categoryData }: Props) {
	return (
		<Wrapper
			style={{
				backgroundColor: categoryData?.backgroundColor,
				color: categoryData?.descriptionColor,
			}}
		>
			<header className='flex justify-between'>
				<Heading headingType='h2' className='text-2xl'>
					{audioData?.title}
				</Heading>
				<Link href='/'>
					<button className='text-xl'>X</button>
				</Link>
			</header>
			<p dangerouslySetInnerHTML={{ __html: audioData?.transcript }}></p>

			<p>
				Los textos están basados en el libro de Rachele Borghi, 2020, 
				<span className='italic'> Decolonialitá e privilegio </span>.
			</p>
		</Wrapper>
	)
}
