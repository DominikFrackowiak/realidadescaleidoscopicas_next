interface Props {
	children: React.ReactNode
	style?: any
}

export default function Wrapper({ children, style }: Props): JSX.Element {
	return (
		<div className="flex flex-col justify-around max-w-screen-xl py-20 px-10" style={style}>
			{children}
		</div>
	)
}
