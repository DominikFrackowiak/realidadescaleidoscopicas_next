'use client'

import { useState, useEffect, useMemo } from 'react'
import ReactWordcloud from 'react-wordcloud'
import useFirestoreData from '../../hooks/useFirestoreData'
import Wrapper from '../atoms/Wrapper'
import Heading from '../atoms/Heading'

import { FirestoreWord, Options, WordCloudProps } from '../../../types/types'

function WordCloudComponent({ initialWords = [] }: WordCloudProps) {
	const { words, isPending, error } = useFirestoreData('opinions')
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	const options: Options = useMemo(
		() => ({
			colors: ['#fc3951', '#ed0033', '#364ec6', '#2e3192'],
			enableTooltip: true,
			deterministic: false,
			fontFamily: 'Galano Grotesque Semibold',
			fontSizes: [20, 70],
			fontStyle: 'normal',
			fontWeight: 'normal',
			padding: 1,
			rotations: 3,
			rotationAngles: [0, 90],
			scale: 'sqrt',
			spiral: 'archimedean',
			transitionDuration: 1000,
		}),
		[]
	)

	if (isPending) return <div>Loading...</div>
	if (error) return <div>Error: {error}</div>
	if (!isClient) return null

	const wordcloudData: FirestoreWord[] = words.map((word: FirestoreWord) => ({
		text: word.text,
		value: word.value,
	}))

	return (
		// <Wrapper id='nube'>
		<section className='flex justify-center' id='nube'>
			<Wrapper>
				<Heading
					headingType={'h2'}
					className='flex gap-5 items-center font-tavares text-5xl font-bold text-[#364ec6]'
				>
					<div className='flex flex-col '>
						<span>Nube</span> 
						<span className='pl-20'>de palabras</span>
					</div>
				</Heading>
				<ReactWordcloud options={options} words={wordcloudData} />

				<blockquote className='text-[#fc3951] text-lg'>
					<p>
						“El caleidoscopio permite ver las cosas de forma distinta y
						construir nuevas imágenes relacionadas con nuevas realidades. No es
						solo un tema de puntos de vista sino de puntos de acciones. El
						caleidoscopio es una herramienta que devuelve imágenes distintas,
						sin centros ni periferias. Haciendo rodear el caleidoscopio,
						moviendo los vidrios coloridos que están en su interior, la imagen
						se transforma y aparecen nuevas constelaciones coloridas. El
						caleidoscopio nos permite ver la “pluriversidad” del sistema mundo.
						Aceptar la propuesta decolonial no pasa solo por ponerse las lentes
						con las que miramos la realidad, sino cambiar las herramientas con
						la que la miramos, interpretamos y nos proyectamos en ella” (Rachele
						Borghi, 2020.{' '}
						<span className='italic'>Decolonialitá e privilegio</span>)
					</p>
				</blockquote>
			</Wrapper>
		</section>
	)
}

export default WordCloudComponent
