import Stage from '../molecules/Stage'
import WordCloudComponent from '../molecules/WordCloud'

import stagesData from '../../../constants/stagesData'

export default function Stages() {
	const Stages = stagesData.map(stage => <Stage key={stage.id} stage={stage} />)

	return (
		<>
			<WordCloudComponent />
			{Stages}
		</>
	)
}
