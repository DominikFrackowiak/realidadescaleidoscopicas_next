import Row from '../atoms/Row'

interface Props {
	Left: React.ComponentType<any>
	Right: React.ComponentType<any>
	classes: string | ''
}

export default function SplitScreen({ Left, Right, classes }: Props) {
	return (
		<Row classes={classes}>
			<Left />
   <Right />
		</Row>
	)
}
