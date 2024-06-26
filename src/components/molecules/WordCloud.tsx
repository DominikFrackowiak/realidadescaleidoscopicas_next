'use client'

import React, { useState, useEffect, useMemo } from 'react'
import ReactWordcloud from 'react-wordcloud'

interface WordCloudProps {
	initialWords?: Array<{ text: string; value: number }>
}

interface Options {
	colors: string[]
	enableTooltip: boolean
	deterministic: boolean
	fontFamily: string
	fontSizes: [number, number]
	fontStyle: string
	fontWeight: string
	padding: number
	rotations: number
	rotationAngles: [number, number]
	scale: string
	spiral: string
	transitionDuration: number
}

const WordCloudComponent: React.FC<WordCloudProps> = ({
	initialWords = [],
}) => {
	const [words, setWords] = useState(
		initialWords.length > 0
			? initialWords
			: [
					{ text: 'told', value: 64 },
					{ text: 'mistake', value: 11 },
					{ text: 'thought', value: 16 },
					{ text: 'bad', value: 17 },
					{ text: 'Andrzy', value: 64 },
			  ]
	)

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

	if (!isClient) {
		return null // lub jakiś placeholder
	}

	return (
		<div style={{ height: '700px', width: '100vw' }}>
			<ReactWordcloud options={options} words={words} />
		</div>
	)
}

export default WordCloudComponent
