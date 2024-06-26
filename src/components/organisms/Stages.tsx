import Stage from '../molecules/Stage'
import WordCloud from '../molecules/WordCloud'

import stagesData from '../../../constants/stagesData'

export default function Stages() {
	const dataToRender = stagesData.map(stage => (
		
		<Stage  key={stage.id} stage={stage}/>
	))

	return (
		<>
			<WordCloud />
			{dataToRender}
		</>
	)
}
