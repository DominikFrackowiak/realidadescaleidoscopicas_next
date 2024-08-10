import Stage from '../molecules/Stage'
import { PageScrollIndicator } from '../molecules/PageScrollIndicator'
import Navbar from '../molecules/Navbar'
// import WordCloudComponent from '../molecules/WordCloud'
import dynamic from 'next/dynamic'

const WordCloudComponent = dynamic(() => import('../molecules/WordCloud'), {
	ssr: false,
})

import stagesData from '../../../constants/stagesData'
import HeroSection from '../molecules/HeroSection'
import MoreInfo from '../molecules/MoreInfo'
import Participate from '../molecules/Participate'
import WhoAreWe from '../molecules/WhoAreWe'
import Footer from '../molecules/Footer'

export default function Stages() {
	const Stages = stagesData.map(stage => <Stage key={stage.id} stage={stage} />)

	return (
		<>
			<Navbar />
			<HeroSection/>
			<MoreInfo/>
			<Participate/>
			<PageScrollIndicator />
			<WordCloudComponent />
			{Stages}
			<WhoAreWe/>
			<Footer/>
		</>
	)
}
