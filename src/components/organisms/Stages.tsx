import Stage from '../molecules/Stage'

import stagesData from '../../../constants/stagesData'

export default function Stages() {
	const dataToRender = stagesData.map(stage => (
		<Stage  key={stage.id} stage={stage}/>
	))

	return dataToRender
}
