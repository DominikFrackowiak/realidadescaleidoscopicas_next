import Image from 'next/image'
import  stagesData  from '../../constants/stagesData'

export default function Home() {
	console.log(stagesData)
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			hello world
		</main>
	)
}
