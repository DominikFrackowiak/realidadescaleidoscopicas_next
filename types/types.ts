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
