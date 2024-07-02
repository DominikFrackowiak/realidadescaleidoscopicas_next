import { Suspense } from 'react'

import Stages from '../components/organisms/Stages'

export default function Home() {
	return (
		// <main className='flex min-h-screen flex-col items-center justify-between p-24'>
		// 	<Stages/>
		// </main>
		<main>
			<Suspense>
				<Stages />
			</Suspense>
		</main>
	)
}
