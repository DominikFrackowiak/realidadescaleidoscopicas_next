import { Scale } from 'react-wordcloud'

// types.ts
export interface Audio {
	id: number
	title: string
	transcript: string
}

export type Colors = '#fff' | '#fc3951' | '#ed0033' | '#364ec6' | '#2e3192'

export interface StageProps {
	id: number
	icon: string
	title: string
	description: string
	titleColor: Colors
	descriptionColor: Colors
	backgroundColor: Colors
	transcriptBgColor: Colors
	buttonBgColor: Colors
	buttonBgColorOnHover: Colors
	audios: Audio[]
}

export interface FirestoreWord {
	id?: string
	text: string
	value: number
}

export interface Options {
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
	scale: Scale
	spiral: 'archimedean' | 'rectangular'
	transitionDuration: number
}

export interface WordCloudProps {
	initialWords?: Array<{ text: string; value: number }>
}
