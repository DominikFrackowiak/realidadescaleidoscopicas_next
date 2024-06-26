import Stage from '../molecules/Stage'
// import WordCloudComponent from '../molecules/WordCloud'
import dynamic from 'next/dynamic'

const WordCloudComponent = dynamic(() => import('../molecules/WordCloud'), {
	ssr: false,
})

import stagesData from '../../../constants/stagesData'

export default function Stages() {
	const Stages = stagesData.map(stage => <Stage key={stage.id} stage={stage} />)

	return (
		<>
			<WordCloudComponent />
			{/* {Stages} */}
		</>
	)
}
