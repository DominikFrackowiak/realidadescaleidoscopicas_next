type PageProps = {
	params: { id: string; category: string }

	searchParams?: { [key: string]: string | string[] | undefined }
}

import stagesData from '../../../../../constants/stagesData'

import Link from 'next/link'

export default function TranscriptPage({
	params: { id, category },
}: PageProps) {
	const categoryData = stagesData.filter(data => data.category === category)

	const dataToDisplay = categoryData[0]?.audios.filter(
		audio => audio.id === Number(id)
	)[0]

	console.log(dataToDisplay)
	return (
		<div>
			<Link href='/'>
				<button>X</button>
			</Link>
			<h2>{dataToDisplay?.title}</h2>
			<p dangerouslySetInnerHTML={{ __html: dataToDisplay?.transcript }}></p>
		</div>
	)
}
