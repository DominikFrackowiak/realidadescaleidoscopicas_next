import { whoAreWeLeft, whoAreWeRight } from '../../../constants/whoAreWe'
import Stack from '../atoms/Stack'
import Wrapper from '../atoms/Wrapper'
import SplitScreen from './SplitScreen'
import Heading from '../atoms/Heading'

import renderHtmlContent from '../../../utils/renderHtmlContent'

const LeftSide = () => (
	<Stack classes='w-[47%] gap-[20px]'>
		{whoAreWeLeft.map(el => renderHtmlContent(el, 'text-xl text-[#364ec6]'))}
	</Stack>
)
const RightSide = () => (
	<Stack classes='w-[47%] gap-[20px]'>
		{whoAreWeRight.map(el => renderHtmlContent(el, 'text-xl text-[#364ec6]'))}
	</Stack>
)

export default function WhoAreWe() {
	return (
		<article
			className='flex flex-col min-h-screen justify-around items-center'
			id='nosotros'
		>
			<Wrapper style={{ gap: '30px' }}>
				<Heading
					headingType={'h2'}
					className=' text-[#364ec6] font-tavares text-6xl mb-[20px]'
				>
					<span className='spanish'>?</span>Quiénes somos<span>?</span>
				</Heading>
				<SplitScreen
					Left={LeftSide}
					Right={RightSide}
					classes='justify-between'
				/>
			</Wrapper>
		</article>
	)
}
