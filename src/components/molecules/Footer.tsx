import Wrapper from '../atoms/Wrapper'
import SplitScreen from './SplitScreen'
import Stack from '../atoms/Stack'
import Heading from '../atoms/Heading'

const LeftColumn = () => (
	<Stack classes=''>
		<Heading headingType={'h3'} className=' text-white  text-2xl text-center'>
			TEst
		</Heading>
	</Stack>
)

const RightColumn = () => <p>Right</p>

export default function Footer() {
	return (
		<footer className='bg-[#364ec6]'>
			<section className='flex justify-center' id='footer'>
				<Wrapper>
					{/* <SplitScreen left={LeftSide} right={RightSide} classes={'justify-between'}/> */}
					<SplitScreen
						Left={LeftColumn}
						Right={RightColumn}
						classes={'justify-between'}
					/>
				</Wrapper>
			</section>
		</footer>
	)
}
