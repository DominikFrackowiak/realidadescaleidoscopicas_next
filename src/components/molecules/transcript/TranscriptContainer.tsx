'use client'

import { useSearchParams } from 'next/navigation'
import Transcript from './Transcript'
import stagesData from '../../../../constants/stagesData'

export default function TranscriptContainer() {
	const searchParams = useSearchParams()
	const id = searchParams.get('id')
	const category = searchParams.get('category')

	const categoryData = stagesData.find(data => data.category === category)
 console.log(categoryData)
	if (!categoryData || !id || !category) return null

	const audioData = categoryData.audios.find(
		audio => audio.id === Number(id) && audio.category === category
	)
	if (!audioData) return null

	console.log(categoryData, audioData)

	return <Transcript audioData={audioData} categoryData={categoryData} />
}
