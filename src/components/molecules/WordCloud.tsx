'use client'

import React, { useState, useEffect, useMemo } from 'react'
import ReactWordcloud, { Scale } from 'react-wordcloud'
import useFirestoreData from '../../hooks/useFirestoreData'

import { FirestoreWord, Options, WordCloudProps } from '../../../types/types'

const WordCloudComponent: React.FC<WordCloudProps> = ({
	initialWords = [],
}) => {
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
		<div style={{ height: '700px', width: '100vw' }}>
			<ReactWordcloud options={options} words={wordcloudData} />
		</div>
	)
}

export default WordCloudComponent
