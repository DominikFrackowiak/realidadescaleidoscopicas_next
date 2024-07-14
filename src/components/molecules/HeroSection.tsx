import Link from 'next/link'

import Heading from '../atoms/Heading'
import Stack from '../atoms/Stack'

export default function HeroSection() {
	return (
		<section className='relative h-[100vh] overflow-y-hidden' id='inicio'>
			<video
				className='hero-video__video absolute top-0'
				autoPlay
				muted
				loop
				id='main-video'
			>
				<source src='assets/video/web.mp4' type='video/mp4' />
			</video>
			<Stack
				variant='div'
				classes='absolute top-1/2 left-1/2 translate-x-[-50%] gap-[100px] items-center '
			>
				<Heading
					headingType={'h2'}
					className=' text-white font-tavares text-6xl '
				>
					<span className='spanish'>?</span>Y tú encajas<span>?</span>
				</Heading>
				<Link
					href='#more'
					className='text-white text-lg duration-200 hover:text-xl'
				>
					&gt;&gt;&gt;more info&lt;&lt;&lt;
				</Link>
			</Stack>
		</section>
	)
}
