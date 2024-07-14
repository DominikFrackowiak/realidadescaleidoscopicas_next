import Wrapper from '../atoms/Wrapper'
import Heading from '../atoms/Heading'

export default function MoreInfo() {
	return (
		<section className='flex justify-center h-[100vh] bg-[#2e3192]' id='more'>
			<Wrapper>
				<Heading
					headingType={'h2'}
					className=' text-white font-tavares text-6xl '
				>
					<span className='spanish'>?</span>Y tú encajas<span>?</span>
				</Heading>
			</Wrapper>
		</section>
	)
}
