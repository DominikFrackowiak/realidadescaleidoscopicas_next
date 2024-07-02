type PageProps = {
	params: { id: string; category: string }

	searchParams?: { [key: string]: string | string[] | undefined }
}

import stagesData from '../../../../../constants/stagesData'

import Link from 'next/link'

import Wrapper from '@/components/atoms/Wrapper'

export default function TranscriptPage({
	params: { id, category },
}: PageProps) {
	const categoryData = stagesData.filter(data => data.category === category)

	console.log(categoryData)

	const dataToDisplay = categoryData[0]?.audios.filter(
		audio => audio.id === Number(id)
	)[0]

	return (
		<article
			className='flex flex-col min-h-screen justify-around items-center'
			style={{
				width: '100vw',
				backgroundColor: categoryData[0].backgroundColor,
			}}
		>
			<Wrapper >
				<div className='flex justify-between'>
					<h2>{dataToDisplay?.title}</h2>{' '}
					<Link href='/'>
						<button>X</button>
					</Link>
				</div>
				<p dangerouslySetInnerHTML={{ __html: dataToDisplay?.transcript }}></p>
			</Wrapper>
		</article>
	)
}
